import { Server, Socket } from 'socket.io';
import { chats } from '../data';
import { Message } from '../types';
import { handleWebRTCSignaling } from './webrtcSignaling';

// Store which user is connected to which socket
const userSocketMap = new Map<string, string>(); // Map<userId, socketId>

export const initializeSocket = (io: Server) => {
    io.on('connection', (socket: Socket) => {
        console.log(`New connection: ${socket.id}`);

        // --- User Setup ---
        socket.on('register', (userId: string) => {
            socket.data.userId = userId;
            userSocketMap.set(userId, socket.id);
            console.log(`User ${userId} registered with socket ${socket.id}`);
            
            // Join a room with their own user ID to receive direct messages
            socket.join(userId);
        });

        // --- Chat Messaging ---
        socket.on('send-message', (data: { chatId: string; message: Message }) => {
            const { chatId, message } = data;
            const chat = chats.find(c => c.id === chatId);

            if (chat) {
                chat.messages.push(message);

                // Find the recipient to send the message in real-time
                const recipient = chat.participants.find(p => p.id !== message.senderId);
                if (recipient) {
                    const recipientSocketId = userSocketMap.get(recipient.id);
                    if (recipientSocketId) {
                        // Send to the specific recipient's room
                        io.to(recipient.id).emit('receive-message', { chatId, message });
                    }
                }
            }
        });
        
        // --- WebRTC Signaling ---
        handleWebRTCSignaling(io, socket);

        // --- Disconnection ---
        socket.on('disconnect', () => {
            console.log(`Connection dropped: ${socket.id}`);
            if (socket.data.userId) {
                userSocketMap.delete(socket.data.userId);
            }
        });
    });
};
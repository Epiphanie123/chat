import { Server, Socket } from 'socket.io';

export const handleWebRTCSignaling = (io: Server, socket: Socket) => {
    // Forward the offer to the target user
    socket.on('webrtc-offer', (data: { targetUserId: string; offer: any }) => {
        socket.to(data.targetUserId).emit('webrtc-offer', {
            fromUserId: socket.data.userId,
            offer: data.offer,
        });
    });

    // Forward the answer back to the original caller
    socket.on('webrtc-answer', (data: { targetUserId: string; answer: any }) => {
        socket.to(data.targetUserId).emit('webrtc-answer', {
            fromUserId: socket.data.userId,
            answer: data.answer,
        });
    });

    // Forward ICE candidates to the other peer
    socket.on('webrtc-ice-candidate', (data: { targetUserId: string; candidate: any }) => {
        socket.to(data.targetUserId).emit('webrtc-ice-candidate', {
            fromUserId: socket.data.userId,
            candidate: data.candidate,
        });
    });

    // Handle call ending
    socket.on('webrtc-end-call', (data: { targetUserId: string }) => {
        socket.to(data.targetUserId).emit('webrtc-end-call', {
             fromUserId: socket.data.userId
        });
    });
};

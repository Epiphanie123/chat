import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { Chat, User, Message } from '../types';
import { chats as initialChats, currentUser } from '../data/seed';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ChatContextType {
    chats: Chat[];
    activeChat: Chat | null;
    currentUser: User;
    setActiveChat: (chat: Chat | null) => void;
    sendMessage: (chatId: string, messageText: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [chats, setChats] = useLocalStorage<Chat[]>('chats', initialChats);
    const [activeChat, setActiveChat] = useState<Chat | null>(null);

    const sendMessage = (chatId: string, text: string) => {
        const newMessage: Message = {
            id: `msg-${Date.now()}`,
            senderId: currentUser.id,
            text,
            timestamp: Date.now(),
            read: true,
        };

        const updatedChats = chats.map(chat => {
            if (chat.id === chatId) {
                return { ...chat, messages: [...chat.messages, newMessage] };
            }
            return chat;
        });

        setChats(updatedChats);

        if (activeChat?.id === chatId) {
            setActiveChat(prev => prev ? { ...prev, messages: [...prev.messages, newMessage] } : null);
        }
    };

    return (
        <ChatContext.Provider value={{ chats, activeChat, currentUser, setActiveChat, sendMessage }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = (): ChatContextType => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
};
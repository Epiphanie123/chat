import type { User, Chat } from '../types';

export const currentUser: User = {
    id: 'user-0',
    name: 'You',
    avatar: 'https://i.pravatar.cc/150?u=user-0',
    isOnline: true,
    role: 'Patient',
};

export const users: User[] = [
    {
        id: 'user-1',
        name: 'Dr. Evelyn Reed',
        avatar: 'https://i.pravatar.cc/150?u=user-1',
        isOnline: true,
        role: 'Doctor',
    },
    {
        id: 'user-2',
        name: 'Dr. Samuel Chen',
        avatar: 'https://i.pravatar.cc/150?u=user-2',
        isOnline: false,
        role: 'Doctor',
    },
    {
        id: 'user-3',
        name: 'Pharmacist Joy',
        avatar: 'https://i.pravatar.cc/150?u=user-3',
        isOnline: true,
        role: 'Doctor',
    },
];

export const chats: Chat[] = [
    {
        id: 'chat-1',
        participants: [currentUser, users[0]],
        messages: [
            { id: 'msg-1', senderId: 'user-1', text: "Hello! How are you feeling today?", timestamp: Date.now() - 1000 * 60 * 60 * 2, read: true },
            { id: 'msg-2', senderId: 'user-0', text: "Hi Dr. Reed, I'm feeling a bit better, thank you.", timestamp: Date.now() - 1000 * 60 * 50, read: true },
            { id: 'msg-3', senderId: 'user-1', text: "That's great to hear. Remember to take your medication as prescribed.", timestamp: Date.now() - 1000 * 60 * 30, read: false }
        ]
    },
    {
        id: 'chat-2',
        participants: [currentUser, users[1]],
        messages: [
            { id: 'msg-4', senderId: 'user-2', text: "Just a reminder about your upcoming appointment on Friday.", timestamp: Date.now() - 1000 * 60 * 60 * 24, read: true },
            { id: 'msg-5', senderId: 'user-0', text: "Got it, thanks Dr. Chen!", timestamp: Date.now() - 1000 * 60 * 60 * 23, read: true },
        ]
    },
    {
        id: 'chat-3',
        participants: [currentUser, users[2]],
        messages: [
            { id: 'msg-6', senderId: 'user-2', text: "Your prescription is ready for pickup.", timestamp: Date.now() - 1000 * 60 * 5, read: false },
        ]
    }
];
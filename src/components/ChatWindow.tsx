import { useChat } from '../context/ChatContext';
import { Link } from 'react-router-dom';
import MessageBubble from './MessageBubble';
import Composer from './Composer';
import { VideoCallIcon, AudioCallIcon, SearchIcon, MoreIcon } from './icons/icons';
import Avatar from './Avatar';
import { useEffect, useRef } from 'react';

const ChatWindow = () => {
    const { activeChat, currentUser } = useChat();
    const otherUser = activeChat?.participants.find(p => p.id !== currentUser.id);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [activeChat?.messages]);
    
    if (!activeChat || !otherUser) return null;

    return (
        <div className="flex-1 flex flex-col h-screen">
            <header className="flex items-center justify-between p-4 border-b border-border-color bg-white">
                <div className="flex items-center">
                    <Avatar src={otherUser.avatar} alt={otherUser.name} isOnline={otherUser.isOnline} />
                    <div className="ml-3">
                        <h2 className="font-semibold">{otherUser.name}</h2>
                        <p className="text-sm text-secondary-text">
                            {otherUser.isOnline ? 'Online' : 'Offline'}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-gray-500">
                    <Link to={`/call/video/${otherUser.id}`} className="p-2 rounded-full hover:bg-hover-bg">
                        <VideoCallIcon />
                    </Link>
                    <Link to={`/call/audio/${otherUser.id}`} className="p-2 rounded-full hover:bg-hover-bg">
                        <AudioCallIcon />
                    </Link>
                    <button className="p-2 rounded-full hover:bg-hover-bg">
                        <SearchIcon />
                    </button>
                    <button className="p-2 rounded-full hover:bg-hover-bg">
                        <MoreIcon />
                    </button>
                </div>
            </header>
            <div className="flex-1 overflow-y-auto p-6 bg-light-bg">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <div className="text-sm text-secondary-text bg-white rounded-full px-4 py-1 border border-border-color">
                            Today
                        </div>
                    </div>
                    {activeChat.messages.map(message => (
                        <MessageBubble key={message.id} message={message} />
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </div>
            <Composer />
        </div>
    );
};

export default ChatWindow;
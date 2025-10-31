import { useChat } from '../context/ChatContext';
import type { Chat } from '../types';
import { format } from 'date-fns';
import Avatar from '../components/Avatar';

interface ChatListItemProps {
    chat: Chat;
}

const ChatListItem = ({ chat }: ChatListItemProps) => {
    const { activeChat, setActiveChat, currentUser } = useChat();
    const otherUser = chat.participants.find(p => p.id !== currentUser.id);
    const lastMessage = chat.messages[chat.messages.length - 1];

    if (!otherUser) return null;

    const unreadCount = chat.messages.filter(m => !m.read && m.senderId !== currentUser.id).length;
    const isActive = activeChat?.id === chat.id;

    return (
        <div
            onClick={() => setActiveChat(chat)}
            className={`flex items-center p-3 cursor-pointer mx-2 rounded-lg transition-colors ${
                isActive ? 'bg-primary/10' : 'hover:bg-hover-bg'
            }`}
        >
            <Avatar src={otherUser.avatar} alt={otherUser.name} isOnline={otherUser.isOnline} />
            <div className="flex-1 ml-3">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{otherUser.name}</h3>
                    <p className="text-xs text-secondary-text">
                        {lastMessage ? format(new Date(lastMessage.timestamp), 'p') : ''}
                    </p>
                </div>
                <div className="flex justify-between items-start">
                    <p className="text-sm text-secondary-text truncate w-48">
                        {lastMessage?.text || 'No messages yet'}
                    </p>
                    {unreadCount > 0 && (
                        <span className="bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {unreadCount}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatListItem;
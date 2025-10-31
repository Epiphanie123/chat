import { useChat } from '../context/ChatContext';
import type { Message } from '../types';
import { format } from 'date-fns';
import { CheckAllIcon } from '../components/icons/icons';

interface MessageBubbleProps {
    message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
    const { currentUser } = useChat();
    const isSender = message.senderId === currentUser.id;

    return (
        <div className={`flex items-end gap-2 my-2 ${isSender ? 'justify-end' : 'justify-start'}`}>
            <div 
                className={`max-w-lg p-3 rounded-2xl ${
                    isSender 
                        ? 'bg-primary text-white rounded-br-lg' 
                        : 'bg-white text-gray-800 rounded-bl-lg border border-border-color'
                }`}
            >
                <p>{message.text}</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-secondary-text">
                <span>{format(new Date(message.timestamp), 'p')}</span>
                {isSender && <CheckAllIcon read={message.read}/>}
            </div>
        </div>
    );
};

export default MessageBubble;
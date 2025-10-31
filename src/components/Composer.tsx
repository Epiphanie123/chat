import { useState } from 'react';
import { useChat } from '../context/ChatContext';
import { AttachmentIcon, SendIcon, SmileyIcon } from '../components/icons/icons';

const Composer = () => {
    const [message, setMessage] = useState('');
    const { activeChat, sendMessage } = useChat();

    const handleSend = () => {
        if (message.trim() && activeChat) {
            sendMessage(activeChat.id, message);
            setMessage('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="p-4 bg-white border-t border-border-color">
             <div className="max-w-4xl mx-auto flex items-center gap-4">
                <button className="text-gray-500 hover:text-primary">
                    <SmileyIcon />
                </button>
                <button className="text-gray-500 hover:text-primary">
                    <AttachmentIcon />
                </button>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 bg-light-bg rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button 
                    onClick={handleSend}
                    className="p-3 rounded-full bg-primary text-white disabled:bg-primary/50"
                    disabled={!message.trim()}
                >
                    <SendIcon />
                </button>
            </div>
        </div>
    );
};

export default Composer;
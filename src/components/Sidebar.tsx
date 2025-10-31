import { useChat } from '../context/ChatContext';
import ChatListItem from './ChatListItem';
import { EditIcon, SearchIcon } from '../components/icons/icons';
import Avatar from './Avatar';

const Sidebar = () => {
    const { chats, currentUser } = useChat();

    return (
        <aside className="w-full md:w-1/3 lg:w-1/4 h-screen border-r border-border-color bg-white flex flex-col">
            <header className="p-4 border-b border-border-color flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Avatar src={currentUser.avatar} alt={currentUser.name} isOnline={currentUser.isOnline} size="small"/>
                    <h1 className="text-xl font-bold">Chats</h1>
                </div>
                <button className="p-2 rounded-full hover:bg-hover-bg">
                    <EditIcon />
                </button>
            </header>
            <div className="p-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search or start a new chat"
                        className="w-full pl-10 pr-4 py-2 rounded-full bg-light-bg border border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <SearchIcon />
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto">
                {chats.map(chat => (
                    <ChatListItem key={chat.id} chat={chat} />
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
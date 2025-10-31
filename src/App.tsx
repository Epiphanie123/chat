import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import CallPage from './components/CallPage';
import { useChat } from './context/ChatContext';

function App() {
  const { activeChat } = useChat();

  return (
    <div className="h-screen w-screen flex bg-light-bg text-gray-800">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={
            activeChat ? <ChatWindow /> : <WelcomeMessage />
          } />
          <Route path="/call/:type/:userId" element={<CallPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

const WelcomeMessage = () => (
    <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-500">Welcome to Human Chat</h2>
            <p className="text-secondary-text mt-2">Select a conversation to start messaging.</p>
        </div>
    </div>
);


export default App;
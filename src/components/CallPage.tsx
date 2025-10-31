import { useParams, useNavigate } from 'react-router-dom';
import { users } from '../data/seed';
import Avatar from './Avatar';
import { MicOffIcon, MicOnIcon, VideoOffIcon, VideoOnIcon, EndCallIcon } from './icons/icons';
import { useState } from 'react';

const CallPage = () => {
    const { type, userId } = useParams<{ type: 'video' | 'audio', userId: string }>();
    const navigate = useNavigate();
    const otherUser = users.find(u => u.id === userId);

    const [isMuted, setIsMuted] = useState(false);
    const [isCameraOff, setIsCameraOff] = useState(type === 'audio');

    if (!otherUser) {
        return <div className="flex-1 flex items-center justify-center text-lg text-gray-300 bg-gray-900">User not found.</div>;
    }

    const handleEndCall = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
                {/* Video feed or avatar */}
                {isCameraOff ? (
                    <div className="flex flex-col items-center transition-all duration-300">
                        <Avatar src={otherUser.avatar} alt={otherUser.name} size="large" />
                    </div>
                ) : (
                    <div className="w-[90%] h-[70%] bg-black/80 rounded-2xl shadow-lg flex items-center justify-center border border-gray-700">
                        <p className="text-gray-400">Remote video stream</p>
                    </div>
                )}

                {/* User Info */}
                <div className="mt-6 text-center">
                    <h2 className="text-2xl font-semibold tracking-wide">{otherUser.name}</h2>
                    <p className="text-gray-400 mt-1 text-sm">{`Calling...`}</p>
                </div>

                {/* Self view (for video calls) */}
                {!isCameraOff && (
                    <div className="absolute bottom-6 right-6 w-40 h-28 bg-black/90 rounded-lg border border-gray-600 shadow-md overflow-hidden">
                        {/* This would be the local user's video stream */}
                    </div>
                )}
            </div>

            {/* Call Controls */}
            <div className="bg-gray-900/70 backdrop-blur-md p-4 flex justify-center items-center gap-6 border-t border-gray-700">
                <button
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 shadow-md"
                    onClick={() => setIsMuted(!isMuted)}
                >
                    {isMuted ? <MicOffIcon /> : <MicOnIcon />}
                </button>
                {type === 'video' && (
                    <button
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 shadow-md"
                        onClick={() => setIsCameraOff(!isCameraOff)}
                    >
                        {isCameraOff ? <VideoOffIcon /> : <VideoOnIcon />}
                    </button>
                )}
                <button
                    className="p-4 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-200 shadow-md"
                    onClick={handleEndCall}
                >
                    <EndCallIcon />
                </button>
            </div>
        </div>
    );
};

export default CallPage;

import { useState } from 'react';
import { FaTimes, FaPaperPlane, FaMicrophone } from 'react-icons/fa';

const AIGuide = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        {
            type: 'ai',
            text: "Hi 👋 I'm your listing assistant. Need help with your property details or verification?"
        },
        {
            type: 'user',
            text: "Hi! can you please tell how to verify ownership for my agricultural land."
        },
        {
            type: 'ai',
            text: "No problem! 🌾 For agricultural properties, please enter the number of title deeds or land portions and add the title deed numbers or pin locations — one per title. You can also include your farm name if you have one."
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');

    const handleSend = () => {
        if (inputMessage.trim()) {
            setMessages([...messages, { type: 'user', text: inputMessage }]);
            setInputMessage('');

            // Simulate AI response
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    type: 'ai',
                    text: "I understand. Let me help you with that..."
                }]);
            }, 1000);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed left-[280px] top-24 bottom-8 w-80 bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700 flex flex-col z-40 transition-all">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">AI</span>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-sm">Properly AI Guide</h3>
                        <p className="text-green-400 text-xs">● Online</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <FaTimes size={18} />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {message.type === 'ai' && (
                            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                                <span className="text-white text-xs font-bold">AI</span>
                            </div>
                        )}
                        <div
                            className={`max-w-[75%] px-4 py-3 rounded-2xl ${message.type === 'user'
                                    ? 'bg-amber-500 text-black'
                                    : 'bg-gray-700 text-white'
                                }`}
                        >
                            <p className="text-sm">{message.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
                <div className="flex items-center gap-2 bg-gray-700/50 rounded-full px-4 py-2">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type your message..."
                        className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-400"
                    />
                    <button className="text-gray-400 hover:text-white transition-colors">
                        <FaMicrophone size={16} />
                    </button>
                    <button
                        onClick={handleSend}
                        className="text-amber-500 hover:text-amber-400 transition-colors"
                    >
                        <FaPaperPlane size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AIGuide;

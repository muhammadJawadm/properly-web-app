import { useState, useRef, useEffect } from 'react';
import { FaTimes, FaPaperPlane, FaMicrophone } from 'react-icons/fa';
import SplashLogo from '../../assets/Splashlogo2.png';

const AIChat = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'ai',
            text: "Hi 👋 I'm your listing assistant. Need help with your property details or verification?"
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (inputMessage.trim() === '') return;

        // Add user message
        const userMessage = {
            id: messages.length + 1,
            type: 'user',
            text: inputMessage
        };
        setMessages([...messages, userMessage]);

        // Simulate AI response (in real app, this would call an AI API)
        setTimeout(() => {
            const aiResponse = {
                id: messages.length + 2,
                type: 'ai',
                text: getAIResponse(inputMessage)
            };
            setMessages(prev => [...prev, aiResponse]);
        }, 1000);

        setInputMessage('');
    };

    const getAIResponse = (userInput) => {
        // Simple response logic - in production, this would be an AI API call
        const input = userInput.toLowerCase();

        if (input.includes('verify') || input.includes('ownership') || input.includes('agricultural')) {
            return "No problem! 👍 For agricultural properties, please enter the number of title deeds of land portions and add the title deed numbers or pin locations — one per title. You can also include your farm name if you have one.";
        } else if (input.includes('document') || input.includes('upload')) {
            return "You can upload your documents in the Documents section. Make sure to include all required legal documents for verification.";
        } else if (input.includes('help') || input.includes('how')) {
            return "I'm here to help! You can ask me about property listings, document verification, pricing, or any other questions about the platform.";
        } else {
            return "Thank you for your message. How else can I assist you today?";
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Chat Panel */}
            <div className="fixed left-6 bottom-20 h-2/3 w-110 md:w-96 backdrop-blur-lg shadow-2xl z-50 flex flex-col border-r border-gray-500/20">
                {/* Header */}
                <div className=" backdrop-blur-lg border-b border-gray-700/50 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center">
                            <img src={SplashLogo} alt="AI" className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold">Properly AI Guide</h3>
                            <p className="text-xs text-gray-400">Online</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-gray-700/60 hover:bg-gray-600/60 flex items-center justify-center text-white transition-colors"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            {message.type === 'ai' && (
                                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-2">
                                    <img src={SplashLogo} alt="AI" className="w-10 h-10" />
                                </div>
                            )}
                            <div
                                className={`max-w-[75%] rounded-2xl px-4 py-3 ${message.type === 'user'
                                    ? 'bg-amber-500 text-black rounded-br-none'
                                    : 'bg-gray-700/60 backdrop-blur-sm text-white rounded-bl-none'
                                    }`}
                            >
                                <p className="text-sm leading-relaxed">{message.text}</p>
                            </div>
                            {message.type === 'user' && (
                                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 ml-2">
                                    <span className="text-sm">👤</span>
                                </div>
                            )}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-700/50 p-4  backdrop-blur-lg">
                    <div className="flex items-center gap-2 bg-gray-700/40 backdrop-blur-sm rounded-full px-4 py-3">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                            className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-400"
                        />
                        <button
                            onClick={() => {/* Add voice input functionality */ }}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FaMicrophone size={18} />
                        </button>
                        <button
                            onClick={handleSendMessage}
                            className="text-amber-500 hover:text-amber-400 transition-colors"
                            disabled={inputMessage.trim() === ''}
                        >
                            <FaPaperPlane size={18} />
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-2">Powered by Persona AI</p>
                </div>
            </div>
        </>
    );
};

export default AIChat;

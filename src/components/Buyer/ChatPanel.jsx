import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import ViewingScheduleCard from './ViewingScheduleCard';

const ChatPanel = ({
    user,
    messages,
    onSendMessage,
    actionButton,
    documentUpload,
    viewingSchedule
}) => {
    const [messageInput, setMessageInput] = React.useState('');

    const handleSend = () => {
        if (messageInput.trim() && onSendMessage) {
            onSendMessage(messageInput);
            setMessageInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="h-full flex flex-col bg-gray-900/50">
            {/* User Header */}
            <div className="p-6 border-b border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold">
                        {user.initials}
                    </div>
                    <div>
                        <h3 className="text-white font-semibold">{user.name}</h3>
                        <span className="text-gray-400 text-xs">{user.timestamp}</span>
                    </div>
                </div>

                {/* Status Badges */}
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-xs">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-300">Verified Contact</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <span className="text-gray-400">✉</span>
                        <span className="text-gray-300">Email Confirmed</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <span className="text-gray-400">📅</span>
                        <span className="text-gray-300">{user.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <span className="text-gray-400">#</span>
                        <span className="text-gray-300">{user.enquiryNumber}</span>
                    </div>
                </div>

                {/* Document Upload */}
                {documentUpload && (
                    <div className="mt-4 bg-gray-800/40 rounded-lg p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400">📄</span>
                            <span className="text-gray-300 text-sm">{documentUpload.label}</span>
                        </div>
                        <button className="px-4 py-1.5 bg-amber-500/20 border border-amber-500 rounded text-amber-500 text-sm font-semibold hover:bg-amber-500/30 transition-colors">
                            {documentUpload.buttonText}
                        </button>
                    </div>
                )}
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {/* Viewing Schedule */}
                {viewingSchedule && (
                    <div className="mb-4">
                        <p className="text-gray-400 text-sm mb-3">
                            You requested to <span className="text-white">schedule a viewing</span>.
                        </p>
                        <ViewingScheduleCard
                            schedule={viewingSchedule}
                            onAccept={viewingSchedule.onAccept}
                        />
                    </div>
                )}

                {/* Messages */}
                {messages.map((msg, index) => (
                    <div key={index} className="space-y-2">
                        {msg.type === 'user' ? (
                            <div className="max-w-[80%]">
                                <p className="text-gray-400 text-xs mb-1">Your message</p>
                                <div className="bg-gray-800/60 rounded-lg p-3">
                                    <p className="text-white text-sm">{msg.text}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="max-w-[80%]">
                                <p className="text-amber-500 text-xs mb-1">Seller message</p>
                                <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg p-3">
                                    <p className="text-white text-sm">{msg.text}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-700">
                <div className="flex gap-2 mb-3">
                    <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Write Message..."
                        className="flex-1 px-4 py-2.5 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                    />
                    <button
                        onClick={handleSend}
                        className="px-4 py-2.5 bg-gray-800/60 border border-gray-700 rounded-lg text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-colors"
                    >
                        <FaPaperPlane size={16} />
                    </button>
                </div>

                {/* Action Button */}
                {actionButton && (
                    <button
                        onClick={actionButton.onClick}
                        className="w-full py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-xl hover:opacity-90 transition-opacity"
                    >
                        {actionButton.label}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ChatPanel;

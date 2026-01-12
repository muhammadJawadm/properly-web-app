import React from 'react';
import { FaTimes, FaBell } from 'react-icons/fa';

const AttorneyAccessNotificationModal = ({ isOpen, onClose, attorneyData }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl max-w-md w-full p-8 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <FaTimes size={20} />
                </button>

                {/* Animated Bell Icon */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center animate-pulse">
                            <FaBell className="text-amber-500 text-4xl animate-bounce" />
                        </div>
                        {/* Ring waves */}
                        <div className="absolute inset-0 rounded-full border-2 border-amber-500/30 animate-ping"></div>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-white text-xl font-bold text-center mb-6">
                    Attorney access notification
                </h2>

                {/* Attorney Details */}
                <div className="mb-6 text-center">
                    <p className="text-gray-300 text-sm mb-4">
                        Attorney <span className="text-amber-500 font-semibold">{attorneyData.name}</span> from{' '}
                        <span className="text-amber-500">{attorneyData.firm}</span>
                        <span className="text-gray-400"> (Reg. No. {attorneyData.regNumber})</span> has accessed your
                        case through CRN shared by seller.
                    </p>
                    <p className="text-gray-400 text-sm">
                        Emergency Contact: <span className="text-white">{attorneyData.emergencyContact}</span>
                    </p>
                </div>

                {/* Request Update Button */}
                <button
                    onClick={onClose}
                    className="w-full py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-xl hover:opacity-90 transition-opacity"
                >
                    Request process update
                </button>
            </div>
        </div>
    );
};

export default AttorneyAccessNotificationModal;

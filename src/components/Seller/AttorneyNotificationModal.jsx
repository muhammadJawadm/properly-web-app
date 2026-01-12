import React from 'react';
import { FaTimes, FaBell } from 'react-icons/fa';

const AttorneyNotificationModal = ({ isOpen, onClose, attorneyData }) => {
    if (!isOpen) return null;

    // Default attorney data if none provided
    const attorney = attorneyData || {
        name: 'John Smith',
        firm: 'Lex Legal Attorneys',
        regNumber: '567889',
        emergencyContact: '+27 71 345 6789'
    };

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

                {/* Bell Icon with Animation */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        {/* Animated rings */}
                        <div className="absolute inset-0 animate-ping">
                            <FaBell className="text-amber-500 opacity-30" size={60} />
                        </div>
                        {/* Main bell icon */}
                        <FaBell className="text-amber-500 relative" size={60} />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-white text-xl sm:text-2xl font-bold text-center mb-6">
                    Attorney access notification
                </h2>

                {/* Notification Content */}
                <div className="text-center mb-6">
                    <p className="text-gray-300 text-sm sm:text-base mb-4">
                        Attorney{' '}
                        <span className="text-white font-semibold">{attorney.name}</span>
                        {' '}from{' '}
                        <span className="text-amber-500 font-semibold">
                            {attorney.firm}
                        </span>
                        {' '}<span className="text-gray-400">(Reg. No: {attorney.regNumber})</span>
                        {' '}has accessed your transfer file.
                    </p>

                    <p className="text-gray-300 text-sm mb-4">
                        Emergency Contact:{' '}
                        <span className="text-white font-semibold">{attorney.emergencyContact}</span>.
                    </p>

                    <p className="text-gray-400 text-xs sm:text-sm">
                        (Remember you can always ask for an update via the 'Request update' button.)
                    </p>
                </div>

                {/* View Details Button */}
                <button
                    onClick={onClose}
                    className="w-full py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-xl hover:opacity-90 transition-opacity"
                >
                    View Details
                </button>
            </div>

            <style jsx>{`
                @keyframes ping {
                    0% {
                        transform: scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 0.1;
                    }
                    100% {
                        transform: scale(1.2);
                        opacity: 0;
                    }
                }
                .animate-ping {
                    animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
            `}</style>
        </div>
    );
};

export default AttorneyNotificationModal;

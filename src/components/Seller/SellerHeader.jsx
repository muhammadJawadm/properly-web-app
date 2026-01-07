import { useState } from 'react';
import { FaBell } from 'react-icons/fa';

const SellerHeader = ({ title, showNotifications = false, onNotificationClick }) => {
    return (
        <div className="bg-[#1a1a1a] border-b border-gray-800 px-8 py-6 flex items-center justify-between">
            {/* Title */}
            <h1 className="text-white text-2xl font-semibold">{title}</h1>

            {/* Right Side - Notifications & Profile */}
            <div className="flex items-center gap-6">
                {/* Notification Bell */}
                <button
                    onClick={onNotificationClick}
                    className="relative text-amber-500 hover:text-amber-400 transition-colors"
                >
                    <FaBell size={24} />
                    {showNotifications && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    )}
                </button>

                {/* Profile Picture with Verified Badge */}
                <div className="relative">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Profile"
                        className="w-10 h-10 rounded-full border-2 border-gray-700"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center border-2 border-[#1a1a1a]">
                        <span className="text-white text-xs">✓</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerHeader;

import { useState } from 'react';
import { FaBell, FaBars } from 'react-icons/fa';
import { toggleMobileMenu } from './SellerSidebar';

const SellerHeader = ({ title, showNotifications = true, onNotificationClick }) => {
    return (
        <div className="bg-[#1a1a1a] border-b border-gray-800 px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex items-center justify-between">
            {/* Left Side - Hamburger Menu (Mobile) + Title */}
            <div className="flex items-center gap-3 sm:gap-4">
                {/* Hamburger Menu Button (Mobile Only) */}
                <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden text-white hover:text-amber-500 transition-colors"
                >
                    <FaBars size={24} />
                </button>

                {/* Title */}
                <h1 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">{title}</h1>
            </div>

            {/* Right Side - Notifications & Profile */}
            <div className="flex items-center gap-4 sm:gap-6">
                {/* Notification Bell */}
                <button
                    onClick={onNotificationClick}
                    className="relative text-amber-500 hover:text-amber-400 transition-colors"
                >
                    <FaBell size={20} className="sm:w-6 sm:h-6" />
                    {showNotifications && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    )}
                </button>

                {/* Profile Picture with Verified Badge */}
                <div className="relative">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Profile"
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-700"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-amber-500 rounded-full flex items-center justify-center border-2 border-[#1a1a1a]">
                        <span className="text-white text-xs">✓</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerHeader;

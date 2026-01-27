import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBell, FaBars, FaBellSlash, FaRegBell } from 'react-icons/fa';
import { toggleMobileMenu as toggleSellerMenu } from '../Seller/SellerSidebar';
import { toggleMobileMenu as toggleBuyerMenu } from '../Buyer/BuyerSidebar';
import { toggleMobileMenu as toggleAttorneyMenu } from '../Attorney/AttorneySidebar';
import profileicon from "./../../assets/profilepic.png"
const Header = ({ title, showNotifications = true, onNotificationClick }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isBuyerPage = location.pathname.includes('/buyer');
    const isAttorneyPage = location.pathname.includes('/attorney');

    const handleMenuToggle = () => {
        if (isBuyerPage) {
            toggleBuyerMenu();
        } else if (isAttorneyPage) {
            toggleAttorneyMenu();
        } else {
            toggleSellerMenu();
        }
    };

    const handleProfileClick = () => {
        // Check if already on profile page
        if (location.pathname.includes('/profile')) {
            // Navigate back to respective dashboard
            if (isBuyerPage) {
                navigate('/buyer/dashboard');
            } else if (location.pathname.includes('/attorney')) {
                navigate('/attorney/dashboard');
            } else {
                navigate('/seller/dashboard');
            }
        } else {
            // Navigate to profile
            if (isBuyerPage) {
                navigate('/buyer/profile');
            } else if (location.pathname.includes('/attorney')) {
                navigate('/attorney/profile');
            } else {
                navigate('/seller/profile');
            }
        }
    };

    return (
        <div className="bg-[#1a1a1a] border-b border-gray-800 px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex items-center justify-between">
            {/* Left Side - Hamburger Menu (Mobile) + Title */}
            <div className="flex items-center gap-3 sm:gap-4">
                {/* Hamburger Menu Button (Mobile Only) */}
                <button
                    onClick={handleMenuToggle}
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
                    <FaRegBell size={20} className="sm:w-6 sm:h-6" />
                    {showNotifications && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    )}
                </button>

                {/* Profile Picture with Verified Badge */}
                <div
                    className="relative cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={handleProfileClick}
                >
                    <img
                        src={profileicon}
                        alt="Profile"
                        className="w-8 h-8 sm:w-10 sm:h-10"
                    />

                </div>
            </div>
        </div>
    );
};

export default Header;

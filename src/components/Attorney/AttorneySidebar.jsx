import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaList, FaGavel, FaBalanceScale, FaLock, FaBars, FaTimes, FaHandshake } from 'react-icons/fa';
import SplashLogo from '../../assets/Splashlogo2.png';
import AIChat from '../common/AIChat';

// Create a global state for sidebar collapse
export let sidebarState = { isCollapsed: false, isMobileMenuOpen: false, listeners: [] };

export const subscribeSidebarState = (listener) => {
    sidebarState.listeners.push(listener);
    return () => {
        sidebarState.listeners = sidebarState.listeners.filter(l => l !== listener);
    };
};

export const toggleMobileMenu = () => {
    sidebarState.isMobileMenuOpen = !sidebarState.isMobileMenuOpen;
    sidebarState.listeners.forEach(listener => listener(sidebarState.isCollapsed, sidebarState.isMobileMenuOpen));
};

const AttorneySidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showAIChat, setShowAIChat] = useState(false);

    // Notify listeners when collapse state changes
    useEffect(() => {
        sidebarState.isCollapsed = isCollapsed;
        sidebarState.isMobileMenuOpen = isMobileMenuOpen;
        sidebarState.listeners.forEach(listener => listener(isCollapsed, isMobileMenuOpen));
    }, [isCollapsed, isMobileMenuOpen]);

    // Listen for global mobile menu toggle
    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed, mobileOpen) => {
            setIsMobileMenuOpen(mobileOpen);
        });
        return unsubscribe;
    }, []);

    const menuItems = [
        { icon: FaHome, label: 'Dashboard', path: '/attorney/dashboard' },

    ];

    const isActive = (path) => location.pathname === path;

    const handleNavigation = (path) => {
        navigate(path);
        // Close mobile menu after navigation
        if (window.innerWidth < 1024) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`h-screen bg-gradient-to-b from-[#181881] to-[#000000] flex flex-col fixed left-0 top-0 transition-all duration-300 z-50 ${isCollapsed ? 'w-24' : 'w-64'
                } ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0`}>
                {/* Logo with Toggle Button */}
                <div className="p-2 border-b border-gray-700/30 flex items-center justify-center relative">
                    {!isCollapsed && (
                        <img src={SplashLogo} alt="Properly Real Estate" className="w-48" />
                    )}
                    {isCollapsed && (
                        <img src={SplashLogo} alt="Properly" className="w-24" />
                    )}

                    {/* Close Button for Mobile */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute right-2 top-2 w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white lg:hidden"
                    >
                        <FaTimes size={16} />
                    </button>

                    {/* Toggle Button on Right Edge (Desktop only) */}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-amber-500 hover:bg-amber-600 items-center justify-center text-white shadow-lg transition-all duration-200"
                    >
                        <span className="text-xs">{isCollapsed ? '→' : '←'}</span>
                    </button>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 py-4 overflow-y-auto">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);
                        return (
                            <div key={item.path} className="px-4 mb-2">
                                <button
                                    onClick={() => handleNavigation(item.path)}
                                    className={`w-full flex items-center gap-4 px-4 py-4 transition-all duration-200 relative rounded-xl ${active && !isCollapsed
                                        ? 'bg-amber-200/20 text-amber-500'
                                        : active && isCollapsed
                                            ? 'bg-gradient-to-r from-[#FCD66B] to-[#C28B33]'
                                            : 'text-gray-400 hover:bg-gray-800/30 hover:text-white'
                                        }`}
                                >
                                    <div className={`${isCollapsed ? 'mx-auto' : ''}`}>
                                        <Icon
                                            size={28}
                                            className={
                                                active && isCollapsed
                                                    ? 'text-white'
                                                    : active && !isCollapsed
                                                        ? 'text-amber-500'
                                                        : ''
                                            }
                                        />
                                    </div>
                                    {!isCollapsed && (
                                        <span className="font-medium">{item.label}</span>
                                    )}
                                </button>
                            </div>
                        );
                    })}
                </nav>

                {/* Ask AI Button */}
                <div className="p-4 flex ">
                    <div className="relative group">
                        <button
                            onClick={() => setShowAIChat(!showAIChat)}
                            className="w-14 h-14 flex items-center justify-center text-black font-semibold rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                        >
                            <img src={SplashLogo} alt="AI" className="w-10 h-10" />
                        </button>
                        {/* Tooltip */}
                        <div className="absolute bottom-full ml-10 left-1/2 -translate-x-1/2 mb-2 px-4 py-4 bg-gray-800 text-amber-500 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                            Ask AI Anything
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-800"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Chat Panel */}
            <AIChat isOpen={showAIChat} onClose={() => setShowAIChat(false)} />
        </>
    );
};

export default AttorneySidebar;

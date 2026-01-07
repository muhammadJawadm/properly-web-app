import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaList, FaGavel, FaBalanceScale, FaLock, FaBars } from 'react-icons/fa';
import SplashLogo from '../../assets/splashLogo2.png';

// Create a global state for sidebar collapse
export let sidebarState = { isCollapsed: false, listeners: [] };

export const subscribeSidebarState = (listener) => {
    sidebarState.listeners.push(listener);
    return () => {
        sidebarState.listeners = sidebarState.listeners.filter(l => l !== listener);
    };
};

const SellerSidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Notify listeners when collapse state changes
    useEffect(() => {
        sidebarState.isCollapsed = isCollapsed;
        sidebarState.listeners.forEach(listener => listener(isCollapsed));
    }, [isCollapsed]);

    const menuItems = [
        { icon: FaHome, label: 'Dashboard', path: '/seller/dashboard' },
        { icon: FaList, label: 'My Listing', path: '/seller/listings' },
        { icon: FaGavel, label: 'Analytics', path: '/seller/analytics' },
        { icon: FaBalanceScale, label: 'Enquiries', path: '/seller/enquiries' },
        { icon: FaLock, label: 'Vault', path: '/seller/vault' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <div className={`h-screen bg-gradient-to-b from-[#181881] to-[#000000] flex flex-col fixed left-0 top-0 transition-all duration-300 z-50 ${isCollapsed ? 'w-24' : 'w-64'
            }`}>
            {/* Logo with Toggle Button */}
            <div className="p-2 border-b border-gray-700/30 flex items-center justify-center relative">
                {!isCollapsed && (
                    <img src={SplashLogo} alt="Properly Real Estate" className="w-48" />
                )}
                {isCollapsed && (
                    <img src={SplashLogo} alt="Properly" className="w-24" />
                )}

                {/* Toggle Button on Right Edge */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-amber-500 hover:bg-amber-600 flex items-center justify-center text-white shadow-lg transition-all duration-200"
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
                                onClick={() => navigate(item.path)}
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
                    <button className="w-14 h-14 flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
                        <span className="text-2xl">💬</span>
                    </button>
                    {/* Tooltip */}
                    <div className="absolute bottom-full ml-10 left-1/2 -translate-x-1/2 mb-2 px-4 py-4 bg-gray-800 text-amber-500 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                        Ask AI Anything
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-800"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerSidebar;

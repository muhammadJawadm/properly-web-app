import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaQuestionCircle, FaList, FaTimes } from 'react-icons/fa';
import SellerSidebar, { subscribeSidebarState } from '../../../components/Seller/SellerSidebar';
import SellerHeader from '../../../components/Seller/SellerHeader';
import StatsCard from '../../../components/Seller/StatsCard';

const SellerDashboard = () => {
    const navigate = useNavigate();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    const notifications = [
        { id: 1, icon: '💬', text: 'New inquiry on your listing from John D.', time: 'Just now' },
        { id: 2, icon: '👁️', text: 'Your listing got 32 new views today.', time: '30m ago' },
        { id: 3, icon: '❤️', text: 'Your listing got 32 new views today.', time: '30m ago' },
        { id: 4, icon: '🤝', text: 'You received an offer from a verified buyer.', time: '30m ago' },
        { id: 5, icon: '✅', text: 'Congratulations! You have got a verified badge.', time: '30m ago' },
        { id: 6, icon: '📊', text: 'Engagement increased by 12% this week.', time: '30m ago' }
    ];

    return (
        <>
            {/* Sidebar */}
            <SellerSidebar />

            {/* Main Content */}
            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: window.innerWidth >= 1024 ? (sidebarCollapsed ? '6rem' : '16rem') : '0rem' }}
            >
                <SellerHeader
                    title="Dashboard"
                    showNotifications={true}
                    onNotificationClick={() => setShowNotifications(!showNotifications)}
                />

                <div className="p-4 sm:p-6 md:p-8 bg-black">
                    <div className='bg-gray-800/60 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8'>
                        {/* Seller Profile Section */}
                        <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Seller Profile</h2>

                        <div className="bg-gray-700/20 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">

                            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    {/* Profile Picture with Verified Badge */}
                                    <div className="relative">
                                        <img
                                            src="https://via.placeholder.com/100"
                                            alt="Daniel Mthembu"
                                            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-gray-700"
                                        />
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-amber-500 rounded-full flex items-center justify-center border-4 border-gray-800">
                                            <span className="text-white text-base sm:text-lg font-bold">✓</span>
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <div className="text-center sm:text-left">
                                        <p className="text-gray-400 text-xs sm:text-sm mb-2">Name</p>
                                        <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-4 md:mb-10">Daniel Mthembu</h3>
                                    </div>
                                </div>

                                {/* Verified Badge */}
                                <div className="px-4 sm:px-6 py-2 mb-2 sm:mb-4 md:mb-10 bg-amber-500/20 border border-amber-500 rounded-full">
                                    <span className="text-amber-500 font-semibold text-sm sm:text-base">Verified</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                            <button
                                onClick={() => navigate('/seller/create-listing')}
                                className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-800/40 backdrop-blur-lg border rounded-xl text-amber-500 text-sm sm:text-base font-semibold hover:bg-amber-500/10 transition-all duration-300"
                            >
                                Create New Listing
                            </button>
                            <button
                                onClick={() => navigate('/seller/listings')}
                                className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-800/40 backdrop-blur-lg border rounded-xl text-amber-500 text-sm sm:text-base font-semibold hover:bg-amber-500/10 transition-all duration-300"
                            >
                                View My Listing
                            </button>
                            <button
                                onClick={() => navigate('/seller/enquiries')}
                                className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-800/40 backdrop-blur-lg border rounded-xl text-amber-500 text-sm sm:text-base font-semibold hover:bg-amber-500/10 transition-all duration-300"
                            >
                                View Inquiries
                            </button>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                            <StatsCard
                                label="Total Views"
                                value="0"
                                icon={<FaEye className="text-amber-500" size={28} />}
                            />
                            <StatsCard
                                label="Inquiries"
                                value="0"
                                icon={<FaQuestionCircle className="text-amber-500" size={28} />}
                            />
                            <StatsCard
                                label="Listings"
                                value="0"
                                icon={<FaList className="text-amber-500" size={28} />}
                            />
                        </div>

                        {/* Recent Activity Section */}
                        <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8">
                            <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Recent activity</h2>
                            <div className="text-center py-12">
                                <p className="text-gray-500">No recent activity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notifications Panel */}
            {showNotifications && (
                <div className="fixed right-4 sm:right-8 top-20 sm:top-24 w-80 sm:w-96 bg-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden">
                    <div className="flex items-center justify-between p-6 border-b border-gray-700">
                        <h3 className="text-white font-semibold">Notifications</h3>
                        <div className="flex items-center gap-4">
                            <button className="text-amber-500 hover:text-amber-400 text-sm font-medium">
                                Mark All Read
                            </button>
                            <button
                                onClick={() => setShowNotifications(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                <FaTimes />
                            </button>
                        </div>
                    </div>

                    <div className="max-h-96 overflow-y-auto">
                        {notifications.map((notif) => (
                            <div key={notif.id} className="p-4 border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors cursor-pointer">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xl flex-shrink-0">
                                        {notif.icon}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white text-sm mb-1">{notif.text}</p>
                                        <span className="text-gray-400 text-xs">{notif.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            )}
        </>
    );
};

export default SellerDashboard;

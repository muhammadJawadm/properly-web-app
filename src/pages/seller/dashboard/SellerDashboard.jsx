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
                style={{ marginLeft: sidebarCollapsed ? '6rem' : '16rem' }}
            >
                <SellerHeader
                    title="Dashboard"
                    showNotifications={true}
                    onNotificationClick={() => setShowNotifications(!showNotifications)}
                />

                <div className="p-8 bg-black">
                    <div className='bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8'>
                        {/* Seller Profile Section */}
                        <h2 className="text-xl font-semibold text-white mb-6">Seller Profile</h2>

                        <div className="bg-gray-700/20 backdrop-blur-lg rounded-2xl p-8 mb-8">

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    {/* Profile Picture with Verified Badge */}
                                    <div className="relative">
                                        <img
                                            src="https://via.placeholder.com/100"
                                            alt="Daniel Mthembu"
                                            className="w-32 h-32 rounded-full border-4 border-gray-700"
                                        />
                                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center border-4 border-gray-800">
                                            <span className="text-white text-lg font-bold">✓</span>
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <div>
                                        <p className="text-gray-400 text-sm mb-2">Name</p>
                                        <h3 className="text-white text-xl font-semibold mb-10">Daniel Mthembu</h3>
                                    </div>
                                </div>

                                {/* Verified Badge */}
                                <div className="px-6 py-2 mb-10 bg-amber-500/20 border border-amber-500 rounded-full">
                                    <span className="text-amber-500 font-semibold ">Verified</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <button
                                onClick={() => navigate('/seller/create-listing')}
                                className="px-6 py-4 bg-gray-800/40 backdrop-blur-lg border  rounded-xl text-amber-500 font-semibold hover:bg-amber-500/10 transition-all duration-300"
                            >
                                Create New Listing
                            </button>
                            <button
                                onClick={() => navigate('/seller/listings')}
                                className="px-6 py-4 bg-gray-800/40 backdrop-blur-lg border  rounded-xl text-amber-500 font-semibold hover:bg-amber-500/10 transition-all duration-300"
                            >
                                View My Listing
                            </button>
                            <button
                                onClick={() => navigate('/seller/enquiries')}
                                className="px-6 py-4 bg-gray-800/40 backdrop-blur-lg border  rounded-xl text-amber-500 font-semibold hover:bg-amber-500/10 transition-all duration-300"
                            >
                                View Inquiries
                            </button>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
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
                        <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-8">
                            <h2 className="text-xl font-semibold text-white mb-6">Recent activity</h2>
                            <div className="text-center py-12">
                                <p className="text-gray-500">No recent activity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notifications Panel */}
            {showNotifications && (
                <div className="fixed right-8 top-24 w-96 bg-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden">
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

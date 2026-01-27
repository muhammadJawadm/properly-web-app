import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaQuestionCircle, FaList, FaListAlt } from 'react-icons/fa';
import SellerSidebar, { subscribeSidebarState } from '../../../components/Seller/SellerSidebar';
import Header from '../../../components/common/Header';
import StatsCard from '../../../components/Seller/StatsCard';
import NotificationPanel from '../../../components/common/NotificationPanel';
import { useSidebarMargin } from '../../../hooks/useResponsive';
import profilepic from "./../../../assets/profilepic.png"

const SellerDashboard = () => {
    const navigate = useNavigate();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const sidebarMargin = useSidebarMargin(sidebarCollapsed);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    return (
        <>
            {/* Sidebar */}
            <SellerSidebar />

            {/* Main Content */}
            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: sidebarMargin }}
            >
                <Header
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
                                    <img className='w-40' src={profilepic} alt="" />

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
                                onClick={() => navigate('/seller/inquiries')}
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
                                icon={<FaListAlt className="text-amber-500" size={28} />}
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
            <NotificationPanel
                showNotifications={showNotifications}
                onClose={() => setShowNotifications(false)}
            />
        </>
    );
};

export default SellerDashboard;

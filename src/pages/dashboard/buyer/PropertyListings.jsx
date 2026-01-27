import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaQuestionCircle, FaList, FaPencilAlt, FaTrash } from 'react-icons/fa';
import BuyerSidebar, { subscribeSidebarState } from '../../../components/Buyer/BuyerSidebar';
import Header from '../../../components/common/Header';
import StatsCard from '../../../components/Seller/StatsCard';
import NotificationPanel from '../../../components/common/NotificationPanel';
import { useSidebarMargin } from '../../../hooks/useResponsive';

const PropertyListings = () => {
    const navigate = useNavigate();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const sidebarMargin = useSidebarMargin(sidebarCollapsed);
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    const listings = [
        {
            id: 1,
            thumbnail: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg',
            title: '12 Maple Street',
            status: 'LIVE',
            engagement: 'View Analytics'
        },
        {
            id: 2,
            thumbnail: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg',
            title: '12 Maple Street',
            status: 'Closed',
            engagement: 'View Analytics'
        },
        {
            id: 3,
            thumbnail: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg',
            title: '12 Maple Street',
            status: 'LIVE',
            engagement: 'View Analytics'
        }
    ];

    return (
        <>
            {/* Sidebar */}
            <BuyerSidebar />

            {/* Main Content */}
            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: sidebarMargin }}
            >
                <Header
                    title="Property Listing"
                    showNotifications={true}
                    onNotificationClick={() => setShowNotifications(!showNotifications)}
                />

                <div className="p-4 sm:p-6 md:p-8">
                    {/* Header with Create Button */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                        <h2 className="text-lg sm:text-xl font-semibold text-white">Property Listings Overview</h2>
                        <button
                            onClick={() => navigate('/seller/create-listing')}
                            className="px-4 sm:px-6 py-2 sm:py-3 text-amber-500 hover:text-amber-600 text-sm sm:text-base font-semibold border border-amber-500 rounded-xl transition-all duration-300 whitespace-nowrap"
                        >
                            Create New Listing
                        </button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4">
                        <StatsCard
                            label="Total Listings"
                            value="5"
                            icon={<FaList className="text-amber-500" size={28} />}
                        />
                        <StatsCard
                            label="Inquiries"
                            value="4"
                            icon={<FaQuestionCircle className="text-amber-500" size={28} />}
                        />
                        <StatsCard
                            label="Total Views"
                            value="250"
                            icon={<FaEye className="text-amber-500" size={28} />}
                        />
                    </div>


                    {/* My Listings Table */}
                    <div className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">My Listings</h3>
                    </div>
                    <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-700">
                                <thead>
                                    <tr className="border-b border-gray-700 bg-gray-800">
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Thumbnail</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Property Tile</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Status</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Engagement</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listings.map((listing) => (
                                        <tr key={listing.id} className="border-b border-gray-700/50 hover:bg-gray-700/20 transition-colors">
                                            <td className="px-6 py-4">
                                                <img
                                                    src={listing.thumbnail}
                                                    alt={listing.title}
                                                    className="w-20 h-16 rounded-lg object-cover"
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-white font-medium">{listing.title}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${listing.status === 'LIVE'
                                                    ? 'bg-green-500/20 text-green-500'
                                                    : 'bg-red-500/20 text-red-500'
                                                    }`}>
                                                    {listing.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button className="text-amber-500 hover:text-amber-400 font-medium text-sm">
                                                    {listing.engagement}
                                                </button>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <button className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center hover:bg-blue-500/30 transition-colors">
                                                        <FaEye className="text-blue-500" size={14} />
                                                    </button>
                                                    <button className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/30 transition-colors">
                                                        <FaPencilAlt className="text-purple-500" size={14} />
                                                    </button>
                                                    <button className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center hover:bg-red-500/30 transition-colors">
                                                        <FaTrash className="text-red-500" size={14} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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

export default PropertyListings;

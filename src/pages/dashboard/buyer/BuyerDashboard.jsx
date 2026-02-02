import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHandshake, FaHistory, FaPaperPlane } from 'react-icons/fa';
import BuyerSidebar, { subscribeSidebarState } from '../../../components/Buyer/BuyerSidebar';
import Header from '../../../components/common/Header';
import NotificationPanel from '../../../components/common/NotificationPanel';
import { useSidebarMargin } from '../../../hooks/useResponsive';

const BuyerDashboard = () => {
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

    // Mock data for active inquiries
    const activeInquiries = [
        {
            id: 1,
            sentTo: 'Daniel Mthembu',
            time: '5 min ago',
            property: {
                image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
                title: '3 bedroom family home in Sandton',
                price: 2500000,
                beds: 3,
                bathrooms: 5,
                garages: 2,
                size: 500
            }
        }
    ];

    const statsData = [
        {
            label: 'Active Inquiries',
            value: '1',
            icon: <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                <FaHandshake className="text-amber-500" size={24} />
            </div>
        },
        {
            label: 'Past Inquiries',
            value: '0',
            icon: <div className="w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center">
                <FaHistory className="text-gray-400" size={24} />
            </div>
        },
        {
            label: 'Offers sent',
            value: '1',
            icon: <div className="w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center">
                <FaPaperPlane className="text-gray-400" size={24} />
            </div>
        }
    ];

    return (
        <>
            <BuyerSidebar />

            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: sidebarMargin }}
            >
                <Header
                    title="Dashboard"
                    showNotifications={true}
                    onNotificationClick={() => setShowNotifications(!showNotifications)}
                />

                <div className="p-4 sm:p-6 md:p-8">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        {statsData.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                                        <p className="text-white text-3xl font-bold">{stat.value}</p>
                                    </div>
                                    {stat.icon}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Active Inquiries Section */}
                    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 mb-6">
                        <h2 className="text-white text-xl font-semibold mb-6">Active Inquiries</h2>

                        {activeInquiries.map((inquiry) => (
                            <div key={inquiry.id} className="space-y-4">
                                {/* Sent to header */}
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-400 text-sm">
                                        Sent to: <span className="text-white font-medium">{inquiry.sentTo}</span>
                                    </p>
                                    <span className="text-gray-500 text-xs">{inquiry.time}</span>
                                </div>

                                {/* Property Card */}
                                <div className="bg-gray-700/30 rounded-xl p-4 hover:bg-gray-700/40 transition-colors">
                                    <div className="flex flex-col md:flex-row gap-4">
                                        {/* Property Image */}
                                        <div className="w-full md:w-auto shrink-0">
                                            <img
                                                src={inquiry.property.image}
                                                alt={inquiry.property.title}
                                                className="w-full h-48 md:w-24 md:h-24 rounded-lg object-cover"
                                            />
                                        </div>

                                        {/* Property Details */}
                                        <div className="flex-1 w-full min-w-0">
                                            <div className="flex flex-col items-center md:items-start text-center md:text-left h-full justify-center">
                                                <h3
                                                    className="text-white font-semibold mb-2 text-base w-full"
                                                    style={{
                                                        overflowWrap: 'break-word',
                                                        wordWrap: 'break-word',
                                                        whiteSpace: 'normal',
                                                        display: 'block'
                                                    }}
                                                >
                                                    {inquiry.property.title}
                                                </h3>
                                                <p className="text-amber-500 font-bold text-lg mb-3">
                                                    R{inquiry.property.price.toLocaleString()}
                                                </p>

                                                {/* Property Specs */}
                                                <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-gray-400 text-xs sm:text-sm">
                                                    <div className="flex items-center gap-1">
                                                        <span>●</span>
                                                        <span>{inquiry.property.beds} Beds</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <span>●</span>
                                                        <span>{inquiry.property.bathrooms} Bathrooms</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <span>●</span>
                                                        <span>{inquiry.property.garages} Garages</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <span>●</span>
                                                        <span>{inquiry.property.size}sqm</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recent Activity Section */}
                    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6">
                        <h2 className="text-white text-xl font-semibold mb-6">Recent activity</h2>
                        <div className="text-center py-12">
                            <p className="text-gray-500">No recent activity</p>
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

export default BuyerDashboard;

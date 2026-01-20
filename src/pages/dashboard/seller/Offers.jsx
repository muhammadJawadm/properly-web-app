import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import SellerSidebar, { subscribeSidebarState } from '../../../components/Seller/SellerSidebar';
import Header from '../../../components/common/Header';
import { useSidebarMargin } from '../../../hooks/useResponsive';

const Offers = () => {
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

    const notifications = [
        { id: 1, icon: '💬', text: 'New inquiry on your listing from John D.', time: 'Just now' },
        { id: 2, icon: '👁️', text: 'Your listing got 32 new views today.', time: '30m ago' },
        { id: 3, icon: '❤️', text: 'Your listing got 32 new views today.', time: '30m ago' },
        { id: 4, icon: '🤝', text: 'You received an offer from a verified buyer.', time: '30m ago' },
        { id: 5, icon: '✅', text: 'Congratulations! You have got a verified badge.', time: '30m ago' },
        { id: 6, icon: '📊', text: 'Engagement increased by 12% this week.', time: '30m ago' }
    ];

    // Mock offers data
    const offers = [
        {
            id: 1,
            buyerName: 'John D.',
            buyerInitials: 'JD',
            timestamp: '10:45AM',
            date: '10 September,25',
            offerPrice: 'R1,250,000',
            listedPrice: 'R1,300,000',
            difference: 'R50,000',
            condition: 'Buyer request occupation date in 30 days.'
        },
        {
            id: 2,
            buyerName: 'Sierra Joseph',
            buyerInitials: 'SJ',
            timestamp: '10:45AM',
            date: '10 September,25',
            offerPrice: 'R1,250,000',
            listedPrice: 'R1,300,000',
            difference: 'R50,000',
            condition: 'Buyer request occupation date in 30 days.'
        }
    ];

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
                    title="Offers"
                    showNotifications={true}
                    onNotificationClick={() => setShowNotifications(!showNotifications)}
                />

                <div className="p-4 sm:p-6 md:p-8">
                    {/* Statistics Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-4 sm:p-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-gray-400 text-xs sm:text-sm">Total Offers</span>
                                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                                    3
                                </span>
                            </div>
                        </div>

                        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-4 sm:p-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-gray-400 text-xs sm:text-sm">Pending Review</span>
                                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                                    1
                                </span>
                            </div>
                        </div>

                        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-4 sm:p-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-gray-400 text-xs sm:text-sm">Accepted</span>
                                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                                    1
                                </span>
                            </div>
                        </div>

                        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-4 sm:p-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-gray-400 text-xs sm:text-sm">In negotiation</span>
                                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                                    0
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Offers & Negotiations */}
                    <h2 className="text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Offers & Negotiations</h2>

                    {/* Offers List */}
                    <div className="space-y-4">
                        {offers.map((offer) => (
                            <div
                                key={offer.id}
                                className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-4 sm:p-6"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-700">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold">
                                            {offer.buyerInitials}
                                        </div>
                                        <h3 className="text-white font-semibold text-base sm:text-lg">{offer.buyerName}</h3>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-400 text-xs sm:text-sm">{offer.timestamp}</p>
                                        <p className="text-gray-500 text-xs">{offer.date}</p>
                                    </div>
                                </div>

                                {/* Price Details */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <p className="text-gray-400 text-xs sm:text-sm mb-1">Offer price</p>
                                        <p className="text-white text-lg sm:text-xl font-bold">{offer.offerPrice}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs sm:text-sm mb-1">Your listed Price</p>
                                        <p className="text-white text-lg sm:text-xl font-bold">{offer.listedPrice}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs sm:text-sm mb-1">Difference</p>
                                        <p className="text-white text-lg sm:text-xl font-bold">{offer.difference}</p>
                                    </div>
                                </div>

                                {/* Condition */}
                                <div className="mb-4">
                                    <p className="text-gray-400 text-xs sm:text-sm mb-1">Condition</p>
                                    <p className="text-white text-sm">{offer.condition}</p>
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                                    <button className="py-2.5 sm:py-3 text-green-600 hover:bg-green-500 hover:text-white font-semibold rounded-lg transition-colors text-sm">
                                        Accept Offer
                                    </button>
                                    <button
                                        onClick={() => navigate(`/seller/offers/negotiation/${offer.id}`)}
                                        className="py-2.5 sm:py-3 text-amber-600 hover:bg-amber-500 hover:text-black font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
                                    >
                                        Start Negotiation
                                    </button>
                                    <button className="py-2.5 sm:py-3 text-red-600 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-colors text-sm">
                                        Reject Offer
                                    </button>
                                    <button
                                        onClick={() => navigate(`/seller/offers/draft/${offer.id}`)}
                                        className="py-2.5 sm:py-3 border-2 border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500/10 transition-all text-sm"
                                    >
                                        View Draft
                                    </button>
                                </div>
                            </div>
                        ))}
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

export default Offers;

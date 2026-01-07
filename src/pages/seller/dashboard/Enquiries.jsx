import { useState, useEffect } from 'react';
import { FaPaperPlane, FaCheckCircle, FaEnvelope, FaCalendar, FaHashtag, FaFileAlt, FaTimes } from 'react-icons/fa';
import SellerSidebar, { subscribeSidebarState } from '../../../components/Seller/SellerSidebar';
import SellerHeader from '../../../components/Seller/SellerHeader';

const Enquiries = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [selectedListing, setSelectedListing] = useState('Select the Listing');
    const [message, setMessage] = useState('');
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

    const tabs = ['All', 'Pending', 'Verified', 'Closed'];

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
                    title="Enquiries"
                    showNotifications={true}
                    onNotificationClick={() => setShowNotifications(!showNotifications)}
                />

                <div className="p-8 h-[calc(100vh-88px)] flex gap-6">
                    {/* Left Side - Enquiries List */}
                    <div className="w-2/3 flex flex-col">
                        {/* Tabs */}
                        <div className="flex gap-6 mb-6 border-b border-gray-700">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-3 font-medium transition-all ${activeTab === tab
                                        ? 'text-amber-500 border-b-2 border-amber-500'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Buyer Inquiries Header */}
                        <h3 className="text-white font-semibold text-lg mb-4">Buyer Inquiries</h3>

                        {/* Listing Selector */}
                        <div className="relative mb-6">
                            <select
                                value={selectedListing}
                                onChange={(e) => setSelectedListing(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-white appearance-none cursor-pointer"
                            >
                                <option>Select the Listing</option>
                                <option>12 Maple Street</option>
                                <option>3 bedroom Apartment</option>
                            </select>
                        </div>

                        {/* Property Title */}
                        <h4 className="text-white font-semibold mb-4">3 bedroom Apartment</h4>

                        {/* Inquiry Card */}
                        <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 flex-1 overflow-y-auto">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <span className="text-gray-400 text-sm">Inquired by:</span>
                                    <h5 className="text-white font-semibold text-lg">John D.</h5>
                                </div>
                                <span className="text-gray-400 text-sm">Just Now</span>
                            </div>

                            {/* Property Details */}
                            <div className="flex gap-4 mb-4">
                                <img
                                    src="https://via.placeholder.com/150x100"
                                    alt="Property"
                                    className="w-32 h-24 rounded-lg object-cover"
                                />
                                <div>
                                    <h6 className="text-white font-semibold mb-1">3 bedroom family home in Sandton</h6>
                                    <p className="text-amber-500 font-bold text-lg mb-2">R2,500,000</p>
                                    <div className="flex gap-4 text-gray-400 text-sm">
                                        <span>• 3 Beds</span>
                                        <span>• 5 Bathrooms</span>
                                        <span>• 2 Garages</span>
                                        <span>• 500sqm</span>
                                    </div>
                                </div>
                            </div>

                            {/* Inquiry Message */}
                            <div className="bg-gray-700/30 rounded-xl p-4 mb-4">
                                <p className="text-gray-300 text-sm">
                                    I'm really intrigued by this property. It seems like it could be a great fit!
                                </p>
                            </div>

                            {/* Badges */}
                            <div className="flex gap-3">
                                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm flex items-center gap-2">
                                    <FaCheckCircle size={14} />
                                    Verified Contact
                                </span>
                                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                                    Identity card
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Chat Interface */}
                    <div className="w-1/3 bg-gray-800/40 backdrop-blur-lg rounded-2xl flex flex-col">
                        {/* Buyer Profile Header */}
                        <div className="p-6 border-b border-gray-700">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold">
                                    JD
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-semibold text-lg">John D.</h4>
                                    <span className="text-gray-400 text-sm">10:45AM</span>
                                </div>
                            </div>

                            {/* Buyer Info */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="flex items-center gap-2 text-sm">
                                    <FaCheckCircle className="text-green-500" size={14} />
                                    <span className="text-gray-300">Verified Contact</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <FaEnvelope className="text-gray-400" size={14} />
                                    <span className="text-gray-300">Email Confirmed</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <FaCalendar className="text-gray-400" size={14} />
                                    <span className="text-gray-300">12 November 2025</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <FaHashtag className="text-gray-400" size={14} />
                                    <span className="text-gray-300">ENQ-2801-1466</span>
                                </div>
                            </div>

                            {/* Document Status */}
                            <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <FaFileAlt className="text-gray-400" size={16} />
                                    <span className="text-gray-300 text-sm">Proof of Funds/Pre-Approval</span>
                                </div>
                                <span className="px-2 py-1 bg-red-500/20 text-red-500 text-xs rounded">Missing</span>
                            </div>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 p-6 overflow-y-auto">
                            <div className="space-y-4">
                                {/* User Message */}
                                <div className="bg-gray-700/30 rounded-lg p-3 ml-auto max-w-[80%]">
                                    <p className="text-gray-300 text-sm mb-1">Your message</p>
                                    <p className="text-white text-sm">Hi, is the property still available?</p>
                                </div>

                                {/* Seller Response */}
                                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 max-w-[80%]">
                                    <p className="text-amber-600 text-sm mb-1">Seller message</p>
                                    <p className="text-gray-200 text-sm">
                                        Yes, the property is still available. Please upload all the required documents so that I can schedule viewing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="p-6 border-t border-gray-700">
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Write Message..."
                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 pr-12"
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                                    <FaPaperPlane size={18} />
                                </button>
                            </div>

                            {/* Agree to Proceed Button */}
                            <button className="w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105">
                                Agree to Proceed
                            </button>
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

export default Enquiries;

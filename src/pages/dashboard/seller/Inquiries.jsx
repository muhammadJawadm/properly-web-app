import { useState, useEffect } from 'react';
import { FaPaperPlane, FaCheckCircle, FaEnvelope, FaCalendar, FaHashtag, FaFileAlt, FaChevronDown } from 'react-icons/fa';
import SellerSidebar, { subscribeSidebarState } from '../../../components/Seller/SellerSidebar';
import Header from '../../../components/common/Header';
import NotificationPanel from '../../../components/common/NotificationPanel';
import { useSidebarMargin } from '../../../hooks/useResponsive';

const Inquiries = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [selectedListing, setSelectedListing] = useState('Select the Listing');
    const [message, setMessage] = useState('');
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [additionalNotes, setAdditionalNotes] = useState('');
    const sidebarMargin = useSidebarMargin(sidebarCollapsed);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    const tabs = ['All', 'Pending', 'Verified', 'Closed'];

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
                    title="Inquiries"
                    showNotifications={true}
                    onNotificationClick={() => setShowNotifications(!showNotifications)}
                />

                <div className="p-4 sm:p-6 md:p-8 min-h-[calc(100vh-88px)] flex flex-col lg:flex-row gap-4 sm:gap-6">
                    {/* Left Side - Inquiries List */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-4 sm:gap-6 h-full">
                        {/* Tabs */}
                        <div className="flex gap-3 sm:gap-6 mb-4 sm:mb-6 border-b border-gray-700 overflow-x-auto">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-3 px-2sm:px-3 font-medium text-sm sm:text-base whitespace-nowrap transition-all ${activeTab === tab
                                        ? 'text-amber-500 border-b-2 border-amber-500'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Buyer Inquiries Header */}
                        <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Buyer Inquiries</h3>

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
                            <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                        </div>

                        {/* Property Title */}
                        <h4 className="text-white font-semibold mb-4">3 bedroom Apartment</h4>

                        {/* Inquiry Card */}
                        <div className="bg-gray-800/40 backdrop-blur-lg border border-amber-700 rounded-2xl p-6 flex-1 overflow-y-auto">
                            <div className="flex items-start justify-between mb-4">
                                <div className='flex gap-2'>
                                    <span className="text-gray-400 text-sm">Inquired by:</span>
                                    <h5 className="text-white font-semibold text-sm">John D.</h5>
                                </div>
                                <span className="text-gray-400 text-sm">Just Now</span>
                            </div>

                            {/* Property Details */}
                            <div className="flex gap-4 mb-4 bg-gray-800/70 backdrop-blur-lg rounded-xl p-4">
                                <img
                                    src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg"
                                    alt="Property"
                                    className="w-32 h-24 rounded-lg object-cover"
                                />
                                <div>
                                    <h6 className="text-white font-semibold mb-1">3 bedroom family home in Sandton</h6>
                                    <p className="text-amber-500 font-bold text-lg mb-2">R2,500,000</p>
                                    <div className="flex flex-col md:flex-row gap-4 text-gray-400 text-sm">
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

                    {/* Right Side - Enhanced Chat Interface */}
                    <div className="w-full lg:w-1/3 h-full bg-gray-700/70 backdrop-blur-lg rounded-2xl flex flex-col">
                        {/* Buyer Profile Header */}
                        <div className="p-6 border-b border-gray-700">
                            <div className="flex items-center gap-4 mb-4">
                                {/* Avatar */}
                                <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold text-lg">
                                    JD
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-semibold text-lg">John D.</h3>
                                    <span className="text-gray-400 text-xs">10:45AM</span>
                                </div>
                            </div>

                            {/* Status Badges Row 1 */}
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <div className="flex items-center gap-2 text-xs">
                                    <FaCheckCircle className="text-green-400" size={14} />
                                    <span className="text-gray-300">Verified Contact</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    <FaEnvelope className="text-blue-400" size={14} />
                                    <span className="text-gray-300">Email Confirmed</span>
                                </div>
                            </div>

                            {/* Status Badges Row 2 */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="flex items-center gap-2 text-xs">
                                    <FaCalendar className="text-gray-400" size={14} />
                                    <span className="text-gray-300">12 November 2025</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    <FaHashtag className="text-gray-400" size={14} />
                                    <span className="text-gray-300">ENQ-2801-1466</span>
                                </div>
                            </div>

                            {/* Proof of Funds Alert */}
                            <div className="bg-gray-800/60 rounded-lg p-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <FaFileAlt className="text-gray-400" size={16} />
                                    <span className="text-gray-300 text-sm">Proof of funds/Pre-Approval</span>
                                </div>
                                <span className="text-red-400 text-xs font-semibold">Missing</span>
                            </div>
                        </div>

                        {/* Schedule Viewing Section */}
                        <div className="p-6 border-b border-gray-700">
                            <p className="text-gray-300 text-sm mb-4">Buyer requested to schedule a viewing.</p>

                            <h4 className="text-white font-semibold mb-3">Schedule Viewing</h4>

                            {/* Time and Date Selectors */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="relative">
                                    <input
                                        type="time"
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className="w-full px-3 py-2 bg-gray-800/60 border border-gray-600 rounded-lg text-gray-300 text-sm hover:bg-gray-800 transition-colors focus:outline-none focus:border-amber-500 cursor-pointer"
                                    />
                                    {!selectedTime && (
                                        <div className="absolute inset-0 flex items-center gap-2 px-1 pointer-events-none">
                                            <FaCalendar className="text-amber-500" size={14} />
                                            {/* <span className="text-gray-300 text-sm pl-5 ">Select time</span> */}
                                        </div>
                                    )}
                                </div>
                                <div className="relative">
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="w-full px-3 py-2 bg-gray-800/60 border border-gray-600 rounded-lg text-gray-300 text-sm hover:bg-gray-800 transition-colors focus:outline-none focus:border-amber-500 cursor-pointer"
                                    />
                                    {!selectedDate && (
                                        <div className="absolute inset-0 flex items-center gap-2 px-1 pointer-events-none">
                                            <FaCalendar className="text-amber-500" size={14} />
                                            {/* <span className="text-gray-300 text-sm">Select date</span> */}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Additional Notes */}
                            <textarea
                                placeholder="Additional Notes..."
                                value={additionalNotes}
                                onChange={(e) => setAdditionalNotes(e.target.value)}
                                className="w-full px-3 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white placeholder-gray-500 text-sm resize-none focus:outline-none focus:border-amber-500"
                                rows="3"
                            ></textarea>

                            {/* Create Viewing Invite Button */}
                            <button 
                                onClick={() => {
                                    if (selectedDate && selectedTime) {
                                        alert(`Viewing scheduled for ${selectedDate} at ${selectedTime}\nNotes: ${additionalNotes || 'None'}`);
                                        // Reset form
                                        setSelectedDate('');
                                        setSelectedTime('');
                                        setAdditionalNotes('');
                                    } else {
                                        alert('Please select both date and time');
                                    }
                                }}
                                className="w-full mt-3 py-3 text-amber-500 font-semibold rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Create Viewing Invite
                            </button>
                        </div>

                        {/* Message Input */}
                        <div className="p-4 mt-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Write Message..."
                                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white placeholder-gray-500 pr-12 focus:outline-none focus:border-amber-500"
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-500 transition-colors">
                                    <FaPaperPlane size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Agree to Proceed Button */}
                        <div className="p-4 pt-0">
                            <button className="w-full py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity">
                                Agree to Proceed
                            </button>
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

export default Inquiries;

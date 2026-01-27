import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import BuyerSidebar, { subscribeSidebarState } from '../../../../components/Buyer/BuyerSidebar';
import Header from '../../../../components/common/Header';
import AttorneyAccessNotificationModal from '../../../../components/Buyer/AttorneyAccessNotificationModal';
import NotificationPanel from '../../../../components/common/NotificationPanel';
import { useSidebarMargin } from '../../../../hooks/useResponsive';

const MyOffers = () => {
    const navigate = useNavigate();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const sidebarMargin = useSidebarMargin(sidebarCollapsed);
    const [showNegotiations, setShowNegotiations] = useState(false);
    const [messageInput, setMessageInput] = useState('');
    const [showAttorneyNotification, setShowAttorneyNotification] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    // Mock offer data
    const offer = {
        property: {
            image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
            title: '3 bedroom family home in Sandton',
            price: 2500000,
            beds: 3,
            bathrooms: 5,
            garages: 2,
            size: 500
        },
        timestamp: '10:45AM',
        date: '10 September,25',
        offerPrice: 1250000,
        askingPrice: 1300000,
        difference: 50000,
        condition: 'You requested occupation date in 30 days.',
        revisions: [
            {
                revision: 1,
                offeredPrice: 1250000,
                listedPrice: 1300000,
                difference: 50000,
                condition: 'Buyer request occupation date in 30 days.',
                sellerMessage: "Let's settle at R 1,280,000 and I will share transfer cost for your convenience."
            }
        ]
    };

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            console.log('Sending message:', messageInput);
            setMessageInput('');
        }
    };

    const attorneyData = {
        name: 'John Smith',
        firm: 'Lex Legal Attorneys',
        regNumber: '567889',
        emergencyContact: '+27 71 345 6789'
    };

    return (
        <>
            <BuyerSidebar />

            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: sidebarMargin }}
            >
                <Header
                    title="Offers"
                    showNotifications={true}
                    onNotificationClick={() => setShowNotifications(!showNotifications)}
                />

                <div className="p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
                    <h1 className="text-white text-2xl font-bold mb-6">My Offers & Negotiations</h1>

                    {/* Offer Card */}
                    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 mb-6">
                        {/* Property Header */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src={offer.property.image}
                                    alt={offer.property.title}
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                                <div>
                                    <h3 className="text-white font-semibold">{offer.property.title}</h3>
                                    <p className="text-amber-500 font-bold">R{offer.property.price.toLocaleString()}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-400 text-sm">{offer.timestamp}</p>
                                <p className="text-gray-500 text-xs">{offer.date}</p>
                            </div>
                        </div>

                        {/* Property Specs */}
                        <div className="flex gap-3 text-gray-400 text-sm mb-6">
                            <span>● {offer.property.beds} Beds</span>
                            <span>● {offer.property.bathrooms} Bathrooms</span>
                            <span>● {offer.property.garages} Garages</span>
                            <span>● {offer.property.size}sqm</span>
                        </div>

                        {/* Offer Comparison */}
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Offer price</p>
                                <p className="text-white text-lg font-bold">R{offer.offerPrice.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Asking Price</p>
                                <p className="text-white text-lg font-bold">R{offer.askingPrice.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Difference</p>
                                <p className="text-white text-lg font-bold">R{offer.difference.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Condition</p>
                                <p className="text-white text-sm">{offer.condition}</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        {!showNegotiations ? (
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => setShowNegotiations(true)}
                                    className="px-6 py-2.5 bg-transparent border border-amber-500 rounded-lg text-amber-500 font-semibold hover:bg-amber-500/10 transition-colors"
                                >
                                    Start Negotiation
                                </button>
                                <button
                                    onClick={() => navigate('/buyer/offer-draft/1')}
                                    className="px-6 py-2.5 bg-transparent border border-gray-600 rounded-lg text-gray-300 font-semibold hover:bg-gray-700/50 transition-colors"
                                >
                                    View Draft
                                </button>
                                <button className="px-6 py-2.5 bg-transparent border border-red-500 rounded-lg text-red-500 font-semibold hover:bg-red-500/10 transition-colors">
                                    Withdraw Offer
                                </button>
                            </div>
                        ) : (
                            <div className="flex gap-3">
                                <button
                                    onClick={() => navigate('/buyer/offer-draft/1')}
                                    className="px-6 py-2.5 bg-transparent border border-gray-600 rounded-lg text-gray-300 font-semibold hover:bg-gray-700/50 transition-colors"
                                >
                                    View Draft
                                </button>
                                <button className="px-6 py-2.5 bg-transparent border border-red-500 rounded-lg text-red-500 font-semibold hover:bg-red-500/10 transition-colors">
                                    Withdraw Offer
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Negotiations Section */}
                    {showNegotiations && (
                        <>
                            {offer.revisions.map((revision) => (
                                <div key={revision.revision} className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 mb-6">
                                    <h3 className="text-white font-semibold mb-6">Revision {revision.revision}</h3>

                                    {/* Revision Comparison */}
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                                        {/* Left Column: Revision Details */}
                                        <div className='border-gray-600 border-2 rounded-xl p-4'>
                                            <div className="grid grid-cols-2 gap-6 mb-6">
                                                <div>
                                                    <p className="text-gray-400 text-sm mb-2">Your offered price</p>
                                                    <p className="text-white text-2xl font-bold">R {revision.offeredPrice.toLocaleString()}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 text-sm mb-2">Your listed price</p>
                                                    <p className="text-white text-2xl font-bold">R {revision.listedPrice.toLocaleString()}</p>
                                                </div>
                                            </div>

                                            <p className="text-red-400 text-sm mb-4">
                                                Difference: {revision.difference.toLocaleString()}
                                            </p>

                                            <p className="text-white text-sm mb-6">
                                                <span className="font-semibold">Condition:</span> {revision.condition}
                                            </p>
                                        </div>

                                        {/* Right Column: Action Buttons & Seller Message */}
                                        <div className='flex flex-col gap-4 mt-auto'>

                                            {/* Seller Message */}
                                            <div className="bg-gray-700/30 rounded-xl p-4 relative">
                                                <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-700/30"></div>
                                                <p className="text-white text-sm">{revision.sellerMessage}</p>
                                            </div>
                                            <div className="flex flex-wrap gap-3">
                                                <button className="px-6 py-2.5 bg-transparent border border-green-500 rounded-full text-green-500 font-semibold hover:bg-green-500/10 transition-colors">
                                                    Accept
                                                </button>
                                                <button
                                                    onClick={() => setShowAttorneyNotification(true)}
                                                    className="px-6 py-2.5  text-amber-500 border border-amber-500 rounded-full font-semibold hover:opacity-90 transition-opacity"
                                                >
                                                    Negotiate
                                                </button>
                                                <button className="px-6 py-2.5 bg-transparent border border-gray-600 rounded-full text-gray-300 font-semibold hover:bg-gray-700/50 transition-colors">
                                                    Counter offer
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Message Input */}
                            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-4">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={messageInput}
                                        onChange={(e) => setMessageInput(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                        placeholder="Write your message..."
                                        className="flex-1 px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        className="px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-colors"
                                    >
                                        <FaPaperPlane size={16} />
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Attorney Access Notification Modal */}
            <AttorneyAccessNotificationModal
                isOpen={showAttorneyNotification}
                onClose={() => setShowAttorneyNotification(false)}
                attorneyData={attorneyData}
            />

            {/* Notifications Panel */}
            <NotificationPanel
                showNotifications={showNotifications}
                onClose={() => setShowNotifications(false)}
            />
        </>
    );
};

export default MyOffers;

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import SellerSidebar, { subscribeSidebarState } from '../../../components/Seller/SellerSidebar';
import SellerHeader from '../../../components/Seller/SellerHeader';
import CRNModal from '../../../components/Seller/CRNModal';
import AttorneySelectionModal from '../../../components/Seller/AttorneySelectionModal';
import AttorneyNotificationModal from '../../../components/Seller/AttorneyNotificationModal';

const OfferDetails = () => {
    const navigate = useNavigate();
    const { offerId } = useParams();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [message, setMessage] = useState('');
    const [showCRNModal, setShowCRNModal] = useState(false);
    const [showAttorneyModal, setShowAttorneyModal] = useState(false);
    const [showAttorneyNotification, setShowAttorneyNotification] = useState(false);
    const [generatedCRN, setGeneratedCRN] = useState('');
    const [selectedAttorney, setSelectedAttorney] = useState(null);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    const handleAccept = () => {
        const crn = `CRN-${Math.floor(Math.random() * 900000) + 100000}`;
        setGeneratedCRN(crn);
        setShowCRNModal(true);
    };

    const handleSelectAttorney = () => {
        setShowCRNModal(false);
        setShowAttorneyModal(true);
    };

    const handleAttorneyConfirm = (attorney) => {
        setSelectedAttorney(attorney);
        setShowAttorneyModal(false);
        setTimeout(() => {
            setShowAttorneyNotification(true);
        }, 2000);
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            console.log('Sending message:', message);
            setMessage('');
        }
    };

    return (
        <>
            <SellerSidebar />

            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: window.innerWidth >= 1024 ? (sidebarCollapsed ? '6rem' : '16rem') : '0rem' }}
            >
                <SellerHeader
                    title="Offers"
                    showNotifications={false}
                />

                <div className="p-4 sm:p-6 md:p-8">
                    {/* Page Title */}
                    <h1 className="text-white text-2xl sm:text-3xl font-bold mb-6">
                        My Offers & Negotiations
                    </h1>

                    {/* Main Offer Card */}
                    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-4 sm:p-6 mb-6">
                        {/* Property Info */}
                        <div className="flex gap-4 mb-6 pb-6 border-b border-gray-700">
                            <img
                                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg"
                                alt="Property"
                                className="w-20 h-16 sm:w-24 sm:h-20 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                                <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                                    3 bedroom family home in Sandton
                                </h3>
                                <p className="text-amber-500 font-bold text-base sm:text-lg mb-2">R2,500,000</p>
                                <div className="flex flex-wrap gap-2 sm:gap-3 text-gray-400 text-xs">
                                    <span>• 3 Beds</span>
                                    <span>• 5 Bathrooms</span>
                                    <span>• 2 Garages</span>
                                    <span>• 500sqm</span>
                                </div>
                            </div>
                            <div className="text-right text-gray-400 text-xs">
                                <p>10:45AM</p>
                                <p>10 September,25</p>
                            </div>
                        </div>

                        {/* Pricing Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <div>
                                <p className="text-gray-400 text-xs sm:text-sm mb-1">Offer price</p>
                                <p className="text-white text-lg sm:text-xl font-bold">R1,250,000</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs sm:text-sm mb-1">Asking Price</p>
                                <p className="text-white text-lg sm:text-xl font-bold">R1,300,000</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs sm:text-sm mb-1">Difference</p>
                                <p className="text-white text-lg sm:text-xl font-bold">R50,000</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs sm:text-sm mb-1">Condition</p>
                                <p className="text-white text-sm">You requested occupation date in 30 days.</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => navigate(`/seller/offers/draft/${offerId}`)}
                                className="flex-1 py-2.5 border-2 border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500/10 transition-all text-sm"
                            >
                                View Draft
                            </button>
                            <button className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors text-sm">
                                Withdraw Offer
                            </button>
                        </div>
                    </div>

                    {/* Revision Section */}
                    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-4 sm:p-6 mb-6">
                        <h3 className="text-white font-semibold text-lg mb-4">Revision 1</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-700">
                            <div>
                                <p className="text-gray-400 text-xs sm:text-sm mb-1">Your offered price</p>
                                <p className="text-white text-xl sm:text-2xl font-bold">R 1,250,000</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs sm:text-sm mb-1">Your listed price</p>
                                <p className="text-white text-xl sm:text-2xl font-bold">R 1,300,000</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-red-500 text-sm font-semibold mb-3">Difference: 50,000</p>
                            <div>
                                <p className="text-gray-400 text-xs sm:text-sm mb-1">Condition:</p>
                                <p className="text-white text-sm">Buyer request occupation date in 30 days.</p>
                            </div>
                        </div>

                        {/* Buyer Message */}
                        <div className="mb-6">
                            <div className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-amber-500 relative">
                                <p className="text-white text-sm">
                                    Let's settle at R 1,280,000 and I will share transfer cost for your convenience.
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mb-6">
                            <button
                                onClick={handleAccept}
                                className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors text-sm"
                            >
                                Accept
                            </button>
                            <button
                                onClick={() => navigate(`/seller/offers/draft/${offerId}`)}
                                className="px-6 py-2.5 border-2 border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500/10 transition-all text-sm"
                            >
                                Negotiate
                            </button>
                            <button
                                onClick={() => navigate(`/seller/offers/negotiation/${offerId}`)}
                                className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors text-sm"
                            >
                                Counter offer
                            </button>
                        </div>

                        {/* Message Input */}
                        <div className="relative">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Write your message..."
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 pr-12 focus:outline-none focus:border-amber-500"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-500 transition-colors"
                            >
                                <FaPaperPlane size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <CRNModal
                isOpen={showCRNModal}
                onClose={() => setShowCRNModal(false)}
                crn={generatedCRN}
                onSelectAttorney={handleSelectAttorney}
            />

            <AttorneySelectionModal
                isOpen={showAttorneyModal}
                onClose={() => setShowAttorneyModal(false)}
                crn={generatedCRN}
                onConfirm={handleAttorneyConfirm}
            />

            <AttorneyNotificationModal
                isOpen={showAttorneyNotification}
                onClose={() => setShowAttorneyNotification(false)}
                attorneyData={selectedAttorney}
            />
        </>
    );
};

export default OfferDetails;

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaPaperPlane } from 'react-icons/fa';
import SellerSidebar, { subscribeSidebarState } from '../../../components/Seller/SellerSidebar';
import Header from '../../../components/common/Header';
import CRNModal from '../../../components/Seller/CRNModal';
import AttorneySelectionModal from '../../../components/Seller/AttorneySelectionModal';
import AttorneyNotificationModal from '../../../components/Seller/AttorneyNotificationModal';

const Negotiations = () => {
    const navigate = useNavigate();
    const { offerId } = useParams();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [message, setMessage] = useState('');
    const [counterAmount, setCounterAmount] = useState('');
    const [counterCondition, setCounterCondition] = useState('');
    const [showCounterInput, setShowCounterInput] = useState(false);
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

    const handleAcceptOffer = () => {
        // Generate CRN
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
        // Simulate attorney accessing file after a short delay
        setTimeout(() => {
            setShowAttorneyNotification(true);
        }, 2000);
    };

    const handleProceedToAttorney = () => {
        const crn = `CRN-${Math.floor(Math.random() * 900000) + 100000}`;
        setGeneratedCRN(crn);
        setShowAttorneyModal(true);
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            console.log('Sending message:', message);
            setMessage('');
        }
    };

    const handleCounterOffer = () => {
        setShowCounterInput(!showCounterInput);
    };

    const handleSubmitCounterOffer = () => {
        if (counterAmount.trim()) {
            console.log('Counter offer amount:', counterAmount);
            console.log('Counter offer condition:', counterCondition);
            setCounterAmount('');
            setCounterCondition('');
            setShowCounterInput(false);
        }
    };

    return (
        <>
            {/* Sidebar */}
            <SellerSidebar />

            {/* Main Content */}
            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: window.innerWidth >= 1024 ? (sidebarCollapsed ? '6rem' : '16rem') : '0rem' }}
            >
                <Header
                    title="Offers"
                    showNotifications={false}
                />

                <div className="p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/seller/offers')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
                    >
                        <FaArrowLeft size={20} />
                        <span className="text-sm sm:text-base">Negotiations</span>
                    </button>

                    {/* Buyer Header */}
                    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-4 sm:p-6 mb-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold text-lg">
                                    JD
                                </div>
                                <h2 className="text-white font-semibold text-lg sm:text-xl">John D.</h2>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-400 text-xs sm:text-sm">10:45AM</p>
                                <p className="text-gray-500 text-xs">10 September,25</p>
                            </div>
                        </div>
                    </div>

                    {/* Revision & Chat Combined Card */}
                    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl overflow-hidden mb-6">
                        {/* Header */}
                        <div className="p-4 sm:p-6 border-b border-gray-700">
                            <h3 className="text-white font-semibold text-lg">Revision 1</h3>
                        </div>

                        {/* Two Column Layout: Revision Details (Left) + Chat (Right) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 sm:p-6">
                            {/* Left Side: Revision Details */}
                            <div className="space-y-4">
                                {/* Price Grid */}
                                <div className="grid grid-cols-2 gap-4 bg-gray-900/50 rounded-xl p-4">
                                    <div>
                                        <p className="text-gray-400 text-xs mb-2">Buyer's offered price</p>
                                        <p className="text-white text-lg font-bold">R 1,250,000</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs mb-2">Your listed price</p>
                                        <p className="text-white text-lg font-bold">R 1,300,000</p>
                                    </div>
                                    <p className="text-red-400 text-sm">
                                        <span className="font-semibold">Difference:</span> 50,000
                                    </p>
                                    <p className="text-gray-400 text-xs mb-2">Condition:</p>
                                    <p className="text-white text-sm">Buyer request occupation date in 30 days.</p>
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-3 gap-2">
                                    <button
                                        onClick={handleAcceptOffer}
                                        className="py-2.5 px-3 border-green-600 border-2  text-green-400 hover:bg-green-600 hover:text-white font-semibold rounded-full transition-colors text-xs sm:text-sm"
                                    >
                                        Accept
                                    </button>
                                    <button
                                        onClick={() => navigate(`/seller/offers/draft/${offerId}`)}
                                        className="py-2.5 px-3 border-amber-600 border-2 text-amber-400 hover:bg-amber-600 hover:text-black font-semibold rounded-full transition-colors text-xs sm:text-sm"
                                    >
                                        Negotiate
                                    </button>
                                    <button
                                        onClick={handleCounterOffer}
                                        className="py-2.5 px-3 border-gray-700 border-2 text-gray-300 hover:bg-gray-600 hover:text-white font-semibold rounded-full transition-colors text-xs sm:text-sm"
                                    >
                                        Counter offer
                                    </button>
                                </div>
                            </div>

                            {/* Right Side: Messages */}
                            <div className="flex flex-col space-y-4">
                                {/* Buyer Message */}
                                <div className=" flex justify-end mt-auto">
                                    <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl rounded-tr-none p-4 max-w-[85%] border-r-4 border-amber-500">
                                        <p className="text-white text-sm">
                                            Let's settle at R 1,280,000 and I will share transfer cost for your convenience.
                                        </p>
                                    </div>
                                </div>

                                {/* Additional messages can be added here */}
                            </div>
                        </div>

                        {/* Message Input at Bottom */}
                        <div className="border-t border-gray-700 p-4 sm:p-6">
                            <div className="flex items-center gap-3">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                    placeholder="Write your message..."
                                    className="flex-1 bg-gray-900/50 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 border border-gray-700"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    className="bg-gray-700/50 hover:bg-gray-600 text-white p-3 rounded-xl transition-colors"
                                >
                                    <FaPaperPlane size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Counter Offer Input */}
                    {showCounterInput && (
                        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-6 mb-6">
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    value={counterAmount}
                                    onChange={(e) => setCounterAmount(e.target.value)}
                                    placeholder="Enter your counter amount"
                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                                />
                                <input
                                    type="text"
                                    value={counterCondition}
                                    onChange={(e) => setCounterCondition(e.target.value)}
                                    placeholder="Add Condition(Optional)"
                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                                />
                                <button
                                    onClick={handleSubmitCounterOffer}
                                    className="w-full py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
                                >
                                    Send counter offer
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Bottom Action Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button
                            onClick={() => console.log('Schedule viewing')}
                            className="py-4 border-2 border-amber-500 text-amber-500 font-semibold rounded-xl hover:bg-amber-500/10 transition-all"
                        >
                            Schedule viewing
                        </button>
                        <button
                            onClick={handleProceedToAttorney}
                            className="py-4 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-xl hover:opacity-90 transition-opacity"
                        >
                            Agree and Proceed to attorney
                        </button>
                    </div>
                </div>
            </div>

            {/* CRN Modal */}
            <CRNModal
                isOpen={showCRNModal}
                onClose={() => setShowCRNModal(false)}
                crn={generatedCRN}
                onSelectAttorney={handleSelectAttorney}
            />

            {/* Attorney Selection Modal */}
            <AttorneySelectionModal
                isOpen={showAttorneyModal}
                onClose={() => setShowAttorneyModal(false)}
                crn={generatedCRN}
                onConfirm={handleAttorneyConfirm}
            />

            {/* Attorney Notification Modal */}
            <AttorneyNotificationModal
                isOpen={showAttorneyNotification}
                onClose={() => setShowAttorneyNotification(false)}
                attorneyData={selectedAttorney}
            />
        </>
    );
};

export default Negotiations;

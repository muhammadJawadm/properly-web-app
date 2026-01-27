import { useState, useEffect } from 'react';
import { FaDownload, FaUpload, FaCheckCircle, FaClock, FaExclamationCircle, FaCommentDots } from 'react-icons/fa';
import SellerSidebar, { subscribeSidebarState } from '../../../components/Seller/SellerSidebar';
import Header from '../../../components/common/Header';
import NotificationPanel from '../../../components/common/NotificationPanel';
import FicaComplianceModal from '../../../components/Seller/FicaComplianceModal';
import RateAttorneyModal from '../../../components/Seller/RateAttorneyModal';
import { useSidebarMargin } from '../../../hooks/useResponsive';

const Attorney = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const sidebarMargin = useSidebarMargin(sidebarCollapsed);
    const [showFicaModal, setShowFicaModal] = useState(false);
    const [showRateModal, setShowRateModal] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    const attorneyInfo = {
        name: 'Jane Smith Attorney',
        registrationNumber: 'Reg. No. 468725',
        phone: '+27 92 456 7898',
        caseNumber: 'CRN-2025-ABCD1234'
    };

    const progressTrackerItems = [
        { status: 'completed', title: 'Offer accepted and transfer initiated.', date: '12 Aug 2025' },
        { status: 'pending', title: 'FICA Verification Pending', date: '13 Aug 2025', action: 'Start FICA Compliance', onClick: 'fica' },
        { status: 'pending', title: 'Deeds office registration pending', date: '14 Aug 2025', action: 'Request Update' },
        { status: 'pending', title: 'Final compliance certificate upload.', date: '15 Aug 2025', action: 'Request Update' }
    ];

    const paymentTrackingItems = [
        { status: 'completed', title: 'Payment Sent by Buyer' },
        { status: 'completed', title: 'Payment received by Attorney' },
        { status: 'pending', title: 'Payment received by Seller' }
    ];

    const attorneyUpdates = [
        {
            id: 1,
            source: 'Jane Smith Attorneys',
            message: 'We\'ve received confirmation from the Deeds Office. Transfer expected within 5 business days.',
            timestamp: 'Updated: 02 Sep 2025, 14:54'
        },
        {
            id: 2,
            source: 'Jane Smith Attorneys',
            message: 'Awaiting HOA clearance document to finalize transfer.',
            timestamp: 'Updated: 02 Sep 2025, 09:00'
        },
        {
            id: 3,
            source: 'Jane Smith Attorneys',
            message: 'We have received final rates clearance from the municipality. Awaiting one remaining HOA clearance document.',
            timestamp: 'Updated: 30 Sep 2025, 12:15'
        }
    ];

    return (
        <>
            <SellerSidebar />

            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: sidebarMargin }}
            >
                <Header title="Attorney" showNotifications={true} onNotificationClick={() => setShowNotifications(!showNotifications)} />

                <div className="p-4 sm:p-6 md:p-8">
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                        {/* Left Column - Main Content */}
                        <div className="xl:col-span-2 space-y-6">
                            {/* Property Transfer Progress */}
                            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-4 sm:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                                    <h2 className="text-white text-lg sm:text-xl font-bold">Property Transfer Progress</h2>
                                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs sm:text-sm font-medium self-start sm:self-auto">
                                        In Progress
                                    </span>
                                </div>
                                <p className="text-gray-400 text-xs sm:text-sm mb-6">
                                    Track your transfer journey and document submissions in real-time.
                                </p>

                                {/* Overall Progress Bar */}
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-300 text-sm">Overall Progress</span>
                                        <span className="text-amber-500 font-semibold text-sm">70%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-[#FCD66B] to-[#C28B33] h-2 rounded-full" style={{ width: '70%' }}></div>
                                    </div>
                                </div>

                                {/* Case and Attorney Info */}
                                <div className="bg-gray-900/50 rounded-xl p-4 mb-6">
                                    <h3 className="text-white font-semibold text-base sm:text-lg mb-3">{attorneyInfo.caseNumber}</h3>
                                    <div className="space-y-2">
                                        <p className="text-gray-300 text-sm">
                                            <span className="text-gray-400">{attorneyInfo.name}</span>
                                            <span className="text-gray-500 ml-2">({attorneyInfo.registrationNumber})</span>
                                        </p>
                                        <p className="text-gray-300 text-sm">{attorneyInfo.phone}</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                                        <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-lg transition-colors text-sm">
                                            Request Update
                                        </button>
                                        <button
                                            onClick={() => setShowFicaModal(true)}
                                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm"
                                        >
                                            Start FICA Compliance
                                        </button>
                                    </div>
                                </div>

                                {/* Final OTP Upload */}
                                <div className="bg-gray-900/50 rounded-xl p-4 mb-4">
                                    <div className="flex items-center justify-between flex-wrap gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-red-500/20 rounded flex items-center justify-center">
                                                <FaUpload className="text-red-400 text-sm" />
                                            </div>
                                            <span className="text-white text-sm font-medium">Final OTP by attorney</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-xs sm:text-sm transition-colors">
                                                Download
                                            </button>
                                            <button className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-lg text-xs sm:text-sm transition-colors">
                                                Upload final Signed OTP
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Required Final Documents */}
                                <div>
                                    <h3 className="text-white font-semibold mb-3 text-sm sm:text-base">Required final documents</h3>
                                    <p className="text-gray-400 text-xs sm:text-sm mb-4">
                                        Upload the following documents to complete your purchase.
                                    </p>
                                    <div className="space-y-3">
                                        {['Certified ID', 'Proof of residence', 'Proof of funds'].map((doc, idx) => (
                                            <div key={idx} className="flex items-center justify-between bg-gray-900/50 rounded-lg p-3">
                                                <span className="text-gray-300 text-sm">{doc}</span>
                                                <button className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-lg text-xs transition-colors">
                                                    Upload
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-gray-500 text-xs mt-3 italic">
                                        Auto reminders are sent every 72 hours for pending.
                                    </p>
                                </div>
                            </div>

                            {/* Progress Tracker */}
                            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-4 sm:p-6">
                                <h2 className="text-white text-lg sm:text-xl font-bold mb-6">Progress Tracker</h2>
                                <div className="space-y-4">
                                    {progressTrackerItems.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3 sm:gap-4">
                                            <div className="flex flex-col items-center">
                                                {item.status === 'completed' ? (
                                                    <FaCheckCircle className="text-green-500 text-lg sm:text-xl flex-shrink-0" />
                                                ) : (
                                                    <FaClock className="text-amber-500 text-lg sm:text-xl flex-shrink-0" />
                                                )}
                                                {idx < progressTrackerItems.length - 1 && (
                                                    <div className="w-0.5 h-12 bg-gray-700 mt-2"></div>
                                                )}
                                            </div>
                                            <div className="flex-1 pb-4">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                                                    <p className={`text-sm sm:text-base font-medium ${item.status === 'completed' ? 'text-white' : 'text-gray-300'}`}>
                                                        {item.title}
                                                    </p>
                                                    <span className="text-gray-400 text-xs sm:text-sm">{item.date}</span>
                                                </div>
                                                {item.action && (
                                                    <button
                                                        onClick={() => item.onClick === 'fica' ? setShowFicaModal(true) : null}
                                                        className="mt-2 text-amber-500 hover:text-amber-400 text-xs sm:text-sm font-medium"
                                                    >
                                                        {item.action}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Payment Status */}
                            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-4 sm:p-6">
                                <h2 className="text-white text-lg sm:text-xl font-bold mb-4">Payment status</h2>
                                <div className="bg-gray-900/50 rounded-xl p-4 mb-4">
                                    <p className="text-gray-300 text-sm mb-2">Payment sent by Buyer to attorney.</p>
                                    <p className="text-gray-400 text-xs sm:text-sm mb-4">
                                        Have you received payment from attorney?
                                    </p>
                                    <button className="w-full sm:w-auto px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors text-sm">
                                        Mark as Payment Received
                                    </button>
                                </div>
                            </div>

                            {/* Payment Tracking */}
                            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-4 sm:p-6">
                                <h2 className="text-white text-lg sm:text-xl font-bold mb-6">Payment Tracking</h2>
                                <div className="space-y-4">
                                    {paymentTrackingItems.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            {item.status === 'completed' ? (
                                                <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                                            ) : (
                                                <FaClock className="text-gray-500 text-lg flex-shrink-0" />
                                            )}
                                            <p className={`text-sm sm:text-base ${item.status === 'completed' ? 'text-white' : 'text-gray-400'}`}>
                                                {item.title}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setShowRateModal(true)}
                                    className="mt-6 w-full sm:w-auto px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-lg transition-colors text-sm"
                                >
                                    Mark as Payment received
                                </button>
                            </div>
                        </div>

                        {/* Right Column - Attorney's Updates */}
                        <div className="xl:col-span-1">
                            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-4 sm:p-6 sticky top-6">
                                <h2 className="text-white text-lg sm:text-xl font-bold mb-6">Attorney's Updates</h2>
                                <div className="space-y-4">
                                    {attorneyUpdates.map((update) => (
                                        <div key={update.id} className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
                                            <div className="flex items-start gap-3 mb-3">
                                                <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <FaCommentDots className="text-amber-500 text-sm" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-white font-medium text-sm mb-1">{update.source}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-300 text-xs sm:text-sm mb-3 leading-relaxed">
                                                {update.message}
                                            </p>
                                            <p className="text-gray-500 text-xs">{update.timestamp}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {showFicaModal && <FicaComplianceModal onClose={() => setShowFicaModal(false)} />}
            {showRateModal && <RateAttorneyModal attorneyName="William James" onClose={() => setShowRateModal(false)} />}

            {/* Notifications Panel */}
            <NotificationPanel
                showNotifications={showNotifications}
                onClose={() => setShowNotifications(false)}
            />
        </>
    );
};

export default Attorney;

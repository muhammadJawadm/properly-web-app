import { useState, useEffect } from 'react';
import { FaUpload, FaDownload, FaCheckCircle, FaClock, FaEnvelope } from 'react-icons/fa';
import BuyerSidebar, { subscribeSidebarState } from '../../../../components/Buyer/BuyerSidebar';
import Header from '../../../../components/common/Header';
import FICAComplianceModal from '../../../../components/Buyer/FICAComplianceModal';

const BuyerAttorney = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [showFICAModal, setShowFICAModal] = useState(false);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    const progressPercentage = 70;

    const handleRequestUpdate = () => {
        console.log('Requesting update...');
    };

    const handleUploadOTP = () => {
        console.log('Uploading Final Signed OTP...');
    };

    const handleUploadDocument = (docType) => {
        console.log(`Uploading ${docType}...`);
    };

    const handleMarkPaymentSent = () => {
        console.log('Marking payment as sent...');
    };

    const handleReviewAttorney = () => {
        console.log('Opening attorney review...');
    };

    const progressItems = [
        {
            id: 1,
            title: 'Offer accepted and transfer initiated.',
            date: '12 Aug 2025',
            status: 'completed',
            link: null,
            showFICA: false
        },
        {
            id: 2,
            title: 'FICA Verification Pending',
            date: '13 Aug 2025',
            status: 'pending',
            link: null,
            showFICA: true
        },
        {
            id: 3,
            title: 'Deeds office registration pending',
            subtitle: 'Request Update',
            date: '14 Aug 2025',
            status: 'pending',
            link: true,
            showFICA: false
        },
        {
            id: 4,
            title: 'Final compliance certificate upload.',
            subtitle: 'Request Update',
            date: '15 Aug 2025',
            status: 'pending',
            link: true,
            showFICA: false
        }
    ];

    const attorneyUpdates = [
        {
            id: 1,
            attorney: 'Jane Smith Attorneys',
            message: "We've received confirmation from the Deeds Office. Transfer expected within 6 business days.",
            date: '02 Sep 2025, 14:54'
        },
        {
            id: 2,
            attorney: 'Jane Smith Attorneys',
            message: 'Awaiting HOA clearance document to finalize transfer.',
            date: '02 Sep 2025, 09:00'
        },
        {
            id: 3,
            attorney: 'Jane Smith Attorneys',
            message: 'We have received final rates clearance from the municipality. Awaiting one remaining HOA clearance document.*',
            date: '04 Sep 2025, 17:18'
        }
    ];

    const paymentTracking = [
        { id: 1, title: 'Payment Sent by buyer', status: 'completed' },
        { id: 2, title: 'Payment received by Attorney', status: 'completed' },
        { id: 3, title: 'Payment received by Seller', status: 'completed' },
        { id: 4, title: '1% Platform fee paid', status: 'pending' }
    ];

    return (
        <>
            {/* Sidebar */}
            <BuyerSidebar />

            {/* Main Content */}
            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: window.innerWidth >= 1024 ? (sidebarCollapsed ? '6rem' : '16rem') : '0rem' }}
            >
                <Header title="Attorney" showNotifications={true} />

                <div className="p-4 sm:p-6 md:p-8 bg-black">
                    <div className='bg-gray-800/60 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8'>
                        {/* Property Transfer Progress */}
                        <div className="mb-8">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                        Property Transfer Progress
                                    </h2>
                                    <p className="text-gray-400 text-sm">
                                        Track your transfer journey and document submissions in real time.
                                    </p>
                                </div>
                                <div className="mt-4 sm:mt-0">
                                    <span className="px-4 py-2 bg-amber-500/20 border border-amber-500 rounded-full text-amber-500 font-semibold text-sm">
                                        In Progress
                                    </span>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-white text-sm font-medium">Overall Progress</span>
                                    <span className="text-amber-500 text-sm font-bold">{progressPercentage}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-3">
                                    <div
                                        className="bg-gradient-to-r from-amber-400 to-amber-600 h-3 rounded-full transition-all duration-500"
                                        style={{ width: `${progressPercentage}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Two Column Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                            {/* Left Column - Main Content */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* Attorney Details Card */}
                                <div className="bg-gray-700/40 backdrop-blur-lg border border-gray-600 rounded-xl p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">CRN–2025–ABCD1234</h3>
                                            <p className="text-gray-300 mb-1">
                                                <span className="font-semibold">Jane Smith Attorney</span> (Reg No. 468775)
                                            </p>
                                            <p className="text-gray-400 text-sm">+27 92 468 7895</p>
                                        </div>
                                        <button
                                            onClick={handleRequestUpdate}
                                            className="px-6 py-2 border border-amber-500 text-amber-500 rounded-lg font-medium hover:bg-amber-500/10 transition-colors whitespace-nowrap"
                                        >
                                            Request Update
                                        </button>
                                    </div>
                                </div>

                                {/* Final OTP Document */}
                                <div className="bg-gray-700/40 backdrop-blur-lg border border-gray-600 rounded-xl p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div className="flex items-start gap-3">
                                            <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FaDownload className="text-gray-300 text-lg" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1">Final OTP by attorney</h4>
                                                <button className="text-amber-500 text-sm hover:underline">
                                                    Download
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            onClick={handleUploadOTP}
                                            className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg font-medium transition-colors flex items-center gap-2 justify-center"
                                        >
                                            <FaUpload />
                                            Upload final Signed OTP
                                        </button>
                                    </div>
                                </div>

                                {/* Required Final Documents */}
                                <div className="bg-gray-700/40 backdrop-blur-lg border border-gray-600 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">Required final documents</h3>
                                    <p className="text-gray-400 text-sm mb-6">
                                        Upload the following documents to complete your purchase.
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 bg-gray-800/60 rounded-lg">
                                            <span className="text-white">Certified ID</span>
                                            <button
                                                onClick={() => handleUploadDocument('Certified ID')}
                                                className="px-4 py-2 border border-amber-500 text-amber-500 rounded-lg text-sm font-medium hover:bg-amber-500/10 transition-colors"
                                            >
                                                Upload
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-gray-800/60 rounded-lg">
                                            <span className="text-white">Proof of residence</span>
                                            <button
                                                onClick={() => handleUploadDocument('Proof of residence')}
                                                className="px-4 py-2 border border-amber-500 text-amber-500 rounded-lg text-sm font-medium hover:bg-amber-500/10 transition-colors"
                                            >
                                                Upload
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-gray-800/60 rounded-lg">
                                            <span className="text-white">Proof of funds</span>
                                            <button
                                                onClick={() => handleUploadDocument('Proof of funds')}
                                                className="px-4 py-2 border border-amber-500 text-amber-500 rounded-lg text-sm font-medium hover:bg-amber-500/10 transition-colors"
                                            >
                                                Upload
                                            </button>
                                        </div>
                                    </div>

                                    <p className="text-gray-500 text-xs mt-4 italic">
                                        *Auto reminders are sent every 72 hours for pending.
                                    </p>
                                </div>

                                {/* Progress Tracker */}
                                <div className="bg-gray-700/40 backdrop-blur-lg border border-gray-600 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-6">Progress Tracker</h3>
                                    <div className="space-y-6">
                                        {progressItems.map((item, index) => (
                                            <div key={item.id} className="flex gap-4">
                                                {/* Timeline Icon */}
                                                <div className="flex flex-col items-center">
                                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${item.status === 'completed'
                                                        ? 'bg-green-500'
                                                        : 'bg-amber-500'
                                                        }`}>
                                                        {item.status === 'completed' ? (
                                                            <FaCheckCircle className="text-white text-lg" />
                                                        ) : (
                                                            <FaClock className="text-white text-lg" />
                                                        )}
                                                    </div>
                                                    {index < progressItems.length - 1 && (
                                                        <div className="w-1 h-16 bg-gray-600 mt-2" />
                                                    )}
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 pb-8">
                                                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                                                    {item.showFICA && (
                                                        <button
                                                            onClick={() => setShowFICAModal(true)}
                                                            className="px-4 py-2 mt-2 border border-amber-500 text-amber-500 rounded-lg text-sm font-medium hover:bg-amber-500/10 transition-colors"
                                                        >
                                                            Upload FICA Documents
                                                        </button>
                                                    )}
                                                    {item.link && (
                                                        <button
                                                            onClick={handleRequestUpdate}
                                                            className="text-amber-500 text-sm hover:underline mb-1"
                                                        >
                                                            {item.subtitle}
                                                        </button>
                                                    )}
                                                    <p className="text-gray-400 text-xs">{item.date}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Payment Tracking */}
                                <div className="bg-gray-700/40 backdrop-blur-lg border border-gray-600 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-6">Payment Tracking</h3>
                                    <div className="space-y-6">
                                        {paymentTracking.map((item, index) => (
                                            <div key={item.id} className="flex gap-4">
                                                {/* Timeline Icon */}
                                                <div className="flex flex-col items-center">
                                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${item.status === 'completed'
                                                        ? 'bg-green-500'
                                                        : 'bg-gray-600'
                                                        }`}>
                                                        {item.status === 'completed' ? (
                                                            <FaCheckCircle className="text-white text-lg" />
                                                        ) : (
                                                            <FaClock className="text-gray-400 text-lg" />
                                                        )}
                                                    </div>
                                                    {index < paymentTracking.length - 1 && (
                                                        <div className="w-1 h-16 bg-gray-600 mt-2" />
                                                    )}
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 pb-8">
                                                    <h4 className={`font-medium ${item.status === 'completed'
                                                        ? 'text-white'
                                                        : 'text-gray-400'
                                                        }`}>{item.title}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Updates & Payment */}
                            <div className="space-y-6">
                                {/* Attorney's Updates */}
                                <div className="bg-gray-700/40 backdrop-blur-lg border border-gray-600 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-6">Attorney's Updates</h3>
                                    <div className="space-y-4">
                                        {attorneyUpdates.map((update) => (
                                            <div key={update.id} className="bg-gray-800/60 rounded-lg p-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <FaEnvelope className="text-amber-500 text-sm" />
                                                    <h4 className="text-white font-medium text-sm">{update.attorney}</h4>
                                                </div>
                                                <p className="text-gray-300 text-sm mb-2">{update.message}</p>
                                                <p className="text-gray-500 text-xs">Updated: {update.date}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Payment Status */}
                                <div className="bg-gray-700/40 backdrop-blur-lg border border-gray-600 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-6">Payment status</h3>
                                    <div className="space-y-3">
                                        <button
                                            onClick={handleMarkPaymentSent}
                                            className="w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black rounded-lg font-semibold transition-colors"
                                        >
                                            Mark as Payment Sent
                                        </button>
                                        <button
                                            onClick={handleReviewAttorney}
                                            className="w-full px-6 py-3 border border-amber-500 text-amber-500 rounded-lg font-semibold hover:bg-amber-500/10 transition-colors"
                                        >
                                            Review Attorney
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FICA Compliance Modal */}
            <FICAComplianceModal
                isOpen={showFICAModal}
                onClose={() => setShowFICAModal(false)}
            />
        </>
    );
};

export default BuyerAttorney;

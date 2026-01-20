import { useState, useEffect } from 'react';
import { FaCheckCircle, FaClock, FaDownload, FaUpload, FaEllipsisV, FaPaperPlane, FaTimes } from 'react-icons/fa';
import AttorneySidebar, { subscribeSidebarState } from '../../../components/Attorney/AttorneySidebar';
import AttorneyHeader from '../../../components/Attorney/AttorneyHeader';
import { useSidebarMargin } from '../../../hooks/useResponsive';

const AttorneyDashboard = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const sidebarMargin = useSidebarMargin(sidebarCollapsed);
    const [activeTab, setActiveTab] = useState('buyer'); // 'buyer' or 'seller'
    const [otpUploaded, setOTPUploaded] = useState(false); // Toggle between states
    const [message, setMessage] = useState('');
    const [showNotifications, setShowNotifications] = useState(true);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    const progressPercentage = 70;

    const progressItems = [
        {
            id: 1,
            title: 'Offer accepted and transfer initiated.',
            date: '12 Aug 2025',
            status: 'completed'
        },
        {
            id: 2,
            title: 'Conveyancer assigned and CRN generated.',
            date: '13 Aug 2025',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Deeds office registration pending',
            subtitle: 'Requested for Update',
            date: '14 Aug 2025',
            status: 'pending'
        },
        {
            id: 4,
            title: 'Final compliance certificate upload.',
            subtitle: 'Requested for Update',
            date: '15 Aug 2025',
            status: 'pending'
        }
    ];

    const buyerDocuments = [
        { id: 1, name: 'Identity Card', status: 'verified-lightstone', color: 'text-gray-400' },
        { id: 2, name: 'Proof of Residence', status: 'verified', color: 'text-green-500' },
        { id: 3, name: 'Pre-Approval', status: 'mark-verified', color: 'text-amber-500' },
        { id: 4, name: 'FICA Questionnaire', status: 'mark-verified', color: 'text-amber-500' }
    ];

    const sellerDocuments = [
        { id: 5, name: 'Title Deed', status: 'verified', color: 'text-green-500' },
        { id: 6, name: 'Rates Clearance', status: 'verified', color: 'text-green-500' },
        { id: 7, name: 'Electrical Certificate', status: 'mark-verified', color: 'text-amber-500' }
    ];

    const paymentTracking = otpUploaded ? [
        { id: 1, title: 'Payment Sent by buyer', date: '12 Aug 2025', status: 'completed' },
        { id: 2, title: 'Payment received by Attorney', date: '12 Aug 2025', status: 'completed' },
        { id: 3, title: 'Payment received by Seller', date: '12 Aug 2025', status: 'completed' },
        { id: 4, title: '1% Platform fee paid', date: '12 Aug 2025', status: 'completed' }
    ] : [
        { id: 1, title: 'Payment Sent by buyer', date: '12 Aug 2025', status: 'completed' },
        { id: 2, title: 'Payment received by Attorney', status: 'pending' },
        { id: 3, title: 'Payment received by Seller', status: 'pending' },
        { id: 4, title: '1% Platform fee paid', status: 'pending' }
    ];

    const timelineUpdates = [
        {
            id: 1,
            attorney: 'Jane Smith Attorneys',
            message: "We've received confirmation from the Deeds Office. Transfer expected within 5 business days.",
            date: '02 Sep 2025, 14:54'
        },
        {
            id: 2,
            attorney: 'Jane Smith Attorneys',
            message: 'Awaiting HOA clearance document to finalize transfer.',
            date: '02 Sep 2025, 09:55'
        },
        {
            id: 3,
            attorney: 'Jane Smith Attorneys',
            message: 'We have received final rates clearance from the municipality. Awaiting one remaining HOA clearance document.*',
            date: '20 Sep 2025, 15:15'
        }
    ];

    const notifications = [
        { id: 1, icon: '💬', text: 'New inquiry on your listing from John D.', time: 'Just now' },
        { id: 2, icon: '👁️', text: 'Your listing got 32 new views today.', time: '30m ago' },
        { id: 3, icon: '❤️', text: 'Your listing got 32 new views today.', time: '30m ago' },
        { id: 4, icon: '🤝', text: 'You received an offer from a verified buyer.', time: '30m ago' },
        { id: 5, icon: '✅', text: 'Congratulations! You have got a verified badge.', time: '30m ago' },
        { id: 6, icon: '📊', text: 'Engagement increased by 12% this week.', time: '30m ago' }
    ];


    const handleSendMessage = () => {
        if (message.trim()) {
            console.log('Sending message:', message);
            setMessage('');
        }
    };

    const handleUploadOTP = () => {
        console.log('Uploading final signed OTP...');
    };

    const handleDownloadOTP = (type) => {
        console.log(`Downloading ${type} OTP...`);
    };

    const handleMarkConfirm = () => {
        console.log('Marking payment as confirmed...');
    };

    const handleCloseCaseClick = () => {
        console.log('Marking case as closed...');
    };

    return (
        <>
            <AttorneySidebar />

            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: sidebarMargin }}
            >
                <AttorneyHeader title="Dashboard" showNotifications={true} onNotificationClick={() => setShowNotifications(!showNotifications)} />

                <div className="p-4 sm:p-6 md:p-8">
                    {/* Upper Grid - Timeline on right of CRN/Upload/Progress */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        {/* Left Column - CRN, Upload OTP, Progress Tracker */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* CRN Header Card */}
                            <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                                    <h2 className="text-2xl font-bold text-white">CRN-2025-ABCD1234</h2>
                                    <span className="px-4 py-2 bg-blue-500/20 border border-blue-500 rounded-full text-blue-400 font-semibold text-sm inline-block w-fit">
                                        In Progress
                                    </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-6 mb-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-amber-500 text-sm font-semibold">BUYER</span>
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                            <span className="text-white text-xs font-semibold">J</span>
                                        </div>
                                        <span className="text-white">John D.</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-amber-500 text-sm font-semibold">SELLER</span>
                                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                                            <span className="text-white text-xs font-semibold">T</span>
                                        </div>
                                        <span className="text-white">Thomas Mork</span>
                                    </div>

                                    <button className="px-6 py-2 border border-amber-500 text-amber-500 rounded-lg font-medium hover:bg-amber-500/10 transition-colors ml-auto">
                                        Offer to Purchase
                                    </button>
                                </div>

                                {/* Progress Bar */}
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-white text-sm font-medium">Overall Progress</span>
                                        <span className="text-amber-500 text-sm font-bold">{progressPercentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${progressPercentage}%` }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Upload Final Signed OTP */}
                            <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
                                <h3 className="text-xl font-semibold text-white mb-4">Upload Final Signed OTP</h3>

                                {!otpUploaded ? (
                                    <div className="flex items-center justify-between p-4 bg-gray-700/40 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                                                <FaUpload className="text-gray-300" />
                                            </div>
                                            <span className="text-gray-300">Upload final offer to purchase</span>
                                        </div>
                                        <button
                                            onClick={() => setOTPUploaded(true)}
                                            className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg font-medium transition-colors"
                                        >
                                            Upload
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-4">
                                        <div className="flex-1 p-4 bg-gray-700/40 rounded-lg flex items-center justify-between">
                                            <span className="text-white">Final offer to purchase</span>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                                            <button
                                                onClick={() => handleDownloadOTP('Buyer')}
                                                className="p-4 bg-gray-700/40 rounded-lg hover:bg-gray-700/60 transition-colors flex items-center justify-between"
                                            >
                                                <span className="text-white text-sm">Signed OTP by Buyer</span>
                                                <FaDownload className="text-amber-500" />
                                            </button>
                                            <button
                                                onClick={() => handleDownloadOTP('Seller')}
                                                className="p-4 bg-gray-700/40 rounded-lg hover:bg-gray-700/ transition-colors flex items-center justify-between"
                                            >
                                                <span className="text-white text-sm">Signed OTP by Seller</span>
                                                <FaDownload className="text-amber-500" />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Progress Tracker */}
                            <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
                                <h3 className="text-xl font-semibold text-white mb-6">Progress Tracker</h3>
                                <div className="space-y-6">
                                    {progressItems.map((item, index) => (
                                        <div key={item.id} className="flex gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${item.status === 'completed' ? 'bg-green-500' : 'bg-amber-500'
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

                                            <div className="flex-1 pb-8">
                                                <h4 className="text-white font-medium mb-1">{item.title}</h4>
                                                {item.subtitle && (
                                                    <button className="text-amber-500 text-sm hover:underline mb-1">
                                                        {item.subtitle}
                                                    </button>
                                                )}
                                                <p className="text-gray-400 text-xs">{item.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Timeline */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 sticky top-24">
                                <h3 className="text-xl font-semibold text-white mb-6">Timeline</h3>
                                <div className="space-y-4 mb-6 max-h-[calc(100vh-16rem)] overflow-y-auto">
                                    {timelineUpdates.map((update) => (
                                        <div key={update.id} className="bg-gray-700/40 rounded-lg p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-sm">📧</span>
                                                <h4 className="text-white font-medium text-sm">{update.attorney}</h4>
                                            </div>
                                            <p className="text-gray-300 text-sm mb-2">{update.message}</p>
                                            <p className="text-gray-500 text-xs">Updated: {update.date}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Message Input */}
                                <div className="flex items-center gap-2 bg-gray-700/40 rounded-lg px-4 py-3">
                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                        placeholder="Write Message..."
                                        className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-400"
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        className="text-amber-500 hover:text-amber-400 transition-colors"
                                    >
                                        <FaPaperPlane />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full Width Sections Below */}
                    <div className="space-y-6">
                        {/* Documents Section - Full Width */}
                        <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                                <h3 className="text-xl font-semibold text-white">Documents</h3>
                                <div className="flex items-center gap-3">
                                    <select className="px-4 py-2 bg-gray-700/60 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500">
                                        <option>Document Type</option>
                                        <option>Identity Documents</option>
                                        <option>Financial Documents</option>
                                        <option>Property Documents</option>
                                    </select>
                                    <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg font-medium text-sm transition-colors whitespace-nowrap">
                                        Request Upload
                                    </button>
                                </div>
                            </div>

                            {/* Tabs */}
                            <div className="flex gap-4 mb-6 border-b border-gray-700">
                                <button
                                    onClick={() => setActiveTab('buyer')}
                                    className={`pb-3 px-2 font-medium transition-colors ${activeTab === 'buyer'
                                        ? 'text-amber-500 border-b-2 border-amber-500'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    Buyer Documents
                                </button>
                                <button
                                    onClick={() => setActiveTab('seller')}
                                    className={`pb-3 px-2 font-medium transition-colors ${activeTab === 'seller'
                                        ? 'text-amber-500 border-b-2 border-amber-500'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    Seller Documents
                                </button>
                            </div>

                            {/* Document List */}
                            <div className="space-y-3">
                                {(activeTab === 'buyer' ? buyerDocuments : sellerDocuments).map((doc) => (
                                    <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-700/40 rounded-lg hover:bg-gray-700/60 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                                                <span className="text-blue-400 text-sm">📄</span>
                                            </div>
                                            <span className="text-white">{doc.name}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className={`text-sm ${doc.color}`}>
                                                {doc.status === 'verified-lightstone' && 'Verified from lightstone'}
                                                {doc.status === 'verified' && 'Verified'}
                                                {doc.status === 'mark-verified' && 'Mark as Verified'}
                                            </span>
                                            <button className="text-gray-400 hover:text-white">
                                                <FaEllipsisV />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Payment Tracking - Full Width */}
                        <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
                            <h3 className="text-xl font-semibold text-white mb-6">Payment Tracking</h3>
                            <div className="space-y-6">
                                {paymentTracking.map((item, index) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${item.status === 'completed' ? 'bg-green-500' : 'bg-gray-600'
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

                                        <div className="flex-1 pb-8">
                                            <h4 className={`font-medium ${item.status === 'completed' ? 'text-white' : 'text-gray-400'
                                                }`}>{item.title}</h4>
                                            {item.date && (
                                                <p className="text-gray-500 text-xs">{item.date}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {!otpUploaded ? (
                                <button
                                    onClick={handleMarkConfirm}
                                    className="w-full mt-4 px-6 py-3 border border-amber-500 text-amber-500 rounded-lg font-semibold hover:bg-amber-500/10 transition-colors"
                                >
                                    Mark as Confirm
                                </button>
                            ) : (
                                <button
                                    onClick={handleCloseCaseClick}
                                    className="w-full mt-4 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black rounded-lg font-semibold transition-colors"
                                >
                                    Mark Case as Closed
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
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

export default AttorneyDashboard;

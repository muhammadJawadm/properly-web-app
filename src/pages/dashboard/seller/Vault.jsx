import { useState, useEffect } from 'react';
import { FaEllipsisV, FaFile } from 'react-icons/fa';
import SellerSidebar, { subscribeSidebarState } from '../../../components/Seller/SellerSidebar';
import Header from '../../../components/common/Header';
import NotificationPanel from '../../../components/common/NotificationPanel';
import { useSidebarMargin } from '../../../hooks/useResponsive';

const Vault = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const sidebarMargin = useSidebarMargin(sidebarCollapsed);
    const [openMenuId, setOpenMenuId] = useState(null);
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    // Mock data for properties and their documents
    const properties = [
        {
            id: 1,
            name: "12 Maple Street – Modern 3-Bedroom Home",
            fileCount: 12,
            documents: [
                { id: 1, name: "Final OTP" },
                { id: 2, name: "Compliance certificates" },
                { id: 3, name: "Settlement records" },
                { id: 4, name: "Title deed" },
                { id: 5, name: "Registration documents" },
                { id: 6, name: "Commission Receipt" },
                { id: 7, name: "Attorney instructions" },
                { id: 8, name: "Counter-Offer" },
                { id: 9, name: "Final OTP" },
                { id: 10, name: "ID Verification" },
                { id: 11, name: "Proof of residence" },
                { id: 12, name: "Compliance agreement" }
            ]
        },
        {
            id: 2,
            name: "12 Maple Street – Modern 3-Bedroom Home",
            fileCount: 12,
            documents: [
                { id: 13, name: "Proof of residence" },
                { id: 14, name: "ID Verification" },
                { id: 15, name: "Compliance agreement" },
                { id: 16, name: "Counter-Offer" },
                { id: 17, name: "Proof of Payment" },
                { id: 18, name: "Commission Receipt" },
                { id: 19, name: "Occupancy Certificate" },
                { id: 20, name: "Proof of Payment" },
                { id: 21, name: "Final Closing Statement" },
                { id: 22, name: "Settlement Statement" },
                { id: 23, name: "Final Closing Statement" },
                { id: 24, name: "Deposit Confirmation" }
            ]
        }
    ];

    const toggleMenu = (docId) => {
        setOpenMenuId(openMenuId === docId ? null : docId);
    };

    const handleView = (docName) => {
        console.log(`Viewing: ${docName}`);
        setOpenMenuId(null);
        // Add view functionality here
    };

    const handleDownload = (docName) => {
        console.log(`Downloading: ${docName}`);
        setOpenMenuId(null);
        // Add download functionality here
    };

    const handleDelete = (docName) => {
        console.log(`Deleting: ${docName}`);
        setOpenMenuId(null);
        // Add delete functionality here
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            if (openMenuId !== null) {
                setOpenMenuId(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [openMenuId]);

    return (
        <>
            {/* Sidebar */}
            <SellerSidebar />

            {/* Main Content */}
            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: sidebarMargin }}
            >
                <Header title="Document Vault" showNotifications={true} onNotificationClick={() => setShowNotifications(!showNotifications)} />

                <div className="p-4 sm:p-6 md:p-8 bg-black">
                    <div className='bg-gray-800/60 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8'>
                        {/* Header Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                Lifetime Document Vault
                            </h2>
                            <p className="text-gray-400 text-sm sm:text-base">
                                Keep all your legal and official documents safe in one place.
                            </p>
                        </div>

                        {/* Properties Sections */}
                        {properties.map((property) => {
                            const hasOpenMenu = property.documents.some(doc => doc.id === openMenuId);
                            return (
                                <div key={property.id} className={`mb-8 bg-gray-800/60 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 relative ${hasOpenMenu ? 'z-40' : 'z-0'}`}>
                                    {/* Property Header */}
                                    <div className="mb-6">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">
                                            {property.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {property.fileCount} Files
                                        </p>
                                    </div>

                                    {/* Documents Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                        {property.documents.map((doc) => (
                                            <div
                                                key={doc.id}
                                                className={`bg-gray-700/40 backdrop-blur-lg border border-gray-600 rounded-xl p-4 sm:p-5 hover:bg-gray-700/60 transition-all duration-200 group relative ${openMenuId === doc.id ? 'z-50' : 'z-0'}`}
                                            >
                                                <div className="flex items-start justify-between gap-3">
                                                    {/* File Icon and Name */}
                                                    <div className="flex items-start gap-3 flex-1 min-w-0">
                                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                                            <FaFile className="text-gray-300 text-lg sm:text-xl" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="text-white font-medium text-sm sm:text-base">
                                                                {doc.name}
                                                            </h4>
                                                        </div>
                                                    </div>

                                                    {/* Three Dots Menu */}
                                                    <div className="relative flex-shrink-0">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                toggleMenu(doc.id);
                                                            }}
                                                            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600 transition-colors"
                                                        >
                                                            <FaEllipsisV className="text-sm" />
                                                        </button>

                                                        {/* Dropdown Menu */}
                                                        {openMenuId === doc.id && (
                                                            <div
                                                                className="absolute right-0 top-10 w-36 bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-10 overflow-hidden"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                <button
                                                                    onClick={() => handleView(doc.name)}
                                                                    className="w-full px-4 py-3 text-left text-white text-sm hover:bg-gray-700 transition-colors"
                                                                >
                                                                    View
                                                                </button>
                                                                <button
                                                                    onClick={() => handleDownload(doc.name)}
                                                                    className="w-full px-4 py-3 text-left text-white text-sm hover:bg-gray-700 transition-colors border-t border-gray-600"
                                                                >
                                                                    Download
                                                                </button>
                                                                <button
                                                                    onClick={() => handleDelete(doc.name)}
                                                                    className="w-full px-4 py-3 text-left text-red-500 text-sm hover:bg-gray-700 transition-colors border-t border-gray-600"
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
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

export default Vault;

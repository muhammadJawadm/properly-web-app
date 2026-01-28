import { useState, useEffect } from 'react';
import { FaUser, FaCheckCircle, FaFolder, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import BuyerSidebar, { subscribeSidebarState } from '../../../components/Buyer/BuyerSidebar';
import Header from '../../../components/common/Header';
import { useSidebarMargin } from '../../../hooks/useResponsive';
import EditProfileModal from '../../../components/Buyer/profile/EditProfileModal';
import ChangePasswordModal from '../../../components/Buyer/profile/ChangePasswordModal';
import OTPVerificationModal from '../../../components/Buyer/profile/OTPVerificationModal';
import BuyerDocumentsModal from '../../../components/Buyer/profile/BuyerDocumentsModal';
import LogoutModal from '../../../components/Buyer/profile/LogoutModal';

const BuyerProfile = () => {
    const navigate = useNavigate();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const sidebarMargin = useSidebarMargin(sidebarCollapsed);

    // Modal states
    const [activeModal, setActiveModal] = useState(null);
    const [showOTPModal, setShowOTPModal] = useState(false);
    const [showBuyerDocsModal, setShowBuyerDocsModal] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    // User data (would come from API/context in production)
    const [userData] = useState({
        name: 'Thomas Mark',
        email: 'ThomasMark123@gmail.com',
        phone: '+1 456 546421',
        buyerType: 'Individual Buyer',
        profileImage: 'https://via.placeholder.com/150'
    });

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    const menuItems = [
        {
            id: 'editProfile',
            icon: FaUser,
            label: 'Edit Profile',
            onClick: () => setActiveModal('editProfile')
        },
        {
            id: 'buyerDocuments',
            icon: FaFolder,
            label: 'Buyer type Documents',
            onClick: () => setShowBuyerDocsModal(true)
        },
        {
            id: 'changePassword',
            icon: FaLock,
            label: 'Change Password',
            onClick: () => setActiveModal('changePassword')
        }
    ];

    const handleEditProfileVerify = (formData) => {
        console.log('Edit Profile Data:', formData);
        setActiveModal(null);
        setShowOTPModal(true);
    };

    const handlePasswordChange = (passwordData) => {
        console.log('Password Change Data:', passwordData);
        setActiveModal(null);
        alert('Password changed successfully!');
    };

    const handleOTPContinue = (otpValue) => {
        console.log('OTP Entered:', otpValue);
        setShowOTPModal(false);
        alert('OTP verified successfully!');
    };

    const handleLogout = () => {
        setShowLogoutModal(true);
    };

    const confirmLogout = () => {
        setShowLogoutModal(false);
        navigate('/');
    };

    return (
        <>
            {/* Sidebar */}
            <BuyerSidebar />

            {/* Main Content */}
            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: sidebarMargin }}
            >
                <Header title="Profile" showNotifications={false} />

                <div className="p-4 sm:p-6 md:p-8">
                    {/* Golden Gradient Banner with Profile */}
                    <div className="relative bg-gradient-to-br from-[#C28B33] via-[#8B6424] to-[#5d431a] rounded-2xl overflow-hidden mb-6">
                        {/* Wavy Pattern Overlay */}
                        <div className="absolute inset-0 opacity-30">
                            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
                                <path d="M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z" fill="rgba(0,0,0,0.2)" />
                                <path d="M0,250 Q300,150 600,250 T1200,250 L1200,400 L0,400 Z" fill="rgba(0,0,0,0.1)" />
                            </svg>
                        </div>

                        {/* Logout Button */}
                        <div className="absolute top-4 right-4 z-20">
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white rounded-full text-red-500 font-semibold text-sm transition-colors shadow-lg"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 4.414l-4.293 4.293a1 1 0 01-1.414 0L4 7.414 5.414 6l3.293 3.293L13.586 6 14 7.414z" clipRule="evenodd" />
                                </svg>
                                Log Out
                            </button>
                        </div>

                        {/* Profile Content */}
                        <div className="relative z-10 p-6 sm:p-8">
                            {/* Profile Picture with Badge */}
                            <div className="flex justify-start mb-8">
                                <div className="relative">
                                    <img
                                        src={userData.profileImage}
                                        alt={userData.name}
                                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white/30"
                                    />
                                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center border-4 border-white">
                                        <span className="text-white text-lg font-bold">✓</span>
                                    </div>
                                </div>
                            </div>

                            {/* User Details Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                                <div>
                                    <p className="text-white/70 text-xs sm:text-sm mb-1">Name</p>
                                    <p className="text-white font-semibold text-sm sm:text-base">{userData.name}</p>
                                </div>
                                <div>
                                    <p className="text-white/70 text-xs sm:text-sm mb-1">Email address</p>
                                    <p className="text-white font-semibold text-sm sm:text-base break-all">{userData.email}</p>
                                </div>
                                <div>
                                    <p className="text-white/70 text-xs sm:text-sm mb-1">Phone number</p>
                                    <p className="text-white font-semibold text-sm sm:text-base">{userData.phone}</p>
                                </div>
                                <div>
                                    <p className="text-white/70 text-xs sm:text-sm mb-1">Buyer Type</p>
                                    <p className="text-white font-semibold text-sm sm:text-base">{userData.buyerType}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* My Account Section */}
                    <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8">
                        <h2 className="text-white text-lg sm:text-xl font-semibold mb-6">My Account</h2>

                        {/* Menu Items */}
                        <div className="space-y-3">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={item.onClick}
                                        className="w-full flex items-center justify-between px-4 sm:px-6 py-4 bg-gray-700/30 hover:bg-gray-700/50 rounded-xl transition-colors group"
                                    >
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className="w-10 h-10 bg-gray-600/50 rounded-lg flex items-center justify-center">
                                                <Icon className="text-white" size={18} />
                                            </div>
                                            <span className="text-white font-medium text-sm sm:text-base">{item.label}</span>
                                        </div>
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals - Reusing Seller Modals */}
            <EditProfileModal
                isOpen={activeModal === 'editProfile'}
                onClose={() => setActiveModal(null)}
                onVerify={handleEditProfileVerify}
            />

            <ChangePasswordModal
                isOpen={activeModal === 'changePassword'}
                onClose={() => setActiveModal(null)}
                onSubmit={handlePasswordChange}
            />

            <BuyerDocumentsModal
                isOpen={showBuyerDocsModal}
                onClose={() => setShowBuyerDocsModal(false)}
            />

            <OTPVerificationModal
                isOpen={showOTPModal}
                onClose={() => setShowOTPModal(false)}
                onContinue={handleOTPContinue}
            />

            <LogoutModal
                isOpen={showLogoutModal}
                onClose={() => setShowLogoutModal(false)}
                onConfirm={confirmLogout}
            />
        </>
    );
};

export default BuyerProfile;

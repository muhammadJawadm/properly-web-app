import { useState, useEffect } from 'react';
import { FaUser, FaCheckCircle, FaFolder, FaLock, FaLink, FaChevronRight, FaPowerOff } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SellerSidebar, { subscribeSidebarState } from '../../../components/Seller/SellerSidebar';
import Header from '../../../components/common/Header';
import { useSidebarMargin } from '../../../hooks/useResponsive';
import EditProfileModal from '../../../components/Seller/profile/EditProfileModal';
import ChangePasswordModal from '../../../components/Seller/profile/ChangePasswordModal';
import OTPVerificationModal from '../../../components/Seller/profile/OTPVerificationModal';
import SocialMediaLinksModal from '../../../components/Seller/profile/SocialMediaLinksModal';
import SellerDocumentsModal from '../../../components/Seller/profile/SellerDocumentsModal';
import KycDocumentsModal from '../../../components/Seller/profile/KycDocumentsModal';
import LogoutModal from '../../../components/Seller/profile/LogoutModal';

const SellerProfile = () => {
    const navigate = useNavigate();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const sidebarMargin = useSidebarMargin(sidebarCollapsed);

    // Modal states
    const [activeModal, setActiveModal] = useState(null);
    const [showOTPModal, setShowOTPModal] = useState(false);
    const [showKycModal, setShowKycModal] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    // User data (would come from API/context in production)
    const [userData] = useState({
        name: 'Daniel Mthembu',
        email: 'Danielmthembu123@gmail.com',
        phone: '+ 456 546421',
        sellerType: 'Individual seller',
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
            id: 'kycVerification',
            icon: FaCheckCircle,
            label: 'KYC Verification',
            onClick: () => setShowKycModal(true)
        },
        {
            id: 'sellerDocuments',
            icon: FaFolder,
            label: 'Seller Type Documents',
            onClick: () => setActiveModal('sellerDocuments')
        },
        {
            id: 'changePassword',
            icon: FaLock,
            label: 'Change Password',
            onClick: () => setActiveModal('changePassword')
        },
        {
            id: 'socialMedia',
            icon: FaLink,
            label: 'Social Media Links',
            onClick: () => setActiveModal('socialMedia')
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
        // TODO: Add API call to change password
        alert('Password changed successfully!');
    };

    const handleOTPContinue = (otpValue) => {
        console.log('OTP Entered:', otpValue);
        setShowOTPModal(false);
        // TODO: Add API call to verify OTP
        alert('OTP verified successfully!');
    };

    const handleSocialMediaSave = (links) => {
        console.log('Social Media Links:', links);
        setActiveModal(null);
        // TODO: Add API call to save social media links
        alert('Social media links saved successfully!');
    };

    const handleLogout = () => {
        setShowLogoutModal(true);
    };

    const confirmLogout = () => {
        setShowLogoutModal(false);
        // TODO: Add proper logout logic (clear auth tokens, etc.)
        navigate('/');
    };

    return (
        <>
            {/* Sidebar */}
            <SellerSidebar />

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
                                <FaPowerOff size={16} />
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
                                    <p className="text-white/70 text-xs sm:text-sm mb-1">Seller Type</p>
                                    <p className="text-white font-semibold text-sm sm:text-base">{userData.sellerType}</p>
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
                                        <FaChevronRight className="text-gray-400 group-hover:text-white transition-colors" size={16} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
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

            <SocialMediaLinksModal
                isOpen={activeModal === 'socialMedia'}
                onClose={() => setActiveModal(null)}
                onSave={handleSocialMediaSave}
            />

            <SellerDocumentsModal
                isOpen={activeModal === 'sellerDocuments'}
                onClose={() => setActiveModal(null)}
            />

            <KycDocumentsModal
                isOpen={showKycModal}
                onClose={() => setShowKycModal(false)}
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

export default SellerProfile;

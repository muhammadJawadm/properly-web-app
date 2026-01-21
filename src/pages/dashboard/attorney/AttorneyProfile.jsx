import { useState, useEffect } from 'react';
import { FaUser, FaCertificate, FaPowerOff } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AttorneySidebar, { subscribeSidebarState } from '../../../components/Attorney/AttorneySidebar';
import Header from '../../../components/common/Header';
import { useSidebarMargin } from '../../../hooks/useResponsive';
import AttorneyEditProfileModal from '../../../components/Attorney/profile/AttorneyEditProfileModal';
import VerificationSuccessModal from '../../../components/Attorney/profile/VerificationSuccessModal';
import LogoutModal from '../../../components/Seller/profile/LogoutModal';

const AttorneyProfile = () => {
    const navigate = useNavigate();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const sidebarMargin = useSidebarMargin(sidebarCollapsed);

    // Modal states
    const [activeModal, setActiveModal] = useState(null);
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    // Attorney data (would come from API/context in production)
    const [attorneyData] = useState({
        fullName: 'Oliver Noah',
        lawFirmName: 'Manchester Law firm',
        emergencyContact: '+1 456 546421',
        firmRegistrationNumber: '546421',
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
            id: 'license',
            icon: FaCertificate,
            label: 'license or certificate',
            onClick: () => alert('License/Certificate management coming soon!')
        },
        {
            id: 'logout',
            icon: FaPowerOff,
            label: 'Log Out',
            onClick: () => setShowLogoutModal(true),
            isLogout: true
        }
    ];

    const handleEditProfileVerify = (formData) => {
        console.log('Edit Profile Data:', formData);
        setActiveModal(null);
        setShowVerificationModal(true);
    };

    const handleVerificationContinue = () => {
        setShowVerificationModal(false);
        alert('Profile updated successfully!');
    };

    const confirmLogout = () => {
        setShowLogoutModal(false);
        navigate('/');
    };

    return (
        <>
            {/* Sidebar */}
            <AttorneySidebar />

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

                        {/* Profile Content */}
                        <div className="relative z-10 p-6 sm:p-8">
                            {/* Profile Picture with Badge */}
                            <div className="flex justify-start mb-8">
                                <div className="relative">
                                    <img
                                        src={attorneyData.profileImage}
                                        alt={attorneyData.fullName}
                                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white/30"
                                    />
                                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center border-4 border-white">
                                        <span className="text-white text-lg font-bold">✓</span>
                                    </div>
                                </div>
                            </div>

                            {/* Attorney Details Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                                <div>
                                    <p className="text-white/70 text-xs sm:text-sm mb-1">Full Name</p>
                                    <p className="text-white font-semibold text-sm sm:text-base">{attorneyData.fullName}</p>
                                </div>
                                <div>
                                    <p className="text-white/70 text-xs sm:text-sm mb-1">Law firm name</p>
                                    <p className="text-white font-semibold text-sm sm:text-base">{attorneyData.lawFirmName}</p>
                                </div>
                                <div>
                                    <p className="text-white/70 text-xs sm:text-sm mb-1">Emergency contact number</p>
                                    <p className="text-white font-semibold text-sm sm:text-base">{attorneyData.emergencyContact}</p>
                                </div>
                                <div>
                                    <p className="text-white/70 text-xs sm:text-sm mb-1">Firm registration number</p>
                                    <p className="text-white font-semibold text-sm sm:text-base">{attorneyData.firmRegistrationNumber}</p>
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
                                                <Icon className={item.isLogout ? "text-red-500" : "text-white"} size={18} />
                                            </div>
                                            <span className={`font-medium text-sm sm:text-base ${item.isLogout ? "text-red-500" : "text-white"}`}>
                                                {item.label}
                                            </span>
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

            {/* Modals */}
            <AttorneyEditProfileModal
                isOpen={activeModal === 'editProfile'}
                onClose={() => setActiveModal(null)}
                onVerify={handleEditProfileVerify}
            />

            <VerificationSuccessModal
                isOpen={showVerificationModal}
                onClose={() => setShowVerificationModal(false)}
                onContinue={handleVerificationContinue}
            />

            <LogoutModal
                isOpen={showLogoutModal}
                onClose={() => setShowLogoutModal(false)}
                onConfirm={confirmLogout}
            />
        </>
    );
};

export default AttorneyProfile;

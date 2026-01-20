import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUpload } from 'react-icons/fa';
import SplashLogo from '../../../assets/Splashlogo2.png';
import VerificationSuccessModal from '../../../components/Attorney/VerificationSuccessModal';
import SplashBg from '../../../assets/SplashBg.png';
import { Link } from 'react-router-dom';

const AttorneyAccess = () => {
    const navigate = useNavigate();
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        lawFirmName: '',
        firmRegistration: '',
        emergencyContact: '',
        crn: '',
        rememberMe: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileUpload = () => {
        console.log('Opening file upload...');
        // Add file upload functionality
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Show success modal
        setShowSuccessModal(true);
    };

    const handleContinue = () => {
        setShowSuccessModal(false);
        navigate('/attorney/dashboard');
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
            {/* Background Blur Effect */}
            <div className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${SplashBg})` }}>
            </div>
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="absolute top-6 left-6 w-12 h-12 rounded-full bg-gray-800/60 backdrop-blur-lg flex items-center justify-center text-white hover:bg-gray-700/60 transition-colors z-10"
            >
                <FaArrowLeft />
            </button>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
                {/* Left Side - Logo and Info */}
                <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
                    <img
                        src={SplashLogo}
                        alt="Properly Real Estate Logo"
                        className="w-96 h-auto object-contain"
                    />
                </div>

                {/* Right Side - Form Card */}
                <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8">
                    <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-2xl sm:rounded-3xl px-6 py-8 sm:px-10 md:px-12 sm:py-10 shadow-2xl w-full max-w-lg">
                        {/* Title */}
                        <div className="mb-6 sm:mb-8">
                            <h1 className="text-2xl sm:text-2xl font-bold text-white mb-2 tracking-wide">
                                Attorney Access Portal
                            </h1>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Full Name */}
                            <div>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Full name"
                                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                                    required
                                />
                            </div>

                            {/* Law Firm Name */}
                            <div>
                                <input
                                    type="text"
                                    name="lawFirmName"
                                    value={formData.lawFirmName}
                                    onChange={handleInputChange}
                                    placeholder="Law firm name"
                                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                                    required
                                />
                            </div>

                            {/* Firm Registration Number */}
                            <div>
                                <input
                                    type="text"
                                    name="firmRegistration"
                                    value={formData.firmRegistration}
                                    onChange={handleInputChange}
                                    placeholder="Firm registrations(Optional)"
                                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                                />
                            </div>

                            {/* Emergency Contact Number */}
                            <div>
                                <input
                                    type="tel"
                                    name="emergencyContact"
                                    value={formData.emergencyContact}
                                    onChange={handleInputChange}
                                    placeholder="Emergency contact number"
                                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                                    required
                                />
                            </div>

                            {/* Upload License or Certificate */}
                            <div>
                                <button
                                    type="button"
                                    onClick={handleFileUpload}
                                    className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-400 hover:border-amber-500 hover:text-amber-500 transition-colors flex items-center justify-between"
                                >
                                    <span>Upload license or certificate</span>
                                    <FaUpload />
                                </button>
                            </div>

                            {/* Client Reference Number (CRN) */}
                            <div>
                                <input
                                    type="text"
                                    name="crn"
                                    value={formData.crn}
                                    onChange={handleInputChange}
                                    placeholder="e.g. CRN-2025-ABGRR5698"
                                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors text-center"
                                    required
                                />
                                <p className="text-gray-400 text-xs mt-2 text-center">
                                    Client Reference Number (CRN)
                                </p>
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center gap-2 ">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 border-2 border-amber-500 rounded checked:bg-amber-500 focus:ring-0 cursor-pointer"
                                />
                                <label htmlFor="rememberMe" className="text-gray-400 text-sm cursor-pointer">
                                    Remember me
                                </label>
                            </div>

                            {/* Continue Button */}
                            <div className="flex items-center justify-center block mt-6 sm:mt-8">
                                <button
                                    type="submit"
                                    className="w-2/3 py-3 sm:py-4 px-6 sm:px-8 rounded-full font-semibold text-black text-sm sm:text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                                    style={{ backgroundColor: '#EDBF6D' }}
                                >
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Verification Success Modal */}
            <VerificationSuccessModal
                isOpen={showSuccessModal}
                onContinue={handleContinue}
            />
        </div>
    );
};

export default AttorneyAccess;

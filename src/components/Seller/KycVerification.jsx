import { useState } from "react";
import { FaQuestionCircle, FaTimes, FaUpload, FaCamera, FaFileAlt } from "react-icons/fa";
import SplashLogo from "../../assets/Splashlogo2.png";
import { Link } from "react-router-dom";

const KycVerification = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [showHelp, setShowHelp] = useState(false);
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [showResultsModal, setShowResultsModal] = useState(false);
    const [showUploadDocsModal, setShowUpload, DocsModal] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState("pending"); // pending, partial, notConfirmed, success
    const [uploadedFiles, setUploadedFiles] = useState({
        idFront: null,
        idBack: null,
        selfie: null,
        proofOfResidence: null,
        powerOfAttorney: null,
        executorLetter: null
    });

    const steps = [
        { number: 1, label: "Upload ID", icon: "📄" },
        { number: 2, label: "Upload photo", icon: "📸" },
        { number: 3, label: "Proof of Residence", icon: "📋" }
    ];

    const handleFileUpload = (field, file) => {
        setUploadedFiles(prev => ({
            ...prev,
            [field]: file
        }));
    };

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleStartVerification = () => {
        setCurrentStep(1);
    };

    const handleSubmitForVerification = () => {
        setShowVerificationModal(true);

        // Simulate verification process
        setTimeout(() => {
            setShowVerificationModal(false);
            // Randomly show different results for demo (you can control this based on actual logic)
            const randomResult = Math.random();
            if (randomResult < 0.33) {
                setVerificationStatus("partial");
            } else if (randomResult < 0.66) {
                setVerificationStatus("notConfirmed");
            } else {
                setVerificationStatus("success");
            }
            setShowResultsModal(true);
        }, 3000);
    };

    const handleUploadDocuments = () => {
        setShowResultsModal(false);
        setShowUploadDocsModal(true);
    };

    const handleContactSupport = () => {
        // Handle contact support logic
        console.log("Contacting support...");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-6 bg-black bg-opacity-50">
                {/* Spacer to balance the button on the right */}
                <div className="w-6"></div>

                <h1 className="text-white text-sm sm:text-lg md:text-xl font-semibold text-center flex-1">Seller KYC & Ownership Verification</h1>

                <button
                    onClick={() => setShowHelp(!showHelp)}
                    className="text-white hover:text-amber-500 transition-colors"
                >
                    <FaQuestionCircle size={20} className="sm:w-6 sm:h-6" />
                </button>

            </div>
            <div className="w-full h-2 bg-gray-800">
                <div
                    className="h-full transition-all duration-500"
                    style={{
                        width: `${(currentStep / 3) * 100}%`,
                        backgroundColor: '#EDBF6D'
                    }}
                />
            </div>
            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center p-4 overflow-y-auto">
                {/* Step 0: Welcome/Overview */}
                {currentStep === 0 && (
                    <div className="w-full max-w-4xl">
                        <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
                            {/* Logo */}
                            <div className="flex justify-center mb-6">
                                <img src={SplashLogo} alt="Properly Logo" className="w-40 sm:w-52 md:w-64 h-auto" />
                            </div>

                            {/* Steps Overview */}
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8">
                                {steps.map((step, index) => (
                                    <div key={step.number} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                                        <div className="flex flex-col items-center">
                                            {/* Icon */}
                                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl bg-gray-700 border-2 border-amber-500 flex items-center justify-center mb-3 sm:mb-4">
                                                <span className="text-3xl sm:text-4xl">{step.icon}</span>
                                            </div>
                                            {/* Step Info */}
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs sm:text-sm">
                                                    {step.number}
                                                </span>
                                                <span className="text-xs sm:text-sm">{step.label}</span>
                                            </div>
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className="hidden sm:block w-24 md:w-40 h-0.5 bg-gray-700 mt-16 md:mt-28" style={{ borderStyle: 'dashed' }} />
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Start Button */}

                        </div>
                        <div className="flex justify-center mt-6 sm:mt-8">
                            <button
                                onClick={handleStartVerification}
                                className="px-10 sm:px-12 md:px-16 py-3 sm:py-4 text-sm sm:text-base rounded-full font-semibold text-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                style={{ backgroundColor: '#EDBF6D' }}
                            >
                                Start KYC Verification
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 1: Upload ID */}
                {currentStep === 1 && (
                    <div className="w-3/4">
                        {/* Steps Progress */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16">
                            {steps.map((step, index) => (
                                <div key={step.number} className="flex items-center gap-8">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step.number === 1
                                                ? 'bg-amber-500 text-black'
                                                : 'bg-gray-700 text-gray-400'
                                                }`}
                                        >
                                            {step.number}
                                        </span>
                                        <span className={step.number === 1 ? 'text-amber-500' : 'text-gray-400'}>
                                            {step.label}
                                        </span>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className=" lg:w-32 sm:w-0 h-0.5 bg-gray-700" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-2xl sm:rounded-3xl px-6 sm:px-12 md:px-16 py-10 sm:py-16 shadow-2xl">
                            <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 md:gap-24">
                                {/* Left: Illustration - Hidden on mobile */}
                                <div className="hidden lg:flex lg:w-1/2 justify-center">
                                    <div className="w-64 h-64 rounded-full bg-gray-700 flex items-center justify-center">
                                        <div className="w-48 h-64 bg-gray-600 rounded-2xl flex items-center justify-center relative">
                                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-500 rounded-full" />
                                            <div className="flex gap-4">
                                                <div className="w-20 h-28 bg-white rounded-lg flex items-center justify-center">
                                                    <span className="text-4xl">👤</span>
                                                </div>
                                                <div className="w-20 h-28 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#EDBF6D' }}>
                                                    <span className="text-4xl">✈️</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Upload Form */}
                                <div className="w-full lg:w-1/2">
                                    <h2 className="text-xl sm:text-2xl text-center font-bold text-white mb-2">Upload Government ID.</h2>
                                    <p className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8 text-center">National Identity Card or Passport</p>

                                    <div className="space-y-4">
                                        {/* Upload Front */}
                                        <label className="flex items-center justify-between px-6 py-4 bg-gray-700 bg-opacity-50 rounded-xl cursor-pointer hover:bg-opacity-70 transition-colors">
                                            <span className="text-white">Upload Front</span>
                                            <FaUpload className="text-amber-500" />
                                            <input
                                                type="file"
                                                className="hidden"
                                                onChange={(e) => handleFileUpload('idFront', e.target.files[0])}
                                                accept="image/*"
                                            />
                                        </label>

                                        {/* Upload Back */}
                                        <label className="flex items-center justify-between px-6 py-4 bg-gray-700 bg-opacity-50 rounded-xl cursor-pointer hover:bg-opacity-70 transition-colors">
                                            <span className="text-white">Upload Back</span>
                                            <FaUpload className="text-amber-500" />
                                            <input
                                                type="file"
                                                className="hidden"
                                                onChange={(e) => handleFileUpload('idBack', e.target.files[0])}
                                                accept="image/*"
                                            />
                                        </label>
                                    </div>

                                    {/* Next Button */}
                                    <div className="flex justify-center mt-12 sm:mt-16">
                                        <button
                                            onClick={handleNext}
                                            className="w-full sm:w-2/3 px-6 sm:px-8 py-3 text-sm sm:text-base rounded-full font-semibold text-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                            style={{ backgroundColor: '#EDBF6D' }}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2: Upload Photo/Selfie */}
                {currentStep === 2 && (
                    <div className="w-3/4">
                        {/* Steps Progress */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16">
                            {steps.map((step, index) => (
                                <div key={step.number} className="flex items-center gap-8">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step.number === 2
                                                ? 'bg-amber-500 text-black'
                                                : 'bg-gray-700 text-gray-400'
                                                }`}
                                        >
                                            {step.number}
                                        </span>
                                        <span className={step.number === 2 ? 'text-amber-500' : 'text-gray-400'}>
                                            {step.label}
                                        </span>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="lg:w-32 sm:w-0 h-0.5 bg-gray-700" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-3xl p-16 shadow-2xl">
                            <div className="flex items-center gap-12">
                                {/* Left: Illustration - Hidden on mobile */}
                                <div className="hidden lg:flex lg:w-1/2 justify-center">
                                    <div className="w-64 h-64 rounded-full bg-gray-700 flex items-center justify-center">
                                        <div className="w-48 h-64 bg-gray-600 rounded-2xl flex flex-col items-center justify-center relative">
                                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-500 rounded-full" />
                                            <span className="text-6xl mb-4">🧑</span>
                                            <div className="absolute bottom-8">
                                                <FaCamera className="text-amber-500" size={32} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Upload Form */}
                                <div className="w-full lg:w-1/2">
                                    <h2 className="text-xl sm:text-2xl text-center font-bold text-white mb-12 sm:mb-16 md:mb-24">Upload Photo</h2>

                                    <div className="space-y-4">
                                        {/* Upload Photo */}
                                        <label className="flex items-center justify-between px-6 py-4 bg-gray-700 bg-opacity-50 rounded-xl cursor-pointer hover:bg-opacity-70 transition-colors">
                                            <span className="text-white">Upload Photo</span>
                                            <FaUpload className="text-amber-500" />
                                            <input
                                                type="file"
                                                className="hidden"
                                                onChange={(e) => handleFileUpload('selfie', e.target.files[0])}
                                                accept="image/*"
                                            />
                                        </label>
                                    </div>

                                    {/* Next Button */}
                                    <div className="flex justify-center mt-12 sm:mt-16 md:mt-24">
                                        <button
                                            onClick={handleNext}
                                            className="w-full sm:w-2/3 px-6 sm:px-8 py-3 text-sm sm:text-base rounded-full font-semibold text-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                            style={{ backgroundColor: '#EDBF6D' }}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Proof of Residence */}
                {currentStep === 3 && (
                    <div className="w-3/4">
                        {/* Steps Progress */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16">
                            {steps.map((step, index) => (
                                <div key={step.number} className="flex items-center gap-8">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step.number === 3
                                                ? 'bg-amber-500 text-black'
                                                : 'bg-gray-700 text-gray-400'
                                                }`}
                                        >
                                            {step.number}
                                        </span>
                                        <span className={step.number === 3 ? 'text-amber-500' : 'text-gray-400'}>
                                            {step.label}
                                        </span>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="lg:w-32 sm:w-0 h-0.5 bg-gray-700" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-3xl p-16 shadow-2xl">
                            <div className="flex items-center gap-12">
                                {/* Left: Illustration - Hidden on mobile */}
                                <div className="hidden lg:flex lg:w-1/2 justify-center">
                                    <div className="w-64 h-64 rounded-full bg-gray-700 flex items-center justify-center">
                                        <div className="w-48 h-64 bg-gray-600 rounded-2xl flex items-center justify-center relative">
                                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-500 rounded-full" />
                                            <FaFileAlt className="text-amber-500" size={64} />
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Upload Form */}
                                <div className="w-full lg:w-1/2">
                                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">Proof of Residence</h2>
                                    <p className="text-gray-400 text-xs sm:text-sm mb-10 sm:mb-12 md:mb-16 text-center">Upload Utility Bill or Official document</p>

                                    <div className="space-y-4">
                                        {/* Upload Photo */}
                                        <label className="flex items-center justify-between px-6 py-4 bg-gray-700 bg-opacity-50 rounded-xl cursor-pointer hover:bg-opacity-70 transition-colors">
                                            <span className="text-white">Upload Photo</span>
                                            <FaUpload className="text-amber-500" />
                                            <input
                                                type="file"
                                                className="hidden"
                                                onChange={(e) => handleFileUpload('proofOfResidence', e.target.files[0])}
                                                accept="image/*"
                                            />
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex justify-center mt-12 sm:mt-16 md:mt-24">
                                        <button
                                            onClick={handleSubmitForVerification}
                                            className="w-full sm:w-2/3 mt-4 sm:mt-6 md:mt-8 px-6 sm:px-8 py-3 text-sm sm:text-base rounded-full font-semibold text-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                            style={{ backgroundColor: '#EDBF6D' }}
                                        >
                                            <Link to="/seller/dashboard">
                                                Submit for Verification
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Verification in Progress Modal */}
            {showVerificationModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-800 rounded-2xl p-8 sm:p-12 md:p-24 max-w-xl w-full shadow-2xl relative">
                        <button
                            onClick={() => setShowVerificationModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                        >
                            <FaTimes size={20} />
                        </button>

                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-4">Verification in progress</h2>
                            <p className="text-gray-400 text-sm mb-8">Verifying by lightstone ...</p>

                            {/* Loading Spinner */}
                            <div className="flex justify-center mb-8">
                                <div className="relative w-24 h-24">
                                    <div className="absolute inset-0 border-4 border-gray-600 rounded-full"></div>
                                    <div className="absolute inset-0 border-4 border-transparent border-t-amber-500 rounded-full animate-spin"></div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <span className="text-gray-400 text-sm">Status</span>
                                <span className="ml-4 text-amber-500 font-semibold">PENDING</span>
                            </div>

                            <p className="text-gray-300 text-sm">
                                We are verifying your identity and property ownership.
                                This may take a few minutes.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Results Modal */}
            {showResultsModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-800 rounded-2xl p-8 sm:p-12 md:p-24 max-w-xl w-full shadow-2xl relative">
                        <button
                            onClick={() => setShowResultsModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                        >
                            <FaTimes size={20} />
                        </button>

                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-4">Ownership Results</h2>

                            {/* Partial Match */}
                            {verificationStatus === "partial" && (
                                <>
                                    <div className="mb-8">
                                        <span className="text-gray-400 text-sm">Result</span>
                                        <span className="ml-4 text-amber-500 font-semibold">PARTIAL MATCH</span>
                                    </div>

                                    <div className="text-left mt-8 mb-16">
                                        <p className="text-gray-300 text-sm mb-4 mt-4 font-semibold">Reasoning:</p>
                                        <ul className="space-y-2 text-gray-400 text-sm">
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>Some details do not match.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>Request Upload of authorization docs (Power of Attorney, Executor Letter, etc.)</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex justify-center mt-24">
                                        <button
                                            onClick={handleUploadDocuments}
                                            className="w-2/3 px-8 py-3 rounded-full font-semibold text-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                            style={{ backgroundColor: '#EDBF6D' }}
                                        >
                                            Upload Documents
                                        </button>
                                    </div>
                                </>
                            )}

                            {/* Not Confirmed */}
                            {verificationStatus === "notConfirmed" && (
                                <>
                                    <div className="mb-8">
                                        <span className="text-gray-400 text-sm">Result</span>
                                        <span className="ml-4 text-red-500 font-semibold">NOT CONFIRMED</span>
                                    </div>

                                    <div className="text-left mt-8 mb-16">
                                        <p className="text-gray-300 text-sm mt-4 mb-4 font-semibold">Reasoning:</p>
                                        <ul className="space-y-2 text-gray-400 text-sm">
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>Ownership Cannot be confirmed.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>Please contact support or upload authorization documents.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex justify-center mt-24">
                                        <button
                                            onClick={handleContactSupport}
                                            className="w-2/3 px-8 py-3 rounded-full font-semibold text-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                            style={{ backgroundColor: '#EDBF6D' }}
                                        >
                                            Contact Support
                                        </button>
                                    </div>
                                </>
                            )}

                            {/* Successfully Verified */}
                            {verificationStatus === "success" && (
                                <>
                                    {/* Green Checkmark */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center">
                                            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4">Successfully Verified</h3>
                                    <p className="text-gray-400 text-sm mb-6">Verified by lightstone ...</p>

                                    <div className="mb-8">
                                        <span className="text-gray-400 text-sm">Status</span>
                                        <span className="ml-4 text-green-500 font-semibold">VERIFIED</span>
                                    </div>

                                    <p className="text-gray-300 text-sm mb-8">
                                        Congratulations! You have successfully verified your Ownership, Now you can create listing. You will get verified ownership Badge.
                                    </p>
                                    <div className="flex justify-center mt-24">                                    <button
                                        onClick={() => setShowResultsModal(false)}
                                        className="w-2/3 px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                        style={{ backgroundColor: '#0A1628' }}
                                    >
                                        Continue
                                    </button>
                                    </div>

                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Upload Missing Documents Modal */}
            {showUploadDocsModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-gray-800 rounded-2xl p-12 max-w-md shadow-2xl relative">
                        <button
                            onClick={() => setShowUploadDocsModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                        >
                            <FaTimes size={20} />
                        </button>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-8 text-center">Upload Missing Documents</h2>

                            <div className="space-y-4 mb-8">
                                {/* Power of Attorney */}
                                <label className="flex items-center justify-between px-6 py-4 bg-gray-700 bg-opacity-50 rounded-xl cursor-pointer hover:bg-opacity-70 transition-colors">
                                    <span className="text-white">Power of Attorney</span>
                                    <FaUpload className="text-amber-500" />
                                    <input
                                        type="file"
                                        className="hidden"
                                        onChange={(e) => handleFileUpload('powerOfAttorney', e.target.files[0])}
                                        accept="image/*,.pdf"
                                    />
                                </label>

                                {/* Executor Letter */}
                                <label className="flex items-center justify-between px-6 py-4 bg-gray-700 bg-opacity-50 rounded-xl cursor-pointer hover:bg-opacity-70 transition-colors">
                                    <span className="text-white">Executor letter</span>
                                    <FaUpload className="text-amber-500" />
                                    <input
                                        type="file"
                                        className="hidden"
                                        onChange={(e) => handleFileUpload('executorLetter', e.target.files[0])}
                                        accept="image/*,.pdf"
                                    />
                                </label>
                            </div>

                            <button
                                onClick={() => setShowUploadDocsModal(false)}
                                className="w-full px-8 py-3 rounded-full font-semibold text-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                style={{ backgroundColor: '#EDBF6D' }}
                            >
                                Upload Documents
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Help Modal */}
            {showHelp && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-start justify-end p-8 z-50">
                    <div className="bg-gray-800 rounded-2xl p-8 max-w-md shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-white">What is KYC Verification?</h3>
                            <button
                                onClick={() => setShowHelp(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                <FaTimes size={20} />
                            </button>
                        </div>
                        <div className="space-y-4 text-gray-300 text-sm">
                            <p>
                                KYC Verification stands for "Know Your Customer" verification. It's a process used by digital platforms,
                                banks, and financial or property-related services to confirm the identity of their users and prevent fraud or
                                illegal activity.
                            </p>
                            <p className="font-semibold text-white">
                                In your property app's context (Properly Real Estate), KYC verification ensures that:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>The seller is a real person, not a fake or duplicate account.</li>
                                <li>The identity document matches the person uploading it (via selfie verification).</li>
                                <li>The address is valid and recent, proving legal residence.</li>
                                <li>The property being listed truly belongs to the verified person (ownership validation via Lightstone data).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default KycVerification;

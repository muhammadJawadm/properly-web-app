import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";

// Import modals
import VerificationProgressModal from "./kyc/VerificationProgressModal";
import VerificationResultsModal from "./kyc/VerificationResultsModal";
import UploadMissingDocsModal from "./kyc/UploadMissingDocsModal";
import KycHelpModal from "./kyc/KycHelpModal";

// Import step components
import KycWelcomeStep from "./kyc/KycWelcomeStep";
import KycUploadIdStep from "./kyc/KycUploadIdStep";
import KycUploadPhotoStep from "./kyc/KycUploadPhotoStep";
import KycProofOfResidenceStep from "./kyc/KycProofOfResidenceStep";

const KycVerification = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [showHelp, setShowHelp] = useState(false);
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [showResultsModal, setShowResultsModal] = useState(false);
    const [showUploadDocsModal, setShowUploadDocsModal] = useState(false);
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
            // Start with "Not Confirmed" status for demo flow
            setVerificationStatus("notConfirmed");
            setShowResultsModal(true);
        }, 3000);
    };

    const handleUploadDocuments = () => {
        setShowResultsModal(false);
        setShowUploadDocsModal(true);
    };

    const handleContactSupport = () => {
        // For demo: move from "notConfirmed" to "partial" status
        setShowResultsModal(false);
        setTimeout(() => {
            setVerificationStatus("partial");
            setShowResultsModal(true);
        }, 500);
    };

    const handleContinue = () => {
        setShowResultsModal(false);
        navigate('/seller/dashboard');
    };

    const handleCloseUploadDocsModal = () => {
        // After uploading docs, show success
        setShowUploadDocsModal(false);
        setTimeout(() => {
            setVerificationStatus("success");
            setShowResultsModal(true);
        }, 500);
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
                    <KycWelcomeStep
                        onStart={handleStartVerification}
                        steps={steps}
                    />
                )}

                {/* Step 1: Upload ID */}
                {currentStep === 1 && (
                    <KycUploadIdStep
                        onNext={handleNext}
                        onFileUpload={handleFileUpload}
                        steps={steps}
                    />
                )}

                {/* Step 2: Upload Photo/Selfie */}
                {currentStep === 2 && (
                    <KycUploadPhotoStep
                        onNext={handleNext}
                        onFileUpload={handleFileUpload}
                        steps={steps}
                    />
                )}

                {/* Step 3: Proof of Residence */}
                {currentStep === 3 && (
                    <KycProofOfResidenceStep
                        onSubmit={handleSubmitForVerification}
                        onFileUpload={handleFileUpload}
                        steps={steps}
                    />
                )}
            </div>

            {/* Modals */}
            <VerificationProgressModal
                isOpen={showVerificationModal}
                onClose={() => setShowVerificationModal(false)}
            />

            <VerificationResultsModal
                isOpen={showResultsModal}
                onClose={() => setShowResultsModal(false)}
                verificationStatus={verificationStatus}
                onUploadDocuments={handleUploadDocuments}
                onContactSupport={handleContactSupport}
                onContinue={handleContinue}
            />

            <UploadMissingDocsModal
                isOpen={showUploadDocsModal}
                onClose={handleCloseUploadDocsModal}
                onFileUpload={handleFileUpload}
            />

            <KycHelpModal
                isOpen={showHelp}
                onClose={() => setShowHelp(false)}
            />
        </div>
    );
};

export default KycVerification;

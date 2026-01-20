import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import SellerSidebar, { subscribeSidebarState } from '../../../../components/Seller/SellerSidebar';
import Header from '../../../../components/common/Header';
import ProgressStepper from './components/ProgressStepper';
import PropertyTypeSelection from './steps/PropertyTypeSelection';
import ResidentialOwnership from './steps/ResidentialOwnership';
import AgriculturalOwnership from './steps/AgriculturalOwnership';
import VacantLandOwnership from './steps/VacantLandOwnership';
import CommercialOwnership from './steps/CommercialOwnership';
import HospitalityOwnership from './steps/HospitalityOwnership';
import RepresentativeType from './steps/RepresentativeType';
import PropertyDetails from './steps/PropertyDetails';
import AgriculturalPropertyDetails from './steps/AgriculturalPropertyDetails';
import VacantLandDetails from './steps/VacantLandDetails';
import Pricing from './steps/Pricing';
import LegalDisclosures from './steps/LegalDisclosures';
import MediaUpload from './steps/MediaUpload';
import PreviewAndPublish from './steps/PreviewAndPublish';
import MapLocationSelector from './components/MapLocationSelector';
import BrochurePreview from './components/BrochurePreview';
import ComplianceAgreement from './components/ComplianceAgreement';
import FillOfflineModal from './components/FillOfflineModal';
import OTPVerification from './components/OTPVerification';
import ListingLiveModal from './components/ListingLiveModal';
import AIGuide from './components/AIGuide';
import { useEffect } from 'react';
import { useSidebarMargin } from '../../../../hooks/useResponsive';

const CreateListing = () => {
    const navigate = useNavigate();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const sidebarMargin = useSidebarMargin(sidebarCollapsed);
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [showAIGuide, setShowAIGuide] = useState(false);
    const [showMapSelector, setShowMapSelector] = useState(false);
    const [showBrochure, setShowBrochure] = useState(false);
    const [showCompliance, setShowCompliance] = useState(false);
    const [showOfflineModal, setShowOfflineModal] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [showPublished, setShowPublished] = useState(false);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    const steps = [
        'Ownership verification',
        'Representative type',
        'Property Details',
        'Pricing',
        'Legal & Financial Disclosures',
        'Media Upload',
        'Preview & Publish'
    ];

    const handlePropertyTypeSelection = (data) => {
        setFormData({ ...formData, ...data });
        setCurrentStep(1);
    };

    const handleOwnershipContinue = (data) => {
        setFormData({ ...formData, ...data });
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        } else {
            navigate('/seller/dashboard');
        }
    };

    const renderStep = () => {
        if (currentStep === 0) {
            return <PropertyTypeSelection onContinue={handlePropertyTypeSelection} />;
        }

        if (currentStep === 1) {
            const { propertyCategory } = formData;

            if (propertyCategory === 'residential') {
                return (
                    <ResidentialOwnership
                        onContinue={handleOwnershipContinue}
                        onBack={handleBack}
                        formData={formData}
                    />
                );
            } else if (propertyCategory === 'agricultural') {
                return (
                    <AgriculturalOwnership
                        onContinue={handleOwnershipContinue}
                        onBack={handleBack}
                        formData={formData}
                    />
                );
            } else if (propertyCategory === 'vacant_land') {
                return (
                    <VacantLandOwnership
                        onContinue={handleOwnershipContinue}
                        onBack={handleBack}
                        formData={formData}
                    />
                );
            }
            else if (propertyCategory === 'commercial') {
                return (
                    <CommercialOwnership
                        onContinue={handleOwnershipContinue}
                        onBack={handleBack}
                        formData={formData}
                    />
                );
            }
            else if (propertyCategory === 'hospitality') {
                return (
                    <HospitalityOwnership
                        onContinue={handleOwnershipContinue}
                        onBack={handleBack}
                        formData={formData}
                    />
                );
            }
        }

        if (currentStep === 2) {
            return (
                <RepresentativeType
                    onContinue={handleOwnershipContinue}
                    onBack={handleBack}
                    formData={formData}
                />
            );
        }

        if (currentStep === 3) {
            return (
                <PropertyDetails
                    onContinue={handleOwnershipContinue}
                    onBack={handleBack}
                    formData={formData}
                />
            );
        }

        if (currentStep === 4) {
            return (
                <Pricing
                    onContinue={handleOwnershipContinue}
                    onBack={handleBack}
                    formData={formData}
                />
            );
        }

        if (currentStep === 5) {
            return (
                <LegalDisclosures
                    onContinue={handleOwnershipContinue}
                    onBack={handleBack}
                    formData={formData}
                />
            );
        }

        if (currentStep === 6) {
            return (
                <MediaUpload
                    onContinue={handleOwnershipContinue}
                    onBack={handleBack}
                    formData={formData}
                    onShowBrochure={() => setShowBrochure(true)}
                />
            );
        }

        if (currentStep === 7) {
            return (
                <PreviewAndPublish
                    onPublish={() => {
                        setShowCompliance(true);
                    }}
                    onBack={handleBack}
                    formData={formData}
                />
            );
        }

        // Placeholder for other steps
        return (
            <div className="text-center text-white">
                <p>Step {currentStep + 1} - Coming soon...</p>
            </div>
        );
    };

    return (
        <>
            <SellerSidebar />

            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: sidebarMargin }}
            >
                <Header
                    title="Create Listing"
                    showNotifications={true}
                    onNotificationClick={() => setShowNotifications(!showNotifications)}
                />

                {/* Content */}
                <div className="p-10 ">
                    {currentStep > 0 && <ProgressStepper steps={steps} currentStep={currentStep} />}
                    {renderStep()}
                </div>
            </div>

            {/* AI Guide */}
            <AIGuide isOpen={showAIGuide} onClose={() => setShowAIGuide(false)} />

            {/* Map Selector */}
            <MapLocationSelector
                isOpen={showMapSelector}
                onClose={() => setShowMapSelector(false)}
                onConfirm={(location) => {
                    setFormData({ ...formData, mapLocation: location });
                    setShowMapSelector(false);
                }}
            />

            {/* Brochure Preview */}
            <BrochurePreview isOpen={showBrochure} onClose={() => setShowBrochure(false)} />

            {/* Compliance Agreement */}
            <ComplianceAgreement
                isOpen={showCompliance}
                onClose={() => setShowCompliance(false)}
                onAccept={() => {
                    setShowCompliance(false);
                    setShowOfflineModal(true);
                }}
            />

            {/* Fill Offline Modal */}
            <FillOfflineModal
                isOpen={showOfflineModal}
                onClose={() => setShowOfflineModal(false)}
                onUpload={(file) => {
                    setFormData({ ...formData, conditionReport: file });
                    setShowOfflineModal(false);
                }}
                onAccept={() => {
                    setShowOfflineModal(false);
                    setShowOTP(true);
                }}
            />

            {/* OTP Verification */}
            <OTPVerification
                isOpen={showOTP}
                onClose={() => setShowOTP(false)}
                onVerify={(otpCode) => {
                    // Simulate OTP verification
                    setShowOTP(false);
                    setShowPublished(true);
                }}
            />


            {/* Listing Live Modal */}
            <ListingLiveModal
                isOpen={showPublished}
                onClose={() => setShowPublished(false)}
            />
        </>
    );
};

export default CreateListing;

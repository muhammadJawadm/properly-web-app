import { useState } from 'react';
import FormInput from '../components/FormInput';
import LoadingModal from '../components/LoadingModal';
import SuccessModal from '../components/SuccessModal';

const ResidentialOwnership = ({ onContinue, onBack, formData }) => {
    const [addTown, setAddTown] = useState(formData?.addTown || '');
    const [streetName, setStreetName] = useState(formData?.streetName || '');
    const [streetNumber, setStreetNumber] = useState(formData?.streetNumber || '');
    const [titleDeedNumber, setTitleDeedNumber] = useState(formData?.titleDeedNumber || '');
    const [erfNumber, setErfNumber] = useState(formData?.erfNumber || '');
    const [showAutoFilledData, setShowAutoFilledData] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleFetchData = () => {
        setIsLoading(true);
        // Simulate API call to fetch data from Lightstone
        setTimeout(() => {
            setIsLoading(false);
            setShowAutoFilledData(true);
        }, 2000);
    };

    const handleVerifyOwnership = () => {
        setIsLoading(true);
        // Simulate verification
        setTimeout(() => {
            setIsLoading(false);
            setShowSuccess(true);
        }, 2000);
    };

    const handleSuccessClose = () => {
        setShowSuccess(false);
    };

    const handleSuccessContinue = () => {
        setShowSuccess(false);
        onContinue({
            addTown,
            streetName,
            streetNumber,
            titleDeedNumber,
            erfNumber
        });
    };

    return (
        <>
            <div className="max-w-6xl mx-auto space-y-6">
                {/* Main Form */}
                <div className="bg-gray-600/40 backdrop-blur-lg rounded-2xl p-10">
                    <h2 className="text-white text-2xl font-semibold mb-2">Residential Property</h2>
                    <p className="text-gray-400 text-sm mb-12">
                        Please enter your details. Your ownership will verified through Lightstone Property.
                    </p>

                    <div className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-6">
                            <FormInput
                                label="Add town"
                                placeholder="e.g Street Mario"
                                value={addTown}
                                onChange={(e) => setAddTown(e.target.value)}
                            />
                            <FormInput
                                label="Street Name"
                                placeholder="e.g Street Mario"
                                value={streetName}
                                onChange={(e) => setStreetName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-6">
                            <FormInput
                                label="Street Number"
                                placeholder="Enter Number"
                                value={streetNumber}
                                onChange={(e) => setStreetNumber(e.target.value)}
                                required
                            />
                            <FormInput
                                label="Title deed number (Optional)"
                                placeholder="Title deed number"
                                value={titleDeedNumber}
                                onChange={(e) => setTitleDeedNumber(e.target.value)}
                            />
                        </div>


                        <div className="flex justify-center pt-6 pb-4">
                            <button
                                onClick={handleFetchData}
                                className="w-full max-w-xs mx-auto block py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-full hover:opacity-90 transition-opacity"
                            >
                                Fetch Data
                            </button>
                        </div>

                    </div>
                </div>

                {/* Auto-Filled Data Section */}
                {showAutoFilledData && (
                    <div className="bg-gray-600/40 backdrop-blur-lg rounded-2xl p-8">
                        <h3 className="text-white text-xl font-semibold mb-2">Auto-Filled Data
                            <span className="text-gray-400 text-sm font-normal ml-2">(from Lightstone)</span>
                        </h3>
                        <p className="text-gray-400 text-sm mb-6">
                            You ownership is confirmed. The following details are automatically retrieved from Lightstone records.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                            <div>
                                <p className="text-white font-medium">Erf Size</p>
                                <p className="text-gray-400 text-sm mt-1">45,000 m²</p>
                            </div>
                            <div>
                                <p className="text-white font-medium">Total Hectares (for Agricultural)</p>
                                <p className="text-gray-400 text-sm mt-1">45ha</p>
                            </div>
                            <div>
                                <p className="text-white font-medium">Province</p>
                                <p className="text-gray-400 text-sm mt-1">Western Cape</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                            <div>
                                <p className="text-white font-medium">Town</p>
                                <p className="text-gray-400 text-sm mt-1">Stellenbosch</p>
                            </div>
                            <div>
                                <p className="text-white font-medium">Suburb</p>
                                <p className="text-gray-400 text-sm mt-1">Town Devon Valley</p>
                            </div>
                        </div>

                        <button
                            onClick={handleVerifyOwnership}
                            className="w-full max-w-xs mx-auto block mt-8 py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-full hover:opacity-90 transition-opacity"
                        >
                            Verify Ownership
                        </button>
                    </div>
                )}
            </div>

            {/* Modals */}
            <LoadingModal
                isOpen={isLoading}
                title="Verifying with Lightstone..."
                message="Just a Moment! We appreciate your Patience."
            />
            <SuccessModal
                isOpen={showSuccess}
                onClose={handleSuccessClose}
                onContinue={handleSuccessContinue}
            />
        </>
    );
};

export default ResidentialOwnership;

import { useState } from 'react';
import FileUpload from '../components/FileUpload';

const RepresentativeType = ({ onContinue, onBack, formData }) => {
    const [selectedType, setSelectedType] = useState(formData?.representativeType || 'registered_owner');
    const [uploadedDocument, setUploadedDocument] = useState(null);

    const representativeOptions = [
        { value: 'registered_owner', label: 'Registered owner' },
        { value: 'company_trust', label: 'Company or trust representative' },
        { value: 'power_of_attorney', label: 'Holder of Power of Attorney or mandate' },
        { value: 'executor', label: 'Executor of an estate' }
    ];

    const needsDocumentation = selectedType !== 'registered_owner';

    const handleContinue = () => {
        if (needsDocumentation && !uploadedDocument) {
            alert('Please upload the required supporting document');
            return;
        }
        onContinue({
            representativeType: selectedType,
            supportingDocument: uploadedDocument
        });
    };

    const handleFileUpload = (file) => {
        setUploadedDocument(file);
    };

    return (
        <div className="max-w-5xl mx-auto">
            <div className="bg-gray-600/40 backdrop-blur-lg rounded-2xl p-8 ">
                <h2 className="text-white text-2xl font-semibold mb-2">Representation</h2>
                <p className="text-gray-400 text-sm mb-8">Please indicate your relation to the property.</p>

                <div className=" flex flex-col md:flex-row gap-5">
                    {/* Left Side - Radio Options */}
                    <div className="flex-1 space-y-5">
                        {representativeOptions.map((option) => (
                            <label
                                key={option.value}
                                className="flex items-center gap-3 cursor-pointer group"
                            >
                                <div className="relative">
                                    <input
                                        type="radio"
                                        name="representativeType"
                                        value={option.value}
                                        checked={selectedType === option.value}
                                        onChange={(e) => setSelectedType(e.target.value)}
                                        className="appearance-none w-4 h-4 border-2 border-gray-600 rounded-full checked:border-amber-500 transition-colors cursor-pointer"
                                    />
                                    {selectedType === option.value && (
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-500 rounded-full"></div>
                                    )}
                                </div>
                                <span className={`text-sm transition-colors ${selectedType === option.value ? 'text-white' : 'text-gray-400'
                                    }`}>
                                    {option.label}
                                </span>
                            </label>
                        ))}
                    </div>

                    {/* Right Side - Supporting Documents Panel */}
                    {needsDocumentation && (
                        <div className="flex-1 bg-gray-700/50 rounded-xl p-4 md:p-8">
                            <h3 className="text-white font-semibold mb-2">Supporting documents Required</h3>
                            <p className="text-gray-400 text-sm mb-16">
                                Please upload relevant proof such as company registration, trust resolution, power of Attorney or executor letter.
                            </p>

                            <FileUpload
                                onUpload={handleFileUpload}
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            />

                            {uploadedDocument && (
                                <p className="text-green-400 text-xs">
                                    ✓ {uploadedDocument.name} uploaded
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-5 md:flex-row justify-between mt-16">
                    <button
                        onClick={onBack}
                        className="px-8 py-3 bg-gray-700/50 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleContinue}
                        className="px-8 py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-full hover:opacity-90 transition-opacity"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RepresentativeType;

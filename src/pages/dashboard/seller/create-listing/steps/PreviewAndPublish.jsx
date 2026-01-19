import { useState } from 'react';
import { FaEdit, FaCheckCircle, FaTimesCircle, FaImage, FaVideo } from 'react-icons/fa';

const PreviewAndPublish = ({ onPublish, onBack, formData }) => {
    const [verificationStatus, setVerificationStatus] = useState('verified'); // 'verified', 'rejected', 'pending'

    const getSectionData = (section) => {
        // Extract relevant data from formData for each section
        switch (section) {
            case 'ownership':
                return {
                    erfNumber: formData.erfNumber || '213',
                    streetName: formData.streetName || 'Stellenbosch',
                    titleDeed: formData.titleDeedNumber || '213',
                    lifespanNumber: formData.lifespanNumber || '213',
                    erfSize: formData.erfSize || '45,000 Hectares',
                    lifeOwnerStatus: formData.lifeOwnerStatus || 'Life owner verified'
                };
            case 'autoFilled':
                return {
                    erfNumber: formData.erfNumber || 'Not Specified',
                    highestBestUse: formData.highestBestUse || 'Residential',
                    town: formData.town || 'Stellenbosch',
                    province: formData.province || 'Western Cape',
                    valuation: formData.valuation || 'R1,000',
                    suburb: formData.suburb || 'Devon Valley'
                };
            case 'residential':
                return {
                    bedrooms: formData.bedrooms || '3',
                    bathrooms: formData.bathrooms || '2',
                    garages: formData.garages || '1',
                    category: formData.category || 'Furnished',
                    outbuildings: formData.outbuildings || '4',
                    ratesLevies: formData.rateableValue || '5,000000',
                };
            default:
                return {};
        }
    };

    const ownershipData = getSectionData('ownership');
    const autoFilledData = getSectionData('autoFilled');
    const residentialData = getSectionData('residential');

    return (
        <div className="max-w-6xl mx-auto pb-20">
            <div className="space-y-6 bg-gray-700/50 backdrop-blur-lg rounded-2xl p-6">
                {/* Header */}
                <div className="p-2">
                    <h2 className="text-white text-2xl font-semibold mb-2">Preview & Publish</h2>
                    <p className="text-gray-400 text-sm">Review all the details you've entered.</p>
                </div>

                {/* Ownership Verification Status */}
                <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-white font-semibold">Ownership verification Status</h3>
                        {verificationStatus === 'verified' ? (
                            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500 rounded-lg">
                                <FaCheckCircle className="text-green-500" size={16} />
                                <span className="text-green-500 text-sm font-semibold">VERIFIED - AUTOMATIC</span>
                            </div>
                        ) : verificationStatus === 'rejected' ? (
                            <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500 rounded-lg">
                                <FaTimesCircle className="text-red-500" size={16} />
                                <span className="text-red-500 text-sm font-semibold">REJECTED</span>
                            </div>
                        ) : (
                            <div className="px-4 py-2 bg-amber-500/20 border border-amber-500 rounded-lg">
                                <span className="text-amber-500 text-sm font-semibold">PENDING VERIFICATION</span>
                            </div>
                        )}
                    </div>
                    {verificationStatus === 'rejected' && (
                        <p className="text-gray-400 text-sm mt-2">We are verifying your ownership</p>
                    )}
                </div>

                {/* Details Entered Manually */}
                <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-semibold">Details entered manually (Ownership type)</h3>
                        <button className="text-amber-500 hover:text-amber-400 flex items-center gap-2 text-sm border border-amber-500 p-2 rounded-3xl px-5">
                            <FaEdit size={14} />
                            <span>Edit</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                            <p className="text-gray-400 mb-1">Erf / Stand #</p>
                            <p className="text-white">{ownershipData.erfNumber}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-1">Street Name</p>
                            <p className="text-white">{ownershipData.streetName}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-1">LRFT Standalone Number</p>
                            <p className="text-white">{ownershipData.titleDeed}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-1">Lightstone verified</p>
                            <p className="text-white">{ownershipData.lifespanNumber}</p>
                        </div>
                        <div className="col-span-4 mt-2">
                            <p className="text-amber-500 text-xs flex items-center gap-2">
                                <FaCheckCircle size={12} />
                                <span>{ownershipData.lifeOwnerStatus}</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-600 mt-8 pt-4 mb-4">
                        <h3 className="text-white font-semibold">Auto-Filled Data (From lightstone)</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                            <p className="text-gray-400 mb-1">Erf Number</p>
                            <p className="text-white">{autoFilledData.erfNumber}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-1">Highest & Best Addition</p>
                            <p className="text-white">{autoFilledData.highestBestUse}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-1">Province</p>
                            <p className="text-white">{autoFilledData.province}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-1">Town</p>
                            <p className="text-white">{autoFilledData.town}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-1">Valuation type</p>
                            <p className="text-white">{autoFilledData.valuation}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-1">Suburb Location</p>
                            <p className="text-white">{autoFilledData.suburb}</p>
                        </div>
                    </div>
                </div>

                {/* Property Details */}
                <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-semibold">Property Details (Residential)</h3>
                        <button className="text-amber-500 hover:text-amber-400 flex items-center gap-2 text-sm">
                            <FaEdit size={14} />
                            <span>Edit</span>
                        </button>
                    </div>
                    <div className="space-y-4">
                        {/* Electricity Supply */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-gray-400 mb-1">Electricity Supply</p>
                                <p className="text-white">{formData.electricitySupply || 'Eskom'}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 mb-1">Water Supply</p>
                                <p className="text-white">{formData.waterSupply || 'Borehole'}</p>
                            </div>
                        </div>

                        {/* Seller Description */}
                        <div className="text-sm">
                            <p className="text-gray-400 mb-1">Seller Description / Special Features</p>
                            <p className="text-white">
                                {formData.sellerDescription || 'Highlight upgrades, special features, history, or unique aspects of your property...'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Residential Property */}
                <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-semibold">Residential Property</h3>
                    </div>
                    <div className="grid grid-cols-6 gap-4 text-sm">
                        <div className="flex flex-col items-center">
                            <p className="text-gray-400 mb-1 text-sm">Bedrooms</p>
                            <div className="w-12 h-12 rounded-full bg-amber-500 border border-gray-600 flex items-center justify-center">
                                <p className="text-black font-semibold text-lg">{residentialData.bedrooms}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-gray-400 mb-1 text-sm">Bathrooms</p>
                            <div className="w-12 h-12 rounded-full bg-amber-500 border border-gray-600 flex items-center justify-center">
                                <p className="text-black font-semibold text-lg">{residentialData.bathrooms}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-gray-400 mb-1 text-sm">Garages / Carport</p>
                            <div className="w-12 h-12 rounded-full bg-amber-500 border border-gray-600 flex items-center justify-center">
                                <p className="text-black font-semibold text-lg">{residentialData.garages}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-4">Category</p>
                            <p className="text-white">{residentialData.category}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-4">Outbuildings</p>
                            <p className="text-white">{residentialData.outbuildings}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-4">Rates & Levies</p>
                            <p className="text-white">{residentialData.ratesLevies}</p>
                        </div>
                    </div>

                    <div className="mt-6 space-y-4 flex gap-20">
                        <div className="text-sm mt-4">
                            <p className="text-gray-400 mb-4">Security Features</p>
                            <div className="flex flex-wrap gap-4">
                                {['Alarm System', 'Biometric', 'Electric fence'].map((feature, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-gray-700/50 rounded-full text-white text-xs">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="text-sm">
                            <p className="text-gray-400 mb-4">Add Extras</p>
                            <div className="flex flex-wrap gap-4">
                                {['Paved', 'Garden', 'Garage'].map((extra, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-gray-700/50 rounded-full text-white text-xs flex items-center gap-2">
                                        {extra}
                                        <FaTimesCircle size={12} />
                                    </span>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing */}
                <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-semibold">PRICING (1% COMMISSION + VAT)</h3>
                        <button className="px-5 text-amber-500 hover:text-amber-400 flex items-center gap-2 text-sm border border-amber-500 p-2 rounded-3xl">
                            <FaEdit size={14} />
                            <span>Edit</span>
                        </button>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                        Properly uses a transparent, factor-based pricing model to calculate your property's final listing price.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-white mb-1">Asking price</p>
                            <p className="text-white font-semibold text-lg border border-gray-600 p-2 rounded-lg bg-gray-700/50">{formData.askingPrice || 'R750,000'}</p>
                            <p className="text-gray-400 text-xs italic mt-1">
                                This is the amount you want to receive after Properly's 1% commission and VAT.
                            </p>
                        </div>
                        <div>
                            <p className="text-white mb-1">Listing price</p>
                            <p className="text-white font-semibold text-lg border border-gray-600 p-2 rounded-lg bg-gray-700/50">{formData.listingPrice || 'R900,000'}</p>
                            <p className="text-gray-400 text-xs italic mt-1">
                                Final calculated listing price (incl. 1% commission and VAT)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Media Upload */}
                <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-semibold">Property Media & AI highlights</h3>
                        <button className="text-amber-500 hover:text-amber-400 flex items-center gap-2 text-sm border border-amber-500 p-2 rounded-3xl px-5">
                            <FaEdit size={14} />
                            <span>Edit</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {/* Photo thumbnails */}
                        <div className="aspect-square bg-gray-700/30 rounded-lg overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=300"
                                alt="Property"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="aspect-square bg-gray-700/30 rounded-lg overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=300"
                                alt="Property"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="aspect-square bg-gray-700/30 rounded-lg overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=300"
                                alt="Property"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Video thumbnail */}
                        <div className="aspect-square bg-gray-700/30 rounded-lg overflow-hidden flex items-center justify-center relative">
                            <img
                                src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=300"
                                alt="Video"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                    <div className="w-0 h-0 border-l-8 border-l-black border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between pt-6">
                    <button
                        onClick={onBack}
                        className="px-8 py-3 bg-gray-700/50 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors"
                    >
                        Back
                    </button>
                    <button
                        onClick={onPublish}
                        disabled={verificationStatus === 'rejected'}
                        className={`px-8 py-3 font-semibold rounded-full transition-opacity ${verificationStatus === 'rejected'
                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black hover:opacity-90'
                            }`}
                    >
                        Publish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PreviewAndPublish;

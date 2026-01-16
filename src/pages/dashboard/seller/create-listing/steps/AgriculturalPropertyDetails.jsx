import { useState } from 'react';
import FormSelect from '../components/FormSelect';
import FormInput from '../components/FormInput';
import { FaMapMarkerAlt } from 'react-icons/fa';

const AgriculturalPropertyDetails = ({ onContinue, onBack, formData }) => {
    const [farmingType, setFarmingType] = useState('');
    const [permanentResidence, setPermanentResidence] = useState('yes');
    const [landClaims, setLandClaims] = useState('yes');
    const [goingConcern, setGoingConcern] = useState('yes');
    const [businessAssets, setBusinessAssets] = useState(['livestock']);
    const [pinLocations, setPinLocations] = useState([
        { id: 1, name: 'Location 1' },
        { id: 2, name: 'Location 2' }
    ]);

    const toggleAsset = (asset) => {
        if (businessAssets.includes(asset)) {
            setBusinessAssets(businessAssets.filter(a => a !== asset));
        } else {
            setBusinessAssets([...businessAssets, asset]);
        }
    };

    const handleAddPin = () => {
        setPinLocations([...pinLocations, { id: Date.now(), name: `Location ${pinLocations.length + 1}` }]);
    };

    const handleContinue = () => {
        onContinue({
            farmingType,
            permanentResidence,
            landClaims,
            goingConcern,
            businessAssets,
            pinLocations
        });
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="bg-gray-600/50 backdrop-blur-lg rounded-2xl p-8 space-y-8">
                <div>
                    <h2 className="text-white text-2xl font-semibold mb-2">Agricultural Property</h2>
                    <p className="text-gray-400 text-sm">Since your property is agricultural please fill out more details.</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <FormSelect
                        label="Type of farming"
                        value={farmingType}
                        onChange={(e) => setFarmingType(e.target.value)}
                        options={[
                            { value: 'crops', label: 'Crops' },
                            { value: 'livestock', label: 'Livestock' },
                            { value: 'mixed', label: 'Mixed Farming' },
                            { value: 'vineyard', label: 'Vineyard' }
                        ]}
                    />
                    <div>
                        <label className="block text-white mb-2 text-sm">Is there a permanent residence on the property?</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="residence"
                                    value="yes"
                                    checked={permanentResidence === 'yes'}
                                    onChange={(e) => setPermanentResidence(e.target.value)}
                                    className="w-4 h-4 accent-amber-500"
                                />
                                <span className="text-gray-300 text-sm">YES</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="residence"
                                    value="no"
                                    checked={permanentResidence === 'no'}
                                    onChange={(e) => setPermanentResidence(e.target.value)}
                                    className="w-4 h-4 accent-amber-500"
                                />
                                <span className="text-gray-300 text-sm">NO</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-white mb-2 text-sm">Are there any land claims on the property?</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="landClaims"
                                    value="yes"
                                    checked={landClaims === 'yes'}
                                    onChange={(e) => setLandClaims(e.target.value)}
                                    className="w-4 h-4 accent-amber-500"
                                />
                                <span className="text-gray-300 text-sm">YES</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="landClaims"
                                    value="no"
                                    checked={landClaims === 'no'}
                                    onChange={(e) => setLandClaims(e.target.value)}
                                    className="w-4 h-4 accent-amber-500"
                                />
                                <span className="text-gray-300 text-sm">NO</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="block text-white mb-2 text-sm">Is the property being sold as a going concern?</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="goingConcern"
                                    value="yes"
                                    checked={goingConcern === 'yes'}
                                    onChange={(e) => setGoingConcern(e.target.value)}
                                    className="w-4 h-4 accent-amber-500"
                                />
                                <span className="text-gray-300 text-sm">YES</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="goingConcern"
                                    value="no"
                                    checked={goingConcern === 'no'}
                                    onChange={(e) => setGoingConcern(e.target.value)}
                                    className="w-4 h-4 accent-amber-500"
                                />
                                <span className="text-gray-300 text-sm">NO</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    {/* Pin Locations */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-white text-sm">Pin Location</label>
                            <button
                                onClick={handleAddPin}
                                className="flex items-center gap-2 text-amber-500 hover:text-amber-400 text-sm font-medium"
                            >
                                <FaMapMarkerAlt size={14} />
                                <span>Add Pin</span>
                            </button>
                        </div>
                        <div className="space-y-2">
                            {pinLocations.map((location) => (
                                <div key={location.id} className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        value={location.name}
                                        readOnly
                                        className="flex-1 px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-lg text-white"
                                    />
                                    <button
                                        className="p-2 bg-gray-800/60 rounded-lg hover:bg-gray-700 transition-colors"
                                    >
                                        <FaMapMarkerAlt className="text-amber-500" size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Business Assets */}
                    <div>
                        <label className="block text-white mb-3 text-sm">Add Business Assets</label>
                        <div className="space-y-3">
                            {['Livestock', 'Equipment', 'Machinery', 'Water Rights', 'Infrastructure', 'Vehicles'].map((asset, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <label className="flex items-center gap-2 cursor-pointer min-w-[140px]">
                                        <input
                                            type="checkbox"
                                            checked={businessAssets.includes(asset.toLowerCase())}
                                            onChange={() => toggleAsset(asset.toLowerCase())}
                                            className="w-4 h-4 rounded accent-amber-500"
                                        />
                                        <span className="text-gray-300 text-sm">{asset}</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={`Enter ${asset.toLowerCase()} details...`}
                                        className="flex-1 px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-amber-500"
                                    />
                                </div>
                            ))}
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

export default AgriculturalPropertyDetails;

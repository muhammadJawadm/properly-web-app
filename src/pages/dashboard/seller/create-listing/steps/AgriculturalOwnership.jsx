import { useState } from 'react';
import FormInput from '../components/FormInput';
import { FaMapMarkerAlt } from 'react-icons/fa';

const AgriculturalOwnership = ({ onContinue, onBack, formData }) => {
    const [numberOfTitleDeeds, setNumberOfTitleDeeds] = useState(formData?.numberOfTitleDeeds || '');
    const [farmName, setFarmName] = useState(formData?.farmName || '');
    const [titleDeedNumbers, setTitleDeedNumbers] = useState(formData?.titleDeedNumbers || ['', '']);
    const [pinLocations, setPinLocations] = useState(formData?.pinLocations || []);

    const handleTitleDeedChange = (index, value) => {
        const updated = [...titleDeedNumbers];
        updated[index] = value;
        setTitleDeedNumbers(updated);
    };

    const handleNumberOfDeedsChange = (value) => {
        setNumberOfTitleDeeds(value);
        const num = parseInt(value) || 0;
        setTitleDeedNumbers(Array(num).fill(''));
    };

    const handleAddPin = () => {
        setPinLocations([...pinLocations, { id: Date.now(), name: `Location ${pinLocations.length + 1}` }]);
    };

    const handleRemovePin = (id) => {
        setPinLocations(pinLocations.filter(loc => loc.id !== id));
    };

    const handleFetchData = () => {
        onContinue({
            numberOfTitleDeeds,
            farmName,
            titleDeedNumbers,
            pinLocations
        });
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-8">
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h2 className="text-white text-2xl font-semibold mb-2">Agricultural Property</h2>
                        <p className="text-gray-400 text-sm">
                            Verify your agricultural property ownership through Lightstone Property.
                        </p>
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 max-w-xs">
                        <p className="text-amber-400 text-xs">
                            If your property includes multiple portions, enter all title deed numbers OR pin locations.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <FormInput
                            label="Number of title deed"
                            placeholder="2"
                            value={numberOfTitleDeeds}
                            onChange={(e) => handleNumberOfDeedsChange(e.target.value)}
                            type="number"
                            helperText="Enter how many title deeds or land portions this property includes."
                        />
                        <FormInput
                            label="Farm Name (Optional)"
                            placeholder="e.g Green Valley Farm"
                            value={farmName}
                            onChange={(e) => setFarmName(e.target.value)}
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        {/* Title Deed Numbers */}
                        {parseInt(numberOfTitleDeeds) > 0 && (
                            <div>
                                <label className="block text-white mb-2 text-sm">Title Deed Number (Optional)</label>
                                <div className="space-y-3">
                                    {titleDeedNumbers.map((deed, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            value={deed}
                                            onChange={(e) => handleTitleDeedChange(index, e.target.value)}
                                            placeholder={`e.g 452456`}
                                            className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

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
                                {pinLocations.map((location, index) => (
                                    <div key={location.id} className="flex items-center gap-3">
                                        <input
                                            type="text"
                                            value={location.name}
                                            readOnly
                                            className="flex-1 px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-lg text-white"
                                        />
                                        <button
                                            onClick={() => handleRemovePin(location.id)}
                                            className="p-2 bg-gray-800/60 rounded-lg hover:bg-gray-700 transition-colors"
                                        >
                                            <FaMapMarkerAlt className="text-amber-500" size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleFetchData}
                        disabled={!numberOfTitleDeeds}
                        className="w-full max-w-xs mx-auto block py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Fetch data
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgriculturalOwnership;

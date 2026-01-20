import { useState } from 'react';
import FormInput from '../components/FormInput';
import { FaMapMarkerAlt } from 'react-icons/fa';

const VacantLandOwnership = ({ onContinue, onBack, formData }) => {
    const [streetAddress, setStreetAddress] = useState(formData?.streetAddress || '');
    const [erfNumber, setErfNumber] = useState(formData?.erfNumber || '');
    const [titleDeedNumber, setTitleDeedNumber] = useState(formData?.titleDeedNumber || '');
    const [pinLocations, setPinLocations] = useState(formData?.pinLocations || []);

    const handleAddPin = () => {
        setPinLocations([...pinLocations, { id: Date.now(), name: `Location ${pinLocations.length + 1}` }]);
    };

    const handleRemovePin = (id) => {
        setPinLocations(pinLocations.filter(loc => loc.id !== id));
    };

    const handleFetchData = () => {
        onContinue({
            streetAddress,
            erfNumber,
            titleDeedNumber,
            pinLocations
        });
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-8">
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h2 className="text-white text-2xl font-semibold mb-2">Vacant Land</h2>
                        <p className="text-gray-400 text-sm">
                            Verify your vacant land ownership through Lightstone Property.
                        </p>
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 max-w-xs">
                        <p className="text-amber-400 text-xs">
                            If your property includes multiple portions, enter all title deed numbers or pin locations.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormInput
                            label="Street address (Only if applicable)"
                            placeholder="e.g Street Mario"
                            value={streetAddress}
                            onChange={(e) => setStreetAddress(e.target.value)}
                            helperText="e.g Grazing farm"
                        />
                        <FormInput
                            label="Erf or stand number (Optional)"
                            placeholder="e.g 2454"
                            value={erfNumber}
                            onChange={(e) => setErfNumber(e.target.value)}
                        />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <FormInput
                            label="Title Deed Number (Optional)"
                            placeholder="Enter Number"
                            value={titleDeedNumber}
                            onChange={(e) => setTitleDeedNumber(e.target.value)}
                        />

                        {/* Pin Locations */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-white text-sm">Pin Location(Optional)</label>
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
                        className="w-full max-w-xs mx-auto block py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-full hover:opacity-90 transition-opacity"
                    >
                        Fetch data
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VacantLandOwnership;

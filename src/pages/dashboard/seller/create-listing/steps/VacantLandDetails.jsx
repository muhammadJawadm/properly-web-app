import { useState } from 'react';
import FormSelect from '../components/FormSelect';
import FileUpload from '../components/FileUpload';
import TagInput from '../components/TagInput';

const VacantLandDetails = ({ onContinue, onBack, formData }) => {
    const [zoningType, setZoningType] = useState('');
    const [buildingRights, setBuildingRights] = useState(null);
    const [bulkServices, setBulkServices] = useState(['Electricity supply', 'Water supply']);

    const addService = (service) => {
        if (!bulkServices.includes(service)) {
            setBulkServices([...bulkServices, service]);
        }
    };

    const removeService = (index) => {
        setBulkServices(bulkServices.filter((_, i) => i !== index));
    };

    const handleContinue = () => {
        onContinue({
            zoningType,
            buildingRights,
            bulkServices
        });
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-8 space-y-8">
                <div>
                    <h2 className="text-white text-2xl font-semibold mb-2">Vacant Land</h2>
                    <p className="text-gray-400 text-sm">Since your property is agricultural please fill out more details.</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <FormSelect
                        label="Zoning Type(Optional)"
                        value={zoningType}
                        onChange={(e) => setZoningType(e.target.value)}
                        options={[
                            { value: 'residential', label: 'Residential' },
                            { value: 'commercial', label: 'Commercial' },
                            { value: 'industrial', label: 'Industrial' },
                            { value: 'agricultural', label: 'Agricultural' }
                        ]}
                    />
                    <FileUpload
                        label="Building rights/ Approvals (Optional)"
                        onUpload={(file) => setBuildingRights(file)}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                </div>

                <TagInput
                    label="Bulk Services"
                    tags={bulkServices}
                    onAddTag={addService}
                    onRemoveTag={removeService}
                    placeholder="Bulk Services"
                />

                {/* Action Buttons */}
                <div className="flex flex-col justify-center gap-5 md:flex-row md:justify-between pt-6">
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

export default VacantLandDetails;

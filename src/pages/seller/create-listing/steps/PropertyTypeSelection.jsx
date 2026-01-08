import { useState } from 'react';
import FormSelect from '../components/FormSelect';

const PropertyTypeSelection = ({ onContinue }) => {
    const [propertyCategory, setPropertyCategory] = useState('');
    const [propertyType, setPropertyType] = useState('');

    const categoryOptions = [
        { value: 'residential', label: 'Residential' },
        { value: 'commercial', label: 'Commercial' },
        { value: 'agricultural', label: 'Agricultural' },
        { value: 'vacant_land', label: 'Vacant Land' }
    ];

    const typeOptions = {
        residential: [
            { value: 'house', label: 'House' },
            { value: 'apartment', label: 'Apartment' },
            { value: 'townhouse', label: 'Townhouse' }
        ],
        commercial: [
            { value: 'office', label: 'Office' },
            { value: 'retail', label: 'Retail' },
            { value: 'warehouse', label: 'Warehouse' }
        ],
        agricultural: [
            { value: 'farm', label: 'Farm' },
            { value: 'smallholding', label: 'Smallholding' }
        ],
        vacant_land: [
            { value: 'residential_plot', label: 'Residential Plot' },
            { value: 'commercial_plot', label: 'Commercial Plot' }
        ]
    };

    const handleContinue = () => {
        if (propertyCategory && propertyType) {
            onContinue({ propertyCategory, propertyType });
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-gray-600/30 backdrop-blur-lg rounded-2xl p-14">
                <h2 className="text-white text-2xl font-semibold text-center mb-2">Create New Listing</h2>
                <p className="text-gray-400 text-sm text-center mb-8">Select Your Property Type</p>

                <div className="space-y-16">
                    <FormSelect
                        label="Property Category"
                        value={propertyCategory}
                        onChange={(e) => {
                            setPropertyCategory(e.target.value);
                            setPropertyType(''); // Reset property type when category changes
                        }}
                        options={categoryOptions}
                        placeholder="Select"
                    />

                    <FormSelect
                        label="Property Type"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        options={propertyCategory ? typeOptions[propertyCategory] : []}
                        placeholder="Select"
                        required
                    />
                    <div className="flex justify-center pt-6 pb-4">
                        <button
                            onClick={handleContinue}
                            disabled={!propertyCategory || !propertyType}
                            className="w-2/3 py-4 text-black font-semibold rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ background: '#EDBF6D' }}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyTypeSelection;

import { useState } from 'react';
import FormSelect from '../components/FormSelect';
import { FaCalendar, FaFileAlt } from 'react-icons/fa';

const LegalDisclosures = ({ onContinue, onBack, formData }) => {
    const [hasBonds, setHasBonds] = useState('yes');
    const [bondTypes, setBondTypes] = useState([]);
    const [structuralDefects, setStructuralDefects] = useState('');
    const [occupationDate, setOccupationDate] = useState('');
    const [vatApplicable, setVatApplicable] = useState('yes');
    const [jointOwnership, setJointOwnership] = useState('yes');
    const [consentDocuments, setConsentDocuments] = useState([]);

    const bondTypeOptions = [
        'Bond (Home loan or other financing)',
        'Encumbrance (Legal claim or restriction)',
        'Formal consent(Signed)'
    ];

    const toggleBondType = (type) => {
        if (bondTypes.includes(type)) {
            setBondTypes(bondTypes.filter(t => t !== type));
        } else {
            setBondTypes([...bondTypes, type]);
        }
    };

    const handleFileUpload = (files) => {
        setConsentDocuments([...consentDocuments, ...Array.from(files)]);
    };

    const handleContinue = () => {
        onContinue({
            hasBonds,
            bondTypes,
            structuralDefects,
            occupationDate,
            vatApplicable,
            jointOwnership,
            consentDocuments
        });
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="bg-gray-600/50 backdrop-blur-lg rounded-2xl p-8 space-y-8">
                <div>
                    <h2 className="text-white text-2xl font-semibold mb-2">Legal & Financial Disclosures</h2>
                </div>

                {/* Bonds or Encumbrances */}
                <div>
                    <label className="block text-white mb-3 text-sm">Does this property have any registered bonds or encumbrances?</label>
                    <div className="flex gap-4 mb-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="bonds"
                                value="yes"
                                checked={hasBonds === 'yes'}
                                onChange={(e) => setHasBonds(e.target.value)}
                                className="w-4 h-4 accent-amber-500"
                            />
                            <span className="text-gray-300 text-sm">YES</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="bonds"
                                value="no"
                                checked={hasBonds === 'no'}
                                onChange={(e) => setHasBonds(e.target.value)}
                                className="w-4 h-4 accent-amber-500"
                            />
                            <span className="text-gray-300 text-sm">NO</span>
                        </label>
                    </div>

                    {hasBonds === 'yes' && (
                        <FormSelect
                            label="Select Type"
                            value={bondTypes[0] || ''}
                            onChange={(e) => setBondTypes(e.target.value ? [e.target.value] : [])}
                            options={bondTypeOptions.map(type => ({ value: type, label: type }))}
                            placeholder="Select bond type"
                        />
                    )}
                </div>

                {/* Grid Layout */}
                <div className="border-t border-gray-700 pt-6 grid grid-cols-2 gap-6">
                    {/* Structural Defects */}
                    <div>
                        <label className="block text-white mb-2 text-sm">Are there any known structural or legal defects to disclose?</label>
                        <textarea
                            value={structuralDefects}
                            onChange={(e) => setStructuralDefects(e.target.value)}
                            placeholder="Please describe briefly"
                            rows="4"
                            className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 resize-none focus:outline-none focus:border-amber-500"
                        />
                        <p className="text-gray-500 text-xs mt-1 italic">Your notes will help our AI to generate a professional property description.</p>
                    </div>

                    {/* Occupation Date & VAT */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-white mb-2 text-sm">Occupation/Availability Date</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={occupationDate}
                                    onChange={(e) => setOccupationDate(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                                />
                                <FaCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-white mb-3 text-sm">Is VAT applicable to this sale?</label>
                            <div className="flex gap-16">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="vat"
                                        value="yes"
                                        checked={vatApplicable === 'yes'}
                                        onChange={(e) => setVatApplicable(e.target.value)}
                                        className="w-4 h-4 accent-amber-500"
                                    />
                                    <span className="text-gray-300 text-sm">YES</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="vat"
                                        value="no"
                                        checked={vatApplicable === 'no'}
                                        onChange={(e) => setVatApplicable(e.target.value)}
                                        className="w-4 h-4 accent-amber-500"
                                    />
                                    <span className="text-gray-300 text-sm">NO</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Joint Ownership Consent */}
                <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-white text-xl font-semibold mb-4">Joint ownership Consent</h3>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className="mb-6">
                            <label className="block text-white mb-6 text-sm">Is joint ownership consent required for this sale?</label>
                            <div className="flex gap-16">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="jointOwnership"
                                        value="yes"
                                        checked={jointOwnership === 'yes'}
                                        onChange={(e) => setJointOwnership(e.target.value)}
                                        className="w-4 h-4 accent-amber-500"
                                    />
                                    <span className="text-gray-300 text-sm">YES</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="jointOwnership"
                                        value="no"
                                        checked={jointOwnership === 'no'}
                                        onChange={(e) => setJointOwnership(e.target.value)}
                                        className="w-4 h-4 accent-amber-500"
                                    />
                                    <span className="text-gray-300 text-sm">NO</span>
                                </label>
                            </div>
                            <p className="text-gray-400 text-xs italic mt-12">
                                Upload legal documents e.g. formal consent(Signed), zoning certificates, plans, approvals, etc
                            </p>
                        </div>

                        {jointOwnership === 'yes' && (
                            <div>
                                <label className="block text-white mb-3 text-sm">Upload signed consent documents (PDF, JPG)</label>
                                <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-amber-500 transition-colors">
                                    <input
                                        type="file"
                                        multiple
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={(e) => handleFileUpload(e.target.files)}
                                        className="hidden"
                                        id="consent-upload"
                                    />
                                    <label htmlFor="consent-upload" className="cursor-pointer">
                                        <FaFileAlt className="text-amber-500 mx-auto mb-3" size={40} />
                                        <p className="text-amber-500 font-medium mb-1">Drag & Drop files here</p>
                                        <p className="text-gray-400 text-sm">or click to browse</p>
                                    </label>
                                </div>
                                {consentDocuments.length > 0 && (
                                    <div className="mt-3 space-y-2">
                                        {consentDocuments.map((file, index) => (
                                            <div key={index} className="flex items-center gap-2 text-green-400 text-sm">
                                                <FaFileAlt size={14} />
                                                <span>{file.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
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

export default LegalDisclosures;

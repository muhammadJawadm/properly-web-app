import { useState } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa';

const FillOfflineModal = ({ isOpen, onClose, onUpload, onAccept }) => {
    const [activeTab, setActiveTab] = useState('offline'); // 'offline' or 'online'

    if (!isOpen) return null;

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            onUpload(file);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center p-4 pt-8 overflow-y-auto">
            <div className="w-full max-w-4xl bg-gray-600/50 backdrop-blur-xl rounded-2xl overflow-hidden my-auto">
                {/* Header with Tabs */}
                <div className="border-b border-gray-700 mb-10">
                    <div className="flex items-center justify-end pt-6 pr-6 pb-0 ">
                        <button onClick={onClose} className="border border-gray-700 rounded-full p-2 bg-gray-700 text-gray-400 hover:text-white transition-colors">
                            <FaTimes size={20} />
                        </button>
                    </div>
                    <div className="flex items-center justify-center pb-0">
                        <div className="flex gap-10 ">
                            <button
                                onClick={() => setActiveTab('offline')}
                                className={`pb-4 border-b-2 transition-colors ${activeTab === 'offline'
                                    ? 'border-amber-500 text-amber-500 text-lg font-bold'
                                    : 'border-transparent text-gray-400 text-lg hover:text-gray-300'
                                    }`}
                            >
                                Fill offline
                            </button>
                            <button
                                onClick={() => setActiveTab('online')}
                                className={`pb-4 border-b-2 transition-colors ${activeTab === 'online'
                                    ? 'border-amber-500 text-amber-500 text-lg font-bold'
                                    : 'border-transparent text-gray-400 text-lg hover:text-gray-300'
                                    }`}
                            >
                                Fill Online
                            </button>
                        </div>

                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {activeTab === 'offline' ? (
                        <>
                            {/* Title */}
                            <div>
                                <h2 className="text-white text-xl font-semibold mb-1">
                                    Condition report & Defects Disclosure<span className="text-red-500">*</span>
                                </h2>
                                <p className="text-gray-400 text-sm">
                                    This form is used to describe and record the current condition of the property.
                                </p>
                            </div>

                            {/* Download Document */}
                            <div className="bg-gray-700/30 rounded-xl p-6">
                                <h3 className="text-white font-semibold mb-4">Download Document</h3>
                                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                                            <span className="text-red-500 font-bold text-sm">PDF</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Condition report & Defects Disclosure</p>
                                            <p className="text-gray-400 text-sm">(PDF)</p>
                                        </div>
                                    </div>
                                    <button className="px-6 py-2 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity">
                                        Download
                                    </button>
                                </div>
                            </div>

                            {/* Offline Completion Guide */}
                            <div className="bg-gray-700/30 rounded-xl p-6">
                                <h3 className="text-white font-semibold mb-4">Offline completion guide</h3>
                                <ol className="space-y-2 text-gray-300 text-sm">
                                    <li>1. Download the file</li>
                                    <li>2. Fill out manually or digitally</li>
                                    <li>3. Sign the form</li>
                                    <li>4. Save the completed PDF</li>
                                    <li>5. Re upload</li>
                                </ol>
                            </div>

                            {/* Upload Completed Document */}
                            <div className="bg-gray-700/30 rounded-xl p-6">
                                <h3 className="text-white font-semibold mb-4">Upload completed document</h3>
                                <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center mb-3">
                                    <input
                                        type="file"
                                        accept=".pdf"
                                        onChange={handleFileUpload}
                                        className="hidden"
                                        id="offline-doc-upload"
                                    />
                                    <label htmlFor="offline-doc-upload" className="cursor-pointer">
                                        <p className="text-gray-400 mb-3">Drag & Drop pdf here</p>
                                        <button className="px-6 py-2 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity">
                                            Upload File
                                        </button>
                                    </label>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    <span className="font-semibold">File Status:</span> No file uploaded yet
                                </p>
                            </div>
                            <div className="flex justify-end gap-4 pt-4">
                                {/* <button
                                    onClick={onClose}
                                    className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                    Save as Draft
                                </button> */}
                                <button onClick={onAccept}
                                    className="px-6 py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity">
                                    Submit Report
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Online Form Content - Based on Screenshots */}
                            <div className="max-h-[70vh] overflow-y-auto pr-2 space-y-6">
                                {/* Form Title */}
                                <div className="text-center mb-10">
                                    <h2 className="text-white text-2xl font-bold mb-5">
                                        IMMOVABLE PROPERTY CONDITION REPORT
                                    </h2>
                                </div>

                                {/* Disclaimer Section */}
                                <div className="bg-gray-700/30 rounded-xl p-6 space-y-8">
                                    <h3 className="text-white font-semibold text-lg">DISCLAIMER</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        This condition report concerns the Immovable property situated at ______________ (herein after referred to as the PROPERTY"). This report does not constitute a guarantee and/or warranty of any kind or nature by the owner of the PROPERTY or by the property practitioners representing that owner in any transaction. This report should, therefore, not be regarded as a substitute for any inspections or warranties that prospective PURCHASERS may wish to obtain prior to concluding a Purchase Agreement in respect of the PROPERTY.
                                    </p>

                                    <h3 className="text-white font-semibold text-lg">OWNER'S INFORMATION</h3>

                                    <div>
                                        <h4 className="text-amber-500 font-medium mb-2">Definitions</h4>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            In this form: "am aware" mean to have notice or knowledge; while "defect" means any condition, whether latent or patent, that would or could have a significant deleterious or adverse impact, either real or perceived, on the market value of the PROPERTY, that would or could significantly impair or impact upon the health or safety of any future occupants of the PROPERTY or that, if not repaired and/or removed and/or replaced, would or could significantly shorten or adversely affect the expected normal lifespan of the PROPERTY.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-amber-500 font-medium mb-2">Disclosure of Information</h4>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            The owner of the PROPERTY discloses the information hereunder in the full knowledge that, even though this is not to be construed as a warranty, prospective PURCHASERS may rely on such information when deciding whether, and on what terms, to buy the PROPERTY.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-amber-500 font-medium mb-2">Provision of additional information</h4>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            The owner represents that to the best of his/her knowledge the responses to the statements in respect of the PROPERTY contained herein have been accurately noted as "yes", "no" or "not applicable". Should the owner have responded to any of the statements with a "yes", the owner shall be obliged to provide, in the additional information area of this form, a full explanation as to the reason(s) why the response to the statement concerned has been reflected as a "yes".
                                        </p>
                                    </div>
                                </div>

                                {/* Defect / Condition Disclosures */}
                                <div className="bg-gray-700/30 rounded-xl p-6 space-y-4">
                                    <h3 className="text-white font-semibold text-lg text-center mb-8">
                                        DEFECT / CONDITION DISCLOSURES BY OWNER
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4">
                                        This disclosure relates to the Immovable property situated at: _______________
                                    </p>

                                    <div>
                                        <h4 className="text-amber-500 font-medium mb-3">DISCLOSURE INFORMATION</h4>
                                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                            The Owner of the PROPERTY provides the information contained in this document so that prospective PURCHASERS may benefit from the contents in making their decision on whether to buy the PROPERTY and if so, on what terms. The Owner does not warrant that his responses to the various questions accurately represent the true status of the defect/condition inquired about but <span className="text-amber-500 font-semibold">does warrant</span> that his answers constitute his true and honest belief about the status. The Owner understands and accepts that this document will be incorporated into any agreement with any prospective PURCHASER.
                                        </p>

                                        {/* Questions Table */}
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse rounded">
                                                <thead>
                                                    <tr className="bg-gray-800/70">
                                                        <th className="border border-gray-600 p-3 text-left text-white font-medium w-12">#</th>
                                                        <th className="border border-gray-600 p-3 text-left text-white font-medium">Question</th>
                                                        <th className="border border-gray-600 p-3 text-center text-white font-medium w-20">Yes</th>
                                                        <th className="border border-gray-600 p-3 text-center text-white font-medium w-20">No</th>
                                                        <th className="border border-gray-600 p-3 text-center text-white font-medium w-20">N/A</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-gray-300 text-sm">
                                                    {[
                                                        "Are you aware of any defects in the roof to any structures on your property?",
                                                        "Are you bound to a lease agreement with a tenant in respect of the property?",
                                                        "Are you aware of any defects in any part of the plumbing system servicing the property, including the supply of water to the property and the disposal of waste and/or sewerage and/or storm water?",
                                                        "Are you aware of any defects in the heating and/or air conditioning systems, including air filters and humidifiers?",
                                                        "If your property has a swimming pool, are you aware of any defects in the pool or the pool filtration system including more particularly leakage of water and/or inappropriate amounts of air being drawn into the water recirculation system?",
                                                        "Are you aware of any structural defects to the property and/or in the basement or foundations of the property, including cracks, bulges and/or subsidence?",
                                                        "Are you aware of any boundary line disputes or any encroachments?",
                                                        "Are you aware of any constructions on the property which have been made without proper approved building plans and/or proper permissions from the relevant local authority?",
                                                        "Are you aware of any changes which your neighbours and/or near neighbours plan to make to their properties?",
                                                        "Are you aware of any municipal urban planning policies or permissions which are likely to impact significantly on the area in which your property is situated?",
                                                        "Are you aware of circumstances or conditions within the proximity of your property which are a source of regular nuisance (i.e. noise or smells) or threat to residents of your property?",
                                                        "Are any fixtures and fittings on your property not in good working order? This includes (but is not limited to) items like electrical plugs and switches, doors and windows, ovens, hobs and extractors, hot water geysers, solar heating systems, garden/external lighting and fountains, alarm systems and other security systems, automatic door and gate openers, remote and/centrally controlled louvers, doorbells, pool pump, pool filtration system, automatic pool cleaners, pool chlorinator, pool lights, gutters and downpipes, chimneys, irrigation system including computerised controls, air conditioners, underfloor or wall mounted heating systems, extractor systems, bore holes and associated equipment. If you answer NO it will be assumed that you will be ensuring that all such fixtures and fittings will be in good working order and will still be so on transfer of ownership to your purchaser.",
                                                        "If any of the fixtures and fittings on your property are not in good working order do you expect the tenant of your property to accept them in such condition and to excuse you from repairing or replacing them? If you answer 'NO it will be assumed that you will be ensuring that all such fixtures and fittings will be in good working order on date of lasting of the property.",
                                                        "Are you aware of any water leakage or water penetration problems in any of the constructions on your property?",
                                                        "Are you aware of any flooding problems on your property?",
                                                        "Do you have any reason to believe that the electrical supply to your property is inadequate for the property and or ordinary use of the electrical appliances/systems upon your property?",
                                                        "Are you aware of any significant defects in your property which you have caused to be repaired in the last 12 months?",
                                                        "Have you ever expressed any unhappiness with what the municipality has valued your property at for purposes of rates and taxes?",
                                                        "Is your property subject to any Home Owners Association?",
                                                        "If your property is part of a sectional title development, are you aware of the possibility of a special levy being raised in the short to medium term?",
                                                        "If your property is part of a sectional title development, do you know of any problems relating to the finances of the body corporate?",
                                                        "If your property is part of a sectional title development does the original developer have the right to return to the property and to construct any further buildings?",
                                                        "If your property is part of a sectional title development are you at all unhappy with the management of the body corporate?"
                                                    ].map((question, index) => (
                                                        <tr key={index} className="hover:bg-gray-800/30">
                                                            <td className="border border-gray-600 p-3 text-center font-medium">{index + 1}</td>
                                                            <td className="border border-gray-600 p-3">{question}</td>
                                                            <td className="border border-gray-600 p-3 text-center">
                                                                <input type="radio" name={`q${index + 1}`} value="yes" className="cursor-pointer accent-amber-500 w-4 h-4" />
                                                            </td>
                                                            <td className="border border-gray-600 p-3 text-center">
                                                                <input type="radio" name={`q${index + 1}`} value="no" className="cursor-pointer accent-[#FCD66B] w-4 h-4" />
                                                            </td>
                                                            <td className="border border-gray-600 p-3 text-center">
                                                                <input type="radio" name={`q${index + 1}`} value="na" className="cursor-pointer w-4 h-4" />
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Additional Information */}
                                    <div className="mt-16">
                                        <p className="text-gray-300 text-sm mb-8 mt-4">
                                            If you answered YES to any of the questions posed in the questionnaire set out above and if reasonably appropriate, then you are required to briefly explain and amplify your answer in the place provided for below:
                                        </p>

                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="bg-gray-800/70">
                                                        <th className="border border-gray-600 p-3 text-left text-white font-medium w-1/4">Question Number</th>
                                                        <th className="border border-gray-600 p-3 text-left text-white font-medium">Additional Information</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                                                        <tr key={index}>
                                                            <td className="border border-gray-600 p-3">
                                                                <input
                                                                    type="text"
                                                                    className="w-full bg-gray-800/50 border-none px-2 py-1 text-white focus:outline-none"
                                                                    placeholder="Question #"
                                                                />
                                                            </td>
                                                            <td className="border border-gray-600 p-3">
                                                                <textarea
                                                                    rows="2"
                                                                    className="w-full bg-gray-800/50 border-none px-2 py-1 text-white focus:outline-none resize-none"
                                                                    placeholder="Provide additional details..."
                                                                />
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* History of Ownership */}
                                <div className="bg-gray-700/30 rounded-xl p-6 space-y-4">
                                    <h3 className="text-white font-semibold text-lg mb-4">
                                        HISTORY OF OWNERSHIP AND OCCUPATION
                                    </h3>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-white font-medium block mb-2">
                                                1. When did you become the owner of the property?
                                            </label>
                                            <input
                                                type="date"
                                                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-white font-medium block mb-2">
                                                2. Have you personally occupied property for the entire time of ownership?
                                            </label>
                                            <div className="flex gap-6">
                                                <label className="flex items-center gap-2 text-gray-300">
                                                    <input type="radio" name="occupied" value="yes" />
                                                    Yes
                                                </label>
                                                <label className="flex items-center gap-2 text-gray-300">
                                                    <input type="radio" name="occupied" value="no" />
                                                    No
                                                </label>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-white font-medium block mb-2">
                                                3. If you did not personally occupy the property for the entire time of ownership, when did you last personally occupy the property and for how long?
                                            </label>
                                            <textarea
                                                rows="3"
                                                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500"
                                                placeholder="Provide details..."
                                            />
                                        </div>
                                    </div>

                                    {/* Disclaimer */}
                                    <div className="mt-6 bg-gray-800/50 p-4 rounded-lg">
                                        <h4 className="text-amber-500 font-medium mb-2">DISCLAIMER</h4>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            As already intimated this disclosure document is designed to communicate to any prospective PURCHASER of the PROPERTY to which this disclosure relates, the honestly held beliefs of the Owner of the PROPERTY and is not designed to represent that the potential conditions canvassed in the questionnaire do or do not in fact exist. The duty therefore still rests on any potential PURCHASER to examine the PROPERTY properly and thoroughly and if concerned about any potential defect/condition (whether patent or latent) to obtain independent advice from an appropriate expert before concluding any binding agreement.
                                        </p>
                                    </div>
                                </div>

                                {/* Signature Section */}
                                <div className="bg-gray-700/30 rounded-xl p-6 space-y-4">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-white font-medium block mb-2">Dated at</label>
                                            <input
                                                type="text"
                                                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500"
                                                placeholder="Location"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-white font-medium block mb-2">On</label>
                                            <input
                                                type="date"
                                                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-white font-medium block mb-2">Owner</label>
                                        <input
                                            type="text"
                                            className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500"
                                            placeholder="Owner name"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-white font-medium block mb-2">Acknowledgement of receipt of copy by</label>
                                        <input
                                            type="text"
                                            className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500"
                                            placeholder="Recipient name"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-white font-medium block mb-2">Signature</label>
                                        <div className="bg-white rounded-lg p-4 h-32 border-2 border-gray-600 flex items-center justify-center relative">
                                            <p className="text-gray-400 text-sm italic">Click to sign digitally</p>
                                        </div>
                                        <p className="text-gray-400 text-xs mt-2">
                                            By signing, you confirm that all information provided is accurate and complete
                                        </p>
                                    </div>

                                    <div className="mt-2">
                                        <label className="text-white font-medium block mb-2">Signature of prospective PURCHASER</label>
                                        <div className="bg-white rounded-lg p-4 h-32 border-2 border-gray-600 flex items-center justify-center">
                                            <p className="text-gray-400 text-sm italic">Click to sign digitally</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Buttons */}
                                <div className="flex justify-end gap-4 pt-4">
                                    {/* <button
                                        onClick={onClose}
                                        className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                                    >
                                        Save as Draft
                                    </button> */}
                                    <button onClick={onAccept}
                                        className="px-6 py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity">
                                        Submit Report
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FillOfflineModal;

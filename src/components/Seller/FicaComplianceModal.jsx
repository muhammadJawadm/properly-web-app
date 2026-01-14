import { useState } from 'react';
import { FaTimes, FaDownload, FaUpload } from 'react-icons/fa';

const FicaComplianceModal = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('offline');
    const [formData, setFormData] = useState({});

    const mandatoryDocuments = [
        { name: 'Identity Document', details: '' },
        { name: 'Proof of residence', details: '(Dated within last 3 months)' },
        { name: 'Marriage Certificate/ Ante nuptial contract', details: '(If applicable)' },
        { name: 'Divorce Order/Settlement Agreement', details: '(If applicable)' }
    ];

    const optionalDocuments = [
        { name: 'Latest Tax return' },
        { name: 'Pay slip/Proof of Income' },
        { name: 'Proof of source of wealth' },
        { name: 'Proof of banking details' }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    // Fill Offline Content
    const renderOfflineContent = () => (
        <>
            {/* Description */}
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Upload your mandatory FICA documents as required by South African property law.
                The attorney will review and verify your documents.
            </p>

            {/* What you need to do */}
            <div className="bg-gray-900/50 rounded-xl p-4 sm:p-5 mb-6">
                <h3 className="text-white font-semibold mb-4 text-base sm:text-lg">What you need to do</h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>This FICA questionnaire must be completed by each party (Buyer & Seller).</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Download the official FICA Questionnaire, Natural Person (MASTER).</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Complete and sign the questionnaire offline.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Upload the required documents listed below.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>The attorney will review and verify each document.</span>
                    </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                    <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium">
                        <FaDownload />
                        <span>Download FICA Questionnaire (PDF)</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-black rounded-lg transition-colors text-sm font-medium">
                        <FaUpload />
                        <span>Upload Completed FICA Questionnaire</span>
                    </button>
                </div>
            </div>

            {/* Mandatory documents */}
            <div className="mb-6">
                <h3 className="text-white font-semibold mb-4 text-base sm:text-lg">Mandatory documents</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {mandatoryDocuments.map((doc, idx) => (
                        <div key={idx} className="bg-gray-900/50 rounded-lg p-3 sm:p-4 border border-gray-700/50">
                            <div className="flex items-start justify-between gap-2 mb-2">
                                <div className="flex-1">
                                    <p className="text-white text-sm font-medium mb-1">{doc.name}</p>
                                    {doc.details && (
                                        <p className="text-gray-400 text-xs">{doc.details}</p>
                                    )}
                                </div>
                                <button className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 hover:bg-amber-500/30 flex items-center justify-center text-amber-500 transition-colors">
                                    <FaUpload className="text-sm" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Upload documents (Optional) */}
            <div className="mb-6">
                <h3 className="text-white font-semibold mb-1 text-base sm:text-lg">Upload documents <span className="text-gray-500 text-sm font-normal">(Optional)</span></h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {optionalDocuments.map((doc, idx) => (
                        <div key={idx} className="bg-gray-900/50 rounded-lg p-3 sm:p-4 border border-gray-700/50">
                            <div className="flex items-center justify-between gap-2">
                                <p className="text-white text-sm">{doc.name}</p>
                                <button className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 hover:bg-amber-500/30 flex items-center justify-center text-amber-500 transition-colors">
                                    <FaUpload className="text-sm" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Submit Button */}
            <button className="w-full py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base">
                Submit Document
            </button>
        </>
    );

    // Fill Online Content - Complete FICA Questionnaire
    const renderOnlineContent = () => (
        <>
            <div className="mb-6">
                <h2 className="text-white text-xl font-bold mb-3">INDIVIDUAL FICA QUESTIONNAIRE</h2>
                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                    Client identification is an international requirement and our firm, as an Accountable Institution defined in the Financial Intelligence Centre Act, is obliged to identify our clients. In terms of Sections 21, 21A, 21B, 21C and 21E of the FIC Act, our firm is also obliged to identify and verify the following information.
                </p>
                <p className="text-white text-sm font-semibold">All questions below are compulsory.</p>
            </div>

            <div className="space-y-5">
                {/* Question 1 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-3">1. Have you previously engaged with our firm?</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q1" value="yes" className="w-4 h-4 text-amber-500" />
                            <span className="text-gray-300 text-sm">YES</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q1" value="no" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">NO</span>
                        </label>
                    </div>
                </div>

                {/* Question 2 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">2. If yes, in what capacity?</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                </div>

                {/* Question 3 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">3. What is the nature of your current engagement with our firm?</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                </div>

                {/* Question 4 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">4. Client Name:</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                </div>

                {/* Question 5 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">5. Identity Number (Passport No. if Foreign):</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                </div>

                {/* Question 6 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">6. Date of Birth:</label>
                    <input
                        type="date"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                </div>

                {/* Question 7 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-3">7. Were you born in South Africa?</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q7" value="yes" className="w-4 h-4 text-amber-500" />
                            <span className="text-gray-300 text-sm">YES</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q7" value="no" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">NO</span>
                        </label>
                    </div>
                </div>

                {/* Question 8 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">8. If not South Africa, where were you born?</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                </div>

                {/* Question 9 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">9. Country of citizenship (if not identifying with South African ID):</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                </div>

                {/* Question 10 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-3">10. Do you hold a South African VISA in your passport?</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q10" value="yes" className="w-4 h-4 text-amber-500" />
                            <span className="text-gray-300 text-sm">YES</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q10" value="no" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">NO</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q10" value="na" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">N/A</span>
                        </label>
                    </div>
                </div>

                {/* Question 11 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">11. Address of main place of residence:</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                </div>

                {/* Question 12 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">12. Telephone (C):</label>
                    <input
                        type="tel"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                </div>

                {/* Question 13 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">13. Telephone (W):</label>
                    <input
                        type="tel"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                </div>

                {/* Question 14 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">14. Telephone (H):</label>
                    <input
                        type="tel"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                </div>

                {/* Question 15 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">15. Email:</label>
                    <input
                        type="email"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                </div>

                {/* Question 16 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">16. Income tax number issued by SARS:</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                </div>

                {/* Question 17 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">17. Annual Income from all sources (if not registered for tax):</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                </div>

                {/* Question 18 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">18. Country of Tax Base (if not registered for income tax in South Africa):</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                </div>

                {/* Question 19 - Marital Status */}
                <div>
                    <label className="block text-gray-300 text-sm mb-3">19. Marital status:</label>
                    <div className="space-y-2">
                        <label className="flex items-start gap-2 cursor-pointer">
                            <input type="radio" name="q19" className="w-4 h-4 mt-1" />
                            <span className="text-gray-300 text-sm">Unmarried</span>
                        </label>
                        <label className="flex items-start gap-2 cursor-pointer">
                            <input type="radio" name="q19" className="w-4 h-4 mt-1" />
                            <span className="text-gray-300 text-sm">Married Out Of Community Of Property</span>
                        </label>
                        <label className="flex items-start gap-2 cursor-pointer">
                            <input type="radio" name="q19" className="w-4 h-4 mt-1" />
                            <span className="text-gray-300 text-sm">Married According To The Laws Of A Foreign Country (Spouse Must Also Complete Questionnaire)</span>
                        </label>
                        <label className="flex items-start gap-2 cursor-pointer">
                            <input type="radio" name="q19" className="w-4 h-4 mt-1" />
                            <span className="text-gray-300 text-sm">Married According To Customary Laws</span>
                        </label>
                        <label className="flex items-start gap-2 cursor-pointer">
                            <input type="radio" name="q19" className="w-4 h-4 mt-1" />
                            <span className="text-gray-300 text-sm">Married According To Muslim / Hindu / Islamic Rites</span>
                        </label>
                        <label className="flex items-start gap-2 cursor-pointer">
                            <input type="radio" name="q19" className="w-4 h-4 mt-1" />
                            <span className="text-gray-300 text-sm">Other</span>
                        </label>
                    </div>
                </div>

                {/* Question 20-27 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">20. Main industry of trade:</label>
                    <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500" />
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-2">21. Other industries of trade:</label>
                    <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500" />
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-2">22. Occupation:</label>
                    <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500" />
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-2">23. Employer Name:</label>
                    <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500" />
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-2">24. Employer Address:</label>
                    <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500" />
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-2">25. Source of income:</label>
                    <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500" />
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-2">26. Source of Capital Wealth:</label>
                    <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500" />
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-2">27. Bank details of your main banking account:</label>
                    <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500" />
                </div>

                {/* Questions with YES/NO - 28-37 */}
                <div>
                    <label className="block text-gray-300 text-sm mb-3">28. Do you have any bank accounts abroad?</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q28" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">YES</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q28" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">NO</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-3">29. Will you be making payments from an account abroad?</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q29" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">YES</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q29" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">NO</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-2">30. If yes, provide foreign banking account details:</label>
                    <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500" />
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-3">31. Do you reside & work in a foreign jurisdiction?</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q31" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">YES</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q31" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">NO</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-2">32. If yes, which country do you permanently reside and work?</label>
                    <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500" />
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-3">33. Are you a shareholder in a company based abroad?</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q33" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">YES</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q33" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">NO</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-2">34. If yes, please supply details:</label>
                    <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500" />
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-3">35. Are you involved in trading dual-use goods subject to export control, or connected to a university/research facility involved in such goods?</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q35" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">YES</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q35" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">NO</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-3">36. Are you now or have you ever been a Domestic or Foreign Politically Exposed Person, or related to/associated with one?</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q36" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">YES</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q36" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">NO</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-3">37. Do the funds relate to a virtual currency transaction (e.g., Bitcoin)?</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q37" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">YES</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="q37" className="w-4 h-4" />
                            <span className="text-gray-300 text-sm">NO</span>
                        </label>
                    </div>
                </div>

                {/* Questions 38-42 - Next of Kin */}
                <div>
                    <label className="block text-gray-300 text-sm mb-2">38. Next of Kin Name:</label>
                    <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500" />
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-2">39. Relationship:</label>
                    <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500" />
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-2">40. Next of Kin Telephone:</label>
                    <input type="tel" className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500" />
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-2">41. Next of Kin Email:</label>
                    <input type="email" className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500" />
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-2">42. Next of Kin Address:</label>
                    <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500" />
                </div>

                {/* Document Upload Section */}
                <div className="bg-gray-900/50 rounded-xl p-4 mt-6">
                    <p className="text-gray-300 text-sm mb-4">
                        In order to comply with our obligations in terms of the Financial Intelligence Centre Act, please provide us with copies of the following:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <p className="text-white text-sm font-medium">Identity Document</p>
                                    <p className="text-gray-400 text-xs">Passport / SA VISA if issued in passport</p>
                                </div>
                                <button className="flex-shrink-0 w-8 h-8 rounded bg-amber-500/20 hover:bg-amber-500/30 flex items-center justify-center text-amber-500">
                                    <FaUpload className="text-sm" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <p className="text-white text-sm font-medium">Proof of residence</p>
                                    <p className="text-gray-400 text-xs">Dated within last 3 months</p>
                                </div>
                                <button className="flex-shrink-0 w-8 h-8 rounded bg-amber-500/20 hover:bg-amber-500/30 flex items-center justify-center text-amber-500">
                                    <FaUpload className="text-sm" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <p className="text-white text-sm font-medium">Marriage Certificate/Ante nuptial contract</p>
                                    <p className="text-gray-400 text-xs">If applicable</p>
                                </div>
                                <button className="flex-shrink-0 w-8 h-8 rounded bg-amber-500/20 hover:bg-amber-500/30 flex items-center justify-center text-amber-500">
                                    <FaUpload className="text-sm" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <p className="text-white text-sm font-medium">Divorce Order/Settlement Agreement</p>
                                    <p className="text-gray-400 text-xs">If applicable</p>
                                </div>
                                <button className="flex-shrink-0 w-8 h-8 rounded bg-amber-500/20 hover:bg-amber-500/30 flex items-center justify-center text-amber-500">
                                    <FaUpload className="text-sm" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-3">
                        Please be advised that we may also request copies of the following documents from you and would appreciate it if these are kept handy in case they are required:
                    </p>

                    <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                        <li>Latest tax return or Letter of Good Standing</li>
                        <li>Payslip or other proof of income</li>
                        <li>Proof of source of wealth</li>
                        <li>Proof of banking details</li>
                    </ol>
                </div>

                {/* Declaration */}
                <div className="bg-gray-900/50 rounded-xl p-4 mt-6">
                    <p className="text-amber-500 text-sm font-semibold mb-3">
                        DECLARATION: <span className="text-gray-300 font-normal">I confirm that all the information completed on this FICA questionnaire is correct and that I have truthfully completed all such questions. I confirm further that I do not trade in illegal activities.</span>
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                        <button className="px-4 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded transition-colors">
                            ↻ Redo
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-2">
                                <p className="text-gray-500 text-xs italic text-center">Signature</p>
                            </div>
                            <p className="text-gray-400 text-xs text-center">Client signature</p>
                        </div>
                        <div>
                            <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-2">
                                <p className="text-gray-500 text-xs italic text-center">Signature</p>
                            </div>
                            <p className="text-gray-400 text-xs text-center">Client signature</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <button className="w-full py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base mt-6">
                Submit Document
            </button>
        </>
    );

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-4 sm:p-6 flex items-center justify-between z-10">
                    <h2 className="text-white text-xl sm:text-2xl font-bold">FICA Compliance</h2>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-colors"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-700 sticky top-[72px] sm:top-[88px] bg-gray-800 z-10">
                    <button
                        onClick={() => setActiveTab('offline')}
                        className={`flex-1 py-3 sm:py-4 px-4 font-medium transition-colors ${activeTab === 'offline'
                            ? 'text-amber-500 border-b-2 border-amber-500 bg-gray-700/30'
                            : 'text-gray-400 hover:text-gray-300'
                            }`}
                    >
                        Fill offline
                    </button>
                    <button
                        onClick={() => setActiveTab('online')}
                        className={`flex-1 py-3 sm:py-4 px-4 font-medium transition-colors ${activeTab === 'online'
                            ? 'text-amber-500 border-b-2 border-amber-500 bg-gray-700/30'
                            : 'text-gray-400 hover:text-gray-300'
                            }`}
                    >
                        Fill Online
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                    {activeTab === 'offline' ? renderOfflineContent() : renderOnlineContent()}
                </div>
            </div>
        </div>
    );
};

export default FicaComplianceModal;

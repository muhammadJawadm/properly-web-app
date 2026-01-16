import { FaDownload, FaUpload } from 'react-icons/fa';

const FicaOfflineContent = ({ onFileUpload, mandatoryDocuments, optionalDocuments }) => {
    return (
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
};

export default FicaOfflineContent;

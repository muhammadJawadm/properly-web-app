import { FaTimes, FaUpload } from 'react-icons/fa';

const FICAComplianceModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleDownloadQuestionnaire = () => {
        console.log('Downloading FICA Questionnaire...');
        // Add download functionality
    };

    const handleUploadQuestionnaire = () => {
        console.log('Uploading FICA Questionnaire...');
        // Add upload functionality
    };

    const handleUploadDocument = (docType) => {
        console.log(`Uploading ${docType}...`);
        // Add upload functionality
    };

    const handleSubmit = () => {
        console.log('Submitting FICA documents...');
        // Add submit functionality
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative bg-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6 flex items-center justify-between z-10">
                    <h2 className="text-2xl font-bold text-white">FICA Compliance</h2>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-colors"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-8">
                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Upload your mandatory FICA documents as required by South African property law.
                        The attorney will review and verify your documents.
                    </p>

                    {/* What you need to do */}
                    <div className="bg-gray-700/40 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">What you need to do</h3>
                        <ul className="space-y-3 mb-6">
                            <li className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="text-amber-500 mt-1">•</span>
                                <span>This FICA questionnaire must be completed by each party (Buyer & Seller).</span>
                            </li>
                            <li className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="text-amber-500 mt-1">•</span>
                                <span>Download the official FICA Questionnaire, Natural Person (MASTER).</span>
                            </li>
                            <li className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="text-amber-500 mt-1">•</span>
                                <span>Complete and sign the questionnaire offline.</span>
                            </li>
                            <li className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="text-amber-500 mt-1">•</span>
                                <span>Upload the required documents listed below.</span>
                            </li>
                            <li className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="text-amber-500 mt-1">•</span>
                                <span>The attorney will review and verify each document.</span>
                            </li>
                        </ul>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={handleDownloadQuestionnaire}
                                className="px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                            >
                                <FaUpload className="rotate-180" />
                                Download FICA Questionnaire (PDF)
                            </button>
                            <button
                                onClick={handleUploadQuestionnaire}
                                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black rounded-lg font-medium transition-colors flex items-center gap-2"
                            >
                                <FaUpload />
                                Upload Completed FICA Questionnaire
                            </button>
                        </div>
                    </div>

                    {/* Mandatory documents */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Mandatory documents</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button
                                onClick={() => handleUploadDocument('Identity Document')}
                                className="bg-gray-700/40 hover:bg-gray-700/60 border border-gray-600 rounded-xl p-4 text-left transition-colors group"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Identity Document</h4>
                                    </div>
                                    <FaUpload className="text-amber-500 text-xl group-hover:scale-110 transition-transform" />
                                </div>
                            </button>

                            <button
                                onClick={() => handleUploadDocument('Proof of residence')}
                                className="bg-gray-700/40 hover:bg-gray-700/60 border border-gray-600 rounded-xl p-4 text-left transition-colors group"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Proof of residence</h4>
                                        <p className="text-gray-400 text-xs">(Dated within last 3 months)</p>
                                    </div>
                                    <FaUpload className="text-amber-500 text-xl group-hover:scale-110 transition-transform" />
                                </div>
                            </button>

                            <button
                                onClick={() => handleUploadDocument('Marriage Certificate/Ante nuptial contract')}
                                className="bg-gray-700/40 hover:bg-gray-700/60 border border-gray-600 rounded-xl p-4 text-left transition-colors group"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Marriage Certificate/Ante nuptial contract</h4>
                                        <p className="text-gray-400 text-xs">(If applicable)</p>
                                    </div>
                                    <FaUpload className="text-amber-500 text-xl group-hover:scale-110 transition-transform" />
                                </div>
                            </button>

                            <button
                                onClick={() => handleUploadDocument('Divorce Order/Settlement Agreement')}
                                className="bg-gray-700/40 hover:bg-gray-700/60 border border-gray-600 rounded-xl p-4 text-left transition-colors group"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Divorce Order/Settlement Agreement</h4>
                                        <p className="text-gray-400 text-xs">(If applicable)</p>
                                    </div>
                                    <FaUpload className="text-amber-500 text-xl group-hover:scale-110 transition-transform" />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Upload documents (Optional) */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Upload documents <span className="text-gray-400 text-base">(Optional)</span></h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button
                                onClick={() => handleUploadDocument('Latest Tax return')}
                                className="bg-gray-700/40 hover:bg-gray-700/60 border border-gray-600 rounded-xl p-4 text-left transition-colors group"
                            >
                                <div className="flex items-center justify-between">
                                    <h4 className="text-white font-medium">Latest Tax return</h4>
                                    <FaUpload className="text-amber-500 text-xl group-hover:scale-110 transition-transform" />
                                </div>
                            </button>

                            <button
                                onClick={() => handleUploadDocument('Pay slip/Proof of Income')}
                                className="bg-gray-700/40 hover:bg-gray-700/60 border border-gray-600 rounded-xl p-4 text-left transition-colors group"
                            >
                                <div className="flex items-center justify-between">
                                    <h4 className="text-white font-medium">Pay slip/Proof of Income</h4>
                                    <FaUpload className="text-amber-500 text-xl group-hover:scale-110 transition-transform" />
                                </div>
                            </button>

                            <button
                                onClick={() => handleUploadDocument('Proof of source of wealth')}
                                className="bg-gray-700/40 hover:bg-gray-700/60 border border-gray-600 rounded-xl p-4 text-left transition-colors group"
                            >
                                <div className="flex items-center justify-between">
                                    <h4 className="text-white font-medium">Proof of source of wealth</h4>
                                    <FaUpload className="text-amber-500 text-xl group-hover:scale-110 transition-transform" />
                                </div>
                            </button>

                            <button
                                onClick={() => handleUploadDocument('Proof of banking details')}
                                className="bg-gray-700/40 hover:bg-gray-700/60 border border-gray-600 rounded-xl p-4 text-left transition-colors group"
                            >
                                <div className="flex items-center justify-between">
                                    <h4 className="text-white font-medium">Proof of banking details</h4>
                                    <FaUpload className="text-amber-500 text-xl group-hover:scale-110 transition-transform" />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-4">
                        <button
                            onClick={handleSubmit}
                            className="px-12 py-4 bg-amber-500 hover:bg-amber-600 text-black rounded-full font-semibold text-lg transition-colors shadow-lg"
                        >
                            Submit Document
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FICAComplianceModal;

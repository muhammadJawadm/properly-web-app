import { FaTimes } from "react-icons/fa";

const VerificationResultsModal = ({
    isOpen,
    onClose,
    verificationStatus,
    onUploadDocuments,
    onContactSupport,
    onContinue
}) => {
    if (!isOpen) return null;

    return (
        <>
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 overflow-y-auto">
                <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 md:p-12 max-w-xl w-full my-4 shadow-2xl relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                    >
                        <FaTimes size={20} />
                    </button>

                    <div
                        className="text-center overflow-y-auto max-h-[calc(90vh-2rem)] hide-scrollbar"
                        style={{
                            scrollbarWidth: 'none', /* Firefox */
                            msOverflowStyle: 'none', /* IE and Edge */
                        }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">Ownership Results</h2>

                        {/* Partial Match */}
                        {verificationStatus === "partial" && (
                            <>
                                <div className="mb-8">
                                    <span className="text-gray-400 text-sm">Result</span>
                                    <span className="ml-4 text-amber-500 font-semibold">PARTIAL MATCH</span>
                                </div>

                                <div className="text-left mt-8 mb-16">
                                    <p className="text-gray-300 text-sm mb-4 mt-4 font-semibold">Reasoning:</p>
                                    <ul className="space-y-2 text-gray-400 text-sm">
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Some details do not match.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Request Upload of authorization docs (Power of Attorney, Executor Letter, etc.)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex justify-center mt-24">
                                    <button
                                        onClick={onUploadDocuments}
                                        className="w-2/3 px-8 py-3 rounded-full font-semibold text-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                        style={{ backgroundColor: '#EDBF6D' }}
                                    >
                                        Upload Documents
                                    </button>
                                </div>
                            </>
                        )}

                        {/* Not Confirmed */}
                        {verificationStatus === "notConfirmed" && (
                            <>
                                <div className="mb-8">
                                    <span className="text-gray-400 text-sm">Result</span>
                                    <span className="ml-4 text-red-500 font-semibold">NOT CONFIRMED</span>
                                </div>

                                <div className="text-left mt-8 mb-16">
                                    <p className="text-gray-300 text-sm mt-4 mb-4 font-semibold">Reasoning:</p>
                                    <ul className="space-y-2 text-gray-400 text-sm">
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Ownership Cannot be confirmed.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Please contact support or upload authorization documents.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex justify-center mt-24">
                                    <button
                                        onClick={onContactSupport}
                                        className="w-2/3 px-8 py-3 rounded-full font-semibold text-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                        style={{ backgroundColor: '#EDBF6D' }}
                                    >
                                        Contact Support
                                    </button>
                                </div>
                            </>
                        )}

                        {/* Successfully Verified */}
                        {verificationStatus === "success" && (
                            <>
                                {/* Green Checkmark */}
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
                                        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">Successfully Verified</h3>
                                <p className="text-gray-400 text-sm mb-6">Verified by lightstone ...</p>

                                <div className="mb-8">
                                    <span className="text-gray-400 text-sm">Status</span>
                                    <span className="ml-4 text-green-500 font-semibold">VERIFIED</span>
                                </div>

                                <p className="text-gray-300 text-sm mb-8">
                                    Congratulations! You have successfully verified your Ownership, Now you can create listing. You will get verified ownership Badge.
                                </p>
                                <div className="flex justify-center mt-12">                                    <button
                                    onClick={onContinue || onClose}
                                    className="w-2/3 px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                    style={{ backgroundColor: '#0A1628' }}
                                >
                                    Continue
                                </button>
                                </div>

                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerificationResultsModal;

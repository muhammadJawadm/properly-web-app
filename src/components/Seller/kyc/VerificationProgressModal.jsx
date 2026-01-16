import { FaTimes } from "react-icons/fa";

const VerificationProgressModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl p-8 sm:p-12 md:p-24 max-w-xl w-full shadow-2xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    <FaTimes size={20} />
                </button>

                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Verification in progress</h2>
                    <p className="text-gray-400 text-sm mb-8">Verifying by lightstone ...</p>

                    {/* Loading Spinner */}
                    <div className="flex justify-center mb-8">
                        <div className="relative w-24 h-24">
                            <div className="absolute inset-0 border-4 border-gray-600 rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-transparent border-t-amber-500 rounded-full animate-spin"></div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <span className="text-gray-400 text-sm">Status</span>
                        <span className="ml-4 text-amber-500 font-semibold">PENDING</span>
                    </div>

                    <p className="text-gray-300 text-sm">
                        We are verifying your identity and property ownership.
                        This may take a few minutes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VerificationProgressModal;

import { FaTimes, FaCheck } from 'react-icons/fa';

const VerificationSuccessModal = ({ isOpen, onClose, onContinue }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#4a4a4a] rounded-2xl w-full max-w-md p-8">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                >
                    <FaTimes size={20} />
                </button>

                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                        <FaCheck className="text-white" size={48} />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-white text-2xl font-semibold mb-3 text-center">
                    Law firm details Verified
                </h2>

                {/* Message */}
                <p className="text-gray-300 text-center mb-8">
                    Your firm's information has been successfully authenticated.
                </p>

                {/* Continue Button */}
                <button
                    onClick={onContinue}
                    className="w-full py-3 px-6 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-full hover:opacity-90 transition-opacity"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default VerificationSuccessModal;

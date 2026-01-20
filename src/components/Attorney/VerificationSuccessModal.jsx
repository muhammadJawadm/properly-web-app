import { FaCheck } from 'react-icons/fa';

const VerificationSuccessModal = ({ isOpen, onContinue }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm" />

            {/* Modal */}
            <div className="relative bg-gray-800 rounded-2xl p-12 sm:p-12 w-full max-w-md max-h-[90vh] overflow-y-auto text-center">
                {/* Green Checkmark */}
                <div className="mb-16 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
                        <FaCheck className="text-white text-5xl" />
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-bold text-white mb-4">
                    Law firm details Verified
                </h2>

                {/* Description */}
                <p className="text-gray-300 mb-8 leading-relaxed">
                    Your firm's information has been successfully authenticated. You can now access the transfer file and begin the conveyancing process.
                </p>

                {/* Continue Button */}
                <button
                    onClick={onContinue}
                    className="mt-10 w-3/4 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition-colors"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default VerificationSuccessModal;

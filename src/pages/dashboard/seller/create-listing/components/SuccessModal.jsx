import { FaTimes } from 'react-icons/fa';

const SuccessModal = ({ isOpen, onClose, onContinue }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-800/90 rounded-2xl p-8 max-w-md w-full mx-4 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <FaTimes size={20} />
                </button>

                {/* Success Badge with Stars */}
                <div className="relative flex justify-center mb-6">
                    {/* Floating Stars */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="absolute -top-2 left-1/4 text-amber-400 text-2xl animate-bounce" style={{ animationDelay: '0s' }}>⭐</span>
                        <span className="absolute -top-4 right-1/4 text-amber-400 text-xl animate-bounce" style={{ animationDelay: '0.2s' }}>⭐</span>
                        <span className="absolute top-4 left-1/3 text-amber-400 text-lg animate-bounce" style={{ animationDelay: '0.4s' }}>⭐</span>
                        <span className="absolute top-2 right-1/3 text-amber-400 text-lg animate-bounce" style={{ animationDelay: '0.6s' }}>⭐</span>
                    </div>

                    {/* Badge */}
                    <div className="relative w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center">
                            <span className="text-4xl">⭐</span>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-2xl font-semibold text-center mb-2">Successfully Verified</h3>

                {/* Subtitle */}
                <p className="text-gray-400 text-center text-sm mb-4">Verified by lightstone ...</p>

                {/* Status */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="text-gray-400 text-sm">Status</span>
                    <span className="text-green-400 font-semibold">VERIFIED</span>
                </div>

                {/* Message */}
                <p className="text-gray-300 text-center text-sm mb-8">
                    Congratulations! You got verified ownership Badge. You have successfully verified your Ownership. Now you can create listing.
                </p>

                {/* Continue Button */}
                <button
                    onClick={onContinue}
                    className="w-full py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-full hover:opacity-90 transition-opacity"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;

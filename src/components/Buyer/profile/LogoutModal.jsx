import { FaTimes, FaPowerOff } from 'react-icons/fa';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#4a4a4a] rounded-2xl w-full max-w-sm p-8">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                >
                    <FaTimes size={20} />
                </button>

                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                        <div className="relative">
                            {/* Door frame */}
                            <div className="w-16 h-20 border-4 border-[#4a4a4a] rounded-lg bg-[#4a4a4a] relative">
                                {/* Door handle lines */}
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 space-y-1">
                                    <div className="w-6 h-0.5 bg-red-400"></div>
                                    <div className="w-6 h-0.5 bg-red-400"></div>
                                </div>
                            </div>
                            {/* Logout arrow */}
                            <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                                <FaPowerOff className="text-red-400" size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-white text-2xl font-semibold mb-3 text-center">
                    Logout
                </h2>

                {/* Message */}
                <p className="text-gray-300 text-center mb-8">
                    Do you want to logout your account?
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3 px-6 border-2 border-gray-500 text-white font-semibold rounded-full hover:bg-gray-500/20 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 py-3 px-6 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-full hover:opacity-90 transition-opacity"
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;

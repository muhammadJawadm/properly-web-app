import { FaTimes } from 'react-icons/fa';

const LoadingModal = ({ title, message, isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-800/90 rounded-2xl h-[90vh] overflow-y-auto p-16 py-36 max-w-xl w-full mx-2 relative">
                {/* Loading Spinner */}
                <div className="flex justify-center mb-12">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="w-8 h-8 bg-amber-500 rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-8 h-8 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        <div className="w-8 h-8 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-2xl font-semibold text-center mb-10">{title}</h3>

                {/* Message */}
                <p className="text-gray-400 text-center text-sm">{message}</p>
            </div>
        </div>
    );
};

export default LoadingModal;

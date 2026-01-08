import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PublishedSuccess = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleViewListing = () => {
        navigate('/seller/property-listings');
        onClose();
    };

    const handleViewDashboard = () => {
        navigate('/seller/dashboard');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-800/95 backdrop-blur-xl rounded-2xl overflow-hidden">
                {/* Success Icon */}
                <div className="p-8 text-center space-y-6">
                    <div className="relative inline-block">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto">
                            <FaCheckCircle className="text-white" size={48} />
                        </div>
                        {/* Animated rings */}
                        <div className="absolute inset-0 w-24 h-24 mx-auto">
                            <div className="absolute inset-0 border-4 border-green-400 rounded-full animate-ping opacity-20"></div>
                            <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-white text-2xl font-bold mb-2">Listing Published!</h2>
                        <p className="text-gray-300 text-sm">
                            Your property listing has been successfully published and is now live on Properly and partner platforms.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="bg-gray-700/30 rounded-lg p-4">
                            <p className="text-gray-400 text-xs mb-1">Listing ID</p>
                            <p className="text-white font-semibold">#PR{Math.floor(Math.random() * 10000)}</p>
                        </div>
                        <div className="bg-gray-700/30 rounded-lg p-4">
                            <p className="text-gray-400 text-xs mb-1">Status</p>
                            <p className="text-green-400 font-semibold">Active</p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3 pt-4">
                        <button
                            onClick={handleViewListing}
                            className="w-full py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-full hover:opacity-90 transition-opacity"
                        >
                            View My Listings
                        </button>
                        <button
                            onClick={handleViewDashboard}
                            className="w-full py-3 bg-gray-700/50 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors"
                        >
                            Go to Dashboard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublishedSuccess;

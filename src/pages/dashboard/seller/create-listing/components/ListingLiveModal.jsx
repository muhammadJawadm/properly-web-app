import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ListingLiveModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    const platforms = [
        {
            name: 'Property24',
            icon: (
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">24</span>
                </div>
            ),
            time: currentTime
        },
        {
            name: 'Private Property',
            icon: (
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    </svg>
                </div>
            ),
            time: currentTime
        },
        {
            name: 'Instagram',
            icon: (
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </div>
            ),
            time: currentTime
        },
        {
            name: 'Facebook',
            icon: (
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                </div>
            ),
            time: currentTime
        }
    ];

    const handleViewListing = () => {
        navigate('/seller/listings');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-xl max-h-[90vh] bg-gray-800/95 backdrop-blur-xl rounded-2xl overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-end p-4 pb-0 border-gray-700">
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors border bg-gray-500 p-1 border-white rounded-full">
                        <FaTimes size={20} />
                    </button>
                </div>
                <div className="flex items-center justify-center px-6 pt-2 pb-6 border-b border-gray-700">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-white text-2xl font-bold mb-1">Your Listing is LIVE</h2>
                        <div className="text-gray-400 text-xs space-y-0.5">
                            <p>Published: {new Date().toLocaleString('en-ZA', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                hour12: false
                            })} (SAST)</p>
                            <p>Listing snapshot saved (ID: AB12345)</p>
                        </div>
                    </div>
                </div>

                {/* Platforms */}
                <div className="p-6 px-16 space-y-3">
                    {platforms.map((platform, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 hover:bg-gray-700/50 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                {platform.icon}
                                <span className="text-white font-medium">{platform.name}</span>
                            </div>
                            <span className="text-gray-400 text-sm">{platform.time}</span>
                        </div>
                    ))}
                </div>

                {/* View Listing Button */}
                <div className="p-6 flex justify-center items-center pt-0 pb-10">
                    <button
                        onClick={handleViewListing}
                        className="w-1/2 py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-full hover:opacity-90 transition-opacity"
                    >
                        View Listing
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListingLiveModal;

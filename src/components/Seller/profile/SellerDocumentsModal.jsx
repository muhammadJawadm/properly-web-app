import { FaTimes } from 'react-icons/fa';

const SellerDocumentsModal = ({ isOpen, onClose }) => {
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

                {/* Title */}
                <h2 className="text-white text-2xl font-semibold mb-6">
                    Seller Type Documents
                </h2>

                {/* Placeholder Content */}
                <div className="text-center py-8">
                    <p className="text-gray-300 mb-4">
                        Document management feature coming soon.
                    </p>
                    <p className="text-gray-400 text-sm">
                        This section will allow you to upload and manage seller-specific documents.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SellerDocumentsModal;

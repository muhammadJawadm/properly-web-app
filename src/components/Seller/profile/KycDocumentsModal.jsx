import { FaTimes, FaIdCard, FaCamera, FaFileAlt, FaEye, FaCheckCircle, FaClock } from 'react-icons/fa';

const KycDocumentsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // Mock data for uploaded KYC documents
    const kycDocuments = [
        {
            id: 1,
            name: 'ID Document - Front',
            type: 'ID Verification',
            uploadDate: '2024-01-20',
            status: 'verified',
            icon: FaIdCard,
            thumbnail: 'https://via.placeholder.com/100x60/4a4a4a/ffffff?text=ID+Front'
        },
        {
            id: 2,
            name: 'ID Document - Back',
            type: 'ID Verification',
            uploadDate: '2024-01-20',
            status: 'verified',
            icon: FaIdCard,
            thumbnail: 'https://via.placeholder.com/100x60/4a4a4a/ffffff?text=ID+Back'
        },
        {
            id: 3,
            name: 'Selfie Photo',
            type: 'Photo Verification',
            uploadDate: '2024-01-20',
            status: 'verified',
            icon: FaCamera,
            thumbnail: 'https://via.placeholder.com/100x60/4a4a4a/ffffff?text=Selfie'
        },
        {
            id: 4,
            name: 'Proof of Residence',
            type: 'Address Verification',
            uploadDate: '2024-01-20',
            status: 'verified',
            icon: FaFileAlt,
            thumbnail: 'https://via.placeholder.com/100x60/4a4a4a/ffffff?text=Residence'
        },
        {
            id: 5,
            name: 'Power of Attorney',
            type: 'Legal Document',
            uploadDate: '2024-01-19',
            status: 'pending',
            icon: FaFileAlt,
            thumbnail: 'https://via.placeholder.com/100x60/4a4a4a/ffffff?text=POA'
        }
    ];

    const handleViewDocument = (doc) => {
        console.log('Viewing KYC document:', doc.name);
        // TODO: Implement document preview/download functionality
        alert(`Opening ${doc.name}...`);
    };

    const getStatusBadge = (status) => {
        if (status === 'verified') {
            return (
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white bg-green-500">
                    <FaCheckCircle size={12} />
                    Verified
                </span>
            );
        }
        return (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white bg-yellow-500">
                <FaClock size={12} />
                Pending
            </span>
        );
    };

    const verifiedCount = kycDocuments.filter(doc => doc.status === 'verified').length;
    const totalCount = kycDocuments.length;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#4a4a4a] rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-600">
                    <div>
                        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-1">
                            KYC Verification Documents
                        </h2>
                        <p className="text-gray-400 text-sm">
                            {verifiedCount} of {totalCount} documents verified
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-gray-300 transition-colors"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>

                {/* Content - Scrollable */}
                <div className="flex-1 overflow-y-auto p-6" style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}>
                    <style>
                        {`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}
                    </style>

                    {kycDocuments.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-gray-300 mb-4">
                                No KYC documents uploaded yet.
                            </p>
                            <p className="text-gray-400 text-sm">
                                Complete the KYC verification process to upload your documents.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {kycDocuments.map((doc) => {
                                const IconComponent = doc.icon;
                                return (
                                    <div
                                        key={doc.id}
                                        className="bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700/70 transition-colors"
                                    >
                                        {/* Document Preview */}
                                        <div className="relative mb-3 rounded-lg overflow-hidden bg-gray-800">
                                            <img
                                                src={doc.thumbnail}
                                                alt={doc.name}
                                                className="w-full h-32 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute top-2 left-2">
                                                <div className="w-8 h-8 bg-amber-500/90 rounded-lg flex items-center justify-center">
                                                    <IconComponent className="text-white" size={16} />
                                                </div>
                                            </div>
                                            <div className="absolute top-2 right-2">
                                                {getStatusBadge(doc.status)}
                                            </div>
                                        </div>

                                        {/* Document Info */}
                                        <div className="mb-3">
                                            <h3 className="text-white font-medium text-sm mb-1">
                                                {doc.name}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
                                                <span>{doc.type}</span>
                                                <span>•</span>
                                                <span>{doc.uploadDate}</span>
                                            </div>
                                        </div>

                                        {/* Action Button */}
                                        <button
                                            onClick={() => handleViewDocument(doc)}
                                            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 rounded-lg text-amber-500 font-medium text-sm transition-colors"
                                        >
                                            <FaEye size={14} />
                                            View Document
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-600">
                    <div className="flex items-center justify-between">
                        <p className="text-gray-400 text-sm">
                            Last updated: {kycDocuments[0]?.uploadDate || 'N/A'}
                        </p>
                        {verifiedCount === totalCount ? (
                            <span className="inline-flex items-center gap-2 text-green-500 text-sm font-medium">
                                <FaCheckCircle />
                                All documents verified
                            </span>
                        ) : (
                            <span className="text-yellow-500 text-sm font-medium">
                                Verification in progress
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KycDocumentsModal;

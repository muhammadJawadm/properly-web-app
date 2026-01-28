import { FaTimes, FaFileAlt, FaEye, FaDownload } from 'react-icons/fa';

const BuyerDocumentsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // Mock data for uploaded buyer documents
    const documents = [
        {
            id: 1,
            name: 'Proof of Income',
            type: 'PDF',
            uploadDate: '2024-01-18',
            size: '1.9 MB',
            status: 'verified'
        },
        {
            id: 2,
            name: 'Bank Statement',
            type: 'PDF',
            uploadDate: '2024-01-17',
            size: '2.2 MB',
            status: 'verified'
        },
        {
            id: 3,
            name: 'Employment Verification Letter',
            type: 'PDF',
            uploadDate: '2024-01-16',
            size: '1.3 MB',
            status: 'verified'
        },
        {
            id: 4,
            name: 'Credit Report',
            type: 'PDF',
            uploadDate: '2024-01-15',
            size: '3.1 MB',
            status: 'pending'
        },
        {
            id: 5,
            name: 'Identity Document',
            type: 'PDF',
            uploadDate: '2024-01-14',
            size: '1.7 MB',
            status: 'verified'
        },
        {
            id: 6,
            name: 'Proof of Address',
            type: 'PDF',
            uploadDate: '2024-01-13',
            size: '1.4 MB',
            status: 'verified'
        }
    ];

    const handleViewDocument = (doc) => {
        console.log('Viewing document:', doc.name);
        // TODO: Implement document preview/download functionality
        alert(`Opening ${doc.name}...`);
    };

    const getStatusColor = (status) => {
        return status === 'verified' ? 'bg-green-500' : 'bg-yellow-500';
    };

    const getStatusText = (status) => {
        return status === 'verified' ? 'Verified' : 'Pending';
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#4a4a4a] rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-600">
                    <h2 className="text-white text-xl sm:text-2xl font-semibold">
                        Buyer Type Documents
                    </h2>
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

                    {documents.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-gray-300 mb-4">
                                No documents uploaded yet.
                            </p>
                            <p className="text-gray-400 text-sm">
                                Upload your buyer-specific documents to get verified.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {documents.map((doc) => (
                                <div
                                    key={doc.id}
                                    className="bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700/70 transition-colors"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        {/* Document Icon & Info */}
                                        <div className="flex items-start gap-3 flex-1 min-w-0">
                                            <div className="w-12 h-12 bg-gray-600/50 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FaFileAlt className="text-amber-500" size={20} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-white font-medium text-sm sm:text-base mb-1 truncate">
                                                    {doc.name}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
                                                    <span>{doc.type}</span>
                                                    <span>•</span>
                                                    <span>{doc.size}</span>
                                                    <span>•</span>
                                                    <span>{doc.uploadDate}</span>
                                                </div>
                                                <div className="mt-2">
                                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(doc.status)}`}>
                                                        {getStatusText(doc.status)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <button
                                                onClick={() => handleViewDocument(doc)}
                                                className="p-2 bg-amber-500/20 hover:bg-amber-500/30 rounded-lg text-amber-500 transition-colors"
                                                title="View Document"
                                            >
                                                <FaEye size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleViewDocument(doc)}
                                                className="p-2 bg-gray-600/50 hover:bg-gray-600/70 rounded-lg text-white transition-colors"
                                                title="Download Document"
                                            >
                                                <FaDownload size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-600">
                    <p className="text-gray-400 text-sm text-center">
                        {documents.length} document{documents.length !== 1 ? 's' : ''} uploaded
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BuyerDocumentsModal;

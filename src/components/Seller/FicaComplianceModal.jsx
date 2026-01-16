import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import FicaOfflineContent from './fica/FicaOfflineContent';
import FicaOnlineContent from './fica/FicaOnlineContent';

const FicaComplianceModal = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('offline');
    const [formData, setFormData] = useState({});

    const mandatoryDocuments = [
        { name: 'Identity Document', details: '' },
        { name: 'Proof of residence', details: '(Dated within last 3 months)' },
        { name: 'Marriage Certificate/ Ante nuptial contract', details: '(If applicable)' },
        { name: 'Divorce Order/Settlement Agreement', details: '(If applicable)' }
    ];

    const optionalDocuments = [
        { name: 'Latest Tax return' },
        { name: 'Pay slip/Proof of Income' },
        { name: 'Proof of source of wealth' },
        { name: 'Proof of banking details' }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleFileUpload = (field, file) => {
        // Handle file upload logic here
        console.log('Upload file:', field, file);
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-4 sm:p-6 flex items-center justify-between z-10">
                    <h2 className="text-white text-xl sm:text-2xl font-bold">FICA Compliance</h2>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-colors"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-700 sticky top-[72px] sm:top-[88px] bg-gray-800 z-10">
                    <button
                        onClick={() => setActiveTab('offline')}
                        className={`flex-1 py-3 sm:py-4 px-4 font-medium transition-colors ${activeTab === 'offline'
                                ? 'text-amber-500 border-b-2 border-amber-500 bg-gray-700/30'
                                : 'text-gray-400 hover:text-gray-300'
                            }`}
                    >
                        Fill offline
                    </button>
                    <button
                        onClick={() => setActiveTab('online')}
                        className={`flex-1 py-3 sm:py-4 px-4 font-medium transition-colors ${activeTab === 'online'
                                ? 'text-amber-500 border-b-2 border-amber-500 bg-gray-700/30'
                                : 'text-gray-400 hover:text-gray-300'
                            }`}
                    >
                        Fill Online
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                    {activeTab === 'offline' ? (
                        <FicaOfflineContent
                            onFileUpload={handleFileUpload}
                            mandatoryDocuments={mandatoryDocuments}
                            optionalDocuments={optionalDocuments}
                        />
                    ) : (
                        <FicaOnlineContent
                            formData={formData}
                            onInputChange={handleInputChange}
                            onFileUpload={handleFileUpload}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default FicaComplianceModal;

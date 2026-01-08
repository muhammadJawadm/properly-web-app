import { FaEdit, FaTimes } from 'react-icons/fa';

const FillOfflineModal = ({ isOpen, onClose, onUpload }) => {
    if (!isOpen) return null;

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            onUpload(file);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-3xl bg-gray-800/95 backdrop-blur-xl rounded-2xl overflow-hidden">
                {/* Header with Tabs */}
                <div className="border-b border-gray-700">
                    <div className="flex items-center justify-between p-6 pb-0">
                        <div className="flex gap-8">
                            <button className="pb-4 border-b-2 border-amber-500 text-amber-500 font-semibold">
                                Fill offline
                            </button>
                            <button className="pb-4 text-gray-400">
                                Fill Online
                            </button>
                        </div>
                        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                            <FaTimes size={20} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Title */}
                    <div>
                        <h2 className="text-white text-xl font-semibold mb-1">
                            Condition report & Defects Disclosure<span className="text-red-500">*</span>
                        </h2>
                        <p className="text-gray-400 text-sm">
                            This form is used to describe and record the current condition of the property.
                        </p>
                    </div>

                    {/* Download Document */}
                    <div className="bg-gray-700/30 rounded-xl p-6">
                        <h3 className="text-white font-semibold mb-4">Download Document</h3>
                        <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                                    <span className="text-red-500 font-bold text-sm">PDF</span>
                                </div>
                                <div>
                                    <p className="text-white font-medium">Condition report & Defects Disclosure</p>
                                    <p className="text-gray-400 text-sm">(PDF)</p>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity">
                                Download
                            </button>
                        </div>
                    </div>

                    {/* Offline Completion Guide */}
                    <div className="bg-gray-700/30 rounded-xl p-6">
                        <h3 className="text-white font-semibold mb-4">Offline completion guide</h3>
                        <ol className="space-y-2 text-gray-300 text-sm">
                            <li>1. Download the file</li>
                            <li>2. Fill out manually or digitally</li>
                            <li>3. Sign the form</li>
                            <li>4. Save the completed PDF</li>
                            <li>5. Re upload</li>
                        </ol>
                    </div>

                    {/* Upload Completed Document */}
                    <div className="bg-gray-700/30 rounded-xl p-6">
                        <h3 className="text-white font-semibold mb-4">Upload completed document</h3>
                        <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center mb-3">
                            <input
                                type="file"
                                accept=".pdf"
                                onChange={handleFileUpload}
                                className="hidden"
                                id="offline-doc-upload"
                            />
                            <label htmlFor="offline-doc-upload" className="cursor-pointer">
                                <p className="text-gray-400 mb-3">Drag & Drop pdf here</p>
                                <button className="px-6 py-2 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity">
                                    Upload File
                                </button>
                            </label>
                        </div>
                        <p className="text-gray-400 text-sm">
                            <span className="font-semibold">File Status:</span> No file uploaded yet
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FillOfflineModal;

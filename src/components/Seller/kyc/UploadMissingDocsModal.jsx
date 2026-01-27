import { FaTimes, FaUpload } from "react-icons/fa";

const UploadMissingDocsModal = ({ isOpen, onClose, onFileUpload }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 md:p-12 max-w-md w-full my-4 shadow-2xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                >
                    <FaTimes size={20} />
                </button>

                <div className="overflow-y-auto max-h-[calc(90vh-2rem)]">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Upload Missing Documents</h2>

                    <div className="space-y-4 mb-8">
                        {/* Power of Attorney */}
                        <label className="flex items-center justify-between px-6 py-4 bg-gray-700 bg-opacity-50 rounded-xl cursor-pointer hover:bg-opacity-70 transition-colors">
                            <span className="text-white">Power of Attorney</span>
                            <FaUpload className="text-amber-500" />
                            <input
                                type="file"
                                className="hidden"
                                onChange={(e) => onFileUpload('powerOfAttorney', e.target.files[0])}
                                accept="image/*,.pdf"
                            />
                        </label>

                        {/* Executor Letter */}
                        <label className="flex items-center justify-between px-6 py-4 bg-gray-700 bg-opacity-50 rounded-xl cursor-pointer hover:bg-opacity-70 transition-colors">
                            <span className="text-white">Executor letter</span>
                            <FaUpload className="text-amber-500" />
                            <input
                                type="file"
                                className="hidden"
                                onChange={(e) => onFileUpload('executorLetter', e.target.files[0])}
                                accept="image/*,.pdf"
                            />
                        </label>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-full px-8 py-3 rounded-full font-semibold text-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: '#EDBF6D' }}
                    >
                        Upload Documents
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UploadMissingDocsModal;

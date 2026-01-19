import React, { useState } from 'react';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';

const UploadDocumentsModal = ({ isOpen, onClose, onContinue }) => {
    const [uploadedDocs, setUploadedDocs] = useState([
        { id: 1, name: 'Proof of funds', file: null },
        { id: 2, name: 'Proof of funds', file: null },
        { id: 3, name: 'Proof of residence', file: null }
    ]);

    if (!isOpen) return null;

    const handleFileUpload = (index, file) => {
        const newDocs = [...uploadedDocs];
        newDocs[index].file = file;
        setUploadedDocs(newDocs);
    };

    const handleRemoveDoc = (index) => {
        const newDocs = [...uploadedDocs];
        newDocs[index].file = null;
        setUploadedDocs(newDocs);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, index) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            handleFileUpload(index, file);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <button
                            onClick={onClose}
                            className="flex items-center gap-2 text-amber-500 hover:text-amber-400"
                        >
                            <FaArrowLeft size={16} />
                            <span className="font-semibold">Upload documents</span>
                        </button>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-6">
                        Attach your ID verification, proof of funds or proof of residence to strengthen your inquiry and speed up the seller's response.
                    </p>

                    {/* Upload Area */}
                    <div className="space-y-4 mb-6">
                        {uploadedDocs.map((doc, index) => (
                            <div key={doc.id}>
                                {!doc.file ? (
                                    <div
                                        onDragOver={handleDragOver}
                                        onDrop={(e) => handleDrop(e, index)}
                                        className="border-2 border-dashed border-amber-500/50 rounded-xl p-6 sm:p-8 text-center hover:border-amber-500 transition-colors cursor-pointer"
                                    >
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-3">
                                                <span className="text-amber-500 text-2xl">📁</span>
                                            </div>
                                            <p className="text-amber-500 text-sm mb-2">
                                                <label className="cursor-pointer">
                                                    <span className="font-semibold">Drag & Drop files here / Upload</span>
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        onChange={(e) => handleFileUpload(index, e.target.files[0])}
                                                        accept=".pdf,.jpg,.jpeg,.png"
                                                    />
                                                </label>
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-gray-700/50 rounded-xl p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-600 rounded flex items-center justify-center">
                                                <span className="text-white text-xs">📄</span>
                                            </div>
                                            <span className="text-white text-sm">{doc.name}</span>
                                        </div>
                                        <button
                                            onClick={() => handleRemoveDoc(index)}
                                            className="text-gray-400 hover:text-red-400 transition-colors"
                                        >
                                            <FaTimes size={16} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="space-y-3">
                        <button
                            onClick={() => onContinue(uploadedDocs)}
                            className="w-full py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-xl hover:opacity-90 transition-opacity"
                        >
                            Continue & Verify
                        </button>
                        <button
                            onClick={onClose}
                            className="w-full py-3 text-amber-500 font-semibold hover:text-amber-400 transition-colors"
                        >
                            Skip
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadDocumentsModal;

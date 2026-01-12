import React, { useState } from 'react';
import { FaTimes, FaCopy, FaCheck } from 'react-icons/fa';

const CRNModal = ({ isOpen, onClose, crn, onSelectAttorney }) => {
    const [copied, setCopied] = useState(false);

    if (!isOpen) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(crn);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl max-w-md w-full p-8 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <FaTimes size={20} />
                </button>

                {/* Title */}
                <h2 className="text-white text-2xl font-bold text-center mb-2">
                    Generating CRN
                </h2>
                <p className="text-gray-400 text-center text-sm mb-6">
                    (Client reference number)
                </p>

                {/* Success Message */}
                <p className="text-white text-center mb-6">
                    Your Client Reference Number has been created:
                </p>

                {/* CRN Display */}
                <div className="bg-gray-700/50 rounded-xl p-6 mb-6 text-center">
                    <h3 className="text-white text-3xl font-bold tracking-wider">
                        {crn}
                    </h3>
                </div>

                {/* Instructions */}
                <p className="text-gray-300 text-center text-sm mb-6">
                    Please provide this reference to your chosen attorney
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={handleCopy}
                        className="flex-1 py-3 border-2 border-amber-500 text-amber-500 font-semibold rounded-xl hover:bg-amber-500/10 transition-all flex items-center justify-center gap-2"
                    >
                        {copied ? (
                            <>
                                <FaCheck size={16} />
                                Copied!
                            </>
                        ) : (
                            <>
                                <FaCopy size={16} />
                                Copy Reference
                            </>
                        )}
                    </button>
                    <button
                        onClick={onSelectAttorney}
                        className="flex-1 py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-xl hover:opacity-90 transition-opacity"
                    >
                        Select Attorney
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CRNModal;

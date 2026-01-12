import React, { useState } from 'react';
import { FaTimes, FaDownload } from 'react-icons/fa';

const EnquiryFormModal = ({ isOpen, onClose, onSubmit, propertyTitle }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        action: 'question' // question, offer, viewing
    });

    if (!isOpen) return null;

    const handleSubmit = () => {
        console.log('Submitting enquiry:', formData);
        if (onSubmit) {
            onSubmit(formData);
        } else {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6 sm:p-8">
                    {/* Title */}
                    <h2 className="text-amber-500 text-2xl font-bold mb-6">Enquiry Form</h2>

                    {/* Form Fields */}
                    <div className="space-y-4 mb-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                        />
                        <input
                            type="tel"
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                        />
                        <textarea
                            placeholder="Message (optional)"
                            value={formData.message}
                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                            rows="4"
                            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:border-amber-500"
                        />
                    </div>

                    {/* Action Selection */}
                    <div className="mb-6">
                        <p className="text-white text-sm mb-3">Select what you'd like to do:</p>
                        <div className="space-y-2">
                            <button
                                onClick={() => setFormData(prev => ({ ...prev, action: 'question' }))}
                                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${formData.action === 'question'
                                    ? 'bg-amber-500/20 border-2 border-amber-500'
                                    : 'bg-gray-700/30 border-2 border-transparent hover:border-gray-600'
                                    }`}
                            >
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.action === 'question' ? 'border-amber-500' : 'border-gray-500'
                                    }`}>
                                    {formData.action === 'question' && (
                                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                                    )}
                                </div>
                                <span className="text-white text-sm">Just ask a question</span>
                            </button>
                            <button
                                onClick={() => setFormData(prev => ({ ...prev, action: 'offer' }))}
                                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${formData.action === 'offer'
                                    ? 'bg-amber-500/20 border-2 border-amber-500'
                                    : 'bg-gray-700/30 border-2 border-transparent hover:border-gray-600'
                                    }`}
                            >
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.action === 'offer' ? 'border-amber-500' : 'border-gray-500'
                                    }`}>
                                    {formData.action === 'offer' && (
                                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                                    )}
                                </div>
                                <span className="text-white text-sm">Make an offer</span>
                            </button>
                            <button
                                onClick={() => setFormData(prev => ({ ...prev, action: 'viewing' }))}
                                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${formData.action === 'viewing'
                                    ? 'bg-amber-500/20 border-2 border-amber-500'
                                    : 'bg-gray-700/30 border-2 border-transparent hover:border-gray-600'
                                    }`}
                            >
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.action === 'viewing' ? 'border-amber-500' : 'border-gray-500'
                                    }`}>
                                    {formData.action === 'viewing' && (
                                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                                    )}
                                </div>
                                <span className="text-white text-sm">Schedule a viewing</span>
                            </button>
                        </div>
                    </div>

                    {/* Verify Button */}
                    <button
                        onClick={handleSubmit}
                        className="w-full py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-xl hover:opacity-90 transition-opacity mb-6"
                    >
                        Continue
                    </button>

                    {/* Download Brochure */}
                    <div className="bg-gray-700/30 rounded-xl p-4">
                        <p className="text-white text-sm mb-3">Download Brochure</p>
                        <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-amber-500/20 rounded flex items-center justify-center">
                                    <span className="text-amber-500 text-lg">📄</span>
                                </div>
                                <span className="text-gray-300 text-sm">JPG</span>
                            </div>
                            <button className="text-amber-500 hover:text-amber-400 text-sm font-semibold flex items-center gap-2">
                                <FaDownload size={14} />
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnquiryFormModal;

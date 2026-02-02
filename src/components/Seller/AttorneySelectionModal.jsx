import React, { useState } from 'react';
import { FaTimes, FaChevronDown } from 'react-icons/fa';

const AttorneySelectionModal = ({ isOpen, onClose, crn, onConfirm }) => {
    const [activeTab, setActiveTab] = useState('choose'); // 'choose' or 'own'
    const [selectedAttorney, setSelectedAttorney] = useState('');
    const [showAttorneyCard, setShowAttorneyCard] = useState(false);

    // Form state for own attorney
    const [ownAttorneyForm, setOwnAttorneyForm] = useState({
        name: '',
        phone: '',
        firmName: '',
        email: ''
    });

    // Mock attorney data
    const partnerAttorneys = [
        { id: 1, name: 'Bhekizizwe Bingani', firm: 'Lex Legal Attorneys', avatar: 'https://i.pravatar.cc/150?img=12' },
        { id: 2, name: 'Sarah Johnson', firm: 'Johnson & Associates', avatar: 'https://i.pravatar.cc/150?img=45' },
        { id: 3, name: 'Michael Chen', firm: 'Chen Law Group', avatar: 'https://i.pravatar.cc/150?img=33' }
    ];

    if (!isOpen) return null;

    const handleAttorneySelect = (e) => {
        const attorneyId = e.target.value;
        setSelectedAttorney(attorneyId);
        setShowAttorneyCard(attorneyId !== '');
    };

    const handleOwnAttorneyChange = (field, value) => {
        setOwnAttorneyForm(prev => ({ ...prev, [field]: value }));
    };

    const handleSendInvite = () => {
        console.log('Sending invite to:', ownAttorneyForm);
        // Add invite logic here
        onClose();
    };

    const handleConfirmAttorney = () => {
        if (activeTab === 'choose' && selectedAttorney) {
            const attorney = partnerAttorneys.find(a => a.id.toString() === selectedAttorney);
            onConfirm && onConfirm(attorney);
            onClose();
        }
    };

    const handleSendAccessLink = () => {
        console.log('Sending access link to selected attorney');
        // Add send access link logic here
    };

    const selectedAttorneyData = partnerAttorneys.find(a => a.id.toString() === selectedAttorney);

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div
                className="bg-gray-800 rounded-2xl max-w-md w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto "
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}
            >
                <style>
                    {`
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}
                </style>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <FaTimes size={20} />
                </button>

                {/* Title */}
                <h2 className="text-white text-xl sm:text-2xl font-bold text-center mb-6 mt-4">
                    Select your Attorney
                </h2>

                {/* Tab Switcher */}
                <div className="flex gap-2 mb-6">
                    <button
                        onClick={() => setActiveTab('choose')}
                        className={`flex-1 py-3 px-4 rounded-full font-semibold transition-all ${activeTab === 'choose'
                            ? 'bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                    >
                        Choose attorney
                    </button>
                    <button
                        onClick={() => setActiveTab('own')}
                        className={`flex-1 py-3 px-4 rounded-full font-semibold transition-all ${activeTab === 'own'
                            ? 'bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                    >
                        My own attorney
                    </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'choose' ? (
                    <div>
                        {/* Dropdown Label */}
                        <p className="text-gray-300 text-sm mb-3">Choose one of our partner attorneys</p>

                        {/* Attorney Dropdown */}
                        <div className="relative mb-4">
                            <select
                                value={selectedAttorney}
                                onChange={handleAttorneySelect}
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white appearance-none cursor-pointer focus:outline-none focus:border-amber-500"
                            >
                                <option value="">Select</option>
                                {partnerAttorneys.map((attorney) => (
                                    <option key={attorney.id} value={attorney.id}>
                                        {attorney.firm}
                                    </option>
                                ))}
                            </select>
                            <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>

                        {/* Attorney Card (shown when selected) */}
                        {showAttorneyCard && selectedAttorneyData && (
                            <div className="bg-gray-700/50 border border-gray-600 rounded-xl p-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={selectedAttorneyData.avatar}
                                        alt={selectedAttorneyData.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-white font-semibold text-lg mb-1">
                                            {selectedAttorneyData.name}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-400 text-sm">CRN Number:</span>
                                            <span className="text-white font-semibold">{crn}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={handleSendAccessLink}
                                disabled={!selectedAttorney}
                                className="flex-1 py-3 border-2 border-amber-500 text-amber-500 font-semibold rounded-xl hover:bg-amber-500/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Send access link
                            </button>
                            <button
                                onClick={handleConfirmAttorney}
                                disabled={!selectedAttorney}
                                className="flex-1 py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Confirm & Proceed
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        {/* Form Label */}
                        <p className="text-gray-300 text-sm mb-4">Add details</p>

                        {/* Form Fields */}
                        <div className="space-y-3 mb-6">
                            <input
                                type="text"
                                placeholder="Name"
                                value={ownAttorneyForm.name}
                                onChange={(e) => handleOwnAttorneyChange('name', e.target.value)}
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                            />
                            <input
                                type="tel"
                                placeholder="Phone number"
                                value={ownAttorneyForm.phone}
                                onChange={(e) => handleOwnAttorneyChange('phone', e.target.value)}
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                            />
                            <input
                                type="text"
                                placeholder="Firm name"
                                value={ownAttorneyForm.firmName}
                                onChange={(e) => handleOwnAttorneyChange('firmName', e.target.value)}
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={ownAttorneyForm.email}
                                onChange={(e) => handleOwnAttorneyChange('email', e.target.value)}
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                            />
                        </div>

                        {/* Send Invite Button */}
                        <button
                            onClick={handleSendInvite}
                            disabled={!ownAttorneyForm.name || !ownAttorneyForm.email}
                            className="w-full py-3 mb-4 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Send Invite
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AttorneySelectionModal;

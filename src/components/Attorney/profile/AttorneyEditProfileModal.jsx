import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const AttorneyEditProfileModal = ({ isOpen, onClose, onVerify }) => {
    const [formData, setFormData] = useState({
        fullName: 'Oliver Noah',
        lawFirmName: 'Manchester Law firm',
        emergencyContact: '+1 456 546421',
        firmRegistrationNumber: '546421'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onVerify(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#4a4a4a] rounded-2xl w-full max-w-md p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                >
                    <FaTimes size={20} />
                </button>

                {/* Title */}
                <h2 className="text-white text-2xl font-semibold mb-6">
                    Edit Profile
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="block text-white/70 text-sm mb-2">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Law Firm Name */}
                    <div>
                        <label className="block text-white/70 text-sm mb-2">Law firm name</label>
                        <input
                            type="text"
                            name="lawFirmName"
                            value={formData.lawFirmName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                            placeholder="Enter law firm name"
                        />
                    </div>

                    {/* Emergency Contact Number */}
                    <div>
                        <label className="block text-white/70 text-sm mb-2">Emergency contact number</label>
                        <input
                            type="tel"
                            name="emergencyContact"
                            value={formData.emergencyContact}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                            placeholder="Enter emergency contact"
                        />
                    </div>

                    {/* Firm Registration Number */}
                    <div>
                        <label className="block text-white/70 text-sm mb-2">Firm registration number</label>
                        <input
                            type="text"
                            name="firmRegistrationNumber"
                            value={formData.firmRegistrationNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                            placeholder="Enter firm registration number"
                        />
                    </div>

                    {/* Verify Button */}
                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-full hover:opacity-90 transition-opacity mt-6"
                    >
                        Verify
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AttorneyEditProfileModal;

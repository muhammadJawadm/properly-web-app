import { useState } from 'react';
import { FaTimes, FaChevronDown } from 'react-icons/fa';

const EditProfileModal = ({ isOpen, onClose, onVerify }) => {
    const [formData, setFormData] = useState({
        name: 'Daniel Mthembu',
        email: 'Danielmthembu123@gmail.com',
        phone: '+ 456 546421',
        sellerType: 'Individual seller'
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const sellerTypes = [
        'Individual seller',
        'Agency',
        'Developer',
        'Property Manager'
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSellerTypeSelect = (type) => {
        setFormData({ ...formData, sellerType: type });
        setIsDropdownOpen(false);
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
                    {/* Name */}
                    <div>
                        <label className="block text-white/70 text-sm mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-white/70 text-sm mb-2">Email address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-white/70 text-sm mb-2">Phone number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                            placeholder="Enter your phone"
                        />
                    </div>

                    {/* Seller Type Dropdown */}
                    <div className="relative">
                        <label className="block text-white/70 text-sm mb-2">Seller Type</label>
                        <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition-all flex items-center justify-between"
                        >
                            <span>{formData.sellerType}</span>
                            <FaChevronDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute z-10 w-full mt-2 bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                                {sellerTypes.map((type) => (
                                    <button
                                        key={type}
                                        type="button"
                                        onClick={() => handleSellerTypeSelect(type)}
                                        className="w-full px-4 py-3 text-left text-white hover:bg-gray-600 transition-colors"
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        )}
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

export default EditProfileModal;

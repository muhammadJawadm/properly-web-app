import { useState } from 'react';
import { FaTimes, FaEye, FaEyeSlash } from 'react-icons/fa';

const ChangePasswordModal = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear errors when user types
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const togglePasswordVisibility = (field) => {
        setShowPassword({
            ...showPassword,
            [field]: !showPassword[field]
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.currentPassword) {
            newErrors.currentPassword = 'Current password is required';
        }

        if (!formData.newPassword) {
            newErrors.newPassword = 'New password is required';
        } else if (formData.newPassword.length < 8) {
            newErrors.newPassword = 'Password must be at least 8 characters';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
            // Reset form
            setFormData({
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className="relative bg-[#4a4a4a] rounded-2xl w-full max-w-md px-8 py-10 max-h-[90vh] overflow-y-auto"
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
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                >
                    <FaTimes size={20} />
                </button>

                {/* Title */}
                <h2 className="text-white text-2xl font-semibold mb-6">
                    Change Password
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Current Password */}
                    <div>
                        <label className="block text-white/70 text-sm mb-2">Current Password</label>
                        <div className="relative">
                            <input
                                type={showPassword.current ? 'text' : 'password'}
                                name="currentPassword"
                                value={formData.currentPassword}
                                onChange={handleChange}
                                className="w-full px-4 py-3 pr-12 bg-gray-600 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                placeholder="Enter current password"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('current')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                            >
                                {showPassword.current ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                        {errors.currentPassword && (
                            <p className="text-red-400 text-sm mt-1">{errors.currentPassword}</p>
                        )}
                    </div>

                    {/* New Password */}
                    <div>
                        <label className="block text-white/70 text-sm mb-2">New Password</label>
                        <div className="relative">
                            <input
                                type={showPassword.new ? 'text' : 'password'}
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                className="w-full px-4 py-3 pr-12 bg-gray-600 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                placeholder="Enter new password"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('new')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                            >
                                {showPassword.new ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                        {errors.newPassword && (
                            <p className="text-red-400 text-sm mt-1">{errors.newPassword}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-white/70 text-sm mb-2">Confirm New Password</label>
                        <div className="relative">
                            <input
                                type={showPassword.confirm ? 'text' : 'password'}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full px-4 py-3 pr-12 bg-gray-600 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                placeholder="Confirm new password"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('confirm')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                            >
                                {showPassword.confirm ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
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

export default ChangePasswordModal;

import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const ComplianceAgreement = ({ isOpen, onClose, onAccept }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [otpSent, setOtpSent] = useState(false);

    const handleSignByOTP = () => {
        if (isChecked) {
            setOtpSent(true);
            // Simulate OTP process
            setTimeout(() => {
                onAccept();
                onClose();
            }, 2000);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-3xl max-h-[90vh] bg-gray-600/50 backdrop-blur-xl rounded-2xl overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                    <h2 className="text-white text-2xl font-semibold">Seller Compliance Agreement</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <FaTimes size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Compliance Form Review */}
                    <div className="bg-gray-500/50 rounded-xl p-8 space-y-4">
                        <h3 className="text-white font-semibold ">Compliance Form Review</h3>
                        <p className="text-gray-300 text-sm">
                            • Seller must be prompted to review a Seller Compliance Agreement before publishing.
                        </p>


                        <h3 className="text-white font-semibold ">Enforced Platform Usage</h3>
                        <p className="text-gray-300 text-sm">
                            • The system requires that any buyer contact, inquiry, offer or sale that comes through the platform (or its partner sites like Property24, Private Property, social media) must be completed using the platform's process.
                        </p>

                        <h3 className="text-white font-semibold ">Penalty Clause</h3>
                        <p className="text-gray-300 text-sm">
                            • If the seller breaks the rule and sells outside the platform to a buyer sourced through it, the platform can charge a penalty — such as forcing the seller to pay the agreed commission/fee.
                        </p>
                    </div>

                    {/* Checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer p-4 bg-gray-700/20 rounded-lg hover:bg-gray-700/30 transition-colors">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                            className="w-5 h-5 mt-1 rounded bg-gray-600 border-gray-500 accent-amber-500 focus:ring-amber-500"
                        />
                        <span className="text-white text-sm">
                            Please confirm and sign this Seller Compliance Form before your listing can go live.
                        </span>
                    </label>

                    {/* Sign Button */}
                    <button
                        onClick={handleSignByOTP}
                        className={`w-full py-4 rounded-full font-semibold text-lg transition-all ${isChecked && !otpSent
                            ? 'bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black hover:opacity-90'
                            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        {otpSent ? 'Sending OTP...' : 'Sign by OTP (One Time Password)'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComplianceAgreement;

import React, { useState, useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const OTPVerificationModal = ({ isOpen, onClose, onVerify, email }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(28);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    useEffect(() => {
        if (isOpen && timer > 0) {
            const interval = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isOpen, timer]);

    if (!isOpen) return null;

    const handleChange = (index, value) => {
        if (value.length > 1) value = value[0];
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 3) {
            inputRefs[index + 1].current?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs[index - 1].current?.focus();
        }
    };

    const handleVerify = () => {
        const otpCode = otp.join('');
        if (otpCode.length === 4) {
            onVerify(otpCode);
        }
    };

    const handleResend = () => {
        if (timer === 0) {
            setTimer(28);
            setOtp(['', '', '', '']);
            inputRefs[0].current?.focus();
        }
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
                    Verification
                </h2>

                {/* Message */}
                <p className="text-gray-300 text-center text-sm mb-8">
                    We've sent a 4-digit code to your registered email address.
                </p>

                {/* OTP Input Boxes */}
                <div className="flex justify-center gap-3 mb-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={inputRefs[index]}
                            type="text"
                            inputMode="numeric"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-white text-2xl sm:text-3xl font-bold text-center focus:outline-none focus:border-amber-500 transition-colors"
                        />
                    ))}
                </div>

                {/* Resend OTP */}
                <div className="text-center mb-6">
                    <button
                        onClick={handleResend}
                        disabled={timer > 0}
                        className={`text-sm ${timer > 0
                                ? 'text-gray-500 cursor-not-allowed'
                                : 'text-amber-500 hover:text-amber-400'
                            }`}
                    >
                        Resend OTP {timer > 0 && `(${timer}s)`}
                    </button>
                </div>

                {/* Verify Button */}
                <button
                    onClick={handleVerify}
                    disabled={otp.some(d => !d)}
                    className="w-full py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Verify and Continue
                </button>
            </div>
        </div>
    );
};

export default OTPVerificationModal;

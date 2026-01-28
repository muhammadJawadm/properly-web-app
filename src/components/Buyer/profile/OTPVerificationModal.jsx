import { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

const OTPVerificationModal = ({ isOpen, onClose, onContinue }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(28);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        if (isOpen && timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isOpen, timer]);

    useEffect(() => {
        if (isOpen && inputRefs[0].current) {
            inputRefs[0].current.focus();
        }
    }, [isOpen]);

    const handleChange = (index, value) => {
        if (value.length > 1) {
            // Handle paste
            const pastedData = value.slice(0, 4).split('');
            const newOtp = [...otp];
            pastedData.forEach((char, i) => {
                if (index + i < 4 && /^\d$/.test(char)) {
                    newOtp[index + i] = char;
                }
            });
            setOtp(newOtp);
            const nextIndex = Math.min(index + pastedData.length, 3);
            inputRefs[nextIndex].current?.focus();
            return;
        }

        if (/^\d$/.test(value) || value === '') {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Auto-focus next input
            if (value && index < 3) {
                inputRefs[index + 1].current?.focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs[index - 1].current?.focus();
        }
    };

    const handleSubmit = () => {
        const otpValue = otp.join('');
        if (otpValue.length === 4) {
            onContinue(otpValue);
            // Reset
            setOtp(['', '', '', '']);
            setTimer(28);
        }
    };

    const handleResend = () => {
        setTimer(28);
        setOtp(['', '', '', '']);
        console.log('Resending OTP...');
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
            <div className="relative bg-[#4a4a4a] rounded-2xl w-full max-w-md p-8">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                >
                    <FaTimes size={20} />
                </button>

                {/* Title */}
                <h2 className="text-white text-2xl font-semibold mb-3">
                    OTP Verification
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6">
                    Enter 4-digit OTP sent to your email address
                </p>

                {/* OTP Inputs */}
                <div className="flex gap-3 justify-center mb-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={inputRefs[index]}
                            type="text"
                            maxLength="4"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="w-14 h-14 text-center text-2xl font-semibold bg-gray-600 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                        />
                    ))}
                </div>

                {/* Resend OTP */}
                <div className="text-center mb-6">
                    {timer > 0 ? (
                        <p className="text-gray-400 text-sm">
                            Resend OTP in{' '}
                            <span className="text-amber-500 font-semibold">{timer}s</span>
                        </p>
                    ) : (
                        <button
                            onClick={handleResend}
                            className="text-amber-500 hover:text-amber-400 text-sm font-semibold transition-colors"
                        >
                            Resend OTP
                        </button>
                    )}
                </div>

                {/* Continue Button */}
                <button
                    onClick={handleSubmit}
                    disabled={otp.join('').length !== 4}
                    className={`w-full py-3 px-6 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-full transition-opacity ${otp.join('').length !== 4 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                        }`}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default OTPVerificationModal;

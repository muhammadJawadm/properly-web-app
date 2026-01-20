import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const OTPVerification = ({ isOpen, onClose, onVerify }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(28);

    useEffect(() => {
        if (isOpen && timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isOpen, timer]);

    const handleOtpChange = (index, value) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Auto-focus next input
            if (value && index < 3) {
                document.getElementById(`otp-${index + 1}`)?.focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`)?.focus();
        }
    };

    const handleVerify = () => {
        const otpCode = otp.join('');
        if (otpCode.length === 4) {
            onVerify(otpCode);
        }
    };

    const handleResend = () => {
        setTimer(28);
        setOtp(['', '', '', '']);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-xl max-h-[90vh] overflow-y-auto bg-gray-800/95 backdrop-blur-xl rounded-2xl ">
                {/* Header */}
                <div className="flex items-center justify-end p-6 border-gray-700">
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors border bg-gray-500 p-1 border-white rounded-full">
                        <FaTimes size={20} />
                    </button>
                </div>
                <div className="flex flex-col gap-4 items-center justify-center p-6 border-gray-700">
                    <h2 className="text-white text-xl font-semibold">Verify Your Identity</h2>
                    <p className="text-gray-300 text-sm">
                        We've sent a 4-digit code to your registered email address.
                    </p>
                </div>

                {/* Content */}
                <div className="p-8 pt-16 text-center space-y-10">


                    {/* OTP Input */}
                    <div className="flex justify-center gap-4">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-${index}`}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="w-16 h-16 text-center text-2xl font-bold bg-gray-700/50 border-2 border-gray-600 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                            />
                        ))}
                    </div>
                    <div className="space-y-24 flex flex-col items-center justify-center">
                        {/* Resend OTP */}
                        <button
                            onClick={handleResend}
                            disabled={timer > 0}
                            className={`text-sm font-medium transition-colors ${timer > 0
                                ? 'text-gray-500 cursor-not-allowed'
                                : 'text-amber-500 hover:text-amber-400'
                                }`}
                        >
                            Resend OTP {timer > 0 && `(${timer}s)`}
                        </button>

                        {/* Verify Button */}
                        <button
                            onClick={handleVerify}
                            disabled={otp.join('').length !== 4}
                            className={`w-2/3 py-4 rounded-full font-semibold text-lg transition-all ${otp.join('').length === 4
                                ? 'bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black hover:opacity-90'
                                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            Verify & Sign
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OTPVerification;

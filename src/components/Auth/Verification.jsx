import { useState, useRef, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import SplashBg from "../../assets/SplashBg.png";
import SplashLogo from "../../assets/phone.png";

const Verification = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(28);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    // Countdown timer for resend OTP
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleOtpChange = (index, value) => {
        // Only allow numbers
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1); // Only take the last digit
        setOtp(newOtp);

        // Auto-focus to next input
        if (value && index < 3) {
            inputRefs[index + 1].current?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs[index - 1].current?.focus();
        }
    };

    const handleResendOTP = () => {
        setTimer(28);
        setOtp(["", "", "", ""]);
        // Add your resend OTP logic here
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otpCode = otp.join("");
        console.log("OTP Submitted:", otpCode);
        // Add your verification logic here
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
            {/* Background Image */}
            <div className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${SplashBg})` }}>
            </div>

            {/* Back Button */}
            <button
                className="absolute top-8 left-8 z-20 text-white hover:text-gray-300 transition-colors"
                onClick={() => window.history.back()}
            >
                <FaArrowLeft className="w-6 h-6" />
            </button>

            {/* Left Side - Phone Illustration */}
            <div className="relative z-10 w-1/2 flex items-center justify-center">
                <img
                    src={SplashLogo}
                    alt="Phone Verification"
                    className="w-80 h-auto object-contain"
                />
            </div>

            {/* Right Side - Verification Form */}
            <div className="relative z-10 w-1/2 flex items-center justify-center px-8">
                <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-3xl px-12 py-16 shadow-2xl w-full max-w-lg">
                    {/* Title */}
                    <div className="mb-24 text-center">
                        <h1 className="text-3xl font-bold text-white mb-3 tracking-wide">
                            VERIFICATION
                        </h1>
                        <p className="text-gray-400 text-sm">
                            Enter 4-digit OTP sent to your email address.
                        </p>
                    </div>

                    {/* OTP Form */}
                    <form onSubmit={handleSubmit} className=" mb-8">
                        {/* OTP Input Boxes */}
                        <div className="flex justify-center gap-4 mb-8">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={inputRefs[index]}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-16 h-16 bg-gray-800 bg-opacity-50 border-2 border-gray-600 rounded-xl text-white text-center text-2xl font-semibold focus:outline-none focus:border-amber-500 transition-colors"
                                    style={{ borderColor: digit ? '#EDBF6D' : '' }}
                                />
                            ))}
                        </div>

                        {/* Resend OTP */}
                        <div className="text-center mb-24">
                            {timer > 0 ? (
                                <p className="text-amber-400 text-sm">
                                    Resend OTP ({timer}s)
                                </p>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleResendOTP}
                                    className="text-amber-400 text-sm hover:text-amber-300 transition-colors underline"
                                >
                                    Resend OTP
                                </button>
                            )}
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="w-full py-4 px-6 rounded-full font-semibold text-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                            style={{ backgroundColor: '#EDBF6D' }}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Verification;

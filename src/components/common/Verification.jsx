import { useState, useRef, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import SplashBg from "../../assets/SplashBg.png";
import { Link } from "react-router-dom";
import SplashLogo from "../../assets/phonepic.png";
import { useRole } from "../../context/RoleContext";
const Verification = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(28);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const { isSeller } = useRole();

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
                className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 text-white hover:text-gray-300 transition-colors"
                onClick={() => window.history.back()}
            >
                <FaArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Main Container */}
            <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
                {/* Left Side - Phone Illustration (Hidden on mobile/tablet) */}
                <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
                    <img
                        src={SplashLogo}
                        alt="Phone Verification"
                        className="w-96 h-auto object-contain"
                    />
                </div>

                {/* Right Side - Verification Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8">
                    <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-2xl sm:rounded-3xl px-6 py-10 sm:px-10 md:px-12 sm:py-16 shadow-2xl w-full max-w-lg">
                        {/* Title */}
                        <div className="mb-12 sm:mb-16 md:mb-24 text-center">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-wide">
                                VERIFICATION
                            </h1>
                            <p className="text-gray-400 text-xs sm:text-sm px-2">
                                Enter 4-digit OTP sent to your email address.
                            </p>
                        </div>

                        {/* OTP Form */}
                        <form onSubmit={handleSubmit} className="mb-6 sm:mb-8">
                            {/* OTP Input Boxes */}
                            <div className="flex justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={inputRefs[index]}
                                        type="text"
                                        maxLength="1"
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 bg-opacity-50 border-2 border-gray-600 rounded-xl text-white text-center text-xl sm:text-2xl font-semibold focus:outline-none focus:border-amber-500 transition-colors"
                                        style={{ borderColor: digit ? '#EDBF6D' : '' }}
                                    />
                                ))}
                            </div>

                            {/* Resend OTP */}
                            <div className="text-center mb-12 sm:mb-16 md:mb-24">
                                {timer > 0 ? (
                                    <p className="text-amber-400 text-xs sm:text-sm">
                                        Resend OTP ({timer}s)
                                    </p>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleResendOTP}
                                        className="text-amber-400 text-xs sm:text-sm hover:text-amber-300 transition-colors underline"
                                    >
                                        Resend OTP
                                    </button>
                                )}
                            </div>

                            {/* Submit Button */}
                            <Link to={isSeller ? '/sellerkyc' : '/buyerType'}>
                                <button
                                    type="button"
                                    className="w-full py-3 sm:py-4 px-6 rounded-full font-semibold text-black text-sm sm:text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                                    style={{ backgroundColor: '#EDBF6D' }}
                                >

                                    Sign Up

                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Verification;

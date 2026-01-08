import { useState, useRef, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import SplashBg from "../../assets/SplashBg.png";
import SplashLogo from "../../assets/phone.png";

const RecoverPassword = () => {
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
                <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-3xl px-12 py-16 pb-10 shadow-2xl w-full max-w-lg">
                    {/* Title */}
                    <div className="mb-24">
                        <h1 className="text-3xl font-bold text-white mb-3 tracking-wide">
                            Recover Password
                        </h1>
                        <p className="text-gray-400 text-sm">
                            Please enter your registered email address so we can send a password reset link.
                        </p>
                    </div>

                    {/* OTP Form */}
                    <form onSubmit={handleSubmit} className=" mb-8">

                        <div className="mb-20">
                            <input
                                type="text"
                                placeholder="Email"
                                className="w-full px-6 py-4 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-[80%] ml-[10%] py-4 px-4 rounded-full font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                            style={{ backgroundColor: '#012688' }}
                        >
                            <Link to="/recoverpassword2">
                                Continue
                            </Link>
                        </button>
                    </form>
                    <div className="text-center mt-16">
                        <span className="text-white">
                            I remember it! <Link className="text-amber-400" to="/signin">SIGN IN</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecoverPassword;

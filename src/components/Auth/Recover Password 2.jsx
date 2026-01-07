import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import SplashBg from "../../assets/SplashBg.png";
import SplashLogo from "../../assets/phone.png";

const RecoverPassword2 = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
                    <form className=" mb-8">

                        <div className="relative mb-6">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full px-6 py-4 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                            >
                                {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                            </button>
                        </div>

                        {/* Confirm Password Input */}
                        <div className="relative mb-20">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="w-full px-6 py-4 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                            >
                                {showConfirmPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-[80%] ml-[10%] py-4 px-4 rounded-full font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                            style={{ backgroundColor: '#012688' }}
                        >
                            Reset password
                        </button>
                    </form>
                    <div className="text-center mt-16">
                        <span className="text-white">
                            I remember it! <a className="text-amber-400" href="/signin">SIGN IN</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecoverPassword2;

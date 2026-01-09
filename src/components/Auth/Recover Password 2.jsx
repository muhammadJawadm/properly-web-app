import { useState } from "react";
import { Link } from "react-router-dom";
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
                        className="w-80 h-auto object-contain"
                    />
                </div>

                {/* Right Side - Reset Password Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8">
                    <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-2xl sm:rounded-3xl px-6 py-10 sm:px-10 md:px-12 sm:py-16 md:pb-10 shadow-2xl w-full max-w-lg">
                        {/* Title */}
                        <div className="mb-12 sm:mb-16 md:mb-24">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-wide">
                                Recover Password
                            </h1>
                            <p className="text-gray-400 text-xs sm:text-sm">
                                Please enter your registered email address so we can send a password reset link.
                            </p>
                        </div>

                        {/* Password Reset Form */}
                        <form className="mb-6 sm:mb-8">
                            <div className="relative mb-4 sm:mb-6">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-transparent border border-gray-600 rounded-xl text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                >
                                    {showPassword ? <FaEyeSlash className="w-4 h-4 sm:w-5 sm:h-5" /> : <FaEye className="w-4 h-4 sm:w-5 sm:h-5" />}
                                </button>
                            </div>

                            {/* Confirm Password Input */}
                            <div className="relative mb-10 sm:mb-16 md:mb-20">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-transparent border border-gray-600 rounded-xl text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                >
                                    {showConfirmPassword ? <FaEyeSlash className="w-4 h-4 sm:w-5 sm:h-5" /> : <FaEye className="w-4 h-4 sm:w-5 sm:h-5" />}
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full sm:w-[80%] sm:mx-auto block py-3 sm:py-4 px-4 rounded-full font-semibold text-white text-sm sm:text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                                style={{ backgroundColor: '#012688' }}
                            >
                                Reset password
                            </button>
                        </form>

                        <div className="text-center mt-8 sm:mt-12 md:mt-16">
                            <span className="text-white text-xs sm:text-sm">
                                I remember it! <Link className="text-amber-400 hover:underline" to="/signin">SIGN IN</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecoverPassword2;

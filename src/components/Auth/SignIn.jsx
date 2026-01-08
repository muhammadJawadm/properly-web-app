import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import SplashBg from "../../assets/SplashBg.png";
import SplashLogo from "../../assets/splashLogo2.png";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

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

            {/* Left Side - Logo */}
            <div className="relative z-10 w-1/2 flex items-center justify-center">
                <img
                    src={SplashLogo}
                    alt="Properly Real Estate Logo"
                    className="w-96 h-auto object-contain"
                />
            </div>

            {/* Right Side - Signup Form */}
            <div className="relative z-10 w-1/2 flex items-center justify-center px-8">
                <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-3xl px-12 py-10 shadow-2xl w-full max-w-lg">
                    {/* Title */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2 tracking-wide">
                            SIGN IN
                        </h1>
                        <p className="text-gray-400 text-sm">
                            Add you detail to login to your account
                        </p>
                    </div>

                    {/* Form */}
                    <form className="">
                        {/* Email/Phone Input */}
                        <div>
                            <input
                                type="text"
                                placeholder="Email"
                                className="w-full px-6 py-4 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
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


                        {/* Terms Checkbox */}
                        <div className="flex items-end gap-2 justify-end">
                            <label className="text-gray-400 text-sm cursor-pointer">
                                <span className="text-amber-400">Forget Password?</span>
                            </label>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center gap-4 my-6 mt-16">
                            <div className="flex-1 h-px bg-gray-600"></div>
                            <span className="text-gray-500 text-sm">OR</span>
                            <div className="flex-1 h-px bg-gray-600"></div>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="flex gap-4 mb-16">
                            <button
                                type="button"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-xl text-white hover:bg-opacity-20 transition-all duration-300"
                            >
                                <FcGoogle className="w-5 h-5" />
                                <span className="text-sm font-medium">Google</span>
                            </button>
                            <button
                                type="button"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-xl text-white hover:bg-opacity-20 transition-all duration-300"
                            >
                                <BsFacebook className="w-5 h-5 text-blue-500" />
                                <span className="text-sm font-medium">Facebook</span>
                            </button>
                        </div>

                        {/* Sign Up Button */}
                        <button

                            className="w-full text-white py-4 px-8 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                            style={{ backgroundColor: '#012688' }}
                        >
                            <Link to="/recoverpassword">
                                Sign In
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

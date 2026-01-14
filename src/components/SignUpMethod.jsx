import SplashBg from "../assets/SplashBg.png";
import SplashLogo from "../assets/splashLogo2.png";
import { Link } from "react-router-dom";

const SignUpMethod = () => {
    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
            {/* Background Image - Same as SplashScreen */}
            <div className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${SplashBg})` }}>
            </div>

            {/* Logo - Hidden on mobile and tablet, visible on desktop */}
            <div className="hidden lg:block relative z-10 w-1/2 max-w-7xl mx-auto px-8">
                <div className="mx-32 flex-shrink-0">
                    <img
                        src={SplashLogo}
                        alt="Properly Real Estate Logo"
                        className="w-96 h-auto object-contain"
                    />
                </div>
            </div>

            {/* Main Content Card */}
            <div className="relative z-10 w-full lg:w-1/2 max-w-2xl lg:mx-24">
                <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-2xl sm:rounded-3xl px-6 py-8 sm:px-12 md:px-16 sm:py-12 md:py-14 shadow-2xl relative">
                    {/* Welcome Title */}
                    <div className="mb-12 sm:mb-20 md:mb-32">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-wide">
                            Welcome
                        </h1>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Verified Property Selling Made Simple
                        </p>
                    </div>

                    {/* Button Selection */}
                    <div className="flex flex-col items-center space-y-4 sm:space-y-5 mb-16 sm:mb-24 md:mb-32">
                        {/* Login Button */}
                        <Link to="/signin" className="w-full sm:w-2/3">
                            <button
                                className="w-full py-3 sm:py-4 px-6 sm:px-8 rounded-full font-semibold text-white text-sm sm:text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                                style={{ backgroundColor: '#012688' }}
                            >
                                Login
                            </button>
                        </Link>

                        {/* Sign Up Button */}
                        <Link to="/signup" className="w-full sm:w-2/3">
                            <button
                                className="w-full py-3 sm:py-4 px-6 sm:px-8 rounded-full font-semibold text-black text-sm sm:text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                                style={{ backgroundColor: '#EDBF6D' }}
                            >
                                Sign Up
                            </button>
                        </Link>
                    </div>

                    {/* Footer Links */}
                    <div className="mt-8 sm:mt-0 sm:absolute sm:bottom-8 left-0 right-0">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs sm:text-sm text-gray-400">
                            <a href="#" className="hover:text-white transition-colors duration-200 hover:underline">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white transition-colors duration-200 hover:underline">
                                Contact support
                            </a>
                            <a href="#" className="hover:text-white transition-colors duration-200 hover:underline">
                                Terms & Services
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpMethod;

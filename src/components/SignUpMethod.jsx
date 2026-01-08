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

            <div className="relative z-10 w-1/2 max-w-7xl mx-auto px-8 flex">
                <div className="mx-32 flex-shrink-0">
                    <img
                        src={SplashLogo}
                        alt="Properly Real Estate Logo"
                        className="w-96 h-auto object-contain"
                    />
                </div>
            </div>

            {/* Main Content Card */}
            <div className="relative z-10 w-1/2 max-w-2xl mx-24">
                <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-3xl px-16 py-14 shadow-2xl relative">
                    {/* Welcome Title */}
                    <div className=" mb-32">
                        <h1 className="text-4xl font-bold text-white mb-4 tracking-wide">
                            Welcome
                        </h1>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Verified Propery Selling Made Simple
                        </p>
                    </div>

                    {/* Role Selection */}
                    <div className="flex flex-col items-center space-y-5 mb-32">
                        {/* I am a Seller Button */}
                        <button
                            className="w-2/3 py-4 px-8 rounded-full font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                            style={{ backgroundColor: '#012688' }}
                        >
                            <Link to="/signin">
                                Login
                            </Link>
                        </button>

                        {/* I am Buyer Button */}
                        <button
                            className="w-2/3 py-4 px-8 rounded-full font-semibold text-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                            style={{ backgroundColor: '#EDBF6D' }}
                        >
                            <Link to="/signup">
                                Sign Up
                            </Link>
                        </button>

                    </div>

                    {/* Footer Links */}
                    <div className="absolute bottom-8 left-0 right-0">
                        <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
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

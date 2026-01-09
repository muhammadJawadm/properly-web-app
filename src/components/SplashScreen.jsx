import SplashBg from "../assets/SplashBg.png";
import SplashLogo from "../assets/Splashlogo3.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SplashScreen = () => {
    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className='absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${SplashBg})` }}>
            </div>

            {/* Main Content - Centered Logo with Buttons Above */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                {/* Buttons Row - Positioned Above Logo */}
                {/* Mobile: Vertical Stack, Tablet & Desktop: Horizontal */}
                <div className="absolute top-[20%] sm:top-[25%] md:top-[30%] lg:top-[35%] left-0 right-0 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-6 px-4 sm:px-8 md:px-16 lg:px-32 max-w-6xl mx-auto">
                    {/* Sell Property Button */}
                    <Link to="/user">
                        <button
                            className="flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-xs sm:text-sm w-full sm:w-auto justify-center"
                            style={{ backgroundColor: '#EDBF6D' }}
                        >
                            SELL PROPERTY
                            <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                    </Link>

                    {/* Buy Property Button */}
                    <Link to="/user">
                        <button
                            className="flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-xs sm:text-sm w-full sm:w-auto justify-center"
                            style={{ backgroundColor: '#EDBF6D' }}
                        >
                            BUY PROPERTY
                            <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                    </Link>
                </div>

                {/* Main Logo - Centered */}
                <div className="flex items-center justify-center mt-8 sm:mt-0">
                    <img
                        src={SplashLogo}
                        alt="Properly Real Estate Logo"
                        className="w-[280px] sm:w-[400px] md:w-[600px] lg:w-[900px] h-auto object-contain"
                    />
                </div>
            </div>

            {/* Conveyor Login Link - Responsive Positioning */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10">
                <a
                    href="/signin"
                    className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-gray-400 text-xs sm:text-sm hover:bg-white hover:bg-opacity-10 transition-all duration-300 inline-block"
                    style={{ color: '#EDBF6D' }}
                >
                    Conveyor login
                </a>
            </div>
        </div>
    );
};

export default SplashScreen;

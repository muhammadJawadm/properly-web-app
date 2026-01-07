import SplashBg from "../assets/SplashBg.png";
import SplashLogo from "../assets/splashLogo3.png";
import { FaArrowRight } from "react-icons/fa";

const SplashScreen = () => {
    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className='absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${SplashBg})` }}>
            </div>

            {/* Main Content - Centered Logo with Buttons Above */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                {/* Buttons Row - Positioned Above Logo */}
                <div className="absolute top-[35%] left-0 right-0 flex items-center justify-between px-32 max-w-6xl mx-auto">
                    {/* Sell Property Button - Left */}
                    <button
                        className="flex items-center gap-2 px-8 py-3 rounded-full text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-sm"
                        style={{ backgroundColor: '#EDBF6D' }}
                    >
                        <a href="/user">
                            SELL PROPERTY
                        </a>
                        <FaArrowRight className="w-4 h-4" />
                    </button>

                    {/* Buy Property Button - Right */}
                    <button
                        className="flex items-center gap-2 px-8 py-3 rounded-full text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-sm"
                        style={{ backgroundColor: '#EDBF6D' }}
                    >
                        <a href="/user">
                            BUY PROPERTY
                        </a>
                        <FaArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Main Logo - Centered */}
                <div className="flex items-center justify-center">
                    <img
                        src={SplashLogo}
                        alt="Properly Real Estate Logo"
                        className="w-[900px] h-auto object-contain"
                    />
                </div>

                {/* Conveyor Login Link - Bottom Right */}

            </div>
            <div className="absolute bottom-10 right-10">
                <a
                    href="/signin"
                    className="px-6 py-2 rounded-full border border-gray-400 text-sm hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                    style={{ color: '#EDBF6D' }}
                >
                    Conveyor login
                </a>
            </div>
        </div>
    );
};

export default SplashScreen;

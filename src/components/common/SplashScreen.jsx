import SplashBg from "../../assets/SplashBg.png";
import SplashLogo from "../../assets/Splashlogo3.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRole } from "../../context/RoleContext";



const SplashScreen = () => {
    const { selectRole } = useRole();

    const handleRoleSelection = (role) => {
        selectRole(role);
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className='absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${SplashBg})` }}>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">

                {/* Mobile Layout (hidden on sm and above) */}
                <div className="flex sm:hidden flex-col items-center justify-center gap-8">
                    {/* Logo First */}
                    <div className="flex items-center justify-center">
                        <img
                            src={SplashLogo}
                            alt="Properly Real Estate Logo"
                            className="w-[280px] h-auto object-contain"
                        />
                    </div>

                    {/* Buttons Below Logo */}
                    <div className="flex flex-col items-center gap-4 w-full max-w-xs">
                        {/* Sell Property Button */}
                        <Link to="/SignupMethod" className="w-full">
                            <button
                                onClick={() => handleRoleSelection('seller')}
                                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-xs w-full justify-center"
                                style={{ backgroundColor: '#EDBF6D' }}
                            >
                                SELL PROPERTY
                                <FaArrowRight className="w-3 h-3" />
                            </button>
                        </Link>

                        {/* Buy Property Button */}
                        <Link to="/SignupMethod" className="w-full">
                            <button
                                onClick={() => handleRoleSelection('buyer')}
                                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-xs w-full justify-center"
                                style={{ backgroundColor: '#EDBF6D' }}
                            >
                                BUY PROPERTY
                                <FaArrowRight className="w-3 h-3" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Desktop/Tablet Layout (hidden on mobile, visible sm and above) */}
                <div className="hidden sm:flex flex-col items-center justify-center w-full h-full">
                    {/* Buttons Row - Positioned Above Logo */}
                    <div className="absolute top-[25%] md:top-[30%] lg:top-[35%] left-0 right-0 flex flex-row items-center justify-center sm:justify-between gap-6 px-8 md:px-16 lg:px-32 max-w-6xl mx-auto">
                        {/* Sell Property Button */}
                        <Link to="/SignupMethod">
                            <button
                                onClick={() => handleRoleSelection('seller')}
                                className="flex items-center gap-2 px-8 py-3 rounded-full text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-sm"
                                style={{ backgroundColor: '#EDBF6D' }}
                            >
                                SELL PROPERTY
                                <FaArrowRight className="w-4 h-4" />
                            </button>
                        </Link>

                        {/* Buy Property Button */}
                        <Link to="/SignupMethod">
                            <button
                                onClick={() => handleRoleSelection('buyer')}
                                className="flex items-center gap-2 px-8 py-3 rounded-full text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-sm"
                                style={{ backgroundColor: '#EDBF6D' }}
                            >
                                BUY PROPERTY
                                <FaArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>

                    {/* Main Logo - Centered */}
                    <div className="flex items-center justify-center">
                        <img
                            src={SplashLogo}
                            alt="Properly Real Estate Logo"
                            className="w-[500px] md:w-[700px] lg:w-[1000px] h-auto object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Conveyor Login Link - Responsive Positioning */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10 z-20">
                <Link to="/attorney/access"
                    className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-gray-400 text-xs sm:text-sm hover:bg-white hover:bg-opacity-10 transition-all duration-300 inline-block"
                    style={{ color: '#EDBF6D' }}
                >
                    Conveyor login
                </Link>
            </div>
        </div>
    );
};

export default SplashScreen;

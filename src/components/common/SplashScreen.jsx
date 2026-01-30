import SplashBg from "../../assets/SplashBg.png";
import SplashLogo from "../../assets/ProperlyLogoPNG2.png";
import SplashLogomobile from "../../assets/ProperlyLogoMobilePNG.png";
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
                <div className="flex sm:hidden flex-col items-center justify-center">
                    {/* Logo First */}
                    <div className="flex items-center w-full h-full justify-center">
                        <img
                            src={SplashLogomobile}
                            alt="Properly Real Estate Logo"
                            className="w-[1400px] h-[65vh] object-contain"
                        />
                    </div>

                    {/* Buttons Below Logo */}
                    <div className="flex flex-col items-center gap-4 w-full max-w-xs">
                        {/* Sell Property Button */}
                        <Link to="/SignupMethod" className="w-3/4">
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
                        <Link to="/SignupMethod" className="w-3/4">
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
                    <div className="absolute top-[20%] md:top-[32%] lg:top-[34%] xl:top-[40%] lg:left-[1%] left-10 right-0 flex flex-row items-center justify-center sm:justify-between gap-8 px-4 md:px-12 lg:px-6 xl:px-0  max-w-5xl xl:max-w-6xl mx-auto">
                        {/* Sell Property Button */}
                        <Link to="/SignupMethod">
                            <button
                                onClick={() => handleRoleSelection('seller')}
                                className="flex items-center gap-2 lg:px-7 xl:px-6 md:px-4 md:py-2.5 sm:px-6 sm:py-2 rounded-full text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-sm md:text-sm lg:text-md"
                                style={{ backgroundColor: '#EDBF6D' }}
                            >
                                SELL PROPERTY
                                <FaArrowRight className="md:w-4 md:h-4 xl:w-8 xl:h-8" />
                            </button>
                        </Link>

                        {/* Buy Property Button */}
                        <Link to="/SignupMethod">
                            <button
                                onClick={() => handleRoleSelection('buyer')}
                                className="flex items-center gap-2 lg:px-7 xl:px-6 md:px-4 md:py-2.5 sm:px-6 sm:py-2 rounded-full text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-sm md:text-sm lg:text-md"
                                style={{ backgroundColor: '#EDBF6D' }}
                            >
                                BUY PROPERTY
                                <FaArrowRight className="md:w-4 md:h-4 xl:w-8 xl:h-8" />
                            </button>
                        </Link>
                    </div>

                    {/* Main Logo - Centered */}
                    <div className="flex items-center justify-center w-full h-[100vh]">
                        <img
                            src={SplashLogo}
                            alt="Properly Real Estate Logo"
                            className="w-[800px] md:w-[1600px] lg:w-[1800px] h-[130vh] md:h-[130vh] lg:h-[130vh] object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Conveyor Login Link - Responsive Positioning */}
            <div className="absolute bottom-4 bottom-0 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10 z-20">
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
import SplashLogo from "../../../assets/Splashlogo2.png";

const KycWelcomeStep = ({ onStart, steps }) => {
    return (
        <div className="w-full max-w-4xl">
            <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img src={SplashLogo} alt="Properly Logo" className="w-40 sm:w-52 md:w-64 h-auto" />
                </div>

                {/* Steps Overview */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8">
                    {steps.map((step, index) => (
                        <div key={step.number} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                            <div className="flex flex-col items-center">
                                {/* Icon */}
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl  flex items-center justify-center mb-3 sm:mb-4">
                                    <img src={step.icon} alt="" />
                                </div>
                                {/* Step Info */}
                                <div className="flex items-center gap-2 text-gray-400">
                                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs sm:text-sm">
                                        {step.number}
                                    </span>
                                    <span className="text-xs sm:text-sm">{step.label}</span>
                                </div>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="hidden sm:block w-24 md:w-40 h-0.5 bg-gray-700 mt-16 md:mt-28" style={{ borderStyle: 'dashed' }} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Start Button */}

            </div>
            <div className="flex justify-center mt-6 sm:mt-8">
                <button
                    onClick={onStart}
                    className="px-10 sm:px-12 md:px-16 py-3 sm:py-4 text-sm sm:text-base rounded-full font-semibold text-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#EDBF6D' }}
                >
                    Start KYC Verification
                </button>
            </div>
        </div>
    );
};

export default KycWelcomeStep;

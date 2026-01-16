const ProgressStepper = ({ steps, currentStep }) => {
    return (
        <div className="mb-8 p-2 sm:p-4">
            {/* Mobile & Tablet: Vertical stepper */}
            <div className="block lg:hidden space-y-3">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                        {/* Step Circle */}
                        <div
                            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 flex-shrink-0 transition-all ${index + 1 === currentStep
                                ? 'bg-gradient-to-r from-[#FCD66B] to-[#C28B33] border-amber-500 text-black'
                                : index + 1 < currentStep
                                    ? 'bg-gray-700 border-gray-600 text-white'
                                    : 'bg-gray-800 border-gray-700 text-gray-500'
                                }`}
                        >
                            <span className="font-semibold text-xs">{index + 1}</span>
                        </div>

                        {/* Step Label */}
                        <div className="flex-1 pt-1">
                            <span
                                className={`text-sm font-medium ${index + 1 === currentStep
                                    ? 'text-white'
                                    : index + 1 < currentStep
                                        ? 'text-gray-400'
                                        : 'text-gray-600'
                                    }`}
                            >
                                {step}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Large Desktop: Horizontal stepper with scrolling */}
            <div className="hidden lg:block w-full overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex items-center justify-start px-2 min-w-max">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center">
                            {/* Step Circle */}
                            <div className="flex items-center flex-shrink-0">
                                <div
                                    className={`flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all ${index + 1 === currentStep
                                        ? 'bg-gradient-to-r from-[#FCD66B] to-[#C28B33] border-amber-500 text-black'
                                        : index + 1 < currentStep
                                            ? 'bg-gray-700 border-gray-600 text-white'
                                            : 'bg-gray-800 border-gray-700 text-gray-500'
                                        }`}
                                >
                                    <span className="font-semibold text-xs">{index + 1}</span>
                                </div>
                                <span
                                    className={`ml-2 text-xs xl:text-sm font-medium whitespace-nowrap ${index + 1 === currentStep
                                        ? 'text-white'
                                        : index + 1 < currentStep
                                            ? 'text-gray-400'
                                            : 'text-gray-600'
                                        }`}
                                >
                                    {step}
                                </span>
                            </div>

                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div
                                    className={`w-6 xl:w-10 h-0.5 mx-2 xl:mx-3 flex-shrink-0 ${index + 1 < currentStep ? 'bg-gray-600' : 'bg-gray-800'
                                        }`}
                                ></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgressStepper;

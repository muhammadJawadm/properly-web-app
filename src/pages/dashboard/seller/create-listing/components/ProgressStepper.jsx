const ProgressStepper = ({ steps, currentStep }) => {
    return (
        <div className="mb-8 p-2 sm:p-4">
            {/* Mobile: Vertical stepper */}
            <div className="block md:hidden space-y-3">
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

            {/* Tablet/Desktop: Horizontal stepper */}
            <div className="hidden md:flex items-center justify-center overflow-x-auto pb-2">
                <div className="flex items-center min-w-max px-4">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center">
                            {/* Step Circle */}
                            <div className="flex items-center">
                                <div
                                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${index + 1 === currentStep
                                            ? 'bg-gradient-to-r from-[#FCD66B] to-[#C28B33] border-amber-500 text-black'
                                            : index + 1 < currentStep
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-gray-800 border-gray-700 text-gray-500'
                                        }`}
                                >
                                    <span className="font-semibold text-sm">{index + 1}</span>
                                </div>
                                <span
                                    className={`ml-2 text-xs lg:text-sm font-medium whitespace-nowrap ${index + 1 === currentStep
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
                                    className={`w-6 lg:w-10 h-0.5 mx-2 lg:mx-3 ${index + 1 < currentStep ? 'bg-gray-600' : 'bg-gray-800'
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

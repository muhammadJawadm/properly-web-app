const KycStepIndicator = ({ steps, currentStep }) => {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16">
            {steps.map((step, index) => (
                <div key={step.number} className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <span
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step.number === currentStep
                                    ? 'bg-amber-500 text-black'
                                    : 'bg-gray-700 text-gray-400'
                                }`}
                        >
                            {step.number}
                        </span>
                        <span className={step.number === currentStep ? 'text-amber-500' : 'text-gray-400'}>
                            {step.label}
                        </span>
                    </div>
                    {index < steps.length - 1 && (
                        <div className="lg:w-32 sm:w-0 h-0.5 bg-gray-700" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default KycStepIndicator;

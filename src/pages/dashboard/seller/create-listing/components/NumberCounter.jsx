const NumberCounter = ({ label, value, onChange, min = 0, max = 20, orangeLabel }) => {
    const handleIncrement = () => {
        if (value < max) onChange(value + 1);
    };

    const handleDecrement = () => {
        if (value > min) onChange(value - 1);
    };

    return (
        <div>
            {label && (
                <label className="block text-gray-300 mb-2 text-sm flex items-center gap-2">
                    {label}
                    {orangeLabel && <span className="text-amber-500 text-xs">{orangeLabel}</span>}
                </label>
            )}
            <div className="flex items-center gap-2 md:gap-3">
                {Array.from({ length: max + 1 }, (_, i) => i).map((num) => (
                    <button
                        key={num}
                        onClick={() => onChange(num)}
                        className={`w-6 h-6 md:w-12 md:h-12 rounded-3xl border transition-all ${value === num
                            ? 'bg-amber-500 border-amber-500 text-black font-semibold'
                            : 'bg-gray-800/60 border-gray-700 text-gray-400 hover:border-amber-500'
                            }`}
                    >
                        {num}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NumberCounter;

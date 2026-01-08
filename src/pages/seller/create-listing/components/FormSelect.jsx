const FormSelect = ({ label, value, onChange, options, placeholder = 'Select', required = false }) => {
    return (
        <div className="flex-1">
            <label className="block text-white mb-2 text-sm">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <select
                    value={value}
                    onChange={onChange}
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white appearance-none cursor-pointer focus:outline-none focus:border-amber-500 transition-colors"
                >
                    <option value="">{placeholder}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default FormSelect;

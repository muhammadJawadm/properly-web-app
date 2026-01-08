const FormInput = ({ label, placeholder, value, onChange, type = 'text', required = false, helperText }) => {
    return (
        <div className="flex-1">
            <label className="block text-white mb-2 text-sm">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {helperText && <p className="text-gray-400 text-xs mt-1 italic">{helperText}</p>}
        </div>
    );
};

export default FormInput;

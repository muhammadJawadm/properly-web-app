import { useState, useEffect, useRef } from 'react';

const FormSelect = ({ label, value, onChange, options, placeholder = 'Select', required = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (optionValue) => {
        onChange({ target: { value: optionValue } });
        setIsOpen(false);
    };

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div className="flex-1" ref={dropdownRef}>
            <label className="block text-white mb-2 text-sm">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                {/* Custom Trigger */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full pl-4 pr-10 py-3 bg-gray-800/60 border ${isOpen ? 'border-amber-500' : 'border-gray-700'} rounded-lg text-white cursor-pointer hover:bg-gray-800 transition-colors relative flex items-center min-h-[46px]`}
                >
                    <span className={`${!selectedOption ? 'text-gray-400' : ''} block truncate`}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>

                    {/* Arrow Icon */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-200"
                        style={{ transform: isOpen ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%) rotate(0deg)' }}
                    >
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                {/* Dropdown Options */}
                {isOpen && (
                    <div className="absolute z-50 w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                    >
                        <style>
                            {`
                                div::-webkit-scrollbar {
                                    display: none;
                                }
                            `}
                        </style>
                        {options.length === 0 ? (
                            <div className="px-4 py-3 text-gray-400 text-sm">No options available</div>
                        ) : (
                            options.map((option) => (
                                <div
                                    key={option.value}
                                    onClick={() => handleSelect(option.value)}
                                    className={`px-4 py-3 text-sm cursor-pointer transition-colors border-b border-gray-700/50 last:border-0 hover:bg-gray-700 text-left whitespace-normal ${value === option.value ? 'bg-amber-500/10 text-amber-500' : 'text-gray-300'
                                        }`}
                                >
                                    {option.label}
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FormSelect;

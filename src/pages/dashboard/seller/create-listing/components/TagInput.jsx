const TagInput = ({ label, tags, onAddTag, onRemoveTag, placeholder }) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.target.value.trim()) {
            e.preventDefault();
            onAddTag(e.target.value.trim());
            e.target.value = '';
        }
    };

    return (
        <div>
            {label && <label className="block text-gray-300 mb-2 text-sm">{label}</label>}
            <input
                type="text"
                placeholder={placeholder || 'Type and press Enter'}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors mb-3"
            />
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-gray-700/50 text-white rounded-full text-sm flex items-center gap-2"
                    >
                        {tag}
                        <button
                            onClick={() => onRemoveTag(index)}
                            className="text-gray-400 hover:text-red-400 transition-colors"
                        >
                            ×
                        </button>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TagInput;

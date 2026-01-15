const StarRating = ({ rating, onRate, label }) => {
    return (
        <div>
            {label && <label className="block text-gray-300 mb-2 text-sm">{label}</label>}
            <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        onClick={() => onRate(star)}
                        className="text-3xl transition-all hover:scale-110"
                    >
                        <span className={star <= rating ? 'text-amber-500' : 'text-gray-600'}>
                            ★
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StarRating;

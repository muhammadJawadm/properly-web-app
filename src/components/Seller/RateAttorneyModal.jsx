import { useState } from 'react';
import { FaTimes, FaStar } from 'react-icons/fa';

const RateAttorneyModal = ({ attorneyName, onClose }) => {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleSubmit = () => {
        // Handle rating submission
        console.log('Rating submitted:', rating);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl w-full max-w-md p-6 sm:p-8">
                {/* Header with Close Button */}
                <div className="flex items-center justify-end mb-6">
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-colors"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Title */}
                <h2 className="text-white text-xl sm:text-2xl font-bold text-center mb-8">Rate Attorney</h2>

                {/* Attorney Profile */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-4 overflow-hidden">
                        {/* Using a simple colored circle, you can replace with actual image */}
                        <div className="w-full h-full flex items-center justify-center">
                            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-white text-lg sm:text-xl font-semibold">{attorneyName}</h3>
                </div>

                {/* Star Rating */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            className="transition-all duration-200 hover:scale-110"
                        >
                            <FaStar
                                className={`text-3xl sm:text-4xl transition-colors ${star <= (hoveredRating || rating)
                                        ? 'text-amber-500'
                                        : 'text-gray-600'
                                    }`}
                            />
                        </button>
                    ))}
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    disabled={rating === 0}
                    className={`w-full py-3 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all ${rating === 0
                            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black hover:opacity-90'
                        }`}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default RateAttorneyModal;

import React from 'react';

const ViewingScheduleCard = ({ schedule, onAccept }) => {
    return (
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-4 mb-4">
            <h4 className="text-white font-semibold mb-4">Schedule Viewing</h4>

            {/* Proposed Details */}
            <div className="space-y-3 mb-4">
                <div>
                    <p className="text-gray-400 text-xs mb-1">Proposed date:</p>
                    <p className="text-white text-sm font-medium">{schedule.date}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-xs mb-1">Proposed time:</p>
                    <p className="text-white text-sm font-medium">{schedule.time}</p>
                </div>
            </div>

            {/* Message */}
            {schedule.message && (
                <div className="bg-gray-700/30 rounded-lg p-3 mb-4">
                    <p className="text-gray-400 text-xs mb-1">Message:</p>
                    <p className="text-white text-sm">{schedule.message}</p>
                </div>
            )}

            {/* Accept Button */}
            {onAccept && (
                <button
                    onClick={onAccept}
                    className="w-full py-2.5 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                    Accept Viewing
                </button>
            )}
        </div>
    );
};

export default ViewingScheduleCard;

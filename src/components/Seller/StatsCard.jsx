const StatsCard = ({ label, value, icon, trend, highlighted = false }) => {
    return (
        <div className={`rounded-2xl p-6 shadow-lg ${highlighted
            ? 'bg-gradient-to-b from-[#FCD66B] to-[#C28B33]'
            : 'bg-gray-800/60 backdrop-blur-lg'
            }`}>
            <div className="flex items-center justify-between mb-3">
                <span className={`text-sm ${highlighted ? 'text-white' : 'text-white'}`}>
                    {label}
                </span>
                {icon && (
                    <div className={`p-2 w-12 h-12 rounded-full flex items-center justify-center ${highlighted ? '' : 'bg-gray-700/50'
                        }`}>
                        {icon}
                    </div>
                )}
            </div>

            <div className="flex items-end justify-between">
                <h3 className={`text-3xl font-bold ${highlighted ? 'text-white' : 'text-white'}`}>
                    {value}
                </h3>

                {trend && (
                    <span className={`text-sm border-2 border-white/30 bg-white/10 backdrop-blur-lg rounded-full px-2 py-1 font-semibold ${trend.startsWith('+') ? 'text-white' : 'text-red-400'
                        }`}>
                        {trend}
                    </span>
                )}
            </div>

            {trend && (
                <p className={`text-xs mt-2 ${highlighted ? 'text-amber-100' : 'text-white'}`}>
                    {trend.replace('%', 'K')} this week
                </p>
            )}
        </div>
    );
};

export default StatsCard;

import { FaTimes } from 'react-icons/fa';

const NotificationPanel = ({ showNotifications, onClose, notifications }) => {
    if (!showNotifications) return null;

    const defaultNotifications = [
        { id: 1, icon: '💬', text: 'New inquiry on your listing from John D.', time: 'Just now' },
        { id: 2, icon: '👁️', text: 'Your listing got 32 new views today.', time: '30m ago' },
        { id: 3, icon: '❤️', text: 'Your listing got 32 new views today.', time: '30m ago' },
        { id: 4, icon: '🤝', text: 'You received an offer from a verified buyer.', time: '30m ago' },
        { id: 5, icon: '✅', text: 'Congratulations! You have got a verified badge.', time: '30m ago' },
        { id: 6, icon: '📊', text: 'Engagement increased by 12% this week.', time: '30m ago' }
    ];

    const notificationList = notifications || defaultNotifications;

    return (
        <div className="fixed right-4 sm:right-8 top-20 sm:top-24 w-80 max-h-[75%]  sm:w-96 bg-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <h3 className="text-white font-semibold">Notifications</h3>
                <div className="flex items-center gap-4">
                    <button className="text-amber-500 hover:text-amber-400 text-sm font-medium">
                        Mark All Read
                    </button>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white"
                    >
                        <FaTimes />
                    </button>
                </div>
            </div>

            <div
                className="max-h-96 overflow-y-auto"
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
                {notificationList.map((notif) => (
                    <div key={notif.id} className="p-4 border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors cursor-pointer">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xl flex-shrink-0">
                                {notif.icon}
                            </div>
                            <div className="flex-1">
                                <p className="text-white text-sm mb-1">{notif.text}</p>
                                <span className="text-gray-400 text-xs">{notif.time}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationPanel;

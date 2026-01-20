import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaFire, FaHeart, FaEye, FaTimes } from 'react-icons/fa';
import SellerSidebar, { subscribeSidebarState } from '../../../components/Seller/SellerSidebar';
import Header from '../../../components/common/Header';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import StatsCard from '../../../components/Seller/StatsCard';
import { useSidebarMargin } from '../../../hooks/useResponsive';

const Analytics = () => {
    const navigate = useNavigate();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const sidebarMargin = useSidebarMargin(sidebarCollapsed);
    const [showNotifications, setShowNotifications] = useState(false);
    // Separate state for each card
    const [linkedInPeriod, setLinkedInPeriod] = useState('This Month');
    const [twitterPeriod, setTwitterPeriod] = useState('This Month');
    const [instagramPeriod, setInstagramPeriod] = useState('This Month');

    const timePeriods = ['This Week', 'This Month', 'This Year'];

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    const notifications = [
        { id: 1, icon: '💬', text: 'New inquiry on your listing from John D.', time: 'Just now' },
        { id: 2, icon: '👁️', text: 'Your listing got 32 new views today.', time: '30m ago' },
        { id: 3, icon: '❤️', text: 'Your listing got 32 new views today.', time: '30m ago' },
        { id: 4, icon: '🤝', text: 'You received an offer from a verified buyer.', time: '30m ago' },
        { id: 5, icon: '✅', text: 'Congratulations! You have got a verified badge.', time: '30m ago' },
        { id: 6, icon: '📊', text: 'Engagement increased by 12% this week.', time: '30m ago' }
    ];

    const recentPosts = [
        { icon: FaFacebook, platform: 'PropertyXX', listing: '12 Maple Street', interactions: '2.3K', views: 156, shares: 89, engagement: '4.2%', posted: '2 hours ago' },
        { icon: FaTwitter, platform: 'Twitter', listing: '12 Maple Street', interactions: '890', views: 45, shares: 234, engagement: '3.8%', posted: '4 hours ago' },
        { icon: FaLinkedin, platform: 'Private Property', listing: '12 Maple Street', interactions: '1.5K', views: 78, shares: 123, engagement: '5.1%', posted: '6 hours ago' },
        { icon: FaLinkedin, platform: 'LinkedIn', listing: '12 Maple Street', interactions: '456', views: 23, shares: 67, engagement: '2.9%', posted: '1 day ago' }
    ];

    return (
        <>
            {/* Sidebar */}
            <SellerSidebar />

            {/* Main Content */}
            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: sidebarMargin }}
            >
                <Header
                    title="Analytics"
                    showNotifications={true}
                    onNotificationClick={() => setShowNotifications(!showNotifications)}
                />

                <div className="p-4 sm:p-6 md:p-8">
                    {/* Analytics Overview Header */}
                    <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Analytics Overview</h2>

                    {/* Metric Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <StatsCard
                            label="Accounts Reached"
                            value="40k"
                            icon={<FaUsers className="text-white" size={20} />}
                            trend="+1.29%"
                            highlighted={true}
                        />
                        <StatsCard
                            label="Accounts Engagement"
                            value="40k"
                            icon={<FaFire className="text-amber-500" size={20} />}
                            trend="+1.29%"
                        />
                        <StatsCard
                            label="Total Likes"
                            value="150k"
                            icon={<FaHeart className="text-amber-500" size={20} />}
                            trend="+1.20%"
                        />
                        <StatsCard
                            label="Total Views"
                            value="40k"
                            icon={<FaEye className="text-amber-500" size={20} />}
                            trend="+1.29%"
                        />
                    </div>

                    {/* Engagement Charts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        {/* LinkedIn Engagements */}
                        <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-white font-semibold">LinkedIn Engagements</h3>
                                <select
                                    value={linkedInPeriod}
                                    onChange={(e) => setLinkedInPeriod(e.target.value)}
                                    className="bg-gray-700/50 text-gray-300 text-sm rounded-lg px-3 py-1 border border-gray-600 focus:outline-none focus:border-amber-500 cursor-pointer"
                                >
                                    {timePeriods.map(period => (
                                        <option key={period} value={period}>{period}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <div className="text-3xl font-bold text-white mb-2">84%</div>
                                <div className="flex items-center gap-2">
                                    <span className="text-pink-400 text-sm font-semibold">-8.0%</span>
                                </div>
                            </div>
                            {/* SVG Line Chart with Gradient */}
                            <div className="h-32 relative">
                                <svg width="100%" height="100%" viewBox="0 0 300 120" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.05" />
                                        </linearGradient>
                                    </defs>
                                    {/* Area fill */}
                                    <path
                                        d="M0,60 Q75,40 150,50 T300,30 L300,120 L0,120 Z"
                                        fill="url(#lineGradient1)"
                                    />
                                    {/* Line */}
                                    <path
                                        d="M0,60 Q75,40 150,50 T300,30"
                                        stroke="#ec4899"
                                        strokeWidth="2.5"
                                        fill="none"
                                    />
                                    {/* Dot at peak */}
                                    <circle cx="150" cy="50" r="4" fill="#ec4899" stroke="#1f2937" strokeWidth="2" />
                                    {/* Value label */}
                                    <text x="150" y="35" textAnchor="middle" fill="#ec4899" fontSize="14" fontWeight="bold">84%</text>
                                </svg>
                                {/* Month labels */}
                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>Jan</span>
                                    <span>Mar</span>
                                    <span>May</span>
                                    <span>Jul</span>
                                    <span>Sep</span>
                                </div>
                            </div>
                        </div>

                        {/* Twitter Engagements */}
                        <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-white font-semibold">Twitter Engagements</h3>
                                <select
                                    value={twitterPeriod}
                                    onChange={(e) => setTwitterPeriod(e.target.value)}
                                    className="bg-gray-700/50 text-gray-300 text-sm rounded-lg px-3 py-1 border border-gray-600 focus:outline-none focus:border-amber-500 cursor-pointer"
                                >
                                    {timePeriods.map(period => (
                                        <option key={period} value={period}>{period}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <div className="text-3xl font-bold text-white mb-2">48%</div>
                                <div className="flex items-center gap-2">
                                    <span className="text-green-400 text-sm font-semibold">+12%</span>
                                </div>
                            </div>
                            {/* Bar chart */}
                            <div className="h-24 flex items-end justify-between gap-1">
                                {[40, 50, 45, 60, 55, 80, 65, 55, 50].map((height, i) => (
                                    <div key={i} className="flex-1 bg-gray-600 rounded-t" style={{ height: `${height}%` }}></div>
                                ))}
                            </div>
                        </div>

                        {/* Instagram Engagements */}
                        <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-white font-semibold">Instagram Engagements</h3>
                                <select
                                    value={instagramPeriod}
                                    onChange={(e) => setInstagramPeriod(e.target.value)}
                                    className="bg-gray-700/50 text-gray-300 text-sm rounded-lg px-3 py-1 border border-gray-600 focus:outline-none focus:border-amber-500 cursor-pointer"
                                >
                                    {timePeriods.map(period => (
                                        <option key={period} value={period}>{period}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <div className="text-3xl font-bold text-white mb-2">84%</div>
                                <div className="flex items-center gap-2">
                                    <span className="text-blue-400 text-sm font-semibold">-8.0%</span>
                                </div>
                            </div>
                            {/* SVG Line Chart */}
                            <div className="h-32 relative">
                                <svg width="100%" height="100%" viewBox="0 0 300 120" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.05" />
                                        </linearGradient>
                                    </defs>
                                    {/* Area fill */}
                                    <path
                                        d="M0,80 Q75,70 150,55 T300,40 L300,120 L0,120 Z"
                                        fill="url(#lineGradient3)"
                                    />
                                    {/* Line */}
                                    <path
                                        d="M0,80 Q75,70 150,55 T300,40"
                                        stroke="#60a5fa"
                                        strokeWidth="2.5"
                                        fill="none"
                                    />
                                    <circle cx="20" cy="78" r="4" fill="#60a5fa" stroke="#1f2937" strokeWidth="2" />
                                </svg>
                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>Jan</span>
                                    <span>Mar</span>
                                    <span>May</span>
                                    <span>Jul</span>
                                    <span>Sep</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Posts Performance */}
                    <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-6">Recent Posts Performance</h3>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-700 bg-gray-800">
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Platform</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Listing</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Interactions</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Views</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Shares</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Engagement</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Posted</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentPosts.map((post, index) => {
                                        const Icon = post.icon;
                                        return (
                                            <tr key={index} className="border-b border-gray-700/50 hover:bg-gray-700/20 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        {Icon && <Icon className="text-white" size={20} />}
                                                        <span className={`px-3 py-1 rounded text-sm font-medium ${post.platform === 'PropertyXX' ? 'bg-red-500/20 text-red-400' :
                                                            post.platform === 'Twitter' ? 'bg-blue-500/20 text-blue-400' :
                                                                post.platform === 'Private Property' ? 'bg-pink-500/20 text-pink-400' :
                                                                    'bg-blue-600/20 text-blue-400'
                                                            }`}>
                                                            {post.platform}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-white">{post.listing}</td>
                                                <td className="px-6 py-4 text-white">{post.interactions}</td>
                                                <td className="px-6 py-4 text-white">{post.views}</td>
                                                <td className="px-6 py-4 text-white">{post.shares}</td>
                                                <td className="px-6 py-4 text-white">{post.engagement}</td>
                                                <td className="px-6 py-4 text-gray-400">{post.posted}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notifications Panel */}
            {showNotifications && (
                <div className="fixed right-4 sm:right-8 top-20 sm:top-24 w-80 sm:w-96 bg-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden">
                    <div className="flex items-center justify-between p-6 border-b border-gray-700">
                        <h3 className="text-white font-semibold">Notifications</h3>
                        <div className="flex items-center gap-4">
                            <button className="text-amber-500 hover:text-amber-400 text-sm font-medium">
                                Mark All Read
                            </button>
                            <button
                                onClick={() => setShowNotifications(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                <FaTimes />
                            </button>
                        </div>
                    </div>

                    <div className="max-h-96 overflow-y-auto">
                        {notifications.map((notif) => (
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
            )}
        </>
    );
};

export default Analytics;

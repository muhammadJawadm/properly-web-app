import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFolderMinus } from 'react-icons/fa';
import AttorneySidebar, { subscribeSidebarState } from '../../../components/Attorney/AttorneySidebar';
import Header from '../../../components/common/Header';
import { useSidebarMargin } from '../../../hooks/useResponsive';

const CompletedCRNs = () => {
    const navigate = useNavigate();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const sidebarMargin = useSidebarMargin(sidebarCollapsed);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    // Mock CRN data - would come from API in production
    const completedCRNs = [
        { id: 1, crnNumber: 'CRN-2025-ABGRR5698' },
        { id: 2, crnNumber: 'CRN-2025-ABGRR5698' },
        { id: 3, crnNumber: 'CRN-2025-ABGRR5698' },
        { id: 4, crnNumber: 'CRN-2025-ABGRR5698' },
        { id: 5, crnNumber: 'CRN-2025-ABGRR5698' },
        { id: 6, crnNumber: 'CRN-2025-ABGRR5698' }
    ];

    const handleCRNClick = (crn) => {
        // Navigate to attorney dashboard with CRN
        navigate('/attorney/dashboard');
    };

    return (
        <>
            {/* Sidebar */}
            <AttorneySidebar />

            {/* Main Content */}
            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: sidebarMargin }}
            >
                <Header title="Completed CRNs" showNotifications={true} />

                <div className="p-4 sm:p-6 md:p-8">
                    {/* Completed CRNs Card */}
                    <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 sm:p-8">
                        <h2 className="text-white text-xl font-semibold mb-6">Completed CRNs</h2>

                        {/* CRN Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {completedCRNs.map((crn) => (
                                <button
                                    key={crn.id}
                                    onClick={() => handleCRNClick(crn)}
                                    className="flex items-center justify-between px-6 py-4 bg-gray-700/40 hover:bg-gray-700/60 rounded-xl transition-all duration-200 group"
                                >
                                    <span className="text-white font-medium text-sm sm:text-base">
                                        {crn.crnNumber}
                                    </span>
                                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-600/50 group-hover:bg-amber-500/20 transition-colors">
                                        <FaFolderMinus className="text-amber-500" size={18} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompletedCRNs;

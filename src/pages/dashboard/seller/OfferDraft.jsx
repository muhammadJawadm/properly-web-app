import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaDownload, FaCheckCircle, FaTimes } from 'react-icons/fa';
import SellerSidebar, { subscribeSidebarState } from '../../../components/Seller/SellerSidebar';
import Header from '../../../components/common/Header';
import { useSidebarMargin } from '../../../hooks/useResponsive';

const OfferDraft = () => {
    const navigate = useNavigate();
    const { offerId } = useParams();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const sidebarMargin = useSidebarMargin(sidebarCollapsed);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    // Mock verification data
    const buyerSellerDetails = [
        { label: 'Buyer Name', value: 'John Doe', status: 'verified' },
        { label: 'Buyer Email', value: 'johndoe@gmail.com', status: 'confirmed' },
        { label: 'Buyer ID verification', value: 'Completed', status: 'verified' },
        { label: 'Proof of funds', value: 'Uploaded', status: 'verified' },
        { label: 'Proof of funds', value: 'Uploaded', status: 'verified' },
        { label: 'Seller Name', value: 'Mary Smith', status: 'verified-owner' },
        { label: 'Ownership check', value: 'Match found', status: 'verified' },
        { label: 'Contact Seller', value: 'Hidden (Platform secured)', status: 'secured' }
    ];

    const propertyOfferDetails = [
        { field: 'Property title', source: 'LightStone', data: '3 bedroom apartment' },
        { field: 'ERF Number', source: 'LightStone', data: '3468322' },
        { field: 'Property type', source: 'LightStone', data: 'Residential' },
        { field: 'Zoning', source: 'LightStone', data: 'Single dwelling' },
        { field: 'Transfer History', source: 'LightStone', data: 'Last transferred 2020 - R1,550,000' },
        { field: 'Size', source: 'LightStone', data: '500 m²' },
        { field: 'Offer Price', source: 'Buyer Input', data: 'R 2,050,000' },
        { field: 'Deposit amount', source: 'Buyer Input', data: 'R 250,000' },
        { field: 'Occupation date', source: 'Buyer Input', data: '16 Dec 2025' }
    ];

    const getStatusIcon = (status) => {
        if (status === 'verified' || status === 'confirmed' || status === 'verified-owner') {
            return <FaCheckCircle className="text-green-500" size={16} />;
        } else if (status === 'secured') {
            return <span className="text-amber-500 text-sm">🔒</span>;
        }
        return <FaCheckCircle className="text-green-500" size={16} />;
    };

    const getStatusText = (status) => {
        if (status === 'verified') return 'Verified';
        if (status === 'confirmed') return 'Confirmed';
        if (status === 'verified-owner') return 'Verified Owner';
        if (status === 'secured') return '';
        return 'Verified';
    };

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
                    title="Offers"
                    showNotifications={false}
                />

                <div className="p-4 sm:p-6 md:p-8">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/seller/offers')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
                    >
                        <FaArrowLeft size={20} />
                        <span className="text-sm sm:text-base">Offer-Draft</span>
                    </button>

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div>
                            <h1 className="text-white text-xl sm:text-2xl font-bold mb-2">
                                Offer to Purchase (OTP) - Auto-Generated Draft
                            </h1>
                            <p className="text-gray-400 text-xs sm:text-sm">
                                The system has created a draft using verified details from Lightstone and buyer inputs.
                                Please review before proceeding.
                            </p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors text-sm">
                            <FaDownload size={14} />
                            Download PDF
                        </button>
                    </div>

                    {/* Property Card */}
                    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-4 mb-6">
                        <div className="flex gap-4">
                            <img
                                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg"
                                alt="Property"
                                className="w-24 h-20 sm:w-32 sm:h-24 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                                <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                                    3 bedroom family home in Sandton
                                </h3>
                                <p className="text-amber-500 font-bold text-base sm:text-lg mb-2">R2,500,000</p>
                                <div className="flex flex-wrap gap-2 sm:gap-4 text-gray-400 text-xs sm:text-sm">
                                    <span>• 3 Beds</span>
                                    <span>• 5 Bathrooms</span>
                                    <span>• 2 Garages</span>
                                    <span>• 500sqm</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Verified Buyer & Seller Details */}
                    <div className="mb-6">
                        <h2 className="text-white text-lg sm:text-xl font-bold mb-4">
                            Verified Buyer & Seller Details
                        </h2>
                        <p className="text-gray-400 text-xs sm:text-sm mb-4">Parties to the offer</p>

                        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-700">
                                        <th className="text-left text-gray-400 text-xs sm:text-sm font-semibold p-3 sm:p-4">Label</th>
                                        <th className="text-left text-gray-400 text-xs sm:text-sm font-semibold p-3 sm:p-4">Value</th>
                                        <th className="text-left text-gray-400 text-xs sm:text-sm font-semibold p-3 sm:p-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {buyerSellerDetails.map((item, index) => (
                                        <tr key={index} className="border-b border-gray-700/50">
                                            <td className="text-white text-xs sm:text-sm p-3 sm:p-4">{item.label}</td>
                                            <td className="text-white text-xs sm:text-sm p-3 sm:p-4">{item.value}</td>
                                            <td className="p-3 sm:p-4">
                                                <div className="flex items-center gap-2">
                                                    {getStatusIcon(item.status)}
                                                    <span className="text-green-500 text-xs sm:text-sm">
                                                        {getStatusText(item.status)}
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-amber-500 text-xs sm:text-sm mt-3">
                            Both buyer and seller have completed verification. Personal details remain hidden until signing.
                        </p>
                    </div>

                    {/* Property Offer Details (OTP Draft) */}
                    <div className="mb-6">
                        <h2 className="text-white text-lg sm:text-xl font-bold mb-4">
                            Property offer details (OTP Draft)
                        </h2>
                        <p className="text-gray-400 text-xs sm:text-sm mb-4">
                            Auto-filled from Lightstone + Buyer input
                        </p>

                        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-700">
                                        <th className="text-left text-gray-400 text-xs sm:text-sm font-semibold p-3 sm:p-4">Field</th>
                                        <th className="text-left text-gray-400 text-xs sm:text-sm font-semibold p-3 sm:p-4">Source</th>
                                        <th className="text-left text-gray-400 text-xs sm:text-sm font-semibold p-3 sm:p-4">Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {propertyOfferDetails.map((item, index) => (
                                        <tr key={index} className="border-b border-gray-700/50">
                                            <td className="text-white text-xs sm:text-sm p-3 sm:p-4">{item.field}</td>
                                            <td className="text-gray-400 text-xs sm:text-sm p-3 sm:p-4">{item.source}</td>
                                            <td className="text-white text-xs sm:text-sm p-3 sm:p-4">{item.data}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-amber-500 text-xs sm:text-sm mt-3">
                            This draft has been pre-filled using verified property records from Lightstone. Buyer terms and pricing fields can be adjusted before submission.
                        </p>
                    </div>

                    {/* Buyer terms & verification summary */}
                    <div className="mb-8">
                        <h2 className="text-white text-lg sm:text-xl font-bold mb-4">
                            Buyer terms & verification summary
                        </h2>

                        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-xl p-4 sm:p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <p className="text-gray-400 text-xs sm:text-sm mb-1">Occupation Date</p>
                                    <p className="text-white font-semibold">12 December 2025</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs sm:text-sm mb-1">Condition</p>
                                    <p className="text-white font-semibold">
                                        Offer subject to buyer approval and occupation by 16 Dec 2025, the offer adjusted before submission
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Continue Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={() => navigate(`/seller/offers/negotiation/${offerId}`)}
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-3xl hover:opacity-90 transition-opacity text-sm sm:text-base"
                        >
                            Continue to negotiation
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OfferDraft;

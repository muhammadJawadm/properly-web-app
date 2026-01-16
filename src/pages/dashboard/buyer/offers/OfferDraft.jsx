import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BuyerSidebar, { subscribeSidebarState } from '../../../../components/Buyer/BuyerSidebar';
import Header from '../../../../components/common/Header';

const OfferDraft = () => {
    const navigate = useNavigate();
    const { offerId } = useParams();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    // Mock data
    const offerData = {
        property: {
            image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
            title: '3 bedroom family home in Sandton',
            price: 2500000,
            beds: 3,
            bathrooms: 5,
            garages: 2,
            size: 500
        },
        buyerDetails: [
            { label: 'Buyer Name', value: 'John Doe', status: 'verified' },
            { label: 'Buyer Email', value: 'johndoe@gmail.com', status: 'confirmed' },
            { label: 'Buyer ID verification', value: 'Completed', status: 'verified' },
            { label: 'Proof of funds', value: 'Uploaded', status: 'verified' },
            { label: 'Proof of funds', value: 'Uploaded', status: 'verified' }
        ],
        sellerDetails: [
            { label: 'Seller Name', value: 'Mary Smith', status: 'owner' },
            { label: 'Ownership check', value: 'Match found', status: 'verified' },
            { label: 'Contact Seller', value: 'Hidden (Platform secured)', status: 'secured' }
        ],
        propertyDetails: [
            { field: 'Property title', source: 'Lightstone', data: '3 bedroom apartment' },
            { field: 'ERF Number', source: 'Lightstone', data: '24683230' },
            { field: 'Property type', source: 'Lightstone', data: 'Residential' },
            { field: 'Zoning', source: 'Lightstone', data: 'Single dwelling' },
            { field: 'Transfer History', source: 'Lightstone', data: 'Last transferred 2021 - R1,950,000' },
            { field: 'Property size', source: 'Lightstone', data: '500 m²' },
            { field: 'Offer Price', source: 'Buyer Input', data: 'R 2,000,000', editable: true },
            { field: 'Deposit amount', source: 'Buyer Input', data: 'R 200,000', editable: true },
            { field: 'Occupation date', source: 'Buyer Input', data: '15 Dec 2025', editable: true }
        ],
        buyerTerms: {
            occupationDate: '12 December 2025',
            conditions: 'Offer subject to bond approval and occupation by 15 Dec 2025'
        },
        warning: 'This draft has been pre-filled using verified property records from Lightstone + Buyer terms and pricing levels can be adjusted before submission.',
        submitWarning: 'Second offers in this suburb averaged R-XXXX. You are offering slightly above market average.'
    };

    return (
        <>
            <BuyerSidebar />

            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: window.innerWidth >= 1024 ? (sidebarCollapsed ? '6rem' : '16rem') : '0rem' }}
            >
                <Header
                    title="Offer-Draft"
                    showNotifications={true}
                />

                <div className="p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
                    {/* Page Title */}
                    <div className="mb-6">
                        <h1 className="text-white text-2xl font-bold mb-2">
                            Offer to Purchase (OTP) – Auto-Generated Draft
                        </h1>
                        <p className="text-gray-400 text-sm">
                            The system has created a draft using verified details from Lightstone and Buyer inputs.
                            Please review before proceeding.
                        </p>
                    </div>

                    {/* Property Card */}
                    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-4 mb-6">
                        <div className="flex gap-4">
                            <img
                                src={offerData.property.image}
                                alt={offerData.property.title}
                                className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                            />
                            <div className="flex-1">
                                <h3 className="text-white font-semibold mb-1">{offerData.property.title}</h3>
                                <p className="text-amber-500 font-bold text-lg mb-2">
                                    R{offerData.property.price.toLocaleString()}
                                </p>
                                <div className="flex gap-3 text-gray-400 text-sm">
                                    <span>● {offerData.property.beds} Beds</span>
                                    <span>● {offerData.property.bathrooms} Bathrooms</span>
                                    <span>● {offerData.property.garages} Garages</span>
                                    <span>● {offerData.property.size}sqm</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Verified Buyer & Seller Details */}
                    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 mb-6">
                        <h2 className="text-white text-lg font-semibold mb-4">Verified Buyer & Seller Details</h2>
                        <p className="text-gray-400 text-sm mb-4">Parties to this offer</p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-700">
                                        <th className="text-left text-gray-400 font-medium py-3 px-4">Label</th>
                                        <th className="text-left text-gray-400 font-medium py-3 px-4">Value</th>
                                        <th className="text-left text-gray-400 font-medium py-3 px-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {offerData.buyerDetails.map((detail, index) => (
                                        <tr key={index} className="border-b border-gray-700/50">
                                            <td className="py-3 px-4 text-gray-300">{detail.label}</td>
                                            <td className="py-3 px-4 text-white">{detail.value}</td>
                                            <td className="py-3 px-4">
                                                <span className="flex items-center gap-2 text-green-500">
                                                    <span>✓</span> {detail.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {offerData.sellerDetails.map((detail, index) => (
                                        <tr key={`seller-${index}`} className="border-b border-gray-700/50">
                                            <td className="py-3 px-4 text-gray-300">{detail.label}</td>
                                            <td className="py-3 px-4 text-white">{detail.value}</td>
                                            <td className="py-3 px-4">
                                                <span className="flex items-center gap-2 text-green-500">
                                                    {detail.status === 'owner' && '✓ Verified Owner'}
                                                    {detail.status === 'verified' && '✓'}
                                                    {detail.status === 'secured' && '🔒'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-amber-500 text-xs mt-4">
                            Both Buyer and seller have completed verification. Personal details remain hidden until signing.
                        </p>
                    </div>

                    {/* Property Offer Details */}
                    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 mb-6">
                        <h2 className="text-white text-lg font-semibold mb-4">
                            Property offer details (OTP Draft)
                        </h2>
                        <p className="text-gray-400 text-sm mb-4">
                            Auto-filled from Lightstone + Buyer Input
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-700">
                                        <th className="text-left text-gray-400 font-medium py-3 px-4">Field</th>
                                        <th className="text-left text-gray-400 font-medium py-3 px-4">Source</th>
                                        <th className="text-left text-gray-400 font-medium py-3 px-4">Data</th>
                                        <th className="text-left text-gray-400 font-medium py-3 px-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {offerData.propertyDetails.map((detail, index) => (
                                        <tr key={index} className="border-b border-gray-700/50">
                                            <td className="py-3 px-4 text-gray-300">{detail.field}</td>
                                            <td className="py-3 px-4 text-white">{detail.source}</td>
                                            <td className="py-3 px-4 text-white">{detail.data}</td>
                                            <td className="py-3 px-4">
                                                {detail.editable && (
                                                    <button className="text-amber-500 text-sm hover:text-amber-400">
                                                        Edit
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-amber-500 text-xs mt-4">
                            {offerData.warning}
                        </p>
                    </div>

                    {/* Buyer Terms */}
                    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-white text-lg font-semibold">
                                Buyer terms & verification summary
                            </h2>
                            <button className="text-amber-500 text-sm hover:text-amber-400">
                                Edit terms
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <span className="text-gray-400 text-sm">Occupation Date:</span>
                                <div className="flex items-center gap-2 bg-gray-700/50 px-3 py-2 rounded">
                                    <span className="text-white text-sm">{offerData.buyerTerms.occupationDate}</span>
                                    <span className="text-gray-400">📅</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-gray-400 text-sm">Conditions:</span>
                                <div className="flex-1 bg-gray-700/50 px-3 py-2 rounded">
                                    <p className="text-white text-sm">{offerData.buyerTerms.conditions}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Warning Message */}
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
                        <p className="text-red-400 text-sm">{offerData.submitWarning}</p>
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={() => {
                            alert('Offer submitted to seller!');
                            navigate('/buyer/offers');
                        }}
                        className="w-full py-4 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-xl hover:opacity-90 transition-opacity"
                    >
                        Submit Offer to Seller
                    </button>
                </div>
            </div>
        </>
    );
};

export default OfferDraft;

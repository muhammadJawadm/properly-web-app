import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import BuyerSidebar, { subscribeSidebarState } from '../../../../components/Buyer/BuyerSidebar';
import Header from '../../../../components/common/Header';

const SubmitOffer = () => {
    const navigate = useNavigate();
    const { propertyId } = useParams();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [offerData, setOfferData] = useState({
        offerPrice: '2000000',
        depositAmount: '200000',
        occupationDate: '2025-12-12',
        conditions: 'Subject to bond approval...'
    });

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    // Mock buyer information
    const buyerInfo = {
        name: 'John Doe',
        email: 'John.doe@gmail.com',
        phone: '+123 455 7895',
        verificationStatus: {
            idVerified: true,
            residenceVerified: false,
            docsVerified: 1,
            totalDocs: 3
        }
    };

    const requiredDocs = [
        { id: 1, name: 'Verified ID', status: 'verified', action: 'View' },
        { id: 2, name: 'Proof of Residence', status: 'notUploaded', action: 'Upload' },
        { id: 3, name: 'Proof of funds / Pre-Approval', status: 'notUploaded', action: 'Upload' }
    ];

    const handleSubmitOffer = () => {
        // Validate all documents are uploaded
        const allVerified = requiredDocs.every(doc => doc.status === 'verified');
        if (!allVerified) {
            alert('Please upload all required documents before submitting your offer.');
            return;
        }
        alert('Offer submitted successfully!');
        navigate('/buyer/inquiries');
    };

    return (
        <>
            <BuyerSidebar />
            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: window.innerWidth >= 1024 ? (sidebarCollapsed ? '6rem' : '16rem') : '0rem' }}
            >
                <Header
                    title="Offers"
                    showNotifications={true}
                />

                <div className="p-4 sm:p-6 md:p-8">
                    {/* Page Title */}
                    <div className="mb-6">
                        <h1 className="text-white text-2xl font-bold mb-2">Submit offer to purchase</h1>
                        <p className="text-gray-400 text-sm">
                            Complete the details below to submit your formal offer. All information will remain confidential until verified.
                        </p>
                    </div>

                    {/* Three Column Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Column 1: Buyer Information */}
                        <div className="space-y-6">
                            {/* Buyer Info Card */}
                            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6">
                                <h3 className="text-white font-semibold mb-4">Buyer Information</h3>
                                <div className="space-y-3 text-sm">
                                    <p className="text-gray-300">{buyerInfo.name}</p>
                                    <p className="text-gray-300">{buyerInfo.email}</p>
                                    <p className="text-gray-300">{buyerInfo.phone}</p>
                                </div>

                                {/* Verified Status Card */}
                                <h3 className=" mt-10 text-white font-semibold mb-4">Verified Status</h3>

                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span className="text-gray-300 text-sm">Verified ID</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-red-500">⚠</span>
                                        <span className="text-gray-300 text-sm">Pending proof of residence</span>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm mb-2">
                                    {buyerInfo.verificationStatus.docsVerified} of {buyerInfo.verificationStatus.totalDocs} document verified
                                </p>

                                {/* Progress Bar */}
                                <div className="w-full h-2 bg-gray-700 rounded-full mb-4 overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#FCD66B] to-[#C28B33]"
                                        style={{ width: `${(buyerInfo.verificationStatus.docsVerified / buyerInfo.verificationStatus.totalDocs) * 100}%` }}
                                    />
                                </div>

                                <button className="w-full py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-amber-500 text-sm hover:bg-gray-700 transition-colors">
                                    Update my verification
                                </button>
                            </div>

                            {/* Offer Summary */}
                            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6">
                                <h3 className="text-white font-semibold mb-4">OFFER SUMMARY</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Offer price</span>
                                        <span className="text-white font-semibold">R{parseInt(offerData.offerPrice || 0).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Deposit</span>
                                        <span className="text-white font-semibold">R{parseInt(offerData.depositAmount || 0).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Occupation date</span>
                                        <span className="text-white font-semibold">
                                            {new Date(offerData.occupationDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Offer Details */}
                        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6">
                            <h3 className="text-white font-semibold mb-6">Offer Details</h3>

                            <div className="space-y-4">
                                {/* Offer Price */}
                                <div>
                                    <label className="text-gray-300 text-sm mb-2 block">Offer Price</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">R</span>
                                        <input
                                            type="text"
                                            value={offerData.offerPrice}
                                            onChange={(e) => setOfferData(prev => ({ ...prev, offerPrice: e.target.value.replace(/[^0-9]/g, '') }))}
                                            className="w-full px-4 py-3 pl-8 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-amber-500"
                                        />
                                    </div>
                                </div>

                                {/* Deposit Amount */}
                                <div>
                                    <label className="text-gray-300 text-sm mb-2 block">Deposit Amount</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">R</span>
                                        <input
                                            type="text"
                                            value={offerData.depositAmount}
                                            onChange={(e) => setOfferData(prev => ({ ...prev, depositAmount: e.target.value.replace(/[^0-9]/g, '') }))}
                                            className="w-full px-4 py-3 pl-8 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-amber-500"
                                        />
                                    </div>
                                </div>

                                {/* Occupation Date */}
                                <div>
                                    <label className="text-gray-300 text-sm mb-2 block">Occupation Date</label>
                                    <input
                                        type="date"
                                        value={offerData.occupationDate}
                                        onChange={(e) => setOfferData(prev => ({ ...prev, occupationDate: e.target.value }))}
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-amber-500"
                                    />
                                </div>

                                {/* Conditions */}
                                <div>
                                    <label className="text-gray-300 text-sm mb-2 block">Conditions</label>
                                    <textarea
                                        value={offerData.conditions}
                                        onChange={(e) => setOfferData(prev => ({ ...prev, conditions: e.target.value }))}
                                        rows="4"
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white resize-none focus:outline-none focus:border-amber-500"
                                    />
                                    <p className="text-gray-500 text-xs mt-1">
                                        Conditions are additional terms such as subject to financing or inspection.
                                    </p>
                                </div>

                                {/* Buttons */}
                                <div className="space-y-3 pt-4">
                                    <button className="w-full py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 font-semibold hover:bg-gray-700 transition-colors">
                                        Preview offer
                                    </button>

                                </div>
                            </div>
                        </div>

                        {/* Column 3: Required Documents */}
                        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6">
                            <div className="mb-6">
                                <h3 className="text-white font-semibold mb-1">Required documents</h3>
                                <p className="text-gray-400 text-sm">Before submitting</p>
                            </div>

                            <div className="space-y-4 mb-6">
                                {requiredDocs.map((doc) => (
                                    <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            {doc.status === 'verified' ? (
                                                <span className="text-green-500">✓</span>
                                            ) : (
                                                <span className="text-red-500">⚠</span>
                                            )}
                                            <div>
                                                <p className="text-white text-sm font-medium">{doc.name}</p>
                                                <p className={`text-xs ${doc.status === 'verified' ? 'text-green-500' : 'text-red-400'}`}>
                                                    {doc.status === 'verified' ? 'Verified' : 'Not Uploaded'}
                                                </p>
                                            </div>
                                        </div>
                                        <button className="px-4 py-1.5 bg-amber-500/20 border border-amber-500 rounded text-amber-500 text-sm font-semibold hover:bg-amber-500/30 transition-colors">
                                            {doc.action}
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Info Messages */}
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                                    <p className="text-gray-300 text-xs leading-relaxed">
                                        <span className="font-semibold">Your can not submit your offer until all required documents are verified.</span>
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Your personal contact details remain hidden until the offer is accepted.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 gap-4 flex justify-between">
                                <button
                                    onClick={() => navigate('/buyer/offer-draft/1')}
                                    className="w-full py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
                                >
                                    Submit offer
                                </button>
                                <button
                                    onClick={() => navigate(-1)}
                                    className="w-full py-3 bg-transparent border border-gray-600 rounded-lg text-gray-300 font-semibold hover:bg-gray-800/50 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubmitOffer;

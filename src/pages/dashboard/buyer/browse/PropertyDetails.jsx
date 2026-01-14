import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaBed, FaBath, FaCar, FaPhoneAlt } from 'react-icons/fa';
import BuyerSidebar, { subscribeSidebarState } from '../../../../components/Buyer/BuyerSidebar';
import BuyerHeader from '../../../../components/Buyer/BuyerHeader';
import EnquiryFormModal from '../../../../components/Buyer/EnquiryFormModal';
import OTPVerificationModal from '../../../../components/Buyer/OTPVerificationModal';
import UploadDocumentsModal from '../../../../components/Buyer/UploadDocumentsModal';

const PropertyDetails = () => {
    const navigate = useNavigate();
    const { propertyId } = useParams();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [showEnquiryForm, setShowEnquiryForm] = useState(false);
    const [showOTPModal, setShowOTPModal] = useState(false);
    const [showUploadDocs, setShowUploadDocs] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    // Mock property data
    const property = {
        images: [
            'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        title: 'Residential Property',
        location: 'Capetown, Mississauga',
        electricity: 'Eskom',
        municipality: 'Borahole',
        price: 4995000,
        bedrooms: 3,
        bathrooms: 4,
        garages: 4,
        outbuildings: 4,
        category: 'Furnished',
        extras: ['Solar', 'Swimming pool', 'Garden'],
        nearbyFeatures: ['Close to Crawford College', 'City Mall', 'George Lee Park'],
        description: 'This elegant 3-bedroom residence in Sandton blends modern living with convenience. Featuring open-plan design, high-end finishes, and proximity to schools, shopping centers, and parks, it offers the perfect balance of comfort and sophistication for today\'s families.'
    };

    const handleEnquirySubmit = () => {
        setShowEnquiryForm(false);
        setShowOTPModal(true);
    };

    const handleOTPVerify = (otpCode) => {
        console.log('OTP verified:', otpCode);
        setShowOTPModal(false);
        setShowUploadDocs(true);
    };

    const handleDocumentsUpload = (documents) => {
        console.log('Documents uploaded:', documents);
        setShowUploadDocs(false);
        alert('Enquiry submitted successfully!');
    };

    return (
        <>
            <BuyerSidebar />

            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: window.innerWidth >= 1024 ? (sidebarCollapsed ? '6rem' : '16rem') : '0rem' }}
            >
                <BuyerHeader
                    title="Browse Property"
                    showNotifications={false}
                />

                <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/buyer/browse')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
                    >
                        <FaArrowLeft size={18} />
                        <span>Details</span>
                    </button>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                        {/* Main Image */}
                        <div className="lg:col-span-2 h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
                            <img
                                src={property.images[selectedImage]}
                                alt="Property"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Thumbnail Grid */}
                        <div className="grid grid-cols-4 lg:grid-cols-2 gap-2 lg:gap-3">
                            {property.images.slice(1, 5).map((image, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedImage(index + 1)}
                                    className={`relative h-20 sm:h-24 lg:h-[calc((24rem-0.75rem)/2)] rounded-xl overflow-hidden cursor-pointer ${selectedImage === index + 1 ? 'ring-2 ring-amber-500' : ''
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                    {index === 3 && property.images.length > 5 && (
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                            <span className="text-white text-xl font-bold">+{property.images.length - 4}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Property Details */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Info */}
                            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6">
                                <h2 className="text-white text-2xl font-bold mb-4">{property.title}</h2>

                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-gray-400 mb-1">Location:</p>
                                        <p className="text-white">{property.location}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 mb-1">Electricity Supply:</p>
                                        <p className="text-white">{property.electricity}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 mb-1">Municipality</p>
                                        <p className="text-white">{property.municipality}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 mb-1">Pricing</p>
                                        <p className="text-amber-500 font-bold text-lg">R {property.price.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Property Specifications */}
                            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6">
                                <h3 className="text-white text-xl font-bold mb-4">Residential Property</h3>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <FaBed className="text-amber-500" size={20} />
                                        <div>
                                            <p className="text-gray-400 text-xs">Bedrooms</p>
                                            <p className="text-white font-semibold">{property.bedrooms}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <p className="text-gray-400 text-xs">Category</p>
                                        <p className="text-white">{property.category}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaBath className="text-amber-500" size={20} />
                                        <div>
                                            <p className="text-gray-400 text-xs">Bathrooms</p>
                                            <p className="text-white font-semibold">{property.bathrooms}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs mb-1">Extras</p>
                                        <div className="flex flex-wrap gap-2">
                                            {property.extras.map((extra, index) => (
                                                <span key={index} className="text-white text-xs">{extra}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaCar className="text-amber-500" size={20} />
                                        <div>
                                            <p className="text-gray-400 text-xs">Garages/ Carports</p>
                                            <p className="text-white font-semibold">{property.garages}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs">Outbuildings or Flatlets</p>
                                        <p className="text-white font-semibold">{property.outbuildings}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-400 text-xs mb-2">Security features</p>
                                    <p className="text-white text-sm">
                                        {property.nearbyFeatures.join(', ')}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6">
                                <h3 className="text-amber-500 text-lg font-bold mb-3">Description</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {property.description}
                                </p>
                            </div>

                            {/* Enquire Button */}
                            <button
                                onClick={() => setShowEnquiryForm(true)}
                                className="w-full py-4 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-xl hover:opacity-90 transition-opacity"
                            >
                                Enquire/ Contact seller
                            </button>
                        </div>

                        {/* App Download Banner - Right Side on Desktop */}
                        <div className="lg:sticky lg:top-6 h-fit">
                            <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaPhoneAlt className="text-white" size={32} />
                                </div>
                                <p className="text-black text-sm mb-2">To Access Messaging And Chat Features</p>
                                <h3 className="text-black text-2xl font-bold mb-4">DOWNLOAD APP</h3>
                                <button className="w-full py-3 bg-black text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
                                    GET APP
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* App Download Banner - Bottom on Mobile */}
                    <div className="lg:hidden mt-6">
                        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 flex items-center gap-4">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <FaPhoneAlt className="text-white" size={28} />
                            </div>
                            <div className="flex-1">
                                <p className="text-black text-xs mb-1">To Access Messaging And Chat Features</p>
                                <h3 className="text-black text-xl font-bold">DOWNLOAD APP</h3>
                            </div>
                            <button className="px-6 py-3 bg-black text-white font-semibold rounded-xl hover:opacity-90 transition-opacity flex-shrink-0">
                                GET APP
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enquiry Form Modal */}
            <EnquiryFormModal
                isOpen={showEnquiryForm}
                onClose={() => setShowEnquiryForm(false)}
                onSubmit={handleEnquirySubmit}
                propertyTitle={property.title}
            />

            {/* OTP Verification Modal */}
            <OTPVerificationModal
                isOpen={showOTPModal}
                onClose={() => setShowOTPModal(false)}
                onVerify={handleOTPVerify}
                email="your@email.com"
            />

            {/* Upload Documents Modal */}
            <UploadDocumentsModal
                isOpen={showUploadDocs}
                onClose={() => setShowUploadDocs(false)}
                onContinue={handleDocumentsUpload}
            />
        </>
    );
};

export default PropertyDetails;

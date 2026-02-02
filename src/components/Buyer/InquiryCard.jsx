import React from 'react';

const InquiryCard = ({ inquiry, isSelected, onClick }) => {
    return (
        <div className="mb-6">
            {/* Property Section Header */}
            <h3 className="text-white font-semibold mb-4">{inquiry.propertyTitle}</h3>

            {/* Inquiry Card */}
            <div
                onClick={onClick}
                className={`bg-gray-800/40 backdrop-blur-lg border rounded-2xl p-4 cursor-pointer transition-all duration-300 ${isSelected ? 'border-amber-500' : 'border-gray-700 hover:border-gray-600'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-400 text-sm">
                        {inquiry.type === 'sent' ? 'Sent to: ' : 'Inquired by: '}
                        <span className="text-white font-medium">{inquiry.contactName}</span>
                    </p>
                    <span className="text-gray-500 text-xs">{inquiry.timestamp}</span>
                </div>

                {/* Property Card */}
                <div className="bg-gray-700/30 rounded-xl p-3 mb-3">
                    <div className="flex flex-col md:flex-row gap-3">
                        {/* Property Image */}
                        <div className="w-full md:w-auto shrink-0">
                            <img
                                src={inquiry.property.image}
                                alt={inquiry.property.title}
                                className="w-full h-40 md:w-20 md:h-20 rounded-lg object-cover"
                            />
                        </div>

                        {/* Property Details */}
                        <div className="flex-1 w-full min-w-0">
                            <div className="flex flex-col items-center md:items-start text-center md:text-left h-full justify-center">
                                <h4
                                    className="text-white text-sm font-semibold mb-1 w-full"
                                    style={{
                                        overflowWrap: 'break-word',
                                        wordWrap: 'break-word',
                                        whiteSpace: 'normal',
                                        display: 'block'
                                    }}
                                >
                                    {inquiry.property.title}
                                </h4>
                                <p className="text-amber-500 font-bold text-sm mb-2">
                                    R{inquiry.property.price.toLocaleString()}
                                </p>

                                {/* Specs */}
                                <div className="flex flex-wrap justify-center md:justify-start gap-2 text-gray-400 text-xs">
                                    <span>● {inquiry.property.beds} Beds</span>
                                    <span>● {inquiry.property.bathrooms} Bathrooms</span>
                                    <span>● {inquiry.property.garages} Garages</span>
                                    <span>● {inquiry.property.size}sqm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Message Preview */}
                {inquiry.messagePreview && (
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                        {inquiry.messagePreview}
                    </p>
                )}

                {/* Badges */}
                <div className="flex gap-2">
                    {inquiry.badges?.verifiedContact && (
                        <span className="px-3 py-1 bg-green-500/20 border border-green-500 rounded-full text-green-500 text-xs flex items-center gap-1">
                            <span>✓</span>
                            Verified Contact
                        </span>
                    )}
                    {inquiry.badges?.identityCard && (
                        <span className="px-3 py-1 bg-gray-700 border border-gray-600 rounded-full text-gray-300 text-xs">
                            Identity card
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InquiryCard;

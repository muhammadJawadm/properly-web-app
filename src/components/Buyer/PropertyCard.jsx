import React from 'react';
import { FaBed, FaBath, FaRuler } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

const PropertyCard = ({ property, onViewDetails }) => {
    return (
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl overflow-hidden hover:border-amber-500 transition-all duration-300 group">
            {/* Property Image */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Property Details */}
            <div className="p-4">
                {/* Title and Location */}
                <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                    {property.title}
                </h3>
                <div className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm mb-3">
                    <HiLocationMarker className="text-amber-500" size={16} />
                    <span>{property.location}</span>
                </div>

                {/* Price */}
                <p className="text-amber-500 font-bold text-lg sm:text-xl mb-4">
                    R {property.price.toLocaleString()}
                </p>

                {/* Specifications */}
                <div className="flex items-center gap-4 text-gray-300 text-xs sm:text-sm mb-4">
                    <div className="flex items-center gap-1">
                        <FaRuler className="text-amber-500" size={14} />
                        <span>{property.sqft} Sqft</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaBed className="text-amber-500" size={14} />
                        <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaBath className="text-amber-500" size={14} />
                        <span>{property.baths} Baths</span>
                    </div>
                </div>

                {/* View Details Button */}
                <button
                    onClick={() => onViewDetails(property.id)}
                    className="w-full py-2.5 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;

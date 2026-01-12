import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

const AdvancedSearchPanel = ({ isOpen, onClose, onApply }) => {
    const [searchFilters, setSearchFilters] = useState({
        location: '',
        minPrice: '',
        maxPrice: '',
        propertyType: 'Residential',
        showDescription: false,
        bedrooms: null,
        bathrooms: null,
        garages: null,
        furnished: 'furnished',
        features: []
    });

    const [featureInput, setFeatureInput] = useState('');

    const numberOptions = [1, 2, 3, 4, 5, 7, 8];

    const handleNumberSelect = (field, value) => {
        setSearchFilters(prev => ({
            ...prev,
            [field]: prev[field] === value ? null : value
        }));
    };

    const handleAddFeature = (e) => {
        if (e.key === 'Enter' && featureInput.trim()) {
            setSearchFilters(prev => ({
                ...prev,
                features: [...prev.features, featureInput.trim()]
            }));
            setFeatureInput('');
        }
    };

    const handleRemoveFeature = (index) => {
        setSearchFilters(prev => ({
            ...prev,
            features: prev.features.filter((_, i) => i !== index)
        }));
    };

    const handleApply = () => {
        onApply(searchFilters);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className=" fixed inset-0 z-50 lg:relative lg:inset-auto">
            {/* Overlay for mobile */}
            <div
                className="fixed inset-0 bg-black/70 lg:hidden"
                onClick={onClose}
            />

            {/* Panel */}
            <div className="rounded-xl fixed right-0 top-0 h-full w-full sm:w-96 bg-gray-800 shadow-2xl z-50 overflow-y-auto lg:relative lg:w-full">
                {/* Header */}
                <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-4 sm:p-6 flex items-center justify-between z-10">
                    <h2 className="text-white text-lg sm:text-xl font-bold">Advanced Search</h2>
                    <button
                        onClick={onClose}
                        className="text-amber-500 hover:text-amber-400 font-semibold text-sm"
                    >
                        Close
                    </button>
                </div>

                <div className="p-4 sm:p-6 space-y-6">
                    {/* Location */}
                    <div>
                        <label className="text-gray-300 text-sm mb-2 block">Location</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={searchFilters.location}
                                onChange={(e) => setSearchFilters(prev => ({ ...prev, location: e.target.value }))}
                                className="w-full px-4 py-3 pl-10 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                                placeholder="Enter location"
                            />
                            <HiLocationMarker className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500" size={20} />
                        </div>
                    </div>

                    {/* Price Range */}
                    <div>
                        <label className="text-gray-300 text-sm mb-2 block">Price Range</label>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">R</span>
                                <input
                                    type="text"
                                    value={searchFilters.minPrice}
                                    onChange={(e) => setSearchFilters(prev => ({ ...prev, minPrice: e.target.value }))}
                                    placeholder="min"
                                    className="w-full px-4 py-3 pl-8 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                                />
                            </div>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">R</span>
                                <input
                                    type="text"
                                    value={searchFilters.maxPrice}
                                    onChange={(e) => setSearchFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                                    placeholder="max"
                                    className="w-full px-4 py-3 pl-8 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Property Type */}
                    <div>
                        <label className="text-gray-300 text-sm mb-2 block">Property type</label>
                        <select
                            value={searchFilters.propertyType}
                            onChange={(e) => setSearchFilters(prev => ({ ...prev, propertyType: e.target.value }))}
                            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-amber-500"
                        >
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Industrial">Industrial</option>
                        </select>
                    </div>

                    {/* Property Description Toggle */}
                    <div className="flex items-center justify-between">
                        <label className="text-gray-300 text-sm">Property Description</label>
                        <button
                            onClick={() => setSearchFilters(prev => ({ ...prev, showDescription: !prev.showDescription }))}
                            className={`relative w-12 h-6 rounded-full transition-colors ${searchFilters.showDescription ? 'bg-amber-500' : 'bg-gray-600'
                                }`}
                        >
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${searchFilters.showDescription ? 'translate-x-7' : 'translate-x-1'
                                }`} />
                        </button>
                    </div>

                    {/* Bedrooms */}
                    <div>
                        <label className="text-gray-300 text-sm mb-3 block">Bedrooms</label>
                        <div className="grid grid-cols-8 gap-2">
                            {numberOptions.map(num => (
                                <button
                                    key={num}
                                    onClick={() => handleNumberSelect('bedrooms', num)}
                                    className={`py-2 rounded-3xl font-semibold text-sm transition-all ${searchFilters.bedrooms === num
                                        ? 'bg-amber-500 text-black'
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        }`}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Bathrooms */}
                    <div>
                        <label className="text-gray-300 text-sm mb-3 block">Bathrooms</label>
                        <div className="grid grid-cols-8 gap-2">
                            {numberOptions.map(num => (
                                <button
                                    key={num}
                                    onClick={() => handleNumberSelect('bathrooms', num)}
                                    className={`py-2 rounded-3xl font-semibold text-sm transition-all ${searchFilters.bathrooms === num
                                        ? 'bg-amber-500 text-black'
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        }`}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Garage/Carports */}
                    <div>
                        <label className="text-gray-300 text-sm mb-3 block">Garage/ Carports</label>
                        <div className="grid grid-cols-8 gap-2">
                            {numberOptions.map(num => (
                                <button
                                    key={num}
                                    onClick={() => handleNumberSelect('garages', num)}
                                    className={`py-2 rounded-3xl font-semibold text-sm transition-all ${searchFilters.garages === num
                                        ? 'bg-amber-500 text-black'
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        }`}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Categorize */}
                    <div>
                        <label className="text-gray-300 text-sm mb-3 block">Categories</label>
                        <div className="flex gap-20">
                            <button
                                onClick={() => setSearchFilters(prev => ({ ...prev, furnished: 'furnished' }))}
                                className={`flex items-center gap-2 ${searchFilters.furnished === 'furnished' ? 'text-amber-500' : 'text-gray-400'
                                    }`}
                            >
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${searchFilters.furnished === 'furnished' ? 'border-amber-500' : 'border-gray-500'
                                    }`}>
                                    {searchFilters.furnished === 'furnished' && (
                                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                                    )}
                                </div>
                                <span className="text-sm">Furnished</span>
                            </button>
                            <button
                                onClick={() => setSearchFilters(prev => ({ ...prev, furnished: 'unfurnished' }))}
                                className={`flex items-center gap-2 ${searchFilters.furnished === 'unfurnished' ? 'text-gray-300' : 'text-gray-400'
                                    }`}
                            >
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${searchFilters.furnished === 'unfurnished' ? 'border-gray-300' : 'border-gray-500'
                                    }`}>
                                    {searchFilters.furnished === 'unfurnished' && (
                                        <div className="w-3 h-3 rounded-full bg-gray-300" />
                                    )}
                                </div>
                                <span className="text-sm">Unfurnished</span>
                            </button>
                        </div>
                    </div>

                    {/* Required Features */}
                    <div>
                        <label className="text-gray-300 text-sm mb-2 block">Required Features</label>
                        <input
                            type="text"
                            value={featureInput}
                            onChange={(e) => setFeatureInput(e.target.value)}
                            onKeyPress={handleAddFeature}
                            placeholder="Add"
                            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 mb-3"
                        />
                        <div className="flex flex-wrap gap-2">
                            {searchFilters.features.map((feature, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 bg-gray-700 text-white rounded-full text-sm flex items-center gap-2"
                                >
                                    {feature}
                                    <button
                                        onClick={() => handleRemoveFeature(index)}
                                        className="hover:text-red-400"
                                    >
                                        <FaTimes size={12} />
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Apply Button */}
                    <div className='flex justify-center'>
                        <button
                            onClick={handleApply}
                            className="w-2/3 py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-3xl hover:opacity-90 transition-opacity"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvancedSearchPanel;

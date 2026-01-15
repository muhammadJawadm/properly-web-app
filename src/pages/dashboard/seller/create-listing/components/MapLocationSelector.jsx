import { FaSearch, FaMapMarkerAlt, FaCrosshairs, FaCheck } from 'react-icons/fa';
import { useState } from 'react';

const MapLocationSelector = ({ isOpen, onClose, onConfirm }) => {
    const [searchQuery, setSearchQuery] = useState('');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl h-[80vh] bg-gray-800/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-gray-700">
                    <h2 className="text-white text-2xl font-semibold mb-4">Select Location on map</h2>
                    <div className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Tyrella Ave"
                            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 pr-12"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                            <FaSearch size={18} />
                        </button>
                    </div>
                </div>

                {/* Map Area */}
                <div className="flex-1 relative bg-gray-700">
                    {/* Map Placeholder - In production, integrate Google Maps or Mapbox */}
                    <div className="w-full h-full relative bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 flex items-center justify-center">
                        <div className="text-center">
                            <div className="relative inline-block mb-4">
                                {/* Property Boundary */}
                                <div className="w-64 h-48 border-4 border-amber-500 rounded-lg relative bg-gray-600/30">
                                    {/* Corner Handles */}
                                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-500 rounded-full"></div>
                                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full"></div>
                                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-amber-500 rounded-full"></div>
                                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-amber-500 rounded-full"></div>

                                    {/* Center Pin */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                                            <FaMapMarkerAlt className="text-white" size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-white font-semibold text-lg">Mountain View</p>
                            <p className="text-gray-400 text-sm mt-1">Drag to adjust property boundaries</p>
                        </div>
                    </div>

                    {/* Map Controls */}
                    <div className="absolute right-4 top-4 flex flex-col gap-2">
                        <button className="w-10 h-10 bg-gray-800/90 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors shadow-lg">
                            <FaCrosshairs size={18} />
                        </button>
                        <button className="w-10 h-10 bg-gray-800/90 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors shadow-lg">
                            <FaCheck size={18} />
                        </button>
                    </div>

                    {/* Zoom Controls */}
                    <div className="absolute left-4 bottom-4 flex flex-col gap-2">
                        <button className="w-10 h-10 bg-gray-800/90 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors shadow-lg text-xl font-bold">
                            +
                        </button>
                        <button className="w-10 h-10 bg-gray-800/90 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors shadow-lg text-xl font-bold">
                            −
                        </button>
                        <button className="w-10 h-10 bg-gray-800/90 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors shadow-lg">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2L12 8L18 8L13 12L15 18L10 14L5 18L7 12L2 8L8 8L10 2Z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-700 flex justify-between">
                    <button
                        onClick={onClose}
                        className="px-8 py-3 bg-gray-700/50 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            onConfirm({ location: 'Mountain View', coordinates: { lat: 0, lng: 0 } });
                            onClose();
                        }}
                        className="px-8 py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-full hover:opacity-90 transition-opacity"
                    >
                        Confirm Location
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MapLocationSelector;

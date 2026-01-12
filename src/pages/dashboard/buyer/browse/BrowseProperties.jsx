import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaFilter } from 'react-icons/fa';
import BuyerSidebar, { subscribeSidebarState } from '../../../../components/Seller/BuyerSidebar';
import BuyerHeader from '../../../../components/Seller/BuyerHeader';
import PropertyCard from '../../../../components/Buyer/PropertyCard';
import AdvancedSearchPanel from '../../../../components/Buyer/AdvancedSearchPanel';

const BrowseProperties = () => {
    const navigate = useNavigate();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isFiltered, setIsFiltered] = useState(false);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    // Mock property data
    const properties = [
        {
            id: 1,
            title: '3 bedroom house',
            location: 'Zimbali estate',
            price: 2500000,
            sqft: 2580,
            beds: 3,
            baths: 4,
            image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 2,
            title: '3 bedroom house',
            location: 'Zimbali estate',
            price: 2500000,
            sqft: 2580,
            beds: 3,
            baths: 4,
            image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 3,
            title: '3 bedroom house',
            location: 'Zimbali estate',
            price: 2600000,
            sqft: 2580,
            beds: 3,
            baths: 4,
            image: 'https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 4,
            title: '3 bedroom house',
            location: 'Zimbali estate',
            price: 2500000,
            sqft: 2580,
            beds: 3,
            baths: 4,
            image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 5,
            title: '3 bedroom house',
            location: 'Zimbali estate',
            price: 2500000,
            sqft: 2580,
            beds: 3,
            baths: 4,
            image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 6,
            title: '3 bedroom house',
            location: 'Zimbali estate',
            price: 2500000,
            sqft: 2580,
            beds: 3,
            baths: 4,
            image: 'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ];

    const handleApplyFilters = (filters) => {
        console.log('Applying filters:', filters);
        setIsFiltered(true);
        setShowAdvancedSearch(false);
    };

    const handleViewDetails = (propertyId) => {
        navigate(`/buyer/browse/${propertyId}`);
    };

    return (
        <>
            <BuyerSidebar />

            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: window.innerWidth >= 1024 ? (sidebarCollapsed ? '6rem' : '16rem') : '0rem' }}
            >
                <BuyerHeader
                    title="Browse Properties"
                    showNotifications={false}
                />

                <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex gap-6">
                        {/* Main Content */}
                        <div className="flex-1">
                            {/* Search Bar */}
                            <div className="flex gap-3 mb-6">
                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full px-4 py-3 pl-12 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                                    />
                                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                </div>
                                <button
                                    onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
                                    className="px-6 py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
                                >
                                    <FaFilter size={16} />
                                    <span className="hidden sm:inline">Filter</span>
                                </button>
                            </div>

                            {/* Section Header with Sort */}
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-amber-500 text-lg sm:text-xl font-semibold">
                                    {isFiltered ? 'Listing Based On Your Preferences' : 'Suggested'}
                                </h2>
                                {isFiltered && (
                                    <select className="px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500">
                                        <option>Sort by</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Newest</option>
                                    </select>
                                )}
                            </div>

                            {/* Property Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                                {properties.map((property) => (
                                    <PropertyCard
                                        key={property.id}
                                        property={property}
                                        onViewDetails={handleViewDetails}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Advanced Search Panel - Desktop */}
                        {showAdvancedSearch && (
                            <div className="hidden lg:block w-96">
                                <AdvancedSearchPanel
                                    isOpen={showAdvancedSearch}
                                    onClose={() => setShowAdvancedSearch(false)}
                                    onApply={handleApplyFilters}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Advanced Search Panel - Mobile/Tablet Overlay */}
            {showAdvancedSearch && (
                <div className="lg:hidden">
                    <AdvancedSearchPanel
                        isOpen={showAdvancedSearch}
                        onClose={() => setShowAdvancedSearch(false)}
                        onApply={handleApplyFilters}
                    />
                </div>
            )}
        </>
    );
};

export default BrowseProperties;

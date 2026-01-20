import { useState } from 'react';
import FormSelect from '../components/FormSelect';

const PropertyTypeSelection = ({ onContinue }) => {
    const [propertyCategory, setPropertyCategory] = useState('');
    const [propertyType, setPropertyType] = useState('');

    const categoryOptions = [
        { value: 'residential', label: 'Residential' },
        { value: 'commercial', label: 'Commercial' },
        { value: 'agricultural', label: 'Agricultural' },
        { value: 'vacant_land', label: 'Vacant Land' },
        { value: 'hospitality', label: 'Hospitality' },
    ];

    const typeOptions = {
        residential: [
            { value: 'apartment', label: 'Apartment' },
            { value: 'bachelor_apartment', label: 'Bachlor Apartment' },
            { value: 'bachelor_retirement_property', label: 'Bachelor Retirement Property' },
            { value: 'beach_bungalow', label: 'Beach Bungalow' },
            { value: 'beachfront_villa_house', label: 'Beachfront Villa House' },
            { value: 'bungalow', label: 'Bungalow' },
            { value: 'cluster', label: 'Cluster' },
            { value: 'cottage', label: 'Cottage' },
            { value: 'double_storey_apartment', label: 'Double Storey Apartment' },
            { value: 'double_storey_cluster', label: 'Double Storey Cluster' },
            { value: 'double_storey_golf_estate_property', label: 'Double Storey Golf Estate Property' },
            { value: 'double_storey_house', label: 'Double Storey House' },
            { value: 'double_storey_retirement_home', label: 'Double Storey Retirement Home' },
            { value: 'double_storey_security_complex_home', label: 'Double Storey Security Complex Home' },
            { value: 'double_storey_security_estate_home', label: 'Double Storey Security Estate Home' },
            { value: 'double_storey_townhouse', label: 'Double Storey Townhouse' },
            { value: 'garden_apartment', label: 'Garden Apartment' },
            { value: 'garden_cottage_house', label: 'Garden Cottage House' },
            { value: 'garden_retirement_property', label: 'Garden Retirement Property' },
            { value: 'golf_estate_property', label: 'Golf Estate Property' },
            { value: 'house', label: 'House' },
            { value: 'loft_apartment', label: 'Loft Apartment' },
            { value: 'maisonette_apartment', label: 'Maisonette Apartment' },
            { value: 'mansion', label: 'Mansion' },
            { value: 'mansion_apartment', label: 'Mansion Apartment' },
            { value: 'mansion_golf_estate_property', label: 'Mansion Golf Estate Property' },
            { value: 'mansion_security_estate_home', label: 'Mansion Security Estate Home' },
            { value: 'mansion_townhouse', label: 'Mansion Townhouse' },
            { value: 'multi_storey_apartment', label: 'Multi Storey Apartment' },
            { value: 'multi_storey_cluster', label: 'Multi Storey Cluster' },
            { value: 'multi_storey_golf_estate_property', label: 'Multi Storey Golf Estate Property' },
            { value: 'multi_storey_house', label: 'Multi Storey House' },
            { value: 'multi_storey_retirement_home', label: 'Multi Storey Retirement Home' },
            { value: 'multi_storey_security_complex_home', label: 'Multi Storey Security Complex Home' },
            { value: 'multi_storey_security_estate_home', label: 'Multi Storey Security Estate Home' },
            { value: 'multi_storey_townhouse', label: 'Multi Storey Townhouse' },
            { value: 'penthouse_apartment', label: 'Penthouse Apartment' },
            { value: 'penthouse_retirement_home', label: 'Penthouse Retirement Home' },
            { value: 'residential_vacant_land', label: 'Residential Vacant Land' },
            { value: 'residential_apartment', label: 'Residential Apartment' },
            { value: 'residential_home', label: 'Residential Home' },
            { value: 'security_complex_property', label: 'Security Complex Property' },
            { value: 'security_estate_property', label: 'Security Estate Property' },
            { value: 'semi_detached_house', label: 'Semi Detached House' },
            { value: 'single_storey_apartment', label: 'Single Storey Apartment' },
            { value: 'single_storey_cluster', label: 'Single Storey Cluster' },
            { value: 'single_storey_golf_estate_property', label: 'Single Storey Golf Estate Property' },
            { value: 'single_storey_house', label: 'Single Storey House' },
            { value: 'single_storey_retirement_home', label: 'Single Storey Retirement Home' },
            { value: 'single_storey_security_complex_home', label: 'Single Storey Security Complex Home' },
            { value: 'single_storey_security_estate_home', label: 'Single Storey Security Estate Home' },
            { value: 'single_storey_townhouse', label: 'Single Storey Townhouse' },
            { value: 'split_level_apartment', label: 'Split Level Apartment' },
            { value: 'split_level_cluster', label: 'Split Level Cluster' },
            { value: 'split_level_golf_estate_property', label: 'Split Level Golf Estate Property' },
            { value: 'split_level_house', label: 'Split Level House' },
            { value: 'split_level_retirement_home', label: 'Split Level Retirement Home' },
            { value: 'split_level_security_complex_home', label: 'Split Level Security Complex Home' },
            { value: 'split_level_security_estate_home', label: 'Split Level Security Estate Home' },
            { value: 'studio_apartment', label: 'Studio Apartment' },
            { value: 'townhouse', label: 'Townhouse' },
            { value: 'vacant_land_cluster', label: 'Vacant Land Cluster' },
            { value: 'vacant_land_golf_estate_property', label: 'Vacant Land Golf Estate Property' },
            { value: 'vacant_land_security_complex_property', label: 'Vacant Land Security Complex Property' },
            { value: 'vacant_land_security_estate_property', label: 'Vacant Land Security Estate Property' },
        ],
        commercial: [
            { value: 'block_of_flats', label: 'Block of Flats' },
            { value: 'business', label: 'Business' },
            { value: 'commercial_building', label: 'Commercial Building' },
            { value: 'commercial_vacant_land', label: 'Commercial Vacant Land' },
            { value: 'industry_property', label: 'Industry Property' },
            { value: 'office', label: 'Office' },
            { value: 'residential_complex', label: 'Residential Complex' },
            { value: 'restaurant', label: 'Restaurant' },
            { value: 'retail_property', label: 'Retail Property' },

        ],
        agricultural: [
            { value: 'agricultural_vacant_land', label: 'Agricultural Vacant Land' },
            { value: 'aquaculture_farm', label: 'Aquaculture Farm' },
            { value: 'banana_farm', label: 'Banana Farm' },
            { value: 'breeding_farm', label: 'Breeding Farm' },
            { value: 'cane_farm', label: 'Cane Farm' },
            { value: 'citrus_farm', label: 'Citrus Farm' },
            { value: 'commercial_farm', label: 'Commercial Farm' },
            { value: 'commercial_breeding_farm', label: 'Commercial Breeding Farm' },
            { value: 'commercial_cane_farm', label: 'Commercial Cane Farm' },
            { value: 'commercial_citrus_farm', label: 'Commercial Citrus Farm' },
            { value: 'commercial_dairy_farm', label: 'Commercial Dairy Farm' },
            { value: 'commercial_equestrian_farm', label: 'Commercial Equestrian Farm' },
            { value: 'commercial_flower_farm', label: 'Commercial Flower Farm' },
            { value: 'commercial_forestry_farm', label: 'Commercial Forestry Farm' },
            { value: 'commercial_fruit_farm', label: 'Commercial Fruit Farm' },
            { value: 'commercial_fynbos_farm', label: 'Commercial Fynbos Farm' },
            { value: 'commercial_game_farm', label: 'Commercial Game Farm' },
            { value: 'commercial_grain_farm', label: 'Commercial Grain Farm' },
            { value: 'commercial_kaolin_farm', label: 'Commercial Kaolin Farm' },
            { value: 'commercial_maize_farm', label: 'Commercial Maize Farm' },
            { value: 'commercial_mango_farm', label: 'Commercial Mango Farm' },
            { value: 'commercial_olive_farm', label: 'Commercial Olive Farm' },
            { value: 'commercial_ostrich_farm', label: 'Commercial Ostrich Farm' },
            { value: 'commercial_poultry_farm', label: 'Commercial Poultry Farm' },
            { value: 'commercial_stock_farm', label: 'Commercial Stock Farm' },
            { value: 'commercial_trout_farm', label: 'Commercial Trout Farm' },
            { value: 'commercial_vegetable_farm', label: 'Commercial Vegetable Farm' },
            { value: 'commercial_wine_farm', label: 'Commercial Wine Farm' },
            { value: 'commercial_wine/port_farm', label: 'Commercial Wine/Port Farm' },
            { value: 'Dairy_farm', label: 'Dairy Farm' },
            { value: 'equestrian_farm', label: 'Equestrian Farm' },
            { value: 'equestrian_smallholding', label: 'Equestrian Smallholding' },
            { value: 'flower_farm', label: 'Flower Farm' },
            { value: 'forestry_farm', label: 'Forestry Farm' },
            { value: 'fruit_farm', label: 'Fruit Farm' },
            { value: 'fynbos_farm', label: 'Fynbos Farm' },
            { value: 'game_farm', label: 'Game Farm' },
            { value: 'grain_farm', label: 'Grain Farm' },
            { value: 'irrigation_farm', label: 'Irrigation Farm' },
            { value: 'kaolin_farm', label: 'Kaolin Farm' },
            { value: 'lifestyle_breeding_farm', label: 'Lifestyle Breeding Farm' },
            { value: 'lifestyle_cane_farm', label: 'Lifestyle Cane Farm' },
            { value: 'lifestyle_dairy_farm', label: 'Lifestyle Dairy Farm' },
            { value: 'lifestyle_equestrian_farm', label: 'Lifestyle Equestrian Farm' },
            { value: 'lifestyle_forestry_farm', label: 'Lifestyle Forestry Farm' },
            { value: 'lifestyle_fruit_farm', label: 'Lifestyle Fruit Farm' },
            { value: 'lifestyle_fynbos_farm', label: 'Lifestyle Fynbos Farm' },
            { value: 'lifestyle_game_farm', label: 'Lifestyle Game Farm' },
            { value: 'lifestyle_grain_farm', label: 'Lifestyle Grain Farm' },
            { value: 'lifestyle_kaolin_farm', label: 'Lifestyle Kaolin Farm' },
            { value: 'lifestyle_maize_farm', label: 'Lifestyle Maize Farm' },
            { value: 'lifestyle_mango_farm', label: 'Lifestyle Mango Farm' },
            { value: 'lifestyle_olive_farm', label: 'Lifestyle Olive Farm' },
            { value: 'lifestyle_ostrich_farm', label: 'Lifestyle Ostrich Farm' },
            { value: 'lifestyle_poultry_farm', label: 'Lifestyle Poultry Farm' },
            { value: 'lifestyle_stock_farm', label: 'Lifestyle Stock Farm' },
            { value: 'lifestyle_trout_farm', label: 'Lifestyle Trout Farm' },
            { value: 'lifestyle_vegetable_farm', label: 'Lifestyle Vegetable Farm' },
            { value: 'lifestyle_wine_farm', label: 'Lifestyle Wine Farm' },
            { value: 'lifestyle_wine/port_farm', label: 'Lifestyle Wine/Port Farm' },
            { value: 'maize_farm', label: 'Maize Farm' },
            { value: 'mango_farm', label: 'Mango Farm' },
            { value: 'mixed_use_farm', label: 'Mixed Use Farm' },
            { value: 'mixed_use_farm', label: 'Mixed Use Farm (Commercial)' },
            { value: 'mixed_use_farm', label: 'Mixed Use Farm (Lifestyle)' },
            { value: 'nut_farm', label: 'Nut Farm' },
            { value: 'olive_farm', label: 'Olive Farm' },
            { value: 'ostrich_farm', label: 'Ostrich Farm' },
            { value: 'poultry_farm', label: 'Poultry Farm' },
            { value: 'smallholding', label: 'Smallholding' },
            { value: 'stock_farm', label: 'Stock Farm' },
            { value: 'trout_farm', label: 'Trout Farm' },
            { value: 'vegetable_farm', label: 'Vegetable Farm' },
            { value: 'wine_farm', label: 'Wine Farm' },
            { value: 'wine/port_farm', label: 'Wine/Port Farm' },

        ],
        vacant_land: [
            { value: 'vacant_land', label: 'Vacant Land' },
        ],
        hospitality: [
            { value: 'b&b', label: 'B&B' },
            { value: 'beach_resort', label: 'Beach Resort' },
            { value: 'city_hotel', label: 'City Hotel' },
            { value: 'country_hotel', label: 'Country Hotel' },
            { value: 'country_resort', label: 'Country Resort' },
            { value: 'five_star_b&b', label: 'Five Star B&B' },
            { value: 'five_star_beach_resort', label: 'Five Star Beach Resort' },
            { value: 'five_star_city_hotel', label: 'Five Star City Hotel' },
            { value: 'five_star_country_hotel', label: 'Five Star Country Hotel' },
            { value: 'five_star_country_resort', label: 'Five Star Country Resort' },
            { value: 'five_star_function_venue', label: 'Five Star Function Venue' },
            { value: 'five_star_game_lodge', label: 'Five Star Game Lodge' },
            { value: 'five_star_guesthouse', label: 'Five Star Guesthouse' },
            { value: 'five_star_b&b', label: 'Five Star B&B' },
            { value: 'five_star_beach_resort', label: 'Five Star Beach Resort' },
            { value: 'five_star_city_hotel', label: 'Five Star City Hotel' },
            { value: 'five_star_country_hotel', label: 'Five Star Country Hotel' },
            { value: 'five_star_country_resort', label: 'Five Star Country Resort' },
            { value: 'five_star_function_venue', label: 'Five Star Function Venue' },
            { value: 'five_star_game_lodge', label: 'Five Star Game Lodge' },
            { value: 'five_star_guesthouse', label: 'Five Star Guesthouse' },
            { value: 'function_venue', label: 'Function Venue' },
            { value: 'game_lodge', label: 'Game Lodge' },
            { value: 'guesthouse', label: 'Guesthouse' },
            { value: 'health_spa', label: 'Health Spa' },
            { value: 'one_star_b&b', label: 'One Star B&B' },
            { value: 'one_star_beach_resort', label: 'One Star Beach Resort' },
            { value: 'one_star_city_hotel', label: 'One Star City Hotel' },
            { value: 'one_star_country_hotel', label: 'One Star Country Hotel' },
            { value: 'one_star_country_resort', label: 'One Star Country Resort' },
            { value: 'one_star_function_venue', label: 'One Star Function Venue' },
            { value: 'one_star_game_lodge', label: 'One Star Game Lodge' },
            { value: 'one_star_guesthouse', label: 'One Star Guesthouse' },
            { value: 'restaurant', label: 'Restaurant' },
            { value: 'three_star_b&b', label: 'Three Star B&B' },
            { value: 'three_star_beach_resort', label: 'Three Star Beach Resort' },
            { value: 'three_star_city_hotel', label: 'Three Star City Hotel' },
            { value: 'three_star_country_hotel', label: 'Three Star Country Hotel' },
            { value: 'three_star_country_resort', label: 'Three Star Country Resort' },
            { value: 'three_star_function_venue', label: 'Three Star Function Venue' },
            { value: 'three_star_game_lodge', label: 'Three Star Game Lodge' },
            { value: 'three_star_guesthouse', label: 'Three Star Guesthouse' },
            { value: 'two_star_b&b', label: 'Two Star B&B' },
            { value: 'two_star_beach_resort', label: 'Two Star Beach Resort' },
            { value: 'two_star_city_hotel', label: 'Two Star City Hotel' },
            { value: 'two_star_country_hotel', label: 'Two Star Country Hotel' },
            { value: 'two_star_country_resort', label: 'Two Star Country Resort' },
            { value: 'two_star_function_venue', label: 'Two Star Function Venue' },
            { value: 'two_star_game_lodge', label: 'Two Star Game Lodge' },
            { value: 'two_star_guesthouse', label: 'Two Star Guesthouse' },




        ]

    };

    const handleContinue = () => {
        if (propertyCategory && propertyType) {
            onContinue({ propertyCategory, propertyType });
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-gray-600/30 backdrop-blur-lg rounded-2xl p-14">
                <h2 className="text-white text-2xl font-semibold text-center mb-2">Create New Listing</h2>
                <p className="text-gray-400 text-sm text-center mb-8">Select Your Property Type</p>

                <div className="space-y-16">
                    <FormSelect
                        label="Property Category"
                        value={propertyCategory}
                        onChange={(e) => {
                            setPropertyCategory(e.target.value);
                            setPropertyType(''); // Reset property type when category changes
                        }}
                        options={categoryOptions}
                        placeholder="Select"
                    />

                    <FormSelect
                        label="Property Type"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        options={propertyCategory ? typeOptions[propertyCategory] : []}
                        placeholder="Select"
                        required
                    />
                    <div className="flex justify-center pt-6 pb-4">
                        <button
                            onClick={handleContinue}
                            disabled={!propertyCategory || !propertyType}
                            className="w-2/3 py-4 text-black font-semibold rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ background: '#EDBF6D' }}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyTypeSelection;

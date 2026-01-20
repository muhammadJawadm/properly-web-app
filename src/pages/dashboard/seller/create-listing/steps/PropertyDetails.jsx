import { useState } from 'react';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import NumberCounter from '../components/NumberCounter';
import StarRating from '../components/StarRating';
import TagInput from '../components/TagInput';
import { FaMapMarkerAlt } from 'react-icons/fa';
import FileUpload from '../components/FileUpload';

const PropertyDetails = ({ onContinue, onBack, formData }) => {
    const propertyCategory = formData?.propertyCategory;

    // Common fields
    const [electricitySupply, setElectricitySupply] = useState('other');
    const [electricityOther, setElectricityOther] = useState('');
    const [waterSupply, setWaterSupply] = useState('other');
    const [waterOther, setWaterOther] = useState('');
    const [sellerDescription, setSellerDescription] = useState('');
    const [propertyCondition, setPropertyCondition] = useState(5);
    const [goingConcern, setGoingConcern] = useState('yes');

    // Residential fields
    const [bedrooms, setBedrooms] = useState(3);
    const [bathrooms, setBathrooms] = useState(2);
    const [garages, setGarages] = useState(1);
    const [furnished, setFurnished] = useState('furnished');
    const [outbuildings, setOutbuildings] = useState('');
    const [gatesLevies, setGatesLevies] = useState('');
    const [conveniences, setConveniences] = useState([]);
    const [addExtras, setAddExtras] = useState([]);

    // Commercial fields
    const [commercialType, setCommercialType] = useState('');
    const [monthlyRental, setMonthlyRental] = useState('');
    const [leaseTerms, setLeaseTerms] = useState('');
    const [buildingPower, setBuildingPower] = useState('');
    const [parking, setParking] = useState('');
    const [zoningType, setZoningType] = useState('');
    const [businessAssets, setBusinessAssets] = useState([]);
    const [businessAssetsOther, setBusinessAssetsOther] = useState('');

    // Hospitality fields
    const [hospitalityType, setHospitalityType] = useState('');
    const [numberOfRooms, setNumberOfRooms] = useState(1);
    const [operational, setOperational] = useState('yes');
    const [hospitalityAssets, setHospitalityAssets] = useState(['furniture']);
    const [facilities, setFacilities] = useState([]);
    const [occupancy, setOccupancy] = useState('');

    // Agricultural fields
    const [farmingType, setFarmingType] = useState('');
    const [permanentResidence, setPermanentResidence] = useState('yes');
    const [landClaims, setLandClaims] = useState('yes');
    // const [goingConcern, setGoingConcern] = useState('yes');
    const [agriBusinessAssets, setAgriBusinessAssets] = useState([]);
    const [pinLocations, setPinLocations] = useState([
        { id: 1, name: 'Location 1' },
        { id: 2, name: 'Location 2' }
    ]);

    // Vacant land fields
    const [buildingRights, setBuildingRights] = useState(null);
    const [bulkServices, setBulkServices] = useState(['Electricity supply', 'Water supply']);


    const handleContinue = () => {
        onContinue({
            electricitySupply,
            electricityOther,
            waterSupply,
            waterOther,
            sellerDescription,
            propertyCondition,
            goingConcern,
            // Include property-specific data
            ...(propertyCategory === 'residential' && {
                bedrooms,
                bathrooms,
                garages,
                furnished,
                outbuildings,
                gatesLevies,
                conveniences,
                addExtras
            }),
            ...(propertyCategory === 'commercial' && {
                commercialType,
                monthlyRental,
                leaseTerms,
                buildingPower,
                parking,
                zoningType,
                businessAssets
            }),
            ...(propertyCategory === 'hospitality' && {
                hospitalityType,
                numberOfRooms,
                operational,
                hospitalityAssets,
                facilities,
                occupancy
            }),
            ...(propertyCategory === 'agricultural' && {
                farmingType,
                permanentResidence,
                landClaims,
                goingConcern,
                businessAssets,
                pinLocations
            }),
            ...(propertyCategory === 'vacant_land' && {
                zoningType,
                buildingRights,
                bulkServices
            })
        });
    };

    const addConvenience = (tag) => setConveniences([...conveniences, tag]);
    const removeConvenience = (index) => setConveniences(conveniences.filter((_, i) => i !== index));

    const addExtra = (tag) => setAddExtras([...addExtras, tag]);
    const removeExtra = (index) => setAddExtras(addExtras.filter((_, i) => i !== index));

    const addFacility = (tag) => setFacilities([...facilities, tag]);
    const removeFacility = (index) => setFacilities(facilities.filter((_, i) => i !== index));

    const toggleBusinessAsset = (asset) => {
        if (businessAssets.includes(asset)) {
            setBusinessAssets(businessAssets.filter(a => a !== asset));
        } else {
            setBusinessAssets([...businessAssets, asset]);
        }
    };

    const toggleHospitalityAsset = (asset) => {
        if (hospitalityAssets.includes(asset)) {
            setHospitalityAssets(hospitalityAssets.filter(a => a !== asset));
        } else {
            setHospitalityAssets([...hospitalityAssets, asset]);
        }
    };

    const toggleAsset = (asset) => {
        if (businessAssets.includes(asset)) {
            setBusinessAssets(businessAssets.filter(a => a !== asset));
        } else {
            setBusinessAssets([...businessAssets, asset]);
        }
    };

    const handleAddPin = () => {
        setPinLocations([...pinLocations, { id: Date.now(), name: `Location ${pinLocations.length + 1}` }]);
    };


    const addService = (service) => {
        if (!bulkServices.includes(service)) {
            setBulkServices([...bulkServices, service]);
        }
    };

    const removeService = (index) => {
        setBulkServices(bulkServices.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="bg-gray-600/50 backdrop-blur-lg rounded-2xl p-8 space-y-8">
                <div>
                    <h2 className="text-white text-2xl font-semibold mb-2">Property Details</h2>
                    <p className="text-gray-400 text-sm">Please enter your property details.</p>
                </div>

                {/* Auto-filled Data */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput label="ERF Size" value="45,000 m²" onChange={() => { }} helperText="(Auto-filled from Lightstone)" />
                    <FormInput label="Suburb" value="Town Devon Valley" onChange={() => { }} helperText="(Auto-filled from Lightstone)" />
                    <FormInput label="Town" value="Stellenbosch" onChange={() => { }} helperText="(Auto-filled from Lightstone)" />
                    <FormInput label="Province" value="Western Cape" onChange={() => { }} helperText="(Auto-filled from Lightstone)" />
                </div>

                {/* Electricity Supply */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="block text-white mb-2 text-sm">Electricity Supply:</label>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="electricity"
                                    value="eskom"
                                    checked={electricitySupply === 'eskom'}
                                    onChange={(e) => setElectricitySupply(e.target.value)}
                                    className="w-4 h-4 text-amber-500 accent-amber-500"
                                />
                                <span className="text-gray-300 text-sm">Eskom</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="electricity"
                                    value="other"
                                    checked={electricitySupply === 'other'}
                                    onChange={(e) => setElectricitySupply(e.target.value)}
                                    className="w-4 h-4 text-amber-500 accent-amber-500"
                                />
                                <span className="text-gray-300 text-sm">Other</span>
                            </label>
                            {electricitySupply === 'other' && (
                                <input
                                    type="text"
                                    placeholder="e.g local municipality"
                                    value={electricityOther}
                                    onChange={(e) => setElectricityOther(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500"
                                />
                            )}
                        </div>
                    </div>

                    {/* Water Supply */}
                    <div>
                        <label className="block text-white mb-2 text-sm">Water supply</label>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="water"
                                    value="borehole"
                                    checked={waterSupply === 'borehole'}
                                    onChange={(e) => setWaterSupply(e.target.value)}
                                    className="w-4 h-4 text-amber-500 accent-amber-500"
                                />
                                <span className="text-gray-300 text-sm">Borehole</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="water"
                                    value="municipality"
                                    checked={waterSupply === 'municipality'}
                                    onChange={(e) => setWaterSupply(e.target.value)}
                                    className="w-4 h-4 text-amber-500 accent-amber-500"
                                />
                                <span className="text-gray-300 text-sm">Municipality</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="water"
                                    value="other"
                                    checked={waterSupply === 'other'}
                                    onChange={(e) => setWaterSupply(e.target.value)}
                                    className="w-4 h-4 text-amber-500 accent-amber-500"
                                />
                                <span className="text-gray-300 text-sm">Other</span>
                            </label>
                            {waterSupply === 'other' && (
                                <input
                                    type="text"
                                    placeholder="e.g local municipality"
                                    value={waterOther}
                                    onChange={(e) => setWaterOther(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500"
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Seller Description */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="block text-white mb-2 text-sm">Seller Description / Special Features</label>
                        <textarea
                            placeholder="Highlight upgrades, special features, history, or unique aspects of your property..."
                            value={sellerDescription}
                            onChange={(e) => setSellerDescription(e.target.value)}
                            rows="4"
                            className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 resize-none focus:outline-none focus:border-amber-500"
                        />
                        <p className="text-gray-500 text-xs mt-1 italic">Your notes will now be AI to generate a professional property description.</p>
                    </div>

                    {/* Going Concern & Property Condition */}
                    <div className="space-y-6">
                        {/* <div>
                            <label className="block text-white mb-2 text-sm">Is the property being sold as a going concern?</label>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="goingConcern"
                                        value="yes"
                                        checked={goingConcern === 'yes'}
                                        onChange={(e) => setGoingConcern(e.target.value)}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-gray-300 text-sm">YES</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="goingConcern"
                                        value="no"
                                        checked={goingConcern === 'no'}
                                        onChange={(e) => setGoingConcern(e.target.value)}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-gray-300 text-sm">NO</span>
                                </label>
                            </div>
                        </div> */}

                        <div>
                            <label className="block text-white mb-3 text-sm">Please note how modern your building is in terms of design and amenities:</label>
                            <div className="flex items-center gap-3">
                                <StarRating rating={propertyCondition} onRate={setPropertyCondition} />
                                <span className="text-amber-400 text-sm ml-2">No defects, very modern</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Residential Property Section */}
                {propertyCategory === 'residential' && (
                    <div className="border-t border-gray-700 pt-8 space-y-6">
                        <div>
                            <h3 className="text-white text-xl font-semibold mb-2">Residential Property</h3>
                            <p className="text-gray-400 text-sm">Since your property is residential please fill out more details.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <NumberCounter
                                label="Bedrooms"
                                orangeLabel="Add More"
                                value={bedrooms}
                                onChange={setBedrooms}
                                max={10}
                            />
                            <NumberCounter
                                label="Garages/Carports"
                                orangeLabel="Add More"
                                value={garages}
                                onChange={setGarages}
                                max={7}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <NumberCounter
                                label="Bathrooms"
                                orangeLabel="Add More"
                                value={bathrooms}
                                onChange={setBathrooms}
                                max={10}
                            />
                            <div>
                                <label className="block text-white mb-4 text-sm">Categories</label>
                                <div className="flex gap-10  md:gap-24">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="furnished"
                                            value="furnished"
                                            checked={furnished === 'furnished'}
                                            onChange={(e) => setFurnished(e.target.value)}
                                            className="w-4 h-4 accent-amber-500"
                                        />
                                        <span className="text-gray-300 text-sm">Furnished</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="furnished"
                                            value="unfurnished"
                                            checked={furnished === 'unfurnished'}
                                            onChange={(e) => setFurnished(e.target.value)}
                                            className="w-4 h-4 accent-amber-500"
                                        />
                                        <span className="text-gray-300 text-sm">Unfurnished</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormInput
                                label="Outbuildings or flatlets"
                                placeholder="e.g. 1"
                                value={outbuildings}
                                onChange={(e) => setOutbuildings(e.target.value)}
                            />
                            <FormInput
                                label="Gates and Levies (Optional)"
                                placeholder="e.g R2000000"
                                value={gatesLevies}
                                onChange={(e) => setGatesLevies(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TagInput
                                label="Conveniences"
                                tags={conveniences}
                                onAddTag={addConvenience}
                                onRemoveTag={removeConvenience}
                                placeholder="Add security features..."
                            />

                            <TagInput
                                label="Add Extras"
                                tags={addExtras}
                                onAddTag={addExtra}
                                onRemoveTag={removeExtra}
                                placeholder="e.g Barn, Inverter"
                            />
                        </div>
                    </div>
                )}

                {/* Commercial Property Section */}
                {propertyCategory === 'commercial' && (
                    <div className="border-t border-gray-700 pt-8 space-y-6">
                        <div>
                            <h3 className="text-white text-xl font-semibold mb-2">Commercial Property</h3>
                            <p className="text-gray-400 text-sm">Since your property is commercial please fill out more details.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormSelect
                                label="Type of commercial property"
                                value={commercialType}
                                onChange={(e) => setCommercialType(e.target.value)}
                                options={[
                                    { value: 'office', label: 'Office' },
                                    { value: 'retail', label: 'Retail' },
                                    { value: 'warehouse', label: 'Warehouse' },
                                    { value: 'industrial', label: 'Industrial' }
                                ]}
                            />
                            <FormInput
                                label="Zoning type (Optional)"
                                placeholder=""
                                value={zoningType}
                                onChange={(e) => setZoningType(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormInput
                                label="Monthly rental income (Optional)"
                                placeholder=""
                                value={monthlyRental}
                                onChange={(e) => setMonthlyRental(e.target.value)}
                            />
                            <FormInput
                                label="Parking"
                                placeholder=""
                                value={parking}
                                onChange={(e) => setParking(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white mb-2 text-sm">Lease Terms (Optional)</label>
                                <select className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white">
                                    <option>1 Year</option>
                                    <option>2 Years</option>
                                    <option>3 Years</option>
                                    <option>5 Years</option>
                                </select>
                            </div>
                            <FormInput
                                label="Security"
                                value=""
                                onChange={() => { }}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormInput
                                label="Building Power"
                                value={buildingPower}
                                onChange={(e) => setBuildingPower(e.target.value)}
                            />
                            <FormInput
                                label="Is the property Zoned"
                                value=""
                                onChange={() => { }}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white mb-2 text-sm">Is the property being sold as a going concern?</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="commercial_concern" value="yes" className="w-4 h-4 accent-amber-500" />
                                        <span className="text-gray-300 text-sm ">YES</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="commercial_concern" value="no" className="w-4 h-4 accent-amber-500" />
                                        <span className="text-gray-300 text-sm">NO</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-white mb-2 text-sm">Tenants</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="tenants" value="yes" className="w-4 h-4 accent-amber-500" />
                                        <span className="text-gray-300 text-sm">YES</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="tenants" value="no" className="w-4 h-4 accent-amber-500" />
                                        <span className="text-gray-300 text-sm">NO</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-white mb-3 text-sm">What business assets are included?</label>
                            <div className="grid grid-cols-3 gap-3">
                                {['Furniture', 'Equipment', 'Stock', 'Vehicles', 'Licenses', 'Branding'].map((asset) => (
                                    <label key={asset} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={businessAssets.includes(asset.toLowerCase())}
                                            onChange={() => toggleBusinessAsset(asset.toLowerCase())}
                                            className="w-4 h-4 accent-amber-500"
                                        />
                                        <span className="text-gray-300 text-sm">{asset}</span>
                                    </label>
                                ))}

                                {/* Other Option */}
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={businessAssets.includes('other')}
                                        onChange={() => toggleBusinessAsset('other')}
                                        className="w-4 h-4 accent-amber-500"
                                    />
                                    <span className="text-gray-300 text-sm">Other</span>
                                </label>
                            </div>

                            {/* Other Text Input - Appears when Other is checked */}
                            {businessAssets.includes('other') && (
                                <div className="mt-3">
                                    <input
                                        type="text"
                                        placeholder="Please specify other business assets..."
                                        value={businessAssetsOther}
                                        onChange={(e) => setBusinessAssetsOther(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Hospitality Section */}
                {propertyCategory === 'hospitality' && (
                    <div className="border-t border-gray-700 pt-8 space-y-6">
                        <div>
                            <h3 className="text-white text-xl font-semibold mb-2">Hospitality</h3>
                            <p className="text-gray-400 text-sm">Since your property is hospitable please fill out more details.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormSelect
                                label="Type of hospitality"
                                value={hospitalityType}
                                onChange={(e) => setHospitalityType(e.target.value)}
                                options={[
                                    { value: 'hotel', label: 'Hotel' },
                                    { value: 'guesthouse', label: 'Guest House' },
                                    { value: 'bnb', label: 'B&B' },
                                    { value: 'lodge', label: 'Lodge' }
                                ]}
                            />
                            <NumberCounter
                                label="No of Rooms/ Units"
                                orangeLabel="Add More"
                                value={numberOfRooms}
                                onChange={setNumberOfRooms}
                                max={9}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white mb-2 text-sm">Operational</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="operational"
                                            value="yes"
                                            checked={operational === 'yes'}
                                            onChange={(e) => setOperational(e.target.value)}
                                            className="w-4 h-4 accent-amber-500"
                                        />
                                        <span className="text-gray-300 text-sm">YES</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="operational"
                                            value="no"
                                            checked={operational === 'no'}
                                            onChange={(e) => setOperational(e.target.value)}
                                            className="w-4 h-4 accent-amber-500"
                                        />
                                        <span className="text-gray-300 text-sm">NO</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-white mb-3 text-sm">Add Assets</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {['Furniture', 'Equipment', 'Stock', 'Vehicles', 'Licenses', 'Branding'].map((asset) => (
                                        <label key={asset} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={hospitalityAssets.includes(asset.toLowerCase())}
                                                onChange={() => toggleHospitalityAsset(asset.toLowerCase())}
                                                className="w-4 h-4 accent-amber-500"
                                            />
                                            <span className="text-gray-300 text-sm">{asset}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TagInput
                                label="Facilities"
                                tags={facilities}
                                onAddTag={addFacility}
                                onRemoveTag={removeFacility}
                                placeholder="e.g Spa"
                            />
                            <FormInput
                                label="Occupancy or Income (Optional)"
                                value={occupancy}
                                onChange={(e) => setOccupancy(e.target.value)}
                            />
                        </div>
                    </div>
                )}

                {propertyCategory === 'agricultural' && (
                    <div className="border-t border-gray-700 pt-8 space-y-6">
                        <div>
                            <h2 className="text-white text-2xl font-semibold mb-2">Agricultural Property</h2>
                            <p className="text-gray-400 text-sm">Since your property is agricultural please fill out more details.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormSelect
                                label="Type of farming"
                                value={farmingType}
                                onChange={(e) => setFarmingType(e.target.value)}
                                options={[
                                    { value: 'crops', label: 'Crops' },
                                    { value: 'livestock', label: 'Livestock' },
                                    { value: 'mixed', label: 'Mixed Farming' },
                                    { value: 'vineyard', label: 'Vineyard' }
                                ]}
                            />
                            <div>
                                <label className="block text-white mb-2 text-sm">Is there a permanent residence on the property?</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="residence"
                                            value="yes"
                                            checked={permanentResidence === 'yes'}
                                            onChange={(e) => setPermanentResidence(e.target.value)}
                                            className="w-4 h-4 accent-amber-500"
                                        />
                                        <span className="text-gray-300 text-sm">YES</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="residence"
                                            value="no"
                                            checked={permanentResidence === 'no'}
                                            onChange={(e) => setPermanentResidence(e.target.value)}
                                            className="w-4 h-4 accent-amber-500"
                                        />
                                        <span className="text-gray-300 text-sm">NO</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white mb-2 text-sm">Are there any land claims on the property?</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="landClaims"
                                            value="yes"
                                            checked={landClaims === 'yes'}
                                            onChange={(e) => setLandClaims(e.target.value)}
                                            className="w-4 h-4 accent-amber-500"
                                        />
                                        <span className="text-gray-300 text-sm">YES</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="landClaims"
                                            value="no"
                                            checked={landClaims === 'no'}
                                            onChange={(e) => setLandClaims(e.target.value)}
                                            className="w-4 h-4 accent-amber-500"
                                        />
                                        <span className="text-gray-300 text-sm">NO</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-white mb-2 text-sm">Is the property being sold as a going concern?</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="goingConcern"
                                            value="yes"
                                            checked={goingConcern === 'yes'}
                                            onChange={(e) => setGoingConcern(e.target.value)}
                                            className="w-4 h-4 accent-amber-500"
                                        />
                                        <span className="text-gray-300 text-sm">YES</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="goingConcern"
                                            value="no"
                                            checked={goingConcern === 'no'}
                                            onChange={(e) => setGoingConcern(e.target.value)}
                                            className="w-4 h-4 accent-amber-500"
                                        />
                                        <span className="text-gray-300 text-sm">NO</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {/* Pin Locations */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-white text-sm">Pin Location</label>
                                    <button
                                        onClick={handleAddPin}
                                        className="flex items-center gap-2 text-amber-500 hover:text-amber-400 text-sm font-medium"
                                    >
                                        <FaMapMarkerAlt size={14} />
                                        <span>Add Pin</span>
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    {pinLocations.map((location) => (
                                        <div key={location.id} className="flex items-center gap-3">
                                            <input
                                                type="text"
                                                value={location.name}
                                                readOnly
                                                className="flex-1 px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-lg text-white"
                                            />
                                            <button
                                                className="p-2 bg-gray-800/60 rounded-lg hover:bg-gray-700 transition-colors"
                                            >
                                                <FaMapMarkerAlt className="text-amber-500" size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Business Assets */}
                            <div>
                                <label className="block text-white mb-3 text-sm">Add Business Assets</label>
                                <div className="space-y-3">
                                    {['Livestock', 'Equipment', 'Machinery', 'Water Rights', 'Infrastructure', 'Vehicles'].map((asset, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <label className="flex items-center gap-2 cursor-pointer min-w-[140px]">
                                                <input
                                                    type="checkbox"
                                                    checked={agriBusinessAssets.includes(asset.toLowerCase())}
                                                    onChange={() => toggleAsset(asset.toLowerCase())}
                                                    className="w-4 h-4 rounded accent-amber-500"
                                                />
                                                <span className="text-gray-300 text-sm">{asset}</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={`Enter ${asset.toLowerCase()} details...`}
                                                className="flex-1 px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-amber-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                )}
                {propertyCategory === 'vacant_land' && (
                    <div className="border-t border-gray-700 pt-8 space-y-6">
                        <div>
                            <h2 className="text-white text-2xl font-semibold mb-2">Vacant Land</h2>
                            <p className="text-gray-400 text-sm">Since your property is agricultural please fill out more details.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormSelect
                                label="Zoning Type(Optional)"
                                value={zoningType}
                                onChange={(e) => setZoningType(e.target.value)}
                                options={[
                                    { value: 'residential', label: 'Residential' },
                                    { value: 'commercial', label: 'Commercial' },
                                    { value: 'industrial', label: 'Industrial' },
                                    { value: 'agricultural', label: 'Agricultural' }
                                ]}
                            />
                            <FileUpload
                                label="Building rights/ Approvals (Optional)"
                                onUpload={(file) => setBuildingRights(file)}
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            />
                        </div>

                        <TagInput
                            label="Bulk Services"
                            tags={bulkServices}
                            onAddTag={addService}
                            onRemoveTag={removeService}
                            placeholder="water, sewer, power"
                        />

                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-between pt-6">
                    <button
                        onClick={onBack}
                        className="px-8 py-3 bg-gray-700/50 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleContinue}
                        className="px-8 py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-full hover:opacity-90 transition-opacity"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;

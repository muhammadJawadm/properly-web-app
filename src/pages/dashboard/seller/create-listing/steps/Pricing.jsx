import { useState } from 'react';
import FormInput from '../components/FormInput';

const Pricing = ({ onContinue, onBack, formData }) => {
    const [listingPrice, setListingPrice] = useState('');
    const [askingPrice, setAskingPrice] = useState('');
    const [showCalculated, setShowCalculated] = useState(false);
    const [averagePrices] = useState([
        { type: '3-Bed House', price: 'R1,500,000' },
        { type: 'Smallholding', price: 'R2,000,000' },
        { type: 'Farm', price: 'R5,000,000' }
    ]);

    const handleCalculate = () => {
        if (listingPrice) {
            // Calculate asking price (adding 1% commission + VAT)
            const basePrice = parseFloat(listingPrice.replace(/,/g, ''));
            const calculated = basePrice * 1.01; // Add 1% for commission + VAT
            setAskingPrice(`R${calculated.toLocaleString('en-ZA', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`);
            setShowCalculated(true);
        }
    };

    const handleContinue = () => {
        onContinue({
            listingPrice,
            askingPrice
        });
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="bg-gray-600/50 backdrop-blur-lg rounded-2xl p-8 space-y-8">
                <div>
                    <h2 className="text-white text-2xl font-semibold mb-2">
                        PRICING <span className="text-gray-400 text-lg">(1% COMMISSION + VAT)</span>
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Properly uses a transparent, factor-based pricing model to calculate your property's final listing price.
                    </p>
                </div>

                {!showCalculated ? (
                    <>
                        <FormInput
                            label="Listing price"
                            value={listingPrice}
                            onChange={(e) => setListingPrice(e.target.value)}
                            placeholder="R1,000,000"
                        />

                        <div>
                            <label className="block text-white mb-2 text-sm">Asking price</label>
                            <button
                                onClick={handleCalculate}
                                disabled={!listingPrice}
                                className="w-full max-w-md px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-amber-500 font-medium hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Calculate
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white mb-2 text-sm">Asking Price</label>
                                <div className="px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg">
                                    <p className="text-white font-semibold text-lg">{askingPrice}</p>
                                    <p className="text-gray-400 text-xs italic mt-1">
                                        This is the amount you want to receive after Properly's 1% commission and VAT.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <label className="block text-white mb-2 text-sm">Listing price</label>
                                <div className="px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg">
                                    <p className="text-white font-semibold text-lg">R{parseFloat(listingPrice.replace(/,/g, '')).toLocaleString('en-ZA')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-700 pt-6">
                            <h3 className="text-white text-xl font-semibold mb-2">Average Sale Prices in your Area</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Based on Lightstone verified recently sold properties in your area.
                            </p>

                            <div className="bg-gray-900/50 rounded-xl overflow-hidden">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-700 ">
                                            <th className="text-left px-24 py-4 text-white text-sm font-medium">Property Type</th>
                                            <th className="text-right px-24 py-4 text-white text-sm font-medium">Average Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {averagePrices.map((item, index) => (
                                            <tr key={index} className="border-b border-gray-800 last:border-0">
                                                <td className="px-24 py-4 text-white">{item.type}</td>
                                                <td className="px-24 py-4 text-white text-right font-semibold">{item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}

                {/* Action Buttons */}
                <div className="flex justify-between pt-6">
                    <button
                        onClick={onBack}
                        className="px-8 py-3 bg-gray-700/50 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors"
                    >
                        Back
                    </button>
                    {showCalculated && (
                        <button
                            onClick={handleContinue}
                            className="px-8 py-3 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-full hover:opacity-90 transition-opacity"
                        >
                            Continue
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pricing;

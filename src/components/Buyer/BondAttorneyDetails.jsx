import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import SplashBg from "../../assets/SplashBg.png";
import { Link, useNavigate } from "react-router-dom";
import { useRole } from "../../context/RoleContext";

const BondAttorneyDetails = () => {
    const navigate = useNavigate();
    const { selectRole } = useRole();
    const [formData, setFormData] = useState({
        firmName: "",
        contactPerson: "",
        registrationNumber: "",
        phoneNumber: "",
        emailAddress: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Bond Attorney Details:", formData);
        // Navigate to next step or KYC verification
        navigate("/kycverification");
    };

    const handleSkip = () => {
        // Skip to next step
        navigate("/buyer/dashboard");
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Background Image */}
            <div className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${SplashBg})` }}>
            </div>

            {/* Back Button */}
            {/* <button
                className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 text-white hover:text-gray-300 transition-colors"
                onClick={() => window.history.back()}
            >
                <FaArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button> */}

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-4xl">
                <div className="bg-black bg-opacity-90 backdrop-blur-md rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-8 sm:py-12 shadow-2xl">
                    {/* Header with Skip button */}
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Bond Attorney details</h2>
                            <p className="text-gray-400 text-sm">Provide the details if you have applied for Loan.</p>
                        </div>
                        <button
                            onClick={handleSkip}
                            className="text-amber-500 hover:text-amber-400 font-medium text-sm sm:text-base transition-colors"
                        >
                            Skip
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Details for appointed bond attorney */}
                        <p className="text-white text-sm mb-6">Details for appointed bond attorney.</p>

                        <div className="space-y-6">
                            {/* Firm Name */}
                            <div>
                                <input
                                    type="text"
                                    name="firmName"
                                    value={formData.firmName}
                                    onChange={handleInputChange}
                                    placeholder="Firm name"
                                    className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                                />
                            </div>

                            {/* Contact Info Section */}
                            <div>
                                <h3 className="text-white font-semibold mb-4">Contact Info</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Contact Person */}
                                    <div>
                                        <input
                                            type="text"
                                            name="contactPerson"
                                            value={formData.contactPerson}
                                            onChange={handleInputChange}
                                            placeholder="Contact person"
                                            className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                                        />
                                    </div>

                                    {/* Phone Number */}
                                    <div>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            placeholder="Phone number"
                                            className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                                        />
                                    </div>

                                    {/* Registration Number */}
                                    <div>
                                        <input
                                            type="text"
                                            name="registrationNumber"
                                            value={formData.registrationNumber}
                                            onChange={handleInputChange}
                                            placeholder="Registration number"
                                            className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div>
                                        <input
                                            type="email"
                                            name="emailAddress"
                                            value={formData.emailAddress}
                                            onChange={handleInputChange}
                                            placeholder="Email address"
                                            className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-10">
                            <Link to="/buyer/dashboard">
                                <button
                                    type="submit"
                                    className="px-16 py-3 sm:py-4 rounded-full font-semibold text-black text-sm sm:text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                                    style={{ backgroundColor: '#EDBF6D' }}
                                >
                                    Submit
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BondAttorneyDetails;

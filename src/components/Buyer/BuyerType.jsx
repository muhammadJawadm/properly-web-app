import { useState } from "react";
import { FaArrowLeft, FaFileAlt, FaUpload, FaTimes } from "react-icons/fa";
import SplashBg from "../../assets/SplashBg.png";
import { Link } from "react-router-dom";

const BuyerType = () => {
    const [buyerType, setBuyerType] = useState("individual");
    const [uploadedFiles, setUploadedFiles] = useState({});

    // Type-specific documents based on the images
    const typeSpecificDocs = {
        trust: {
            title: "Upload documents as Trust",
            docs: [
                { id: "letter_authority", label: "Copy of the Letter of Authority" },
                { id: "trust_deed", label: "Copy of the Trust Deed" },
                { id: "trustee_ids", label: "IDs of Trustees" },
                { id: "proof_address_trustees", label: "Proof of address for Trustees" },
                { id: "tax_number", label: "Proof of Income Tax number", note: "(if registered for Tax)" }
            ]
        },
        individual: {
            title: "Upload documents as Natural Person",
            docs: [
                { id: "copy_id", label: "Copy of ID or Passport" },
                { id: "proof_address", label: "Proof of address", note: "(Municipal, Eskom bill or similar)" },
                { id: "tax_number", label: "Proof of Income Tax Number", note: "(If Registered)" },
                { id: "marriage_cert", label: "Marriage certificate and antenuptial contract", note: "(If applicable)" },
                { id: "proof_income", label: "Proof of Income", note: "(latest payslip, tax return, or letter of good standing)" },
                { id: "banking_details", label: "Proof of Banking Details" }
            ]
        },
        company: {
            title: "Upload documents as Company",
            docs: [
                { id: "cipc_certificate", label: "CIPC Disclosure Certificate" },
                { id: "shareholders_proof", label: "Proof of shareholders (for companies)" },
                { id: "directors_ids", label: "IDs and proof of address of directors/members" },
                { id: "company_address", label: "Proof of address of the Company/CC" },
                { id: "tax_number", label: "Proof of Income Tax number" }
            ]
        }
    };

    const handleFileUpload = (docId, file) => {
        setUploadedFiles(prev => ({
            ...prev,
            [docId]: file
        }));
    };

    const handleFileRemove = (docId) => {
        const newFiles = { ...uploadedFiles };
        delete newFiles[docId];
        setUploadedFiles(newFiles);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted files:", uploadedFiles);
        // Navigate to bond attorney details or next step
    };

    const DocumentUploadRow = ({ doc }) => {
        const hasFile = uploadedFiles[doc.id];

        return (
            <div className="mb-4">
                <div className="flex items-center gap-3">
                    {/* Upload Button/Display */}
                    <div className="flex-1 flex items-center justify-between px-4 py-3 min-h-[72px] bg-gray-900/40 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors">
                        <div className="flex items-center gap-3">
                            <FaFileAlt className="text-amber-500" size={18} />
                            <div>
                                <span className="text-white text-sm block">{doc.label}</span>
                                {doc.note && (
                                    <span className="text-gray-500 text-xs">{doc.note}</span>
                                )}
                            </div>
                        </div>
                        <label className="cursor-pointer">
                            <FaUpload className="text-gray-400 hover:text-amber-500 transition-colors" size={16} />
                            <input
                                type="file"
                                className="hidden"
                                onChange={(e) => handleFileUpload(doc.id, e.target.files[0])}
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            />
                        </label>
                    </div>

                    {/* Uploaded File Display */}
                    {hasFile && (
                        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700">
                            <FaFileAlt className="text-gray-400" size={16} />
                            <span className="text-white text-sm">Doc.pdf</span>
                            <button
                                type="button"
                                onClick={() => handleFileRemove(doc.id)}
                                className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                            >
                                <FaTimes size={14} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Background Image */}
            <div className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${SplashBg})` }}>
            </div>

            {/* Back Button */}
            <button
                className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 text-white hover:text-gray-300 transition-colors"
                onClick={() => window.history.back()}
            >
                <FaArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-5xl">
                <div className="bg-black bg-opacity-90 backdrop-blur-md rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-8 sm:py-12 shadow-2xl">
                    {/* Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Select your Buyer Type</h2>

                    {/* Buyer Type Selection */}
                    <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 sm:mb-10">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="radio"
                                name="buyerType"
                                value="trust"
                                checked={buyerType === "trust"}
                                onChange={(e) => setBuyerType(e.target.value)}
                                className="w-4 h-4 accent-amber-500"
                                style={{ accentColor: '#EDBF6D' }}
                            />
                            <span className="text-white text-sm sm:text-base group-hover:text-amber-400 transition-colors">Trust</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="radio"
                                name="buyerType"
                                value="individual"
                                checked={buyerType === "individual"}
                                onChange={(e) => setBuyerType(e.target.value)}
                                className="w-4 h-4 accent-amber-500"
                                style={{ accentColor: '#EDBF6D' }}
                            />
                            <span className="text-white text-sm sm:text-base group-hover:text-amber-400 transition-colors">
                                Individual Buyer (Natural Person)
                            </span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="radio"
                                name="buyerType"
                                value="company"
                                checked={buyerType === "company"}
                                onChange={(e) => setBuyerType(e.target.value)}
                                className="w-4 h-4 accent-amber-500"
                                style={{ accentColor: '#EDBF6D' }}
                            />
                            <span className="text-white text-sm sm:text-base group-hover:text-amber-400 transition-colors">
                                Company / Close Corporation
                            </span>
                        </label>
                    </div>

                    {/* Documents Section */}
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                        {typeSpecificDocs[buyerType].title}
                    </h3>

                    <form onSubmit={handleSubmit}>
                        {/* Documents Grid - 2 columns on larger screens */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                            {typeSpecificDocs[buyerType].docs.map((doc) => (
                                <DocumentUploadRow key={doc.id} doc={doc} />
                            ))}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-10">
                            <Link to={'/bondattorneydetails'}>
                                <button
                                    type="submit"
                                    className="px-16 py-3 sm:py-4 rounded-full font-semibold text-black text-sm sm:text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                                    style={{ backgroundColor: '#EDBF6D' }}
                                >

                                    Submit Documents

                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyerType;

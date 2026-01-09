import { useState } from "react";
import { FaArrowLeft, FaFileAlt, FaUpload, FaTimes } from "react-icons/fa";
import SplashBg from "../../assets/SplashBg.png";

const SellerKyc = () => {
    const [sellerType, setSellerType] = useState("trust");
    const [uploadedFiles, setUploadedFiles] = useState({});

    // Mandatory documents (same for all types)
    const mandatoryDocs = [
        { id: "deed_of_sale", label: "Copy of Deed of Sale" },
        { id: "title_deed", label: "Original Title Deed" },
        { id: "bondholder", label: "Details of Bondholder and Bond account Number", note: "If title deed is Unavailable:" }
    ];

    // Type-specific documents
    const typeSpecificDocs = {
        trust: {
            title: "Upload documents as Trust",
            docs: [
                { id: "letter_authority", label: "Letter of Authority" },
                { id: "trust_deed", label: "Trust Deed" },
                { id: "trustee_id", label: "Trustee's ID" },
                { id: "proof_address", label: "Proof of address" },
                { id: "tax_number", label: "Proof of Income Tax Number" }
            ]
        },
        individual: {
            title: "Upload documents as Natural Person",
            docs: [
                { id: "copy_id", label: "Copy of ID" },
                { id: "proof_address", label: "Proof of address" },
                { id: "tax_number", label: "Proof of Income Tax Number (If Registered)" },
                { id: "ante_nuptial", label: "Ante nuptial Contract", note: "If married out of community of Property:" }
            ]
        },
        company: {
            title: "Upload documents as Company",
            docs: [
                { id: "cipc_certificate", label: "CIPC Disclosure Certificate" },
                { id: "shareholders_proof", label: "Proof of shareholders(for companies)" },
                { id: "director_id", label: "Director's or member's ID's and proof of address" },
                { id: "company_address", label: "Company/CC proof of address" },
                { id: "tax_number", label: "Proof of Income Tax Number" }
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
        // Add submission logic here
    };

    const DocumentUploadRow = ({ doc, category }) => {
        const fileKey = `${category}_${doc.id}`;
        const hasFile = uploadedFiles[fileKey];

        return (
            <div className="mb-10">
                {doc.note && (
                    <p className="text-gray-400 text-xs mb-2">{doc.note}</p>
                )}
                <div className="flex items-center gap-4">
                    {/* Upload Button */}
                    <div className="flex-1 flex items-center gap-3 px-5 py-4 bg-gray-900 bg-opacity-40 border border-gray-700 rounded-xl hover:border-gray-600 transition-colors">
                        <FaFileAlt className="text-amber-500" size={20} />
                        <span className="text-white text-sm flex-1">{doc.label}</span>
                        <label className="cursor-pointer">
                            <FaUpload className="text-gray-400 hover:text-amber-500 transition-colors" size={16} />
                            <input
                                type="file"
                                className="hidden"
                                onChange={(e) => handleFileUpload(fileKey, e.target.files[0])}
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            />
                        </label>
                    </div>

                    {/* Uploaded File Display */}
                    {hasFile && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700">
                            <FaFileAlt className="text-gray-400" size={16} />
                            <span className="text-white text-sm">Doc.pdf</span>
                            <button
                                type="button"
                                onClick={() => handleFileRemove(fileKey)}
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
            <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row gap-6 sm:gap-8">
                {/* Left Panel - Seller Type & Mandatory Documents */}
                <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                    {/* Seller Type Selection */}
                    <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 shadow-2xl">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Select your seller Type</h2>
                        <div className="space-y-4">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="sellerType"
                                    value="trust"
                                    checked={sellerType === "trust"}
                                    onChange={(e) => setSellerType(e.target.value)}
                                    className="w-5 h-5 accent-amber-500"
                                    style={{ accentColor: '#EDBF6D' }}
                                />
                                <span className="text-white text-sm sm:text-base group-hover:text-amber-400 transition-colors">Trust</span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="sellerType"
                                    value="individual"
                                    checked={sellerType === "individual"}
                                    onChange={(e) => setSellerType(e.target.value)}
                                    className="w-5 h-5 accent-amber-500"
                                    style={{ accentColor: '#EDBF6D' }}
                                />
                                <span className="text-white text-sm sm:text-base group-hover:text-amber-400 transition-colors">
                                    Individual Seller (Natural Person)
                                </span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="sellerType"
                                    value="company"
                                    checked={sellerType === "company"}
                                    onChange={(e) => setSellerType(e.target.value)}
                                    className="w-5 h-5 accent-amber-500"
                                    style={{ accentColor: '#EDBF6D' }}
                                />
                                <span className="text-white text-sm sm:text-base group-hover:text-amber-400 transition-colors">
                                    Company / Close Corporation
                                </span>
                            </label>
                        </div>

                        <h2 className="text-lg sm:text-xl font-bold text-white mt-12 sm:mt-16 md:mt-24">Mandatory Documents</h2>
                        <div className="mt-4">
                            {mandatoryDocs.map((doc) => (
                                <DocumentUploadRow key={doc.id} doc={doc} category="mandatory" />
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Panel - Type-Specific Documents */}
                <div className="w-full lg:w-1/2">
                    <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8 shadow-2xl">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                            {typeSpecificDocs[sellerType].title}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-10">
                                {typeSpecificDocs[sellerType].docs.map((doc) => (
                                    <DocumentUploadRow key={doc.id} doc={doc} category={sellerType} />
                                ))}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full sm:w-[80%] sm:mx-auto block py-3 sm:py-4 px-6 sm:px-8 rounded-full font-semibold text-black text-sm sm:text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                                style={{ backgroundColor: '#EDBF6D' }}
                            >
                                Submit Documents
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerKyc;

import { FaUpload, FaFileAlt } from "react-icons/fa";
import KycStepIndicator from "./KycStepIndicator";

const KycProofOfResidenceStep = ({ onSubmit, onFileUpload, steps }) => {
    return (
        <div className="w-3/4">
            {/* Steps Progress */}
            <KycStepIndicator steps={steps} currentStep={3} />

            <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-3xl p-16 shadow-2xl">
                <div className="flex items-center gap-12">
                    {/* Left: Illustration - Hidden on mobile */}
                    <div className="hidden lg:flex lg:w-1/2 justify-center">
                        <div className="w-64 h-64 rounded-full bg-gray-700 flex items-center justify-center">
                            <div className="w-48 h-64 bg-gray-600 rounded-2xl flex items-center justify-center relative">
                                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-500 rounded-full" />
                                <FaFileAlt className="text-amber-500" size={64} />
                            </div>
                        </div>
                    </div>

                    {/* Right: Upload Form */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">Proof of Residence</h2>
                        <p className="text-gray-400 text-xs sm:text-sm mb-10 sm:mb-12 md:mb-16 text-center">Upload Utility Bill or Official document</p>

                        <div className="space-y-4">
                            {/* Upload Photo */}
                            <label className="flex items-center justify-between px-6 py-4 bg-gray-700 bg-opacity-50 rounded-xl cursor-pointer hover:bg-opacity-70 transition-colors">
                                <span className="text-white">Upload Photo</span>
                                <FaUpload className="text-amber-500" />
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => onFileUpload('proofOfResidence', e.target.files[0])}
                                    accept="image/*"
                                />
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-12 sm:mt-16 md:mt-24">
                            <button
                                onClick={onSubmit}
                                className="w-full sm:w-2/3 mt-4 sm:mt-6 md:mt-8 px-6 sm:px-8 py-3 text-sm sm:text-base rounded-full font-semibold text-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                style={{ backgroundColor: '#EDBF6D' }}
                            >
                                Submit for Verification
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KycProofOfResidenceStep;

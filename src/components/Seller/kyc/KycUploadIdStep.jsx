import { FaUpload, FaUser, FaPlane } from "react-icons/fa";
import KycStepIndicator from "./KycStepIndicator";

const KycUploadIdStep = ({ onNext, onFileUpload, steps }) => {
    return (
        <div className="w-3/4">
            {/* Steps Progress */}
            <KycStepIndicator steps={steps} currentStep={1} />

            <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-2xl sm:rounded-3xl px-6 sm:px-12 md:px-16 py-10 sm:py-16 shadow-2xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 md:gap-24">
                    {/* Left: Illustration - Hidden on mobile */}
                    <div className="hidden lg:flex lg:w-1/2 justify-center">
                        <div className="w-64 h-64 rounded-full bg-gray-700 flex items-center justify-center">
                            <div className="w-48 h-64 bg-gray-600 rounded-2xl flex items-center justify-center relative">
                                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-500 rounded-full" />
                                <div className="flex gap-4">
                                    <div className="w-20 h-28 bg-white rounded-lg flex items-center justify-center">
                                        <span className="text-4xl border-2 border-amber-500 rounded-full p-2"><FaUser className="text-amber-500" /></span>
                                    </div>
                                    <div className="w-20 h-28 rounded-lg flex items-center justify-center " style={{ backgroundColor: '#EDBF6D' }}>
                                        <span className="text-4xl border-2 border-white rounded-full p-2"><FaPlane className="text-white" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Upload Form */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-xl sm:text-2xl text-center font-bold text-white mb-2">Upload Government ID.</h2>
                        <p className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8 text-center">National Identity Card or Passport</p>

                        <div className="space-y-4">
                            {/* Upload Front */}
                            <label className="flex items-center justify-between px-6 py-4 bg-gray-700 bg-opacity-50 rounded-xl cursor-pointer hover:bg-opacity-70 transition-colors">
                                <span className="text-white">Upload Front</span>
                                <FaUpload className="text-amber-500" />
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => onFileUpload('idFront', e.target.files[0])}
                                    accept="image/*"
                                />
                            </label>

                            {/* Upload Back */}
                            <label className="flex items-center justify-between px-6 py-4 bg-gray-700 bg-opacity-50 rounded-xl cursor-pointer hover:bg-opacity-70 transition-colors">
                                <span className="text-white">Upload Back</span>
                                <FaUpload className="text-amber-500" />
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => onFileUpload('idBack', e.target.files[0])}
                                    accept="image/*"
                                />
                            </label>
                        </div>

                        {/* Next Button */}
                        <div className="flex justify-center mt-12 sm:mt-16">
                            <button
                                onClick={onNext}
                                className="w-full sm:w-2/3 px-6 sm:px-8 py-3 text-sm sm:text-base rounded-full font-semibold text-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                style={{ backgroundColor: '#EDBF6D' }}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KycUploadIdStep;

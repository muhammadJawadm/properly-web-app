import { FaUpload, FaCamera } from "react-icons/fa";
import KycStepIndicator from "./KycStepIndicator";

const KycUploadPhotoStep = ({ onNext, onFileUpload, steps }) => {
    return (
        <div className="w-3/4">
            {/* Steps Progress */}
            <KycStepIndicator steps={steps} currentStep={2} />

            <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-3xl p-16 shadow-2xl">
                <div className="flex items-center gap-12">
                    {/* Left: Illustration - Hidden on mobile */}
                    <div className="hidden lg:flex lg:w-1/2 justify-center">
                        <div className="w-64 h-64 rounded-full bg-gray-700 flex items-center justify-center">
                            <div className="w-48 h-64 bg-gray-600 rounded-2xl flex flex-col items-center justify-center relative">
                                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-500 rounded-full" />
                                <span className="text-6xl mb-4">🧑</span>
                                <div className="absolute bottom-8">
                                    <FaCamera className="text-amber-500" size={32} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Upload Form */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-xl sm:text-2xl text-center font-bold text-white mb-12 sm:mb-16 md:mb-24">Upload Photo</h2>

                        <div className="space-y-4">
                            {/* Upload Photo */}
                            <label className="flex items-center justify-between px-6 py-4 bg-gray-700 bg-opacity-50 rounded-xl cursor-pointer hover:bg-opacity-70 transition-colors">
                                <span className="text-white">Upload Photo</span>
                                <FaUpload className="text-amber-500" />
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => onFileUpload('selfie', e.target.files[0])}
                                    accept="image/*"
                                />
                            </label>
                        </div>

                        {/* Next Button */}
                        <div className="flex justify-center mt-12 sm:mt-16 md:mt-24">
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

export default KycUploadPhotoStep;

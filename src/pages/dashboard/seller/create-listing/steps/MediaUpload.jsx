import { useState } from 'react';
import { FaImage, FaVideo, FaPalette, FaEdit } from 'react-icons/fa';

const MediaUpload = ({ onContinue, onBack, formData, onShowBrochure }) => {
    const [photos, setPhotos] = useState([]);
    const [videos, setVideos] = useState([]);
    const [aiDescription, setAiDescription] = useState(
        'This elegant 3-bedroom residence in Sandton blends modern living with convenience. Featuring open-plan design, high-end finishes, and proximity to schools, shopping centers, and parks, it offers the perfect balance of comfort and sophistication for today\'s families.'
    );

    const handlePhotoUpload = (files) => {
        setPhotos([...photos, ...Array.from(files)]);
    };

    const handleVideoUpload = (files) => {
        setVideos([...videos, ...Array.from(files)]);
    };

    const handleRegenerateDescription = () => {
        // Simulate AI regeneration
        setAiDescription('An exceptional 3-bedroom home in the heart of Sandton, perfectly designed for contemporary family living. This stunning property showcases premium finishes, smart home features, and easy access to top-rated schools, premier shopping destinations, and beautiful parks.');
    };

    const handleContinue = () => {
        onContinue({
            photos,
            videos,
            aiDescription
        });
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="bg-gray-600/50 backdrop-blur-lg rounded-2xl p-8 space-y-8">
                <div>
                    <h2 className="text-white text-2xl font-semibold mb-2">Media Upload & AI highlight</h2>
                    <p className="text-gray-400 text-sm">
                        Utilizes a clear, factor-driven pricing model to determine the final listing price of your property.
                    </p>
                </div>

                {/* Upload Sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Photo Upload */}
                    <div>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={(e) => handlePhotoUpload(e.target.files)}
                            className="hidden"
                            id="photo-upload"
                        />
                        <label
                            htmlFor="photo-upload"
                            className="block border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-amber-500 transition-colors cursor-pointer h-full"
                        >
                            <FaImage className="text-amber-500 mx-auto mb-3" size={40} />
                            <p className="text-white text-sm mb-1">Drag & Drop or</p>
                            <p className="text-amber-500 text-sm font-medium">Upload Photo</p>
                        </label>
                    </div>

                    {/* Video Upload */}
                    <div>
                        <input
                            type="file"
                            multiple
                            accept="video/*"
                            onChange={(e) => handleVideoUpload(e.target.files)}
                            className="hidden"
                            id="video-upload"
                        />
                        <label
                            htmlFor="video-upload"
                            className="block border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-amber-500 transition-colors cursor-pointer h-full"
                        >
                            <FaVideo className="text-amber-500 mx-auto mb-3" size={40} />
                            <p className="text-white text-sm mb-1">Drag or</p>
                            <p className="text-amber-500 text-sm font-medium">Upload a Video</p>
                        </label>
                    </div>

                    {/* AI Highlight */}
                    <div className="border-2 border-gray-600 rounded-xl p-8 text-center relative">
                        <div className="absolute top-2 right-2">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                        </div>
                        <FaPalette className="text-amber-500 mx-auto mb-3" size={40} />
                        <p className="text-white text-sm mb-1">Generate</p>
                        <p className="text-amber-500 text-sm font-medium">AI highlight reel</p>
                    </div>
                </div>

                {/* AI Description Generation */}
                <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-white text-xl font-semibold mb-2">AI description generation</h3>
                    <p className="text-gray-400 text-sm mb-6">
                        Your property description is automatically generated using verified data and your inputs. You can edit or regenerate it before approval.
                    </p>

                    <div className="bg-gray-700/30 rounded-xl p-6">
                        <div className="flex items-center justify-center mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">AI</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">AI Listing Assistant</h4>
                                    <p className="text-gray-400 text-xs">Suggested Description Based on Lightstone and Your Input Data.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-lg p-2 mb-4 relative">
                            <button className="absolute top-4 right-4 text-amber-500 hover:text-amber-400 text-sm font-medium flex items-center gap-2">
                                <FaEdit size={14} />
                                <span>Edit</span>
                            </button>
                            <p className="text-gray-300 p-6 lg:p-12 lg:pr-24 text-sm leading-relaxed">{aiDescription}</p>
                            <button
                                onClick={handleRegenerateDescription}
                                className="pl-6 pb-3 text-amber-500 hover:text-amber-400 text-sm font-medium"
                            >
                                ✨ Regenerate with AI
                            </button>
                        </div>


                    </div>
                </div>

                {/* Create Brochure Section */}
                <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl p-6 items-center justify-between">
                    <div className="flex">
                        <div className="flex-1">
                            <h3 className="text-black text-xl font-bold mb-2">Create Brochure</h3>
                            <p className="text-black/80 text-sm">
                                Generate a ready-to-share property brochure with images, pricing, and key highlights — optimized for other platforms.
                            </p>
                        </div>
                        <div className="ml-6">
                            <img
                                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=200"
                                alt="House"
                                className="w-32 h-32 rounded-lg object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={onShowBrochure}
                            className="px-10 py-3  text-black border-2 border-black font-semibold rounded-full hover:bg-gray-600 transition-colors"
                        >
                            Generate
                        </button>
                    </div>
                </div>



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

export default MediaUpload;

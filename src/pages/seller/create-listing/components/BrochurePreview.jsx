import { FaTimes, FaDownload, FaImage } from 'react-icons/fa';

const BrochurePreview = ({ isOpen, onClose }) => {
    const socialTemplates = [
        { name: 'Facebook Post', size: '(1080×1080)', icon: 'facebook' },
        { name: 'Instagram Story', size: '(1080×1920)', icon: 'instagram' },
        { name: 'LinkedIn Banner', size: '(1200×628)', icon: 'linkedin' }
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-gray-800/95 backdrop-blur-xl rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                    <h2 className="text-white text-2xl font-semibold">Auto Generated Brochure Design</h2>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors">
                            <FaDownload size={16} />
                            <span className="text-sm font-medium">Download</span>
                        </button>
                        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                            <FaTimes size={20} />
                        </button>
                    </div>
                </div>

                {/* Brochure Preview */}
                <div className="p-8">
                    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-2xl max-w-lg mx-auto">
                        {/* Header */}
                        <div className="p-8 text-center">
                            <div className="mb-6">
                                <svg className="w-24 h-24 mx-auto text-amber-400" viewBox="0 0 100 100" fill="currentColor">
                                    <path d="M20,40 L50,10 L80,40 L80,80 L20,80 Z M35,50 L65,50 L65,80 L35,80 Z" />
                                </svg>
                            </div>
                            <h1 className="text-white text-4xl font-bold mb-2">Real Estate</h1>
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <span className="text-amber-400 text-lg">PERFECT HOME FOR YOUR FAMILY</span>
                                <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                                    <span className="text-blue-900 text-xs">✓</span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="px-8 pb-6">
                            <p className="text-white text-sm leading-relaxed text-center">
                                Discover the ideal haven for your loved ones! This charming property offers spacious living areas and a beautiful backyard. Create lasting memories in a home.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="px-8 pb-6">
                            <h3 className="text-white font-semibold mb-3 text-center">FEATURES</h3>
                            <div className="text-white text-xs space-y-1 text-center">
                                <p>SMART LIGHTING, ENERGY EFFICIENCY, HOME</p>
                                <p>SECURITY, CLIMATE CONTROL, VOICE</p>
                                <p>ACTIVATION, REMOTE ACCESS</p>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="px-8 pb-8">
                            <div className="text-center">
                                <p className="text-amber-400 text-sm font-semibold mb-2">FIND US:</p>
                                <p className="text-white text-sm">WWW.PROPERLY.COM</p>
                            </div>
                        </div>

                        {/* Property Images */}
                        <div className="px-8 pb-8 grid grid-cols-2 gap-4">
                            <div className="relative rounded-full overflow-hidden aspect-square border-4 border-white/20">
                                <img
                                    src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400"
                                    alt="Property 1"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden aspect-square">
                                <img
                                    src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400"
                                    alt="Property 2"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media Templates */}
                <div className="p-6 border-t border-gray-700">
                    <h3 className="text-white text-lg font-semibold mb-4">Social Media Template</h3>
                    <div className="space-y-3">
                        {socialTemplates.map((template, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                                        <FaImage className="text-amber-500" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">{template.name}</p>
                                        <p className="text-gray-400 text-xs">{template.size}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-4 py-2 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-500 transition-colors">
                                        Preview
                                    </button>
                                    <button className="px-4 py-2 bg-amber-500 text-black text-sm rounded-lg hover:bg-amber-400 transition-colors">
                                        Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrochurePreview;

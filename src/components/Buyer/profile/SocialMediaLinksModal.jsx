import { useState } from 'react';
import { FaTimes, FaLink, FaTrash, FaPlus } from 'react-icons/fa';

const SocialMediaLinksModal = ({ isOpen, onClose, onSave }) => {
    const [links, setLinks] = useState([
        { id: 1, platform: 'Instagram', url: 'https://instagram.com/yourprofile' },
        { id: 2, platform: 'Facebook', url: 'https://facebook.com/yourprofile' },
        { id: 3, platform: 'Twitter', url: 'https://twitter.com/yourprofile' },
        { id: 4, platform: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' }
    ]);

    const handleLinkChange = (id, value) => {
        setLinks(links.map(link =>
            link.id === id ? { ...link, url: value } : link
        ));
    };

    const handleAddLink = () => {
        const newId = Math.max(...links.map(l => l.id), 0) + 1;
        setLinks([...links, { id: newId, platform: 'New Platform', url: '' }]);
    };

    const handleDeleteLink = (id) => {
        setLinks(links.filter(link => link.id !== id));
    };

    const handleSubmit = () => {
        onSave(links);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#4a4a4a] rounded-2xl w-full max-w-md p-8 max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                >
                    <FaTimes size={20} />
                </button>

                {/* Title */}
                <h2 className="text-white text-2xl font-semibold mb-6">
                    Social Media Links
                </h2>

                {/* Links List */}
                <div className="space-y-4 mb-6">
                    {links.map((link) => (
                        <div key={link.id} className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-10 h-10 bg-gray-600/50 rounded-lg flex items-center justify-center">
                                <FaLink className="text-white" size={16} />
                            </div>
                            <input
                                type="url"
                                value={link.url}
                                onChange={(e) => handleLinkChange(link.id, e.target.value)}
                                placeholder={`Enter ${link.platform} URL`}
                                className="flex-1 px-4 py-3 bg-gray-600 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm"
                            />
                            <button
                                onClick={() => handleDeleteLink(link.id)}
                                className="flex-shrink-0 w-10 h-10 bg-red-500/20 hover:bg-red-500/30 rounded-lg flex items-center justify-center transition-colors"
                            >
                                <FaTrash className="text-red-500" size={14} />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Add More Button */}
                <button
                    onClick={handleAddLink}
                    className="w-full py-3 px-4 bg-gray-600 hover:bg-gray-500 text-white rounded-lg flex items-center justify-center gap-2 transition-colors mb-6"
                >
                    <FaPlus size={14} />
                    <span className="font-medium">Add more</span>
                </button>

                {/* Save Button */}
                <button
                    onClick={handleSubmit}
                    className="w-full py-3 px-6 bg-gradient-to-r from-[#FCD66B] to-[#C28B33] text-black font-semibold rounded-full hover:opacity-90 transition-opacity"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default SocialMediaLinksModal;

import { FaFileAlt, FaUpload } from 'react-icons/fa';

const FileUpload = ({ label, onUpload, accept = '*' }) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && onUpload) {
            onUpload(file);
        }
    };

    return (
        <div>
            {label && <label className="block text-gray-300 mb-2 text-sm">{label}</label>}
            <label className="flex items-center justify-between px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg cursor-pointer hover:border-amber-500 transition-colors group">
                <div className="flex items-center gap-3">
                    <FaFileAlt className="text-amber-500" size={20} />
                    <span className="text-gray-400 group-hover:text-white transition-colors">Upload document</span>
                </div>
                <FaUpload className="text-amber-500" size={16} />
                <input
                    type="file"
                    accept={accept}
                    onChange={handleFileChange}
                    className="hidden"
                />
            </label>
        </div>
    );
};

export default FileUpload;

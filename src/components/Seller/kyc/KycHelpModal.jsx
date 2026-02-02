import { FaTimes } from "react-icons/fa";

const KycHelpModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-start justify-end p-8 z-50">
            <div className="bg-gray-800 rounded-2xl p-8 max-w-md shadow-2xl max-h-[85vh] flex flex-col">
                <div className="flex justify-between items-center mb-6 flex-shrink-0">
                    <h3 className="text-xl font-bold text-white">What is KYC Verification?</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>
                <div
                    className="space-y-4 text-gray-300 text-sm overflow-y-auto"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    <style>
                        {`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}
                    </style>
                    <p>
                        KYC Verification stands for "Know Your Customer" verification. It's a process used by digital platforms,
                        banks, and financial or property-related services to confirm the identity of their users and prevent fraud or
                        illegal activity.
                    </p>
                    <p className="font-semibold text-white">
                        In your property app's context (Properly Real Estate), KYC verification ensures that:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>The seller is a real person, not a fake or duplicate account.</li>
                        <li>The identity document matches the person uploading it (via selfie verification).</li>
                        <li>The address is valid and recent, proving legal residence.</li>
                        <li>The property being listed truly belongs to the verified person (ownership validation via Lightstone data).</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default KycHelpModal;

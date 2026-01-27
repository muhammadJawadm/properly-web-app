import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import BuyerSidebar, { subscribeSidebarState } from '../../../../components/Buyer/BuyerSidebar';
import Header from '../../../../components/common/Header';
import InquiryCard from '../../../../components/Buyer/InquiryCard';
import ChatPanel from '../../../../components/Buyer/ChatPanel';
import NotificationPanel from '../../../../components/common/NotificationPanel';
import { useSidebarMargin } from '../../../../hooks/useResponsive';

const MyInquiries = () => {
    const navigate = useNavigate();
    const { inquiryId } = useParams();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const sidebarMargin = useSidebarMargin(sidebarCollapsed);
    const [selectedInquiry, setSelectedInquiry] = useState(null);
    const [messages, setMessages] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        const unsubscribe = subscribeSidebarState((collapsed) => {
            setSidebarCollapsed(collapsed);
        });
        return unsubscribe;
    }, []);

    // Mock inquiries data
    const inquiries = [
        {
            id: 1,
            propertyTitle: '3 bedroom Apartment',
            type: 'sent',
            contactName: 'Daniel Mthembu',
            timestamp: 'Just Now',
            property: {
                image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
                title: '3 bedroom family home in Sandton',
                price: 2500000,
                beds: 3,
                bathrooms: 5,
                garages: 2,
                size: 500
            },
            messagePreview: "I'm really intrigued by this property. It seems like it could be a great fit!",
            badges: {
                verifiedContact: true,
                identityCard: true
            },
            user: {
                initials: 'JD',
                name: 'You.',
                timestamp: '10:45AM',
                date: '12 November 2025',
                inquiryNumber: 'ENQ-2801-1466'
            },
            documentUpload: {
                label: 'Proof of funds/Pre-Approval',
                buttonText: 'Upload'
            },
            messages: [
                {
                    type: 'user',
                    text: 'Hi, is the property still available?'
                },
                {
                    type: 'seller',
                    text: 'Yes, the property is still available. Please upload all the required documents so that I can schedule viewing.'
                }
            ],
            actionButton: {
                label: 'Agree to Proceed',
                action: 'proceed'
            }
        },
        {
            id: 1,
            propertyTitle: '3 bedroom Apartment',
            type: 'sent',
            contactName: 'Daniel Mthembu',
            timestamp: 'Just Now',
            property: {
                image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
                title: '3 bedroom family home in Sandton',
                price: 2500000,
                beds: 3,
                bathrooms: 5,
                garages: 2,
                size: 500
            },
            messagePreview: "I'm really intrigued by this property. It seems like it could be a great fit!",
            badges: {
                verifiedContact: true,
                identityCard: true
            },
            user: {
                initials: 'JD',
                name: 'You.',
                timestamp: '10:45AM',
                date: '12 November 2025',
                inquiryNumber: 'ENQ-2801-1466'
            },
            documentUpload: {
                label: 'Proof of funds/Pre-Approval',
                buttonText: 'Upload'
            },
            messages: [
                {
                    type: 'user',
                    text: 'Hi, is the property still available?'
                },
                {
                    type: 'seller',
                    text: 'Yes, the property is still available. Please upload all the required documents so that I can schedule viewing.'
                }
            ],
            actionButton: {
                label: 'Agree to Proceed',
                action: 'proceed'
            }
        },
        {
            id: 1,
            propertyTitle: '3 bedroom Apartment',
            type: 'sent',
            contactName: 'Daniel Mthembu',
            timestamp: 'Just Now',
            property: {
                image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
                title: '3 bedroom family home in Sandton',
                price: 2500000,
                beds: 3,
                bathrooms: 5,
                garages: 2,
                size: 500
            },
            messagePreview: "I'm really intrigued by this property. It seems like it could be a great fit!",
            badges: {
                verifiedContact: true,
                identityCard: true
            },
            user: {
                initials: 'JD',
                name: 'You.',
                timestamp: '10:45AM',
                date: '12 November 2025',
                inquiryNumber: 'ENQ-2801-1466'
            },
            documentUpload: {
                label: 'Proof of funds/Pre-Approval',
                buttonText: 'Upload'
            },
            messages: [
                {
                    type: 'user',
                    text: 'Hi, is the property still available?'
                },
                {
                    type: 'seller',
                    text: 'Yes, the property is still available. Please upload all the required documents so that I can schedule viewing.'
                }
            ],
            actionButton: {
                label: 'Agree to Proceed',
                action: 'proceed'
            }
        },

    ];

    useEffect(() => {
        if (inquiries.length > 0) {
            setSelectedInquiry(inquiries[0]);
            setMessages(inquiries[0].messages);
        }
    }, []);

    const handleSendMessage = (message) => {
        const newMessage = {
            type: 'user',
            text: message
        };
        setMessages([...messages, newMessage]);
    };

    const handleInquiryClick = (inquiry) => {
        setSelectedInquiry(inquiry);
        setMessages(inquiry.messages);
    };

    const handleActionButton = () => {
        if (selectedInquiry?.actionButton.action === 'proceed') {
            navigate('/buyer/submit-offer/1');
        } else if (selectedInquiry?.actionButton.action === 'makeOffer') {
            navigate('/buyer/submit-offer/1');
        }
    };

    return (
        <>
            <BuyerSidebar />

            <div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-300"
                style={{ marginLeft: sidebarMargin }}
            >
                <Header
                    title="Inquiries"
                    showNotifications={true}
                    onNotificationClick={() => setShowNotifications(!showNotifications)}
                />

                <div className="p-4 sm:p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-5 gap-6">


                        <div className="xl:col-span-3 bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6">
                            <h2 className="text-white text-xl font-semibold mb-6">My Inquiries</h2>
                            <div className="xl:col-span-2">
                                <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-6">


                                    {inquiries.map((inquiry) => (
                                        <InquiryCard
                                            key={inquiry.id}
                                            inquiry={inquiry}
                                            isSelected={selectedInquiry?.id === inquiry.id}
                                            onClick={() => handleInquiryClick(inquiry)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Panel - Chat */}
                        <div className="xl:col-span-2">
                            <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl overflow-hidden ">
                                {selectedInquiry ? (
                                    <ChatPanel
                                        user={selectedInquiry.user}
                                        messages={messages}
                                        onSendMessage={handleSendMessage}
                                        documentUpload={selectedInquiry.documentUpload}
                                        actionButton={{
                                            label: selectedInquiry.actionButton.label,
                                            onClick: handleActionButton
                                        }}
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <p className="text-gray-500">Select an inquiry to view details</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notifications Panel */}
            <NotificationPanel
                showNotifications={showNotifications}
                onClose={() => setShowNotifications(false)}
            />
        </>
    );
};

export default MyInquiries;

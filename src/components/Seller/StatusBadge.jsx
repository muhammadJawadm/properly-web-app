import React from 'react';

const StatusBadge = ({ status }) => {
    const statusConfig = {
        REJECTED: {
            bg: 'bg-red-100',
            text: 'text-red-600',
            label: 'REJECTED'
        },
        PENDING_AUTOMATION: {
            bg: 'bg-orange-100',
            text: 'text-orange-600',
            label: 'PENDING _ Automation'
        },
        VERIFIED_AUTOMATIC: {
            bg: 'bg-green-100',
            text: 'text-green-600',
            label: 'VERIFIED _ Automatic'
        },
        REVIEW_NEEDED: {
            bg: 'bg-yellow-100',
            text: 'text-yellow-600',
            label: 'REVIEW _ Needed'
        },
        APPROVED_MANUAL: {
            bg: 'bg-blue-100',
            text: 'text-blue-600',
            label: 'APPROVED _ Manual'
        }
    };

    const config = statusConfig[status] || statusConfig.REVIEW_NEEDED;

    return (
        <span className={`${config.bg} ${config.text} px-4 py-2 rounded-lg text-sm font-semibold inline-block`}>
            {config.label}
        </span>
    );
};

export default StatusBadge;

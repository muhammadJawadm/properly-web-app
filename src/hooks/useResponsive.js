import { useState, useEffect } from 'react';

/**
 * Custom hook to track window width changes
 * This ensures the layout responds dynamically to window resize events
 * @returns {number} Current window width
 */
export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
};

/**
 * Custom hook to calculate the sidebar margin based on window width and sidebar state
 * @param {boolean} sidebarCollapsed - Whether the sidebar is collapsed
 * @returns {string} Margin left value for main content
 */
export const useSidebarMargin = (sidebarCollapsed) => {
    const windowWidth = useWindowWidth();

    if (windowWidth >= 1024) {
        return sidebarCollapsed ? '6rem' : '16rem';
    }
    return '0rem';
};

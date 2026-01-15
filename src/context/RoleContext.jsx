import { createContext, useContext, useState, useEffect } from 'react';

// Create the Role Context
const RoleContext = createContext();

// Role Provider Component
export const RoleProvider = ({ children }) => {
    // Initialize role from localStorage or default to null
    const [role, setRole] = useState(() => {
        const savedRole = localStorage.getItem('userRole');
        return savedRole || null;
    });

    // Save role to localStorage whenever it changes
    useEffect(() => {
        if (role) {
            localStorage.setItem('userRole', role);
        } else {
            localStorage.removeItem('userRole');
        }
    }, [role]);

    // Function to set the user role
    const selectRole = (selectedRole) => {
        setRole(selectedRole);
    };

    // Function to clear the role (e.g., on logout)
    const clearRole = () => {
        setRole(null);
        localStorage.removeItem('userRole');
    };

    // Context value
    const value = {
        role,
        selectRole,
        clearRole,
        isSeller: role === 'seller',
        isBuyer: role === 'buyer',
        isAttorney: role === 'attorney',
    };

    return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
};

// Custom hook to use the Role Context
export const useRole = () => {
    const context = useContext(RoleContext);
    if (!context) {
        throw new Error('useRole must be used within a RoleProvider');
    }
    return context;
};

export default RoleContext;

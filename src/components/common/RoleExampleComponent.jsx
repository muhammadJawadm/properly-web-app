import { useRole } from '../context/RoleContext';
import { useNavigate } from 'react-router-dom';

/**
 * Example component demonstrating how to use the Role Context
 * You can use this pattern in any of your components!
 */
const RoleExampleComponent = () => {
    const { role, isSeller, isBuyer, isAttorney, selectRole, clearRole } = useRole();
    const navigate = useNavigate();

    // Example 1: Conditional rendering based on role
    const renderWelcomeMessage = () => {
        if (isSeller) {
            return <h2>Welcome, Seller! Ready to list properties?</h2>;
        } else if (isBuyer) {
            return <h2>Welcome, Buyer! Let's find your dream property!</h2>;
        } else if (isAttorney) {
            return <h2>Welcome, Attorney! Your cases await.</h2>;
        }
        return <h2>Please select your role to continue</h2>;
    };

    // Example 2: Navigate based on role
    const goToDashboard = () => {
        if (isSeller) {
            navigate('/seller/dashboard');
        } else if (isBuyer) {
            navigate('/buyer/dashboard');
        } else if (isAttorney) {
            navigate('/attorney/dashboard');
        } else {
            navigate('/user');
        }
    };

    // Example 3: Change role programmatically
    const handleChangeRole = (newRole) => {
        selectRole(newRole);
        alert(`Role changed to: ${newRole}`);
    };

    // Example 4: Logout / Clear role
    const handleLogout = () => {
        clearRole();
        navigate('/');
    };

    return (
        <div className="p-8">
            {/* Display current role */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4">Role Context Example</h1>
                <p className="text-gray-600">
                    Current Role: <span className="font-semibold">{role || 'Not selected'}</span>
                </p>
            </div>

            {/* Welcome message based on role */}
            <div className="mb-6">
                {renderWelcomeMessage()}
            </div>

            {/* Role-specific content */}
            <div className="mb-6">
                {isSeller && (
                    <div className="p-4 bg-blue-100 rounded">
                        <p>Seller-specific content goes here</p>
                        <button onClick={() => navigate('/seller/listings')}>
                            View My Listings
                        </button>
                    </div>
                )}

                {isBuyer && (
                    <div className="p-4 bg-yellow-100 rounded">
                        <p>Buyer-specific content goes here</p>
                        <button onClick={() => navigate('/buyer/browse')}>
                            Browse Properties
                        </button>
                    </div>
                )}

                {isAttorney && (
                    <div className="p-4 bg-gray-100 rounded">
                        <p>Attorney-specific content goes here</p>
                        <button onClick={() => navigate('/attorney/dashboard')}>
                            View Dashboard
                        </button>
                    </div>
                )}
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 flex-wrap">
                <button
                    onClick={goToDashboard}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Go to My Dashboard
                </button>

                <button
                    onClick={() => handleChangeRole('seller')}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                    Switch to Seller
                </button>

                <button
                    onClick={() => handleChangeRole('buyer')}
                    className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                >
                    Switch to Buyer
                </button>

                <button
                    onClick={() => handleChangeRole('attorney')}
                    className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
                >
                    Switch to Attorney
                </button>

                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                    Logout (Clear Role)
                </button>
            </div>

            {/* Debug info */}
            <div className="mt-8 p-4 bg-gray-100 rounded">
                <h3 className="font-bold mb-2">Debug Info:</h3>
                <pre className="text-sm">
                    {JSON.stringify(
                        {
                            role,
                            isSeller,
                            isBuyer,
                            isAttorney,
                        },
                        null,
                        2
                    )}
                </pre>
            </div>
        </div>
    );
};

export default RoleExampleComponent;

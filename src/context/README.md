# Role Context Usage Guide

## Overview
The Role Context provides a centralized way to manage user role selection throughout the application. When a user selects their role (Buyer, Seller, or Attorney) on the UserScreen, it's saved and can be accessed from any component.

## Features
- ✅ Saves user role selection
- ✅ Persists role in localStorage
- ✅ Provides convenient helper booleans (isSeller, isBuyer, isAttorney)
- ✅ Accessible from any component in the app

## How to Use

### 1. Basic Usage - Get Current Role
```javascript
import { useRole } from '../context/RoleContext';

function MyComponent() {
  const { role } = useRole();
  
  return (
    <div>
      <p>Current role: {role}</p>
    </div>
  );
}
```

### 2. Using Helper Booleans
```javascript
import { useRole } from '../context/RoleContext';

function MyComponent() {
  const { isSeller, isBuyer, isAttorney } = useRole();
  
  return (
    <div>
      {isSeller && <p>Welcome Seller!</p>}
      {isBuyer && <p>Welcome Buyer!</p>}
      {isAttorney && <p>Welcome Attorney!</p>}
    </div>
  );
}
```

### 3. Conditional Rendering Based on Role
```javascript
import { useRole } from '../context/RoleContext';

function Dashboard() {
  const { role } = useRole();
  
  if (role === 'seller') {
    return <SellerDashboard />;
  } else if (role === 'buyer') {
    return <BuyerDashboard />;
  } else if (role === 'attorney') {
    return <AttorneyDashboard />;
  }
  
  return <SelectRolePlease />;
}
```

### 4. Change Role Programmatically
```javascript
import { useRole } from '../context/RoleContext';

function ChangeRoleComponent() {
  const { selectRole } = useRole();
  
  const handleChangeRole = () => {
    selectRole('buyer'); // Changes role to buyer
  };
  
  return (
    <button onClick={handleChangeRole}>
      Switch to Buyer
    </button>
  );
}
```

### 5. Clear Role (Logout)
```javascript
import { useRole } from '../context/RoleContext';

function LogoutButton() {
  const { clearRole } = useRole();
  
  const handleLogout = () => {
    clearRole(); // Removes role from state and localStorage
    // Navigate to login/home screen
  };
  
  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}
```

### 6. Role-Based Navigation
```javascript
import { useRole } from '../context/RoleContext';
import { useNavigate } from 'react-router-dom';

function NavigationComponent() {
  const { role } = useRole();
  const navigate = useNavigate();
  
  const goToDashboard = () => {
    if (role === 'seller') {
      navigate('/seller/dashboard');
    } else if (role === 'buyer') {
      navigate('/buyer/dashboard');
    } else if (role === 'attorney') {
      navigate('/attorney/dashboard');
    }
  };
  
  return (
    <button onClick={goToDashboard}>
      Go to My Dashboard
    </button>
  );
}
```

### 7. Protected Routes Example
```javascript
import { useRole } from '../context/RoleContext';
import { Navigate } from 'react-router-dom';

function SellerOnlyRoute({ children }) {
  const { isSeller } = useRole();
  
  if (!isSeller) {
    return <Navigate to="/user" replace />;
  }
  
  return children;
}

// Usage in App.jsx:
// <Route path="/seller/dashboard" element={
//   <SellerOnlyRoute>
//     <SellerDashboard />
//   </SellerOnlyRoute>
// } />
```

## Available Properties

| Property | Type | Description |
|----------|------|-------------|
| `role` | `string \| null` | Current user role: 'seller', 'buyer', 'attorney', or null |
| `selectRole(role)` | `function` | Set the user role |
| `clearRole()` | `function` | Clear the role (logout) |
| `isSeller` | `boolean` | True if role is 'seller' |
| `isBuyer` | `boolean` | True if role is 'buyer' |
| `isAttorney` | `boolean` | True if role is 'attorney' |

## Notes
- The role is automatically saved to localStorage and persists across page refreshes
- The role is set automatically when users select their role on the UserScreen
- You can access the role from any component using the `useRole()` hook
- Remember to clear the role on logout for security

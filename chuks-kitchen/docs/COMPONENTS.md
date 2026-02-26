# Component Documentation 🧩

This guide details the primary UI components used across Chuks Kitchen.

## 📋 Navigation

### `Navbar.jsx`

The primary navigation header, responsive and context-aware.

- **Features**:
  - Sticky positioning.
  - Responsive mobile menu with hamburger toggle.
  - Displays active cart item count using `useCart`.
  - Dynamic links based on authentication status.

### `Footer.jsx`

Sticky footer providing branding, social links, and organized site navigation.

## 🍱 Interaction Components

### `ProductModal.jsx`

A rich, interactive modal for viewing product details and adding items to the cart.

- **Props**:
  - `isOpen`: Controls visibility.
  - `onClose`: Function to dismissal.
  - `product`: Data object containing name, price, description, and image.
- **Behavior**: Features micro-animations for price updates and quantity selection.

### `ProtectedRoute.jsx`

A higher-order component for route security.

- **Usage**: Wraps any route that requires authentication.
- **Logic**: Reads `localStorage` for `isLoggedIn` status.

## 🧱 Page Components

- **`Welcome.jsx`**: Impression-focused landing page with "Get Started" call to action.
- **`Explore.jsx`**: Main menu browsing interface with category filtering.
- **`MyOrders.jsx`**: Detailed order summary and cart review.
- **`Payment.jsx`**: Secure billing interface with real-time card formatting.

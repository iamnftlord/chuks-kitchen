# System Architecture 🏛️

This document outlines the core architectural patterns and technical decisions made in Chuks Kitchen.

## 🔐 Authentication Flow

The application uses a simulated authentication system based on `localStorage`.

- **Mechanism**: A boolean value `isLoggedIn` and optional user data are stored in the browser's `localStorage`.
- **Validation**: The `ProtectedRoute` component checks for the presence of this value before rendering sensitive pages.
- **Redirection**: Unauthenticated attempts to access protected routes are redirected to `/login`.

```javascript
// src/components/ProtectedRoute.jsx
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};
```

## 🛒 State Management (Cart)

Global application state (shopping cart and toast notifications) is managed using the **React Context API**.

- **Provider**: `CartProvider` (located in `src/context/CartContext.jsx`) wraps the entire application.
- **Hook**: `useCart` provides easy access to cart items, totals, and management functions.
- **Persistence**: The cart state is synchronized with `localStorage` to ensure data persists across sessions.

### Key Context Properties:

- `cart`: Array of items with IDs, names, prices, and quantities.
- `addToCart(item)`: Handles adding or incrementing item quantities.
- `totalPrice`: Computed real-time based on cart contents.

## 🛣️ Routing Structure

Routes are managed using `react-router-dom`. The application differentiates between public and protected routes.

| Level         | Routes                            |
| :------------ | :-------------------------------- |
| **Public**    | `/`, `/login`, `/signup`, `/home` |
| **Protected** | `/explore`, `/orders`, `/payment` |

## 🎨 Styling System

Chuks Kitchen utilizes **Tailwind CSS 4** for a utility-first approach.

- **Theme**: Custom color palettes and animations are defined in the global CSS and Tailwind configuration.
- **Consistency**: Components use standardized spacing and typography tokens to maintain a premium feel.
- **Responsiveness**: The system uses Tailwind's mobile-first breakpoints (`sm`, `md`, `lg`) extensively.

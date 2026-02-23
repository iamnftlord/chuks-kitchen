import { Navigate } from 'react-router-dom';

/**
 * ProtectedRoute — redirects unauthenticated users to /login.
 * Replace the localStorage check with a real auth token/context when
 * a backend is integrated.
 */
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

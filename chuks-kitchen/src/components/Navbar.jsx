import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

/**
 * Shared Navbar component.
 * variant="public"  → shows Sign In button (Home / public pages)
 * variant="auth"    → shows Log Out button (authenticated pages)
 */
const Navbar = ({ variant = 'auth' }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { totalItems } = useCart();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const linkClass = (path) =>
    `hover:text-[#FF7A1B] transition-colors ${
      pathname === path ? 'text-[#FF7A1B]' : 'text-gray-700'
    }`;

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-['Dancing_Script'] font-bold text-[#FF7A1B]">
        Chuks Kitchen
      </Link>

      <nav className="hidden md:flex gap-40 text-sm font-semibold uppercase tracking-wide items-center">
        <Link to="/" className={linkClass('/')}>Home</Link>
        <Link to="/explore" className={linkClass('/explore')}>Explore</Link>
        <button className="text-gray-700 hover:text-[#FF7A1B] transition-colors cursor-pointer flex items-center gap-1.5">
          My Order
          {totalItems > 0 && (
            <span className="bg-[#FF7A1B] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
              {totalItems}
            </span>
          )}
        </button>
        <button className="text-gray-700 hover:text-[#FF7A1B] transition-colors cursor-pointer">Account</button>
      </nav>

      {variant === 'auth' ? (
        <button
          onClick={handleLogout}
          className="bg-[#FF7A1B] text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow-md hover:bg-orange-600 transition-all"
        >
          Log Out
        </button>
      ) : (
        <Link
          to="/login"
          className="px-5 sm:px-8 py-2 bg-[#FF7A1B] text-white rounded-lg font-bold hover:bg-orange-600 transition-all text-xs sm:text-sm shadow-md"
        >
          Login
        </Link>
      )}
    </header>
  );
};

export default Navbar;


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
    `transition-colors font-['Inter'] font-medium ${
      pathname === path ? 'text-[#FF7A1B]' : 'text-gray-900 group-hover:text-[#FF7A1B]'
    }`;

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm px-6 py-6 flex items-center justify-between">
      <Link to="/" className="text-[32px] md:text-[40px] font-['Dancing_Script'] font-bold text-[#FF7A1B]">
        Chuks Kitchen
      </Link>

      <nav className="hidden lg:flex gap-20 text-[18px] items-center">
        <Link to="/" className={linkClass('/')}>Home</Link>
        <Link to="/explore" className={linkClass('/explore')}>Explore</Link>
        <Link to="/orders" className={linkClass('/orders')}>
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className={linkClass('/orders')}>My Orders</span>
            {totalItems > 0 && (
              <span className="bg-[#FF7A1B] text-white text-[12px] font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center">
                {totalItems}
              </span>
            )}
          </div>
        </Link>
        <button className="text-gray-900 hover:text-[#FF7A1B] transition-colors cursor-pointer font-['Inter'] font-medium">Account</button>
      </nav>

      <div className="flex items-center gap-4">
        {variant === 'auth' ? (
          <button
            onClick={handleLogout}
            className="bg-[#FF7A1B] text-white px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:bg-orange-600 transition-all active:scale-[0.98]"
          >
            Login
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-[#FF7A1B] text-white px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:bg-orange-600 transition-all active:scale-[0.98]"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;


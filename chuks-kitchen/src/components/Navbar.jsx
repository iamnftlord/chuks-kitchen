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
    <header className="bg-white sticky top-0 z-50 shadow-sm px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-[28px] md:text-[32px] font-['Dancing_Script'] font-bold text-[#FF7A1B]">
        Chuks Kitchen
      </Link>

      <nav className="hidden lg:flex gap-12 text-[15px] items-center absolute left-1/2 -translate-x-1/2">
        <Link to="/" className={linkClass('/')}>HOME</Link>
        <Link to="/explore" className={linkClass('/explore')}>EXPLORE</Link>
        <Link to="/orders" className={linkClass('/orders')}>
          <div className="flex items-center gap-2 cursor-pointer group uppercase">
            <span className={linkClass('/orders')}>MY ORDERS</span>
            {totalItems > 0 && (
              <span className="bg-[#FF7A1B] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                {totalItems}
              </span>
            )}
          </div>
        </Link>
        <button className="text-gray-900 hover:text-[#FF7A1B] transition-colors cursor-pointer font-['Inter'] font-semibold uppercase tracking-wider">ACCOUNT</button>
      </nav>

      <div className="flex items-center gap-4">
        {variant === 'auth' ? (
          <button
            onClick={handleLogout}
            className="bg-[#FF7A1B] text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow-md hover:bg-orange-600 transition-all active:scale-[0.98]"
          >
            Log out
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-[#FF7A1B] text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow-md hover:bg-orange-600 transition-all active:scale-[0.98]"
          >
            Log in
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;


import { useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const linkClass = (path) =>
    `transition-colors font-['Inter'] font-medium ${
      pathname === path ? 'text-[#FF7A1B]' : 'text-gray-900 lg:group-hover:text-[#FF7A1B]'
    }`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="text-[28px] md:text-[32px] font-['Dancing_Script'] font-bold text-[#FF7A1B]">
          Chuks Kitchen
        </Link>

        {/* Desktop Nav */}
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
          <div className="hidden sm:block">
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

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-gray-600 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <span className="text-2xl font-['Dancing_Script'] font-bold text-[#FF7A1B]">Menu</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-[16px]">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={linkClass('/')}>HOME</Link>
            <Link to="/explore" onClick={() => setIsMenuOpen(false)} className={linkClass('/explore')}>EXPLORE</Link>
            <Link to="/orders" onClick={() => setIsMenuOpen(false)} className={linkClass('/orders')}>
              <div className="flex items-center justify-between group uppercase">
                <span className={linkClass('/orders')}>MY ORDERS</span>
                {totalItems > 0 && (
                  <span className="bg-[#FF7A1B] text-white text-[12px] font-bold px-2 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
            <button className="text-left text-gray-900 font-['Inter'] font-semibold uppercase tracking-wider">ACCOUNT</button>
          </nav>

          <div className="mt-auto pt-8 border-t border-gray-100">
            {variant === 'auth' ? (
              <button
                onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                className="w-full bg-[#FF7A1B] text-white py-4 rounded-xl font-bold text-base shadow-md"
              >
                Log out
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-[#FF7A1B] text-white py-4 rounded-xl font-bold text-base shadow-md"
              >
                Log in
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


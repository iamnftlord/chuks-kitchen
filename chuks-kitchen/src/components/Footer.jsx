import { Link } from 'react-router-dom';

/**
 * Shared Footer component used across all pages.
 */
const Footer = () => {
  return (
    <footer className="bg-[#412B22] text-white py-20 px-6 sm:px-10 lg:px-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        {/* Brand */}
        <div className="space-y-6">
          <h2 className="text-[32px] font-['Dancing_Script'] font-bold text-[#FF9E53]">Chuks Kitchen</h2>
          <p className="text-[14px] text-gray-300 leading-relaxed font-medium">
            Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care. Handcrafting your delicious soup and making your stew tasty and sweet.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-6 lg:pl-10">
          <h3 className="text-[18px] font-['Outfit'] font-bold text-white uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-3 text-[14px] font-medium text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/explore" className="hover:text-white transition-colors">Explore</Link></li>
            <li><button className="hover:text-white transition-colors cursor-pointer">My Order</button></li>
            <li><button className="hover:text-white transition-colors cursor-pointer text-left">Account</button></li>
            <li><button className="hover:text-white transition-colors cursor-pointer">Contact</button></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="text-[18px] font-['Outfit'] font-bold text-white uppercase tracking-wider">Contact Us</h3>
          <ul className="space-y-3 text-[14px] font-medium text-gray-400">
            <li>+234 801 234 5678</li>
            <li>hello@chukskitchen.com</li>
            <li className="leading-snug">123 Taste Blvd, Lagos, Nigeria</li>
          </ul>
        </div>

        {/* Follow */}
        <div className="space-y-6">
          <h3 className="text-[18px] font-['Outfit'] font-bold text-white uppercase tracking-wider">Follow Us</h3>
          <ul className="space-y-3 text-[14px] font-medium text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-[12px] text-gray-500 font-medium tracking-wide">
          © {new Date().getFullYear()} Chuks Kitchen. All rights reserved.
        </p>
        
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-[#0091FF] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 transition-all active:scale-95 z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;

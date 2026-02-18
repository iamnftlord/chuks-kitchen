import { Link } from 'react-router-dom';
import heroImage from '../assets/Rectangle 1.jpg';
import iconFreshlyPrepared from '../assets/Frame 2.svg';
import iconLocalBusiness from '../assets/fork-knife-fill.svg';
import iconDelivery from '../assets/Truck.svg';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Inter']">
      {/* Main Content (Hero Section) */}
      <div className="flex flex-col lg:flex-row grow">
        {/* Mobile/Tablet Hero Image */}
        <div 
          className="lg:hidden w-full h-72 md:h-[450px] bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="w-full h-full bg-black/10"></div>
        </div>

        {/* Left Side (Desktop Hero Image) */}
        <div 
          className="hidden lg:block lg:w-1/2 bg-cover bg-center min-h-screen"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="w-full h-full bg-black/5"></div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col pt-6 px-6 sm:px-10 md:px-16 lg:pt-10 lg:px-14 xl:pt-12 xl:px-24 pb-8 lg:pb-14 xl:pb-20 justify-between">
          {/* Header */}
          <div className="flex justify-between items-center mb-10 md:mb-16 lg:mb-20">
            <h1 className="text-2xl sm:text-3xl font-['Dancing_Script'] font-bold text-[#FF7A1B]">
              Chuks Kitchen
            </h1>
            <Link to="/login" className="px-5 sm:px-8 py-2 border border-[#0091FF] text-[#0091FF] rounded-lg font-semibold hover:bg-blue-50 transition-colors text-xs sm:text-sm">
              Sign In
            </Link>
          </div>

          {/* Hero Text */}
          <div className="grow flex flex-col justify-center max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[45px] font-['Outfit'] font-extrabold text-[#1F2937] mb-4 sm:mb-6 leading-tight text-center lg:text-left">
              Your Authentic Taste of Nigeria
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 sm:mb-10 leading-relaxed font-medium text-center lg:text-left">
              Experience homemade flavors delivered fresh to your desk or home. 
              We bring the rich culinary heritage of Nigeria right to your doorstep.
            </p>

            {/* Features */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-4 sm:gap-x-10 sm:gap-y-6 mb-10 sm:mb-12">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center overflow-hidden">
                  <img src={iconFreshlyPrepared} alt="Freshly Prepared" className="w-full h-full object-cover" />
                </div>
                <span className="font-semibold text-[#1F2937] text-xs sm:text-sm whitespace-nowrap">Freshly Prepared</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#FFF3E5] rounded-lg flex items-center justify-center">
                  <img src={iconLocalBusiness} alt="Support Local Business" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="font-semibold text-[#1F2937] text-xs sm:text-sm whitespace-nowrap">Support Local Business</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#FFF3E5] rounded-lg flex items-center justify-center">
                  <img src={iconDelivery} alt="Fast & Reliable Delivery" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="font-semibold text-[#1F2937] text-xs sm:text-sm whitespace-nowrap">Fast & Reliable Delivery</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 max-w-2xl lg:max-w-sm mx-auto lg:mx-0 w-full lg:w-auto">
              <button className="flex-1 py-4 bg-[#FF7A1B] text-white rounded-lg font-bold text-base hover:bg-orange-600 transition-all active:scale-[0.98] shadow-md shadow-orange-100">
                Start Your Order
              </button>
              <button className="flex-1 py-4 border-2 border-[#0091FF] text-[#0091FF] rounded-lg font-bold text-base hover:bg-blue-50 transition-all active:scale-[0.98]">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Detailed Footer */}
      <footer className="bg-[#5D3A26] text-white py-12 lg:py-16 px-6 sm:px-10 lg:px-20 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-['Dancing_Script'] font-bold text-[#FF9E53]">
              Chuks Kitchen
            </h2>
            <p className="text-sm lg:text-base text-gray-200 leading-relaxed font-medium">
              Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-['Outfit'] font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Explore</a></li>
              <li><a href="#" className="hover:text-white transition-colors">My Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-['Outfit'] font-bold text-white">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>+234 801 234 5678</li>
              <li>hello@chukskitchen.com</li>
              <li className="leading-snug">123 Taste Blvd, Lagos, Nigeria</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] sm:text-xs text-gray-400">© 2024 Chuks Kitchen. All rights reserved.</p>
          
          {/* Scroll to Top Button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 bg-[#0091FF] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 transition-all active:scale-90"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Home;

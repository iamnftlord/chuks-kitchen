import { Link } from 'react-router-dom';
import heroImage from '../assets/Welcome.jpg';
import iconFreshlyPrepared from '../assets/Frame 2.svg';
import iconLocalBusiness from '../assets/fork-knife-fill.svg';
import iconDelivery from '../assets/Truck.svg';

const Welcome = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white font-['Inter']">
      {/* Mobile/Tablet Hero Image */}
      <div 
        className="lg:hidden w-full h-72 md:h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="w-full h-full bg-black/10"></div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 flex flex-col pt-6 px-6 sm:px-10 md:px-16 lg:pt-10 lg:px-14 xl:pt-12 xl:px-24 pb-8 lg:pb-14 xl:pb-20 justify-between min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 md:mb-16 lg:mb-20">
          <h1 className="text-2xl sm:text-3xl font-['Dancing_Script'] font-bold text-[#FF7A1B]">
            Chuks Kitchen
          </h1>
          <Link to="/login" className="px-5 sm:px-8 py-2 border border-[#0091FF] text-[#0091FF] rounded-lg font-semibold hover:bg-blue-50 transition-colors text-xs sm:text-sm">
            Login
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

        {/* Footer */}
        <div className="mt-16 sm:mt-20 text-[10px] sm:text-xs text-gray-500 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
          <p>© 2024 Chuks Kitchen.</p>
          <div className="flex gap-4">
            <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
            <a href="#" className="text-blue-400 hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

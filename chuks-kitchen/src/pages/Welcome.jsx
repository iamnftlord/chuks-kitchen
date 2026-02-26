import { Link } from 'react-router-dom';
import heroImage from '../assets/Rectangle 1.jpg';
import iconFreshlyPrepared from '../assets/Frame 2.svg';
import iconLocalBusiness from '../assets/fork-knife-fill.svg';
import iconDelivery from '../assets/Truck.svg';

const Welcome = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white font-['Inter']">
      {/* Hero Image - Desktop (Left) */}
      <div 
        className="hidden lg:block lg:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="w-full h-full bg-black/5"></div>
      </div>

      {/* Mobile/Tablet Hero Image (Top) */}
      <div 
        className="lg:hidden w-full h-64 md:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="w-full h-full bg-black/10"></div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 md:p-12 lg:p-16 xl:p-24 min-h-[calc(100vh-256px)] lg:min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-['Dancing_Script'] font-bold text-[#D98E5F]">
            Chuks Kitchen
          </h1>
          <Link to="/login" className="px-6 py-2 border border-[#0091FF] text-[#0091FF] rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Sign In
          </Link>
        </div>

        {/* Hero Text Content */}
        <div className="grow flex flex-col justify-center max-w-lg mx-auto lg:mx-0">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-['Outfit'] font-extrabold text-[#1F2937] mb-6 leading-tight text-center lg:text-left">
            Your Authentic Taste of Nigeria
          </h2>
          <p className="text-base text-gray-600 mb-10 leading-relaxed text-center lg:text-left">
            Experience homemade flavors delivered fresh to your desk or home. 
            We bring the rich culinary heritage of Nigeria right to your doorstep.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FFF3E5] rounded-xl flex items-center justify-center shrink-0">
                <img src={iconFreshlyPrepared} alt="Freshly Prepared" className="w-6 h-6" />
              </div>
              <span className="font-semibold text-[#1F2937] text-sm">Freshly Prepared</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FFF3E5] rounded-xl flex items-center justify-center shrink-0">
                <img src={iconLocalBusiness} alt="Support Local Business" className="w-6 h-6" />
              </div>
              <span className="font-semibold text-[#1F2937] text-sm">Support Local Business</span>
            </div>

            <div className="flex items-center gap-4 sm:col-span-2">
              <div className="w-12 h-12 bg-[#FFF3E5] rounded-xl flex items-center justify-center shrink-0">
                <img src={iconDelivery} alt="Fast & Reliable Delivery" className="w-6 h-6" />
              </div>
              <span className="font-semibold text-[#1F2937] text-sm">Fast & Reliable Delivery</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col gap-4 w-full">
            <Link to="/home" className="w-full py-4 bg-[#FF7A1B] text-white rounded-xl font-bold text-base hover:bg-orange-600 transition-all text-center">
              Start Your Order
            </Link>
            <button className="w-full py-4 border-2 border-[#0091FF] text-[#0091FF] rounded-xl font-bold text-base hover:bg-blue-50 transition-all">
              Learn More About Us
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-[13px] text-gray-500 font-medium">
          <p>© 2024 Chuks Kitchen.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-[#0091FF] hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="text-[#0091FF] hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Welcome;

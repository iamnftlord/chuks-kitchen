import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyOrders = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
      <Navbar variant="auth" />

      <main className="flex-1 px-4 sm:px-12 md:px-24 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold text-[#000000] mb-6 font-['Outfit'] tracking-tight">
            Your Cart
          </h1>

          <div className="space-y-3">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.id} className="bg-white rounded-lg border border-gray-100 p-3 md:p-5 flex flex-row items-center gap-4 md:gap-8 transition-all duration-300">
                  {/* Item Image */}
                  <div className="w-20 md:w-36 h-20 md:h-28 shrink-0 rounded-lg overflow-hidden shadow-sm border border-gray-50">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-2xl font-bold text-[#000000] mb-0.5 md:mb-1.5 font-['Outfit'] truncate leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-lg font-medium tracking-tight font-['Inter']">
                      {item.customization ? (
                        `With ${item.customization.protein || 'plantain'}${item.customization.sides?.length > 0 ? `, extra ${item.customization.sides.join(', ')}` : ', extra pepper sauce'}`
                      ) : (
                        'With plantain, extra pepper sauce'
                      )}
                    </p>
                  </div>

                  {/* Quantity Controls, Price & Remove Button */}
                  <div className="flex items-center gap-4 md:gap-14">
                    {/* Quantity Section */}
                    <div className="flex items-center gap-3 md:gap-8">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 md:w-8 md:h-8 rounded md:rounded-md bg-[#DEE2E6] flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-colors"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                      
                      <span className="text-lg md:text-4xl font-bold text-[#000000] min-w-[1rem] md:min-w-[1.5rem] text-center tabular-nums font-['Outfit']">
                        {item.quantity}
                      </span>

                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-6 h-6 md:w-8 md:h-8 rounded md:rounded-md bg-[#DEE2E6] flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-colors"
                      >
                        <svg width="12" height="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                    </div>

                    {/* Price Section */}
                    <div className="min-w-[70px] md:min-w-[140px] text-right">
                      <span className="text-sm md:text-3xl font-bold text-[#FF7A1B] font-['Outfit']">
                        {item.price}
                      </span>
                    </div>

                    {/* Remove Icon */}
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="bg-[#FF8A3D] text-white w-5 h-5 md:w-7 md:h-7 rounded flex items-center justify-center hover:bg-orange-600 transition-all shadow-sm active:scale-90"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
                <p className="text-xl font-bold text-gray-400 mb-6 font-['Outfit']">Your cart is currently empty</p>
                <Link 
                  to="/explore" 
                  className="inline-block bg-[#FF7A1B] text-white px-8 py-3 rounded-xl font-bold text-base hover:bg-orange-600 transition-all shadow-lg"
                >
                  Explore Menu
                </Link>
              </div>
            )}

            {cart.length > 0 && (
              <div className="pt-4">
                <Link 
                  to="/explore" 
                  className="text-[#00B4D8] font-bold flex items-center gap-1.5 hover:underline text-base md:text-lg group"
                >
                  <span className="text-xl font-bold transform group-hover:scale-110 transition-transform">+</span>
                  Add more items from Chuks Kitchen
                </Link>
              </div>
            )}
          </div>

          <div className="mt-12 md:mt-20 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Delivery Details Section */}
            <div className="flex-1 w-full bg-white rounded-[24px] border border-gray-100 p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000000] mb-8 font-['Outfit'] tracking-tight">
                Delivery Details
              </h2>

              <div className="space-y-8">
                {/* Address Box */}
                <div className="p-6 rounded-xl border border-gray-100 flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="space-y-1">
                    <p className="text-[#000000] font-bold font-['Inter']">Home: 123 Main Street, Victoria Island, Lagos</p>
                    <p className="text-gray-500 text-sm font-medium font-['Inter']">Apt 4B, Opposite Mega Plaza</p>
                  </div>
                  <button className="text-[#00B4D8] font-bold text-sm hover:underline shrink-0">
                    Change Address
                  </button>
                </div>

                {/* Delivery Time */}
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-[#000000] font-['Outfit']">Delivery Time</h3>
                  <div className="p-4 rounded-lg border border-gray-200 text-gray-500 font-medium font-['Inter']">
                    ASAP(30-25)
                  </div>
                </div>

                {/* Delivery Instructions */}
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-[#000000] font-['Outfit']">Delivery Instructions (Optional)</h3>
                  <textarea 
                    className="w-full p-4 border border-gray-200 rounded-lg min-h-[100px] focus:outline-none focus:border-[#FF7A1B] text-gray-600 font-['Inter'] leading-relaxed"
                    placeholder="E.g leave at the front of the door, knock twice................"
                  />
                </div>

                {/* Contact Address */}
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-[#000000] font-['Outfit']">Contact Address</h3>
                  <div className="p-4 rounded-lg border border-gray-200 text-gray-500 font-medium font-['Inter']">
                    +234 801 234 5678
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="w-full lg:w-[450px] bg-white rounded-[24px] border border-gray-100 p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000000] mb-8 font-['Outfit'] tracking-tight">
                Order Summary
              </h2>
            
            <div className="space-y-8">
              {/* Promo Code */}
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-[#000000] font-['Outfit']">Add a Promo Code</h3>
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    placeholder="Enter Code here"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF7A1B] text-gray-600 font-['Inter']"
                  />
                  <button className="bg-[#FF7A1B] text-white px-10 py-3 rounded-lg font-bold hover:bg-orange-600 transition-all active:scale-95 shadow-md">
                    Login
                  </button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4 pt-4 border-t border-gray-50">
                <div className="flex justify-between items-center text-gray-500 font-medium font-['Inter']">
                  <span>Subtotal</span>
                  <span className="text-[#000000] font-bold">₦{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-gray-500 font-medium font-['Inter']">
                  <span>Delivery Fee</span>
                  <span className="text-[#000000] font-bold">₦500</span>
                </div>
                <div className="flex justify-between items-center text-gray-500 font-medium font-['Inter']">
                  <span>Service Fee</span>
                  <span className="text-[#000000] font-bold">₦200</span>
                </div>
                <div className="flex justify-between items-center text-gray-500 font-medium font-['Inter']">
                  <span>Tax</span>
                  <span className="text-[#000000] font-bold uppercase">No</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                <span className="text-2xl md:text-3xl font-bold text-[#000000] font-['Outfit']">Total</span>
                <span className="text-2xl md:text-3xl font-bold text-[#000000] font-['Outfit']">₦{(totalPrice + 700).toLocaleString()}</span>
              </div>

              {/* Delivery / Pick up Toggle */}
              <div className="p-1 bg-[#CED4DA] rounded-lg flex font-['Inter']">
                <button className="flex-1 py-3 px-4 bg-[#FF7A1B] text-white rounded-md font-bold shadow-sm transition-all">
                  Delivery
                </button>
                <button className="flex-1 py-3 px-4 text-[#495057] font-bold hover:bg-gray-200 transition-all rounded-md">
                  Pick up
                </button>
              </div>

              {/* Special Instructions */}
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-[#000000] font-['Outfit']">Special Instructions for Restaurant</h3>
                <textarea 
                  className="w-full p-4 border border-gray-200 rounded-lg min-h-[120px] focus:outline-none focus:border-[#FF7A1B] text-gray-600 font-['Inter'] leading-relaxed"
                  placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhhh&#10;food is tasty"
                />
              </div>

              {/* Proceed to Checkout Button */}
              <button className="w-full bg-[#FF7A1B] text-white py-4 rounded-xl font-bold text-lg md:text-xl shadow-lg shadow-orange-100 hover:bg-orange-600 active:scale-[0.98] transition-all">
                Proceed to Checkout
              </button>
            </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyOrders;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Payment = () => {
  const { totalPrice } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [saveDetails, setSaveDetails] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length > 16) value = value.slice(0, 16); // Limit to 16 digits
    
    // Add spaces every 4 digits
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formattedValue);
    setError(''); // Clear error when typing
  };

  const handlePayment = () => {
    const rawCardNumber = cardNumber.replace(/\s/g, '');
    
    // Validation: 1. Min 15 digits
    if (rawCardNumber.length < 15) {
      setError('Card number must be at least 15 digits');
      return;
    }

    // Validation: 2. MasterCard format (Starts with 51-55 or 2221-2720)
    const isMasterCard = /^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)/.test(rawCardNumber);
    if (!isMasterCard) {
      setError('Please enter a valid MasterCard number');
      return;
    }

    setIsLoading(true);
    
    // Simulate payment processing for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
      setIsOrderCompleted(true);
      setCardNumber('');
      setExpiry('');
      setCvv('');
      setPaymentMethod('card');
      setSaveDetails(false);
      setError('');
    }, 2000);
  };

  if (isOrderCompleted) {
    return (
      <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
        <Navbar variant="auth" />
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20 text-center">
          <div className="w-full max-w-2xl flex flex-col items-center">
            {/* Success Icon */}
            <div className="w-24 h-24 md:w-32 md:h-32 bg-[#1A7B4A] rounded-full flex items-center justify-center mb-8 shadow-sm">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            {/* Success Messages */}
            <h1 className="text-2xl md:text-3xl font-bold text-[#000000] mb-2 font-['Outfit']">
              Order Placed Successfully!
            </h1>
            <p className="text-gray-500 text-lg md:text-xl font-medium mb-12 font-['Inter']">
              Your delicious Chuks Kitchen meal is on its way!
            </p>

            {/* Order Confirmation Box */}
            <div className="bg-[#FFFFFF] rounded-2xl p-4 md:p-1 w-full max-w-sm mb-8">
              <div className="p-4 md:p-8">
                 <div className="flex justify-center mb-10">
                    <div className="w-4 h-4 bg-[#D1FAE5] rounded-full"></div>
                 </div>
              </div>
            </div>

            <div className="w-full max-w-md space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000000] font-['Outfit'] mb-4">
                Order #123RGR231567Y Confirmed
              </h2>
              
              <button 
                onClick={() => navigate('/orders')}
                className="w-full bg-[#FF7A1B] text-white py-4 rounded-xl font-bold text-lg md:text-xl shadow-lg shadow-orange-100 hover:bg-orange-600 active:scale-[0.98] transition-all"
              >
                Track Order
              </button>

              <div className="space-y-4 pt-4">
                <button className="text-gray-400 font-bold text-lg md:text-xl block w-full hover:text-gray-600 transition-colors">
                  Generate Receipt
                </button>
                <button className="text-[#00B4D8] font-bold text-lg md:text-xl block w-full hover:underline transition-all">
                  Need help with your order?
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
        <Navbar variant="auth" />
        <main className="flex-1 flex items-center justify-center">
          <div className="relative w-16 h-16">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-4 bg-gray-200 rounded-full left-1/2 top-0 origin-[0_32px]"
                style={{
                  transform: `rotate(${i * 30}deg)`,
                  backgroundColor: i === 0 || i === 1 ? '#FF7A1B' : '#E5E7EB',
                  animation: `spinner-fade 1.2s linear infinite ${i * 0.1}s`
                }}
              />
            ))}
          </div>
          <style>{`
            @keyframes spinner-fade {
              0% { opacity: 1; }
              100% { opacity: 0.1; }
            }
          `}</style>
        </main>
        <Footer />
      </div>
    );
  }

  // For simplicity, we just use 700 as fees (500 delivery + 200 service) 
  // as seen in MyOrders.jsx
  const finalTotal = totalPrice + 700;

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
      <Navbar variant="auth" />

      <main className="flex-1 flex items-center justify-center px-4 py-12 md:py-20">
        <div className="w-full max-w-[650px] bg-white rounded-[24px] border border-gray-100 p-8 md:p-14 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-[#000000] mb-8 font-['Outfit'] tracking-tight">
            Payment
          </h1>

          <div className="border-t border-gray-100 pt-8 space-y-8">
            {/* Pay With Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#000000] font-['Outfit']">Pay With:</h3>
              <div className="flex flex-wrap gap-8 md:gap-14">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-[#26B36E] transition-all"
                    />
                    <div className="absolute w-2.5 h-2.5 bg-[#26B36E] rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
                  </div>
                  <span className={`text-lg font-bold font-['Inter'] ${paymentMethod === 'card' ? 'text-black' : 'text-gray-400'}`}>Card</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-[#26B36E] transition-all"
                    />
                    <div className="absolute w-2.5 h-2.5 bg-[#26B36E] rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
                  </div>
                  <span className={`text-lg font-bold font-['Inter'] ${paymentMethod === 'bank' ? 'text-black' : 'text-gray-400'}`}>Bank</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="transfer"
                      checked={paymentMethod === 'transfer'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-[#26B36E] transition-all"
                    />
                    <div className="absolute w-2.5 h-2.5 bg-[#26B36E] rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
                  </div>
                  <span className={`text-lg font-bold font-['Inter'] ${paymentMethod === 'transfer' ? 'text-black' : 'text-gray-400'}`}>Transfer</span>
                </label>
              </div>
            </div>

            {/* Card Form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-lg font-bold text-[#000000] font-['Outfit']">Card Number</label>
                <input 
                  type="text" 
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="1234 5678 9101 1121"
                  className={`w-full p-4 border rounded-lg focus:outline-none focus:border-[#FF7A1B] text-gray-500 font-['Inter'] text-lg ${error ? 'border-red-500' : 'border-gray-200'}`}
                />
                {error && <p className="text-red-500 text-sm font-medium mt-1 font-['Inter']">{error}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="space-y-2">
                  <label className="text-lg font-bold text-[#000000] font-['Outfit']">Expiration Date</label>
                  <input 
                    type="text" 
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder="MM/YY"
                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF7A1B] text-gray-500 font-['Inter'] text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-lg font-bold text-[#000000] font-['Outfit']">CVV</label>
                  <input 
                    type="text" 
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF7A1B] text-gray-500 font-['Inter'] text-lg"
                  />
                </div>
              </div>

              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={saveDetails}
                  onChange={() => setSaveDetails(!saveDetails)}
                  className="w-5 h-5 border-2 border-gray-300 rounded accent-[#FF7A1B]"
                />
                <span className="text-gray-400 font-medium font-['Inter']">Save card details</span>
              </label>
            </div>

            {/* Button & Disclaimer */}
            <div className="space-y-6 pt-4">
              <button 
                onClick={handlePayment}
                className="w-full bg-[#FF7A1B] text-white py-4 md:py-6 rounded-xl md:rounded-2xl font-bold text-xl md:text-2xl shadow-lg shadow-orange-100 hover:bg-orange-600 active:scale-[0.98] transition-all"
              >
                Pay ₦{finalTotal.toLocaleString()}
              </button>
              
              <p className="text-gray-400 text-sm md:text-base font-medium font-['Inter'] leading-relaxed text-center md:text-left">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;

import { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductModal = ({ item, onClose }) => {
  const { addToCart } = useCart();
  const [selectedProtein, setSelectedProtein] = useState('Fried Chicken');
  const [selectedSides, setSelectedSides] = useState([]);
  const [instructions, setInstructions] = useState('');

  if (!item) return null;

  const proteinOptions = [
    { name: 'Fried Chicken', price: 0, suffix: '(Default)' },
    { name: 'Grilled Fish', price: 500, suffix: '+₦500' },
    { name: 'Beef', price: 700, suffix: '+₦700' },
  ];

  const sideOptions = [
    { name: 'Fried Plantain', price: 700, suffix: '+₦700' },
    { name: 'Coleslaw', price: 500, suffix: '+₦500' },
    { name: 'Extra Pepper Sauce', price: 300, suffix: '+₦300' },
  ];

  const toggleSide = (sideName) => {
    setSelectedSides((prev) =>
      prev.includes(sideName)
        ? prev.filter((s) => s !== sideName)
        : [...prev, sideName]
    );
  };

  const handleAddToCart = () => {
    const customizedItem = {
      ...item,
      customization: {
        protein: selectedProtein,
        sides: selectedSides,
        instructions,
      },
    };
    addToCart(customizedItem);
    onClose();
  };

  // Timer icon from screenshot (Circle with clock hand)
  const BadgeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-orange-400">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7V12L15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-6xl rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh]">
        
        {/* Close Button - positioned at top right of the scrollable content area */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 bg-black text-white w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Left Side: Image */}
        <div className="w-full md:w-[45%] lg:w-[48%] h-72 md:h-auto overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Options */}
        <div className="w-full md:w-[55%] lg:w-[52%] p-8 md:p-14 overflow-y-auto custom-scrollbar">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] mb-3 font-['Outfit'] tracking-tight">
              {item.name}
            </h2>
            <p className="text-[#FF7A1B] text-2xl lg:text-3xl font-bold mb-6">
              {item.price}
            </p>
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-8">
              {item.description || "Our signature jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken. A classic Nigerian comfort food, rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner."}
            </p>

            {/* Badges */}
            <div className="flex items-center gap-6 mb-10 text-[13px] font-semibold text-gray-500 font-['Inter']">
              <div className="flex items-center gap-2.5 whitespace-nowrap">
                <BadgeIcon />
                Mildly spicy
              </div>
              <div className="flex items-center gap-2.5 whitespace-nowrap">
                <BadgeIcon />
                Vegetarian option available
              </div>
              <div className="flex items-center gap-2.5 whitespace-nowrap">
                <BadgeIcon />
                <span className="text-[#0091FF] underline decoration-[#0091FF] underline-offset-4 cursor-pointer hover:text-blue-600 transition-colors">View Allergies</span>
              </div>
            </div>

            <div className="space-y-10">
              {/* Protein Selection */}
              <div>
                <h3 className="text-2xl font-bold text-[#1F2937] mb-5 font-['Outfit']">Choose Your Protein</h3>
                <div className="space-y-3.5">
                  {proteinOptions.map((opt) => (
                    <label 
                      key={opt.name} 
                      className={`flex items-center justify-between p-5 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${
                        selectedProtein === opt.name 
                          ? 'border-[#FF7A1B] bg-orange-50/20' 
                          : 'border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedProtein === opt.name ? 'border-[#FF7A1B]' : 'border-gray-300'
                        }`}>
                          {selectedProtein === opt.name && <div className="w-4 h-4 bg-[#FF7A1B] rounded-full" />}
                        </div>
                        <span className="font-bold text-lg text-[#1F2937]">{opt.name}</span>
                      </div>
                      <span className="font-bold text-gray-800">{opt.suffix}</span>
                      <input 
                        type="radio" 
                        className="hidden" 
                        name="protein" 
                        checked={selectedProtein === opt.name}
                        onChange={() => setSelectedProtein(opt.name)}
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Extra Sides */}
              <div>
                <h3 className="text-2xl font-bold text-[#1F2937] mb-5 font-['Outfit']">Extra Sides (Optional)</h3>
                <div className="space-y-3.5">
                  {sideOptions.map((opt) => (
                    <label 
                      key={opt.name} 
                      className={`flex items-center justify-between p-5 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${
                        selectedSides.includes(opt.name) 
                          ? 'border-[#FF7A1B] bg-orange-50/20' 
                          : 'border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all ${
                          selectedSides.includes(opt.name) ? 'border-[#FF7A1B] bg-white' : 'border-gray-300'
                        }`}>
                          {selectedSides.includes(opt.name) && (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF7A1B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                        <span className="font-bold text-lg text-[#1F2937]">{opt.name}</span>
                      </div>
                      <span className="font-bold text-gray-800">{opt.suffix}</span>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={selectedSides.includes(opt.name)}
                        onChange={() => toggleSide(opt.name)}
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <h3 className="text-2xl font-bold text-[#1F2937] mb-5 font-['Outfit']">Special Instructions</h3>
                <textarea 
                  className="w-full p-6 border-2 border-gray-100 rounded-3xl min-h-[160px] focus:outline-none focus:border-[#FF7A1B] text-base text-gray-600 leading-relaxed font-['Inter'] transition-colors"
                  placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhhh&#10;food is tasty"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                />
              </div>

              {/* Add to Cart Button */}
              <button 
                onClick={handleAddToCart}
                className="w-full bg-[#FF7A1B] text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-orange-100 hover:bg-orange-600 active:scale-[0.98] transition-all mt-6"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

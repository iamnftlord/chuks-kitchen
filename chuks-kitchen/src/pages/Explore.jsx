import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { categories, chefSpecials } from '../data/menuData';
import { useCart } from '../context/CartContext';
import ProductModal from '../components/ProductModal';
import heroImage from '../assets/explorehero.png';

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState('popular');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-10% 0px -80% 0px' }
    );

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.current.observe(el);
    });

    return () => observer.current.disconnect();
  }, []);

  const scrollToCategory = (id) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-['Inter'] selection:bg-orange-100">
      <Navbar variant="auth" />

      {/* Enhanced Hero Section */}
      <section
        className="relative h-[350px] md:h-[480px] bg-cover bg-center flex items-center px-6 sm:px-12 md:px-24"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Outfit'] font-bold mb-3 md:mb-4">
            Chuks Kitchen
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-200">
            Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
          </p>
        </div>
      </section>

      <div className="px-6 sm:px-12 md:px-24 pt-16 pb-20 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          {/* Responsive Category Navigation */}
          <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden mb-12 md:mb-16">
            <div className="p-6 md:p-10">
              <h3 className="text-lg md:text-xl font-bold text-[#1F2937] mb-6 font-['Outfit'] px-4 md:px-6">Menu Categories</h3>
              
              {/* Desktop: Vertical List | Mobile: Horizontal Scroll */}
              <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible no-scrollbar pb-2 md:pb-0 gap-2 md:gap-0">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToCategory(cat.id)}
                    className={`whitespace-nowrap md:whitespace-normal px-6 md:px-12 py-3 md:py-4 transition-all duration-300 rounded-full md:rounded-none border-2 md:border-0 md:border-l-4 ${
                      activeCategory === cat.id
                        ? 'bg-[#FFF3E5] text-[#FF7A1B] border-[#FF7A1B] font-bold'
                        : 'text-gray-700 border-gray-100 md:border-transparent hover:bg-gray-50'
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Menu Content */}
        <div className="relative">
          <main className="w-full">
            {categories.map((category) => {
              const categoryItems = chefSpecials.filter(s => s.category === category.id);
              if (categoryItems.length === 0) return null;

              return (
                <section key={category.id} id={category.id} className="mb-16 md:mb-20 scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-8 md:mb-10 font-['Outfit']">
                    {category.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {categoryItems.map((item) => (
                      <div 
                        key={item.id} 
                        onClick={() => setSelectedProduct(item)}
                        className="group bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-500 cursor-pointer"
                      >
                        <div className="h-60 overflow-hidden relative">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                          />
                        </div>
                        <div className="p-6 flex flex-col grow">
                          <h4 className="text-lg font-bold text-[#1F2937] mb-2 leading-tight font-['Outfit']">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500 mb-8 grow leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between mt-auto">
                            <span className="text-base font-bold text-[#FF7A1B]">
                              {item.price}
                            </span>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProduct(item);
                              }}
                              className="bg-[#FF7A1B] text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 active:scale-90 transition-all"
                              aria-label={`Add ${item.name} to cart`}
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </main>
        </div>
      </div>

      <Footer />

      {selectedProduct && (
        <ProductModal 
          item={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default Explore;



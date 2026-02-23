import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { categories, chefSpecials } from '../data/menuData';
import { useCart } from '../context/CartContext';
import heroImage from '../assets/Welcome.jpg';
import bannerImage from '../assets/IMG_3372.png';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const query = searchQuery.toLowerCase();

  const filteredCategories = query
    ? categories.filter((cat) => cat.title.toLowerCase().includes(query))
    : categories;

  const filteredSpecials = query
    ? chefSpecials.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query)
      )
    : chefSpecials;

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] font-['Inter']">
      <Navbar variant="public" />

      {/* Hero Banner */}
      <section
        className="relative h-[480px] bg-cover bg-center flex items-center px-6 sm:px-12 md:px-24"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Outfit'] font-bold mb-4 leading-tight">
            The Heart of Nigerian Home Cooking
          </h1>
          <p className="text-lg md:text-xl font-medium mb-8 text-gray-100">
            Handcrafted with passion, delivered with care.
          </p>
          <button
            onClick={() => document.getElementById('specials').scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-[#FF7A1B] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 active:scale-95 transition-all shadow-lg shadow-orange-500/30"
          >
            Discover What's new
          </button>
        </div>

        {/* Floating Search Bar */}
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] lg:w-[45%]">
          <div className="relative group">
            <span className="absolute inset-y-0 left-0 pl-6 flex items-center text-gray-400 group-focus-within:text-[#FF7A1B] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What are you craving for today?"
              aria-label="Search food categories and dishes"
              className="w-full bg-white pl-16 pr-8 py-6 rounded-2xl shadow-xl outline-none focus:ring-4 focus:ring-orange-500/10 transition-all font-medium text-gray-800"
            />
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="pt-24 pb-16 px-6 sm:px-12 md:px-24">
        <h2 className="text-3xl font-bold text-center text-[#1F2937] mb-2">Popular Categories</h2>
        {query && filteredCategories.length === 0 && (
          <p className="text-center text-gray-400 mt-4 mb-8">No categories match "{searchQuery}".</p>
        )}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat) => (
            <Link
              to="/login"
              key={cat.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#1F2937] group-hover:text-[#FF7A1B] transition-colors">
                  {cat.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Chef's Specials */}
      <section id="specials" className="bg-white py-20 px-6 sm:px-12 md:px-24">
        <h2 className="text-3xl font-bold text-center text-[#1F2937] mb-2 uppercase tracking-widest font-['Outfit']">
          Chef's Specials
        </h2>
        {query && filteredSpecials.length === 0 && (
          <p className="text-center text-gray-400 mt-4 mb-8">No specials match "{searchQuery}".</p>
        )}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpecials.map((special) => (
            <div
              key={special.id}
              className="bg-[#F8F9FA] rounded-2xl overflow-hidden border border-gray-100 flex flex-col shadow-sm hover:shadow-lg transition-all"
            >
              <div className="h-56 relative">
                <img src={special.image} alt={special.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-lg font-bold text-[#1F2937] mb-2 leading-tight">{special.name}</h3>
                <p className="text-sm text-gray-600 mb-6 font-medium grow leading-relaxed">{special.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200/50">
                  <span className="text-xl font-bold text-[#FF7A1B]">{special.price}</span>
                  <button
                    onClick={() => addToCart(special)}
                    className="bg-[#FF7A1B] text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-md hover:bg-orange-600 transition-all active:scale-95"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Menu Addition Banner */}
      <section
        className="relative py-32 px-6 sm:px-12 md:px-24 bg-cover bg-center flex items-center text-white"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-6">
            Introducing Our New Menu Additions!
          </h2>
          <p className="text-lg md:text-xl font-medium mb-10 text-gray-200 leading-relaxed">
            Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavor. Limited time offer!
          </p>
          <button
            onClick={() => document.getElementById('specials').scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-[#FF7A1B] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg active:scale-95"
          >
            Discover Menu
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

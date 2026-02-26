import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { categories, chefSpecials } from '../data/menuData';
import { useCart } from '../context/CartContext';
import cat1 from '../assets/Property 1=Default.jpg';
import heroImage from '../assets/Rectangle 1.jpg';
import bannerImage from '../assets/IMG_3372.png';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const query = searchQuery.toLowerCase();

  const filteredCategories = query
    ? categories.filter((cat) => cat.title.toLowerCase().includes(query))
    : categories.slice(0, 6); // Mocking 6 items if not enough in data

  const filteredSpecials = query
    ? chefSpecials.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query)
      )
    : chefSpecials.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen bg-white font-['Inter']">
      <Navbar variant="auth" />

      {/* Hero Banner */}
      <section
        className="relative h-[550px] bg-cover bg-center flex flex-col items-center justify-center px-6 text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-['Outfit'] font-bold mb-6 leading-tight">
            The Heart of Nigerian Home Cooking
          </h1>
          <p className="text-lg md:text-xl font-medium mb-10 text-gray-200">
            Handcrafted with passion, delivered with care.
          </p>
          
          <button
            onClick={() => document.getElementById('specials').scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-[#FF7A1B] text-white px-10 py-3 rounded-lg font-bold text-base hover:bg-orange-600 transition-all active:scale-95 mb-12 shadow-md shadow-orange-500/20"
          >
            Discover What's New
          </button>

          {/* Search Bar centered under text */}
          <div className="w-full max-w-xl mx-auto">
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 pl-5 flex items-center text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you craving for today?"
                className="w-full bg-white pl-14 pr-6 py-4 rounded-xl text-gray-800 outline-none shadow-xl font-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-24 px-6 sm:px-12 md:px-24 max-w-7xl mx-auto w-full">
        <h2 className="text-[32px] font-bold text-center text-[#1F2937] mb-12">Popular Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredCategories.map((cat) => (
            <Link
              to="/login"
              key={cat.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="h-[240px] overflow-hidden">
                <img
                  src={cat.image || cat1}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-[18px] font-bold text-[#1F2937]">
                  {cat.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Chef's Specials */}
      <section id="specials" className="bg-[#F9FAFB] py-24 px-6 sm:px-12 md:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] font-bold text-center text-[#1F2937] mb-16">
            Chef's Specials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredSpecials.map((special) => (
              <div
                key={special.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                <div className="h-[240px]">
                  <img src={special.image} alt={special.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col grow">
                  <h3 className="text-[18px] font-bold text-[#1F2937] mb-3">{special.name}</h3>
                  <p className="text-[14px] text-gray-500 mb-8 leading-relaxed font-medium grow">{special.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[18px] font-bold text-[#FF7A1B]">{special.price}</span>
                    <button
                      onClick={() => addToCart(special)}
                      className="bg-[#FF7A1B] text-white px-6 py-2.5 rounded-lg font-bold text-[14px] shadow-sm hover:bg-orange-600 transition-all active:scale-95"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Menu Addition Banner */}
      <section
        className="relative py-32 px-6 sm:px-12 md:px-24 bg-cover bg-center flex items-center text-white"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-[42px] leading-tight font-['Outfit'] font-bold mb-6">
            Introducing Our New Menu Additions!
          </h2>
          <p className="text-[18px] font-medium mb-10 text-gray-200 leading-relaxed">
            Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavor. Limited time offer!
          </p>
          <button
            onClick={() => document.getElementById('specials').scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-[#FF7A1B] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all shadow-lg active:scale-95"
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

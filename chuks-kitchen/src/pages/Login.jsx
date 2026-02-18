import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import heroImage from '../assets/Rectangle 1.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Load saved credentials on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('chuks_email');
    const savedPassword = localStorage.getItem('chuks_password');
    const savedRemember = localStorage.getItem('chuks_remember') === 'true';

    if (savedRemember) {
      if (savedEmail) setEmail(savedEmail);
      if (savedPassword) setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (rememberMe) {
      localStorage.setItem('chuks_email', email);
      localStorage.setItem('chuks_password', password); // Note: Simple implementation for demo
      localStorage.setItem('chuks_remember', 'true');
    } else {
      localStorage.removeItem('chuks_email');
      localStorage.removeItem('chuks_password');
      localStorage.setItem('chuks_remember', 'false');
    }

    console.log('Logging in with:', { email, password });
    // Add your navigation or API call here
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-['Inter']">
      <div className="flex flex-col lg:flex-row grow">
        {/* Left Side - Image with Overlay */}
        <div 
          className="relative hidden lg:flex lg:w-1/2 bg-cover bg-center min-h-screen items-center justify-center text-center px-12 xl:px-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Orange Overlay */}
          <div className="absolute inset-0 bg-[#FF7A1B]/80"></div>
          
          <div className="relative z-10 text-white max-w-lg">
            <h1 className="text-6xl font-['Outfit'] font-bold mb-6">Chuks Kitchen</h1>
            <p className="text-xl font-medium leading-relaxed">
              Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>

        {/* Mobile/Tablet Header Image Overlay */}
        <div 
          className="hidden md:flex lg:hidden relative w-full h-80 md:h-[400px] bg-cover bg-center items-center justify-center text-center px-6"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-[#FF7A1B]/80"></div>
          <div className="relative z-10 text-white max-w-md">
            <h1 className="text-4xl font-['Outfit'] font-bold mb-4">Chuks Kitchen</h1>
            <p className="text-base font-medium leading-relaxed">
              Your journey to delicious, authentic Nigerian meals starts here.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex flex-col bg-[#F8F9FA] px-6 py-12 sm:px-12 md:px-24 lg:px-16 xl:px-32 justify-center items-center">
          <div className="max-w-md w-full">
            {/* Logo and Heading */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-['Dancing_Script'] text-[#FF7A1B] mb-2 font-medium">Chuks Kitchen</h2>
              <h3 className="text-2xl font-bold text-[#1F2937]">Login your Account</h3>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email or phone number</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@gmail.com" 
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-[#FF7A1B] outline-none transition-all font-medium text-gray-800"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </span>
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******" 
                    className="w-full pl-12 pr-12 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-[#FF7A1B] outline-none transition-all font-medium text-gray-800"
                    required
                    pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    title="Minimum 8 characters, at least one letter, one number and one special character"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
                <div className="text-right">
                  <a href="#" className="text-xs font-semibold text-[#0091FF] hover:underline">Forgot Password?</a>
                </div>
              </div>

              {/* Continue Button */}
              <button 
                type="submit"
                className="w-full py-4 bg-[#FF7A1B] text-white rounded-xl font-bold text-base hover:bg-orange-600 transition-all active:scale-[0.98] mt-2 shadow-md shadow-orange-100"
              >
                Continue
              </button>

              <div className="text-center py-2">
                <span className="text-xs text-gray-500 font-bold">Or continue with</span>
              </div>

              {/* Social Logins */}
              <div className="space-y-4">
                <button type="button" className="w-full flex items-center justify-center gap-3 py-3.5 bg-white border border-gray-200 rounded-lg font-bold text-gray-600 hover:bg-gray-50 transition-all text-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  Continue with Google
                </button>
                <button type="button" className="w-full flex items-center justify-center gap-3 py-3.5 bg-white border border-gray-200 rounded-lg font-bold text-gray-600 hover:bg-gray-50 transition-all text-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.39 5.98.64 7.3-.6 1.48-1.4 2.93-2.69 4.21zM12.03 7.25c-.02-2.13 1.7-3.89 3.69-4.01.21 2.39-2.33 4.29-3.69 4.01z"/></svg>
                  Continue with Apple
                </button>
              </div>

              <div className="text-center mt-8">
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  Don't have an account? <Link to="/signup" className="text-[#0091FF] font-bold hover:underline">Create an account</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="hidden sm:block bg-[#5D3A26] text-white py-12 lg:py-16 px-6 sm:px-10 lg:px-20 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-['Dancing_Script'] font-bold text-[#FF9E53]">Chuks Kitchen</h2>
            <p className="text-sm lg:text-base text-gray-200 leading-relaxed font-medium">
              Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-['Outfit'] font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Explore</a></li>
              <li><a href="#" className="hover:text-white transition-colors">My Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-['Outfit'] font-bold text-white">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>+234 801 234 5678</li>
              <li>hello@chukskitchen.com</li>
              <li className="leading-snug">123 Taste Blvd, Lagos, Nigeria</li>
            </ul>
          </div>

          <div className="space-y-4">
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] sm:text-xs text-gray-400">© 2024 Chuks Kitchen. All rights reserved.</p>
          
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

export default Login;

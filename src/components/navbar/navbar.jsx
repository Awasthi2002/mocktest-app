import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/login', label: 'Login' },
    { path: '/signup', label: 'Sign Up' },
    { path: '/payment', label: 'Payment' },
    { path: '/instructions', label: 'Instructions' },
    { path: '/exam', label: 'Exam' },
    { path: '/profile', label: 'Profile' },
  ];

  return (
    <>
      <header className="  w-full bg-white/95 backdrop-blur-lg z-[60] shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center h-12 sm:h-14">
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
                  ScienceMock
                </h1>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1 lg:space-x-3 xl:space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-gray-700 hover:text-purple-600 px-2 md:px-3 py-2 text-xs md:text-sm lg:text-base font-medium transition-all duration-300 group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
            <div className="hidden md:flex">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 md:px-4 lg:px-6 py-2 sm:py-2.5 rounded-full font-medium text-xs md:text-sm lg:text-base hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Start Free Trial
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-purple-600 p-2 focus:outline-none relative z-60"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 z-60 bg-white/95 backdrop-blur-lg shadow-lg ">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <button 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Navbar;
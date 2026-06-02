import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-brand-dark/80 backdrop-blur-xl border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 text-white group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 shadow-[0_0_15px_rgba(245,158,11,0.5)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.7)] transition-all">
            <Globe className="w-6 h-6 text-brand-dark" />
          </div>
          <span className="font-heading font-extrabold text-2xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            LOGISTIX
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-5 py-2 text-sm font-bold tracking-wide transition-colors ${
                  isActive ? 'text-amber-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/contact" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">
            Client Portal
          </Link>
          <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all">
            <span>Track Order</span>
            <ChevronRight className="w-4 h-4 text-amber-500" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-bold transition-colors ${
                    location.pathname === link.path ? 'text-amber-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
                <Link to="/contact" className="text-lg font-bold text-gray-300 hover:text-white">
                  Client Portal
                </Link>
                <button className="flex justify-center items-center space-x-2 bg-gradient-to-r from-amber-400 to-orange-500 text-brand-dark px-6 py-3 rounded-xl text-lg font-bold w-full shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                  <span>Track Order</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

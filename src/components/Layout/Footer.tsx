import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Globe, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Ship className="w-8 h-8 text-brand-accent" />
              <span className="font-heading font-bold text-2xl tracking-wide">LOGISTIX</span>
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              Premium logistics solutions for your corporate needs. Fast, reliable, and secure freight globally.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-muted hover:text-brand-accent transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-brand-muted hover:text-brand-accent transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Sea Freight</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Air Freight</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Land Transport</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Warehousing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">Our Fleet</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-brand-muted text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-brand-navy border border-white/10 px-4 py-2 text-sm w-full rounded-l-md focus:outline-none focus:border-brand-accent text-white"
              />
              <button 
                type="submit" 
                className="bg-brand-accent hover:bg-pink-600 px-4 py-2 rounded-r-md transition-colors text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-muted">
          <p>&copy; {new Date().getFullYear()} Logistix. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

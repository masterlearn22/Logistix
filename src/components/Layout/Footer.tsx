import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B132B] text-white pt-24 pb-8 border-t border-white/5 font-body relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top CTA Section (Making it highly helpful) */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-sm">
          <div className="mb-6 md:mb-0 max-w-2xl">
            <h3 className="text-3xl font-heading font-bold mb-2">Ready to streamline your global logistics?</h3>
            <p className="text-gray-400 text-lg">Our experts are available 24/7 to provide customized routing and pricing.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link to="/contact" className="bg-amber-500 hover:bg-amber-400 text-[#0B132B] px-8 py-4 rounded-xl font-bold transition-all text-center flex items-center justify-center">
              Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="tel:+15551234567" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all text-center border border-white/10 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" /> Call Now
            </a>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="bg-amber-500/10 p-2 rounded-xl group-hover:bg-amber-500/20 transition-colors">
                <Ship className="w-8 h-8 text-amber-500" />
              </div>
              <span className="font-heading font-extrabold text-3xl tracking-tight">LOGISTIX</span>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm">
              Premium logistics solutions for your corporate needs. Fast, reliable, and highly secure freight operations connecting global markets.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-xl text-white tracking-wide">Our Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-500"/> Sea Freight</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-500"/> Air Freight</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-500"/> Land Transport</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-500"/> Warehousing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-500"/> Project Cargo</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-xl text-white tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-amber-500 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-500"/> About Us</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-amber-500 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-500"/> Leadership Team</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-amber-500 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-500"/> Sustainability</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-amber-500 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-500"/> Contact & Hubs</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-amber-500 transition-colors flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-500"/> Careers</Link></li>
            </ul>
          </div>

          {/* 24/7 Support (Highly Helpful) */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-xl text-white tracking-wide">24/7 Support</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-white/5 p-2 rounded-lg mr-4 mt-1">
                  <Phone className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Global Hotline</p>
                  <a href="tel:+15551234567" className="text-white hover:text-amber-500 font-bold transition-colors">+1 (555) 123-4567</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/5 p-2 rounded-lg mr-4 mt-1">
                  <Mail className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Email Support</p>
                  <a href="mailto:support@logistix.com" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">support@logistix.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/5 p-2 rounded-lg mr-4 mt-1">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">HQ Address</p>
                  <span className="text-gray-400 text-sm">123 Logistics Way, NY 10001</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-500 text-sm mb-4 md:mb-0">
            <span>&copy; {new Date().getFullYear()} Logistix Global Inc. All rights reserved.</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
            <div className="flex items-center text-amber-500/70 border border-amber-500/20 px-3 py-1 rounded-full bg-amber-500/5">
              <ShieldCheck className="w-4 h-4 mr-2" />
              <span className="text-xs font-bold uppercase tracking-wider">ISO 9001 Certified</span>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

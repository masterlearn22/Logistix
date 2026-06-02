import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PackageSearch, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { Button } from '../components/UI/Button';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('sea');

  const tabs = [
    { id: 'sea', label: 'Sea Freight' },
    { id: 'air', label: 'Air Freight' },
    { id: 'land', label: 'Land Transport' },
  ];

  const content = {
    sea: {
      title: 'Ocean Cargo Solutions',
      desc: 'Our sea freight services offer the most cost-effective solution for large volume shipments. We partner with top carriers to ensure your cargo navigates the globe efficiently and securely.',
      features: ['Full Container Load (FCL)', 'Less than Container Load (LCL)', 'Refrigerated Cargo', 'Port-to-Port Tracking'],
    },
    air: {
      title: 'Express Air Freight',
      desc: 'When time is of the essence, our air freight solutions deliver. We provide expedited shipping options with guaranteed space allocations on major airlines.',
      features: ['Next Flight Out', 'Charter Services', 'Door-to-Door Delivery', 'Temperature Controlled'],
    },
    land: {
      title: 'Ground Transportation',
      desc: 'Our extensive ground network provides seamless connectivity across continents. From standard trucking to specialized heavy haul, we move it all.',
      features: ['FTL & LTL Services', 'Cross-border Transport', 'Real-time GPS Tracking', 'Specialized Equipment'],
    },
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-surface">
      {/* Header */}
      <section className="bg-brand-dark text-white py-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Services</h1>
          <p className="text-lg text-brand-muted">Comprehensive logistics solutions engineered for precision, speed, and reliability across all modes of transport.</p>
        </div>
      </section>

      {/* Interactive Tabs */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Tabs Navigation */}
            <div className="md:w-1/3 flex flex-col space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left px-6 py-4 rounded-lg font-medium transition-all duration-300 relative ${
                    activeTab === tab.id ? 'text-white' : 'text-brand-muted hover:bg-gray-100 hover:text-brand-dark'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-brand-accent rounded-lg"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="md:w-2/3 min-h-[300px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">{content[activeTab as keyof typeof content].title}</h3>
                  <p className="text-brand-muted mb-8 leading-relaxed">{content[activeTab as keyof typeof content].desc}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {content[activeTab as keyof typeof content].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-sm font-medium text-brand-dark">
                        <ShieldCheck className="w-5 h-5 text-brand-accent" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* Mockup Tracking Simulator */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <PackageSearch className="w-12 h-12 text-brand-accent mx-auto mb-6" />
          <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">Track Your Shipment</h2>
          <p className="text-brand-muted mb-8">Experience our real-time visibility platform. Try entering any tracking number below.</p>
          
          <div className="max-w-xl mx-auto mb-12">
            <form className="flex shadow-lg rounded-lg overflow-hidden border border-gray-200" onSubmit={(e) => { e.preventDefault(); alert("Tracking simulation triggered!"); }}>
              <input 
                type="text" 
                placeholder="Enter Tracking ID (e.g. LGTX-12345)" 
                className="flex-1 px-6 py-4 focus:outline-none"
              />
              <Button type="submit" variant="primary" className="rounded-none px-8">Track</Button>
            </form>
          </div>

          {/* Decorative Tracking Timeline Mockup */}
          <div className="hidden md:flex justify-between items-center relative py-10 opacity-50 pointer-events-none">
             <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10 -translate-y-1/2"></div>
             
             {[
               { icon: <PackageSearch className="w-6 h-6 text-white"/>, status: "Order Received", active: true },
               { icon: <Clock className="w-6 h-6 text-white"/>, status: "In Transit", active: true },
               { icon: <MapPin className="w-6 h-6 text-brand-muted"/>, status: "Out for Delivery", active: false },
             ].map((step, i) => (
               <div key={i} className="flex flex-col items-center bg-white px-4">
                 <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-md ${step.active ? 'bg-brand-accent' : 'bg-gray-100'}`}>
                   {step.icon}
                 </div>
                 <span className={`text-sm font-medium ${step.active ? 'text-brand-dark' : 'text-brand-muted'}`}>{step.status}</span>
               </div>
             ))}
          </div>

        </div>
      </section>
    </div>
  );
};

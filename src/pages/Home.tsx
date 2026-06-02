import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Button } from '../components/UI/Button';
import { Card } from '../components/UI/Card';
import { Anchor, Plane, Truck, ArrowRight, Shield, Globe, Package, Zap, Hexagon, Box, Activity, Compass, Droplet, Feather, Flag, Key, LifeBuoy, Link, Map, Navigation, Radar, Mountain, Sun, Star } from 'lucide-react';

const AnimatedNumber = ({ end, suffix = "", decimals = 0 }: { end: number, suffix?: string, decimals?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals) + suffix);
  
  useEffect(() => {
    const controls = animate(count, end, { duration: 2.5 });
    return controls.stop;
  }, [end]);

  return <motion.span>{rounded}</motion.span>;
};

export const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const services = [
    { title: 'Sea Freight', icon: <Anchor className="w-8 h-8 mb-4 text-brand-accent" />, desc: 'Global shipping solutions for large cargo.' },
    { title: 'Air Freight', icon: <Plane className="w-8 h-8 mb-4 text-brand-accent" />, desc: 'Fast and reliable air transport globally.' },
    { title: 'Land Transport', icon: <Truck className="w-8 h-8 mb-4 text-brand-accent" />, desc: 'Efficient trucking network across continents.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Placeholder for Video/Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.png" 
            alt="Logistics Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/50 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Premium Global <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-pink-500">Logistics</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Delivering your promises worldwide with unmatched speed, security, and precision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" variant="primary">Get a Quote</Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-dark">Our Services</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brief About Us */}
      <section className="py-24 bg-brand-surface">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">Excellence in Motion</h2>
            <p className="text-brand-muted leading-relaxed text-lg mb-8">
              With over two decades of industry leadership, we orchestrate complex supply chains with elegance and precision. Our commitment to technological innovation ensures your cargo is always a step ahead.
            </p>
            <Button variant="ghost" className="text-brand-accent group">
              Learn more about us <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Our Capabilities</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-brand-muted max-w-2xl mx-auto text-lg">Minimalist efficiency meets global scale.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { 
                title: 'Sea Freight', 
                frontImg: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800', 
                backImg: 'https://images.unsplash.com/photo-1577704908185-9e6b72d5bde2?auto=format&fit=crop&q=80&w=800' 
              },
              { 
                title: 'Air Freight', 
                frontImg: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800', 
                backImg: 'https://images.unsplash.com/photo-1588612543594-82ce3bbce82d?auto=format&fit=crop&q=80&w=800' 
              },
              { 
                title: 'Land Transport', 
                frontImg: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800', 
                backImg: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800' 
              },
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative h-[450px] w-full perspective-1000"
              >
                {/* Flip Container */}
                <div className="w-full h-full relative preserve-3d transition-transform duration-700 group-hover:rotate-y-180 cursor-pointer shadow-2xl rounded-2xl">
                  
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden">
                    <img src={service.frontImg} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-8">
                      <h3 className="text-3xl font-heading font-bold text-white tracking-wide">{service.title}</h3>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden">
                    <img src={service.backImg} alt={`${service.title} Alternate`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-dark/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center border-2 border-brand-accent/50 rounded-2xl m-4 bg-brand-dark/40 backdrop-blur-sm">
                      <h3 className="text-2xl font-heading font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-200 mb-8 leading-relaxed">Experience seamless end-to-end logistics with absolute transparency and unmatched speed.</p>
                      <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white hover:text-brand-dark transition-colors font-medium rounded-full">
                        Explore Service
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners Marquee */}
      <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-6 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">Trusted by Global Leaders</h2>
            <p className="text-brand-muted">We collaborate with the world's most innovative companies and vendors.</p>
          </div>
        </div>
        
        <div className="relative w-full flex flex-col space-y-12 overflow-hidden group">
          {/* Fading Edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Row 1: Left to Right */}
          <div className="flex w-max animate-marquee space-x-16 items-center px-8">
            {[
              { name: 'Pelindo' }, { name: 'Garuda Indonesia' }, { name: 'JNE' }, { name: 'J&T Express' }, { name: 'SiCepat' },
              { name: 'Pos Indonesia' }, { name: 'Tokopedia' }, { name: 'Shopee' }, { name: 'Gojek' }, { name: 'Grab' }
            ].map((company, i) => (
              <div key={`logo-original-1-${i}`} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer px-6">
                <img 
                  src={`/logos/${company.name.replace(/\s+/g, '_').toLowerCase()}.png`} 
                  alt={company.name} 
                  title={company.name}
                  className="h-20 md:h-28 w-auto object-contain max-w-[200px] rounded-xl shadow-sm bg-white p-4" 
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            ))}
            {/* Duplicated for seamless loop */}
            {[
              { name: 'Pelindo' }, { name: 'Garuda Indonesia' }, { name: 'JNE' }, { name: 'J&T Express' }, { name: 'SiCepat' },
              { name: 'Pos Indonesia' }, { name: 'Tokopedia' }, { name: 'Shopee' }, { name: 'Gojek' }, { name: 'Grab' }
            ].map((company, i) => (
              <div key={`logo-dup-1-${i}`} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer px-6">
                <img 
                  src={`/logos/${company.name.replace(/\s+/g, '_').toLowerCase()}.png`} 
                  alt={company.name} 
                  title={company.name}
                  className="h-20 md:h-28 w-auto object-contain max-w-[200px] rounded-xl shadow-sm bg-white p-4" 
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>

          {/* Row 2: Right to Left */}
          <div className="flex w-max animate-marquee-reverse space-x-16 items-center px-8">
            {[
              { name: 'Blibli' }, { name: 'Bank Mandiri' }, { name: 'BCA' }, { name: 'BNI' }, { name: 'BRI' },
              { name: 'Telkom Indonesia' }, { name: 'Astra International' }, { name: 'Pertamina' }, { name: 'Pelni' }, { name: 'KAI' }
            ].map((company, i) => (
              <div key={`logo-original-2-${i}`} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer px-6">
                <img 
                  src={`/logos/${company.name.replace(/\s+/g, '_').toLowerCase()}.png`} 
                  alt={company.name} 
                  title={company.name}
                  className="h-20 md:h-28 w-auto object-contain max-w-[200px] rounded-xl shadow-sm bg-white p-4" 
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            ))}
            {/* Duplicated for seamless loop */}
            {[
              { name: 'Blibli' }, { name: 'Bank Mandiri' }, { name: 'BCA' }, { name: 'BNI' }, { name: 'BRI' },
              { name: 'Telkom Indonesia' }, { name: 'Astra International' }, { name: 'Pertamina' }, { name: 'Pelni' }, { name: 'KAI' }
            ].map((company, i) => (
              <div key={`logo-dup-2-${i}`} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer px-6">
                <img 
                  src={`/logos/${company.name.replace(/\s+/g, '_').toLowerCase()}.png`} 
                  alt={company.name} 
                  title={company.name}
                  className="h-20 md:h-28 w-auto object-contain max-w-[200px] rounded-xl shadow-sm bg-white p-4" 
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

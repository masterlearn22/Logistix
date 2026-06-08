import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Button } from '../components/UI/Button';
import { ArrowRight, Shield, Globe, Zap, Activity, Search } from 'lucide-react';

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
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-20">
        {/* Placeholder for Video/Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={import.meta.env.BASE_URL + "hero-bg.png"} 
            alt="Logistics Hero Background" 
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-left"
            >
              <div className="inline-flex items-center space-x-2 bg-brand-dark/50 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-xs font-bold text-amber-500 tracking-widest uppercase">Global Supply Chain</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                Next-Gen <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Logistics</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
                Seamless freight forwarding and supply chain solutions engineered for speed, ultimate security, and precision.
              </p>
              
              {/* Tracking Widget */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-xl flex items-center shadow-2xl max-w-md transition-all focus-within:ring-2 focus-within:ring-amber-500/50">
                <Search className="w-6 h-6 text-gray-400 ml-3" />
                <input 
                  type="text" 
                  placeholder="Enter Tracking Number..." 
                  className="bg-transparent border-none text-white placeholder-gray-400 px-4 py-3 w-full focus:outline-none focus:ring-0"
                />
                <button className="bg-amber-500 hover:bg-amber-400 text-brand-dark font-bold px-8 py-3 rounded-lg transition-colors whitespace-nowrap shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                  Track
                </button>
              </div>
              
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-300 font-medium">
                <div className="flex items-center"><Shield className="w-4 h-4 mr-2 text-amber-500"/> Secure Transit</div>
                <div className="flex items-center"><Globe className="w-4 h-4 mr-2 text-amber-500"/> 150+ Countries</div>
                <div className="flex items-center"><Zap className="w-4 h-4 mr-2 text-amber-500"/> Express Delivery</div>
              </div>
            </motion.div>
            
            {/* Right Content - Glassmorphic Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex lg:w-1/2 justify-end"
            >
              <div className="w-full max-w-sm bg-brand-dark/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-white font-bold flex items-center text-lg">
                    <Activity className="w-5 h-5 mr-2 text-amber-500"/> 
                    Live Network
                  </h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/20">ONLINE</span>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="text-sm text-gray-400 mb-1 font-medium">Active Shipments</div>
                    <div className="text-3xl font-heading font-bold text-white flex items-end">
                      <AnimatedNumber end={24592} />
                      <span className="text-sm text-amber-500 ml-2 mb-1 flex items-center"><ArrowRight className="w-3 h-3 mr-1 -rotate-45"/> +12%</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="text-sm text-gray-400 mb-1 font-medium">Fleet Deployment</div>
                    <div className="text-3xl font-heading font-bold text-white flex items-end">
                      98.4<span className="text-xl">%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 mt-4 overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-1.5 rounded-full w-[98%] shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-brand-dark flex items-center justify-center text-xs font-bold text-white">NY</div>
                      <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-brand-dark flex items-center justify-center text-xs font-bold text-white">LDN</div>
                      <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-brand-dark flex items-center justify-center text-xs font-bold text-white">HK</div>
                    </div>
                    <div className="text-sm text-gray-400">Global Hubs</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
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
                frontImg: import.meta.env.BASE_URL + 'images/sea_freight.png', 
                backImg: import.meta.env.BASE_URL + 'images/sea_freight_warehouse.png' 
              },
              { 
                title: 'Air Freight', 
                frontImg: import.meta.env.BASE_URL + 'images/air_freight.png', 
                backImg: import.meta.env.BASE_URL + 'images/air_freight_loading.png' 
              },
              { 
                title: 'Land Transport', 
                frontImg: import.meta.env.BASE_URL + 'images/land_freight.png', 
                backImg: import.meta.env.BASE_URL + 'images/land_freight_warehouse.png' 
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
                  src={`${import.meta.env.BASE_URL}logos/${company.name.replace(/\s+/g, '_').toLowerCase()}.png`} 
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
                  src={`${import.meta.env.BASE_URL}logos/${company.name.replace(/\s+/g, '_').toLowerCase()}.png`} 
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
                  src={`${import.meta.env.BASE_URL}logos/${company.name.replace(/\s+/g, '_').toLowerCase()}.png`} 
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
                  src={`${import.meta.env.BASE_URL}logos/${company.name.replace(/\s+/g, '_').toLowerCase()}.png`} 
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

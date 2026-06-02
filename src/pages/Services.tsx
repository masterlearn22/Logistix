import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Anchor, Plane, Truck, Cpu, Thermometer, Leaf, Navigation, BarChart3, CloudRain, Lock, Unlock, Wind } from 'lucide-react';

// Mock data for AI Optimizer
const routes = {
  asia_na: { time: '14 Days', cost: '$$$', co2: '-24%' },
  europe_asia: { time: '18 Days', cost: '$$', co2: '-18%' },
  na_europe: { time: '9 Days', cost: '$$$', co2: '-31%' }
};

export const Services: React.FC = () => {
  // AI Optimizer State
  const [selectedRoute, setSelectedRoute] = useState('asia_na');
  const [selectedMode, setSelectedMode] = useState('sea');
  const [isCalculating, setIsCalculating] = useState(false);

  // IoT Dashboard State
  const [temp, setTemp] = useState(2.4);
  const [humidity, setHumidity] = useState(45);
  const [isLocked, setIsLocked] = useState(true);

  // Simulate live IoT data
  useEffect(() => {
    const interval = setInterval(() => {
      setTemp(prev => prev + (Math.random() * 0.4 - 0.2));
      setHumidity(prev => prev + (Math.random() * 2 - 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleRouteOptimize = () => {
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 1500);
  };

  return (
    <div className="min-h-screen bg-brand-surface selection:bg-amber-500 selection:text-brand-dark">
      
      {/* Hero Header */}
      <section className="bg-brand-dark text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/services_hero_bg.png')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/90 to-brand-surface"></div>
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-bold text-amber-500 tracking-widest uppercase">Enterprise Capabilities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 tracking-tight text-white">
              Logistics, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Elevated.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              We go beyond moving cargo. Our state-of-the-art infrastructure integrates AI-driven analytics, IoT tracking, and sustainable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Box Core Services */}
      <section className="py-24 px-6 relative -mt-12 z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Sea Freight (Large Span) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="md:col-span-2 relative rounded-3xl overflow-hidden group bg-brand-dark text-white min-h-[400px]"
            >
              <img src="/images/sea_freight.png" alt="Sea Freight" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <Anchor className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-3xl font-heading font-bold mb-3 text-white">Ocean Freight</h3>
                <p className="text-gray-300 max-w-md mb-6">High-capacity global shipping with precision tracking. Ideal for massive volumes and cost-effective intercontinental transport.</p>
                <div className="flex space-x-3">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold border border-white/20">FCL / LCL</span>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold border border-white/20">Refrigerated</span>
                </div>
              </div>
            </motion.div>

            {/* Air Freight */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden group bg-brand-dark text-white min-h-[400px]"
            >
              <img src="/images/air_freight.png" alt="Air Freight" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <Plane className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-3 text-white">Air Express</h3>
                <p className="text-gray-300 mb-6 text-sm">When time is critical. Guaranteed space allocations on global major airlines.</p>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-bold border border-amber-500/30">Next Flight Out</span>
              </div>
            </motion.div>

            {/* Land Transport */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden group bg-white text-brand-dark min-h-[300px] border border-gray-100 shadow-xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Truck className="w-32 h-32" />
              </div>
              <div className="p-8 h-full flex flex-col justify-end">
                <h3 className="text-2xl font-heading font-bold mb-3 text-brand-dark">Ground Network</h3>
                <p className="text-brand-muted mb-6 text-sm">Seamless cross-border connectivity. Fleet equipped with real-time GPS and temperature monitors.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600">FTL/LTL</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600">Heavy Haul</span>
                </div>
              </div>
            </motion.div>

            {/* Specialized Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="md:col-span-2 relative rounded-3xl overflow-hidden bg-brand-dark text-white p-8 border border-white/10 flex items-center"
            >
              <div className="w-full flex justify-between items-center z-10 relative">
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2 text-white">Customs & Compliance</h3>
                  <p className="text-gray-400 max-w-sm text-sm">Navigating global regulations effortlessly with our in-house licensed brokerage team.</p>
                </div>
                <button className="bg-amber-500 hover:bg-amber-400 text-brand-dark font-bold px-6 py-3 rounded-md transition-colors shadow-sm">Consult Expert</button>
              </div>
              <ShieldCheck className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Features Header */}
      <section className="pt-16 pb-12 text-center px-6">
         <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-4">Technology at the Core</h2>
         <p className="text-brand-muted max-w-2xl mx-auto">Experience the industry's most advanced proprietary systems designed to give you total control and visibility.</p>
      </section>

      {/* Flagship Feature 1: AI Route & Carbon Optimizer */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-brand-dark rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative shadow-2xl">
            {/* BG Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              {/* Left: Description */}
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center space-x-2 text-amber-500 mb-6">
                  <Cpu className="w-6 h-6" />
                  <span className="font-bold tracking-wider uppercase">Logistix AI Engine</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Smart Route & Carbon Optimizer</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Our proprietary AI analyzes historical weather data, port congestion, and fuel indices to recommend the most efficient routes, simultaneously minimizing your carbon footprint.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-white">
                    <div className="bg-white/10 p-2 rounded-lg"><BarChart3 className="w-5 h-5 text-amber-500" /></div>
                    <span className="font-medium">Predictive Cost Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="bg-white/10 p-2 rounded-lg"><Leaf className="w-5 h-5 text-green-400" /></div>
                    <span className="font-medium">Scope 3 Emission Tracking</span>
                  </div>
                </div>
              </div>

              {/* Right: Interactive Simulator */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Navigation className="w-5 h-5 mr-2 text-amber-500" /> Route Simulator
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-xs text-gray-400 font-bold uppercase mb-2 block">Select Trade Lane</label>
                    <select 
                      value={selectedRoute}
                      onChange={(e) => setSelectedRoute(e.target.value)}
                      className="w-full bg-brand-dark/50 border border-white/20 text-white rounded-xl p-4 focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                    >
                      <option value="asia_na">Asia - North America (Transpacific)</option>
                      <option value="europe_asia">Europe - Asia (AE1)</option>
                      <option value="na_europe">North America - Europe (TA)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-xs text-gray-400 font-bold uppercase mb-2 block">Transport Mode</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => setSelectedMode('sea')}
                        className={`p-4 rounded-xl border flex flex-col items-center justify-center transition-all ${selectedMode === 'sea' ? 'bg-amber-500/20 border-amber-500 text-amber-400' : 'bg-brand-dark/50 border-white/10 text-gray-400 hover:bg-white/5'}`}
                      >
                        <Anchor className="w-6 h-6 mb-2" /> <span className="text-sm font-bold">Sea</span>
                      </button>
                      <button 
                        onClick={() => setSelectedMode('air')}
                        className={`p-4 rounded-xl border flex flex-col items-center justify-center transition-all ${selectedMode === 'air' ? 'bg-amber-500/20 border-amber-500 text-amber-400' : 'bg-brand-dark/50 border-white/10 text-gray-400 hover:bg-white/5'}`}
                      >
                        <Plane className="w-6 h-6 mb-2" /> <span className="text-sm font-bold">Air</span>
                      </button>
                    </div>
                  </div>

                  <button 
                    onClick={handleRouteOptimize} 
                    className="w-full bg-amber-500 text-brand-dark font-bold hover:bg-amber-400 px-6 py-4 rounded-xl transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" 
                    disabled={isCalculating}
                  >
                    {isCalculating ? 'Simulating Neural Net...' : 'Optimize Route'}
                  </button>

                  {/* Results panel */}
                  <div className={`mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-white/10 transition-opacity duration-500 ${isCalculating ? 'opacity-30' : 'opacity-100'}`}>
                    <div className="text-center">
                      <div className="text-xs text-gray-400 mb-1">Est. Transit</div>
                      <div className="text-xl font-bold text-white">{selectedMode === 'sea' ? routes[selectedRoute as keyof typeof routes].time : '2-4 Days'}</div>
                    </div>
                    <div className="text-center border-x border-white/10">
                      <div className="text-xs text-gray-400 mb-1">Cost Index</div>
                      <div className="text-xl font-bold text-white">{selectedMode === 'air' ? '$$$$' : routes[selectedRoute as keyof typeof routes].cost}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-400 mb-1">CO2 Saved</div>
                      <div className="text-xl font-bold text-green-400">{selectedMode === 'air' ? '-5%' : routes[selectedRoute as keyof typeof routes].co2}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Feature 2: IoT Cargo Climate Control */}
      <section className="py-12 px-6 mb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: IoT Simulator */}
              <div className="relative h-[500px] bg-gray-50 rounded-3xl border border-gray-100 p-6 flex flex-col justify-between overflow-hidden shadow-inner">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                {/* Header Status */}
                <div className="relative z-10 flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-bold text-brand-dark">Container #CRG-8821</span>
                  </div>
                  <span className="bg-brand-dark text-white text-xs font-bold px-3 py-1 rounded-full">Pharma Grade</span>
                </div>

                {/* Main Metrics */}
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  {/* Temp */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                    <Thermometer className="w-6 h-6 text-blue-500 mb-4" />
                    <div className="text-sm text-gray-500 font-bold uppercase mb-1">Internal Temp</div>
                    <div className="text-4xl font-heading font-bold text-brand-dark flex items-start">
                      {temp.toFixed(1)}<span className="text-xl mt-1">°C</span>
                    </div>
                    <div className="mt-2 text-xs text-green-600 font-medium">Within target range (2°C - 8°C)</div>
                  </div>

                  {/* Humidity */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
                     <Wind className="w-6 h-6 text-teal-500 mb-4" />
                     <div className="text-sm text-gray-500 font-bold uppercase mb-1">Humidity</div>
                     <div className="text-4xl font-heading font-bold text-brand-dark flex items-start">
                      {humidity.toFixed(0)}<span className="text-xl mt-1">%</span>
                    </div>
                  </div>
                </div>

                {/* Footer Status */}
                <div className="relative z-10 flex space-x-4">
                  <button 
                    onClick={() => setIsLocked(!isLocked)}
                    className={`flex-1 flex items-center justify-center p-4 rounded-2xl border transition-colors ${isLocked ? 'bg-white border-green-200 text-green-600 shadow-sm' : 'bg-red-50 border-red-200 text-red-600 shadow-inner'}`}
                  >
                    {isLocked ? <Lock className="w-5 h-5 mr-2" /> : <Unlock className="w-5 h-5 mr-2" />}
                    <span className="font-bold">{isLocked ? 'Digital Seal Intact' : 'Seal Broken'}</span>
                  </button>
                </div>
              </div>

              {/* Right: Description */}
              <div>
                <div className="inline-flex items-center space-x-2 text-amber-500 mb-6">
                  <CloudRain className="w-6 h-6" />
                  <span className="font-bold tracking-wider uppercase">Active IoT Monitoring</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">Uncompromised Cargo Climate Control</h2>
                <p className="text-brand-muted mb-8 leading-relaxed">
                  For sensitive cargo like pharmaceuticals, perishables, and electronics, we deploy advanced IoT-enabled containers. Monitor internal micro-climates in real-time from anywhere in the world.
                </p>
                
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center mr-4">
                      <Thermometer className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">Active Cooling Systems</h4>
                      <p className="text-sm text-brand-muted">Automated adjustments prevent excursions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center mr-4">
                      <Lock className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">Digital Geo-fenced Seals</h4>
                      <p className="text-sm text-brand-muted">Instant alerts if container is opened outside authorized zones.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

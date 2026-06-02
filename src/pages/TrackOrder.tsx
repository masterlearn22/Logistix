import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Package, MapPin, Truck, CheckCircle, FileText, Download, Anchor, Plane, ShieldCheck, Clock, Calendar } from 'lucide-react';

// Mock Tracking Data Generator
const generateMockData = (id: string) => {
  return {
    id: id || 'TRK-98237419',
    sender: 'Global Tech Corp (Shanghai)',
    receiver: 'Logistix Local Hub (Jakarta)',
    service: 'Ocean Freight - Express',
    weight: '12,500 kg',
    dimensions: '20ft Container',
    eta: new Date(Date.now() + 86400000 * 2).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    steps: [
      { id: 1, title: 'Order Received', location: 'Shanghai Port, CN', date: 'Oct 12, 10:00 AM', icon: Package, completed: true },
      { id: 2, title: 'In Transit (Ocean)', location: 'South China Sea', date: 'Oct 15, 08:30 PM', icon: Anchor, completed: true },
      { id: 3, title: 'Customs Clearance', location: 'Tanjung Priok, ID', date: 'Oct 18, 09:15 AM', icon: ShieldCheck, completed: true },
      { id: 4, title: 'Out for Delivery', location: 'Jakarta Distribution Center', date: 'Oct 19, 07:00 AM', icon: Truck, completed: true },
      { id: 5, title: 'Delivered', location: 'Recipient Warehouse, JKT', date: 'Oct 19, 02:45 PM', icon: CheckCircle, completed: true },
    ]
  };
};

export const TrackOrder: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [status, setStatus] = useState<'idle' | 'searching' | 'simulating' | 'delivered'>('idle');
  const [activeStep, setActiveStep] = useState(0);
  const [showPod, setShowPod] = useState(false);
  const [mockData, setMockData] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    
    setStatus('searching');
    setMockData(null);
    setActiveStep(0);
    setShowPod(false);

    // Simulate network delay
    setTimeout(() => {
      setMockData(generateMockData(trackingId.toUpperCase()));
      setStatus('simulating');
    }, 1500);
  };

  // Simulation Logic
  useEffect(() => {
    if (status === 'simulating' && mockData) {
      if (activeStep < mockData.steps.length) {
        const timer = setTimeout(() => {
          setActiveStep(prev => prev + 1);
        }, 1200); // 1.2s per step for a cool animation effect
        return () => clearTimeout(timer);
      } else {
        setStatus('delivered');
      }
    }
  }, [status, activeStep, mockData]);

  return (
    <div className="min-h-screen bg-brand-surface selection:bg-amber-500 selection:text-brand-dark overflow-x-hidden">
      
      {/* Hero Search Section */}
      <section className="bg-brand-dark text-white pb-24 px-6 relative overflow-hidden" style={{ paddingTop: '160px' }}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7c50800?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/90 to-brand-surface"></div>
        
        <div className="container mx-auto text-center max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight text-white">
              Track Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Shipment</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10">
              Enter your tracking number below to get real-time simulated updates on your cargo's journey.
            </p>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-gray-400">
                  <Search className="w-6 h-6" />
                </div>
                <input 
                  type="text" 
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="e.g. TRK-123456789" 
                  className="w-full bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl py-5 pl-16 pr-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all font-mono text-lg tracking-wider uppercase"
                  required
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'searching'}
                className="bg-amber-500 hover:bg-amber-400 text-brand-dark px-10 py-5 rounded-2xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center whitespace-nowrap"
              >
                {status === 'searching' ? 'Searching...' : 'Track Order'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Tracking Results Area */}
      <section className="py-12 md:py-20 px-6 container mx-auto max-w-5xl">
        <AnimatePresence mode="wait">
          
          {/* Idle State */}
          {status === 'idle' && (
            <motion.div 
              key="idle"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center py-20 text-gray-500"
            >
              <Package className="w-20 h-20 mx-auto mb-6 opacity-20" />
              <p className="text-xl">Enter a tracking number to view shipment details.</p>
            </motion.div>
          )}

          {/* Searching State */}
          {status === 'searching' && (
            <motion.div 
              key="searching"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-6"></div>
              <p className="text-xl text-gray-600 font-bold animate-pulse">Locating shipment in global database...</p>
            </motion.div>
          )}

          {/* Results State (Simulating & Delivered) */}
          {(status === 'simulating' || status === 'delivered') && mockData && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Header Info Card */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {status === 'delivered' ? 'Delivered' : 'In Transit'}
                    </span>
                    <span className="text-gray-400 text-sm font-medium">Tracking ID:</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-brand-dark font-mono break-all">{mockData.id}</h2>
                </div>
                
                <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-amber-500" />
                    <span className="font-medium">Est. Delivery: {mockData.eta}</span>
                  </div>
                  {status === 'delivered' && (
                    <button 
                      onClick={() => setShowPod(true)}
                      className="mt-2 bg-brand-dark hover:bg-gray-800 text-white px-6 py-2 rounded-lg text-sm font-bold transition-colors flex items-center space-x-2 shadow-lg"
                    >
                      <FileText className="w-4 h-4" />
                      <span>View Proof of Delivery</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Column: Shipment Details */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
                    <h3 className="text-xl font-heading font-bold mb-6 flex items-center border-b pb-4">
                      <FileText className="w-5 h-5 mr-3 text-amber-500" /> Shipment Details
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm text-gray-400 font-medium mb-1">From</p>
                        <p className="font-bold text-gray-800">{mockData.sender}</p>
                      </div>
                      
                      <div className="flex items-center py-2">
                        <div className="h-[1px] w-full bg-gray-200"></div>
                        <Plane className="w-5 h-5 text-gray-400 mx-4" />
                        <div className="h-[1px] w-full bg-gray-200"></div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-400 font-medium mb-1">To</p>
                        <p className="font-bold text-gray-800">{mockData.receiver}</p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-4 mt-6 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Service</p>
                          <p className="font-bold text-sm">{mockData.service}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Weight</p>
                          <p className="font-bold text-sm">{mockData.weight}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Interactive Timeline */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
                    <h3 className="text-xl font-heading font-bold mb-8 flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-amber-500" /> Live Tracking Progress
                    </h3>
                    
                    <div className="relative">
                      {/* Vertical Progress Line */}
                      <div className="absolute left-[23px] top-4 bottom-10 w-1 bg-gray-100 rounded-full">
                        <motion.div 
                          className="w-full bg-amber-500 rounded-full"
                          initial={{ height: 0 }}
                          animate={{ height: `${(activeStep / mockData.steps.length) * 100}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>

                      <div className="space-y-8">
                        {mockData.steps.map((step: any, index: number) => {
                          const isActive = index === activeStep;
                          const isPassed = index < activeStep;
                          const StepIcon = step.icon;

                          return (
                            <motion.div 
                              key={step.id}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: isPassed || isActive ? 1 : 0.4, x: 0 }}
                              className={`flex items-start relative z-10 ${isActive ? 'scale-105 transform origin-left transition-transform' : ''}`}
                            >
                              {/* Icon Circle */}
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${
                                isPassed ? 'bg-amber-500 border-amber-200 text-white' : 
                                isActive ? 'bg-white border-amber-500 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 
                                'bg-gray-50 border-gray-200 text-gray-400'
                              } transition-all duration-300 mr-4 sm:mr-6 flex-shrink-0`}>
                                <StepIcon className="w-5 h-5" />
                              </div>

                              {/* Content */}
                              <div className={`flex-1 pt-2 ${isActive ? 'animate-pulse' : ''}`}>
                                <h4 className={`text-lg font-bold ${isPassed || isActive ? 'text-gray-900' : 'text-gray-400'}`}>
                                  {step.title}
                                </h4>
                                <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 mt-1 gap-1 sm:gap-4">
                                  <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {step.location}</span>
                                  {isPassed && <span className="flex items-center text-gray-400"><Clock className="w-4 h-4 mr-1" /> {step.date}</span>}
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Proof of Delivery Modal (Simulated) */}
      <AnimatePresence>
        {showPod && mockData && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/80 backdrop-blur-sm p-6"
            onClick={() => setShowPod(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative"
            >
              {/* Receipt Header */}
              <div className="bg-brand-dark p-8 text-center text-white relative">
                <div className="absolute top-4 right-4 opacity-20">
                  <CheckCircle className="w-32 h-32" />
                </div>
                <h3 className="text-3xl font-heading font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2">
                  LOGISTIX
                </h3>
                <p className="text-gray-400 font-mono tracking-widest text-sm">OFFICIAL PROOF OF DELIVERY</p>
              </div>

              {/* Receipt Body */}
              <div className="p-6 sm:p-8 pb-10 sm:pb-12 relative overflow-hidden">
                {/* Fake Stamp */}
                <div className="absolute right-4 bottom-24 sm:right-12 sm:bottom-24 border-4 border-red-500/30 text-red-500/30 rounded-full w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center transform -rotate-12 pointer-events-none">
                  <div className="text-center">
                    <p className="font-bold text-sm sm:text-lg leading-none border-t-2 border-b-2 border-red-500/30 py-1 mb-1">DELIVERED</p>
                    <p className="text-[8px] sm:text-[10px] font-mono">{mockData.steps[4]?.date}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 border-b border-gray-100 pb-8 mb-8 text-sm relative z-10">
                  <div>
                    <p className="text-gray-400 mb-1">Tracking Number</p>
                    <p className="font-mono font-bold text-lg text-brand-dark">{mockData.id}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Delivery Date</p>
                    <p className="font-bold text-gray-800">{mockData.steps[4]?.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Shipper</p>
                    <p className="font-bold text-gray-800">{mockData.sender}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Consignee</p>
                    <p className="font-bold text-gray-800">{mockData.receiver}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 relative z-10">
                  <div>
                    <p className="text-gray-400 mb-2 text-sm">Received By / Signature</p>
                    <div className="font-serif italic text-4xl text-brand-dark opacity-80 -rotate-2">
                      John Doe
                    </div>
                    <div className="h-[1px] w-48 bg-gray-300 mt-2"></div>
                  </div>
                  <button 
                    onClick={() => setShowPod(false)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-bold transition-colors flex items-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

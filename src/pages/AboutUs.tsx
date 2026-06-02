import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Shield, Users, Globe, ChevronRight, ChevronLeft, Maximize2, Award, Zap, Leaf } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Project Titan: The Andean Ascent",
    category: "Heavy Haul & Specialized",
    image: "/images/project_titan.png",
    desc: "Transporting a 500-ton wind turbine across 3,000 kilometers of unforgiving terrain in the Andes. Our engineering team built custom multi-axle trailers to navigate tight mountain passes, completing the delivery 3 days ahead of schedule."
  },
  {
    id: 2,
    title: "Operation Cold Chain: Global Health",
    category: "Pharma & Perishables",
    image: "/images/project_coldchain.png",
    desc: "In response to a global health crisis, Logistix mobilized its IoT-enabled active cooling fleet to deliver 10 million critical vaccines across 15 countries maintaining strict 2°C to 8°C temperatures without a single excursion."
  },
  {
    id: 3,
    title: "Aero-Lift: Semiconductor Rescue",
    category: "Air Charter Solutions",
    image: "/images/project_aerolift.png",
    desc: "When a major tech manufacturer faced a supply chain halt, we chartered a fleet of Boeing 747 freighters within 24 hours, flying rare earth components from Asia to Europe to keep production lines moving."
  }
];

const timeline = [
  { 
    year: '1998', 
    title: 'The First Engine', 
    desc: 'Armed with a single truck and a massive dream, Logistix was founded in a small garage. Our commitment to never missing a delivery deadline quickly gained us local acclaim.' 
  },
  { 
    year: '2005', 
    title: 'Crossing Oceans', 
    desc: 'We opened our first international branch, bridging trade routes between Asia and Europe. This marked our transition from a local trucker to a global freight forwarder.' 
  },
  { 
    year: '2015', 
    title: 'The Digital Awakening', 
    desc: 'Logistix launched its proprietary AI-driven tracking engine, revolutionizing supply chain visibility. We transformed into a tech-first logistics enterprise.' 
  },
  { 
    year: '2023', 
    title: 'Sustainable Horizons', 
    desc: 'Awarded for our Green Logistics initiative, we deployed our first fleet of zero-emission autonomous electric trucks and carbon-optimized ocean shipping.' 
  },
];

export const AboutUs: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-surface selection:bg-amber-500 selection:text-brand-dark overflow-hidden">
      
      {/* Hero Storytelling Section */}
      <section className="bg-brand-dark text-white py-24 px-6 relative">
        <div className="absolute inset-0 bg-[url('/images/about_hero_bg.png')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-brand-surface/20"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8">
              <Globe className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-bold text-amber-500 tracking-widest uppercase">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-8 tracking-tight text-white leading-tight">
              The Architects of <br className="hidden md:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Global Commerce.</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 text-gray-400 leading-relaxed text-lg">
              <p>
                We don't just move cargo. We engineer the lifelines of the global economy. From the clothes you wear to the life-saving medicine in hospitals, Logistix ensures that the world's most critical resources arrive precisely when and where they are needed.
              </p>
              <p>
                Founded on the belief that logistics should be invisible yet infallible, we have spent over two decades obsessively optimizing every mile, every port, and every flight to build the most resilient supply chain network on Earth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Logistix Journey (Timeline) */}
      <section className="py-24 px-6 relative z-20 bg-brand-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16">
            
            <div className="md:w-1/3">
              <div className="sticky top-32">
                <h2 className="text-4xl font-heading font-bold text-white mb-6">A Legacy of Moving Forward</h2>
                <p className="text-gray-400 leading-relaxed">
                  What started as a single truck has evolved into a global powerhouse. Our timeline isn't just about expansion; it's about technological evolution and an unwavering commitment to our clients.
                </p>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="relative border-l border-white/10 pl-8 md:pl-12 ml-4">
                {timeline.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="mb-16 relative group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 rounded-full bg-brand-dark border-4 border-amber-500 group-hover:scale-125 group-hover:bg-amber-500 transition-all duration-300 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                    
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-amber-500/50 transition-colors">
                      <span className="text-amber-500 font-bold text-2xl font-heading tracking-wider block mb-3">{item.year}</span>
                      <h3 className="text-2xl font-heading font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Core Values (Bento Box) */}
      <section className="py-24 px-6 bg-brand-surface relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Our DNA</h2>
            <p className="text-brand-muted max-w-2xl mx-auto text-lg">The unshakeable principles that dictate how we operate, build technology, and serve our global partners.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Value 1: Precision */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 bg-brand-dark rounded-3xl p-10 text-white relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-64 h-64" />
              </div>
              <Target className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-3xl font-heading font-bold mb-4 text-white">Precision Engineering</h3>
              <p className="text-gray-400 max-w-md">Logistics is a game of inches and seconds. We obsess over granular data, route optimization, and flawless execution so you don't have to.</p>
            </motion.div>

            {/* Value 2: Partnership */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-2 bg-amber-500 rounded-3xl p-10 text-brand-dark relative overflow-hidden">
              <Users className="w-10 h-10 text-brand-dark mb-6" />
              <h3 className="text-3xl font-heading font-bold mb-4 text-brand-dark">True Partnership</h3>
              <p className="text-amber-900 max-w-md font-medium text-lg leading-relaxed">We don't treat your cargo as a transaction. We treat your business as our own, providing dedicated strategists to scale your supply chain.</p>
            </motion.div>

            {/* Value 3: Integrity */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="md:col-span-1 bg-white border border-gray-200 rounded-3xl p-8 text-brand-dark shadow-xl">
              <Shield className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3 text-brand-dark">Uncompromising Integrity</h3>
              <p className="text-sm text-brand-muted">Total transparency in pricing, delays, and operations. No hidden fees, no excuses.</p>
            </motion.div>

            {/* Value 4: Innovation */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="md:col-span-2 bg-brand-dark rounded-3xl p-8 text-white flex items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/innovation_bg.png')] bg-cover opacity-20"></div>
              <div className="relative z-10 w-full flex justify-between items-center">
                <div>
                  <Zap className="w-8 h-8 text-amber-500 mb-4" />
                  <h3 className="text-2xl font-heading font-bold mb-2 text-white">Relentless Innovation</h3>
                  <p className="text-gray-400 text-sm max-w-xs">Building the future of logistics through AI and automation.</p>
                </div>
              </div>
            </motion.div>

            {/* Value 5: Sustainability */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="md:col-span-1 bg-white border border-gray-200 rounded-3xl p-8 text-brand-dark shadow-xl">
              <Leaf className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3 text-brand-dark">Sustainable Future</h3>
              <p className="text-sm text-brand-muted">Pioneering green initiatives to achieve net-zero carbon by 2040.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Project Gallery & Case Studies */}
      <section className="py-24 px-6 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-amber-500/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 text-amber-500 mb-4">
                <Award className="w-5 h-5" />
                <span className="font-bold tracking-wider uppercase text-sm">Project Gallery</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white max-w-2xl">Making the Impossible, Possible.</h2>
            </div>
            
            <div className="flex space-x-4 mt-6 md:mt-0">
              <button onClick={prevProject} className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none">
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button onClick={nextProject} className="p-4 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors focus:outline-none text-brand-dark">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Interactive Project Showcase */}
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeProject}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2"
              >
                {/* Image Side */}
                <div className="relative h-[400px] md:h-[600px] group">
                  <img src={projects[activeProject].image} alt={projects[activeProject].title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute bottom-6 left-6 bg-brand-dark/80 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold border border-amber-500/30 mb-6 w-fit">
                    {projects[activeProject].category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 leading-tight">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-10">
                    {projects[activeProject].desc}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Status</div>
                      <div className="font-bold text-green-400">Successfully Delivered</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Client Rating</div>
                      <div className="font-bold text-white">5.0 / 5.0</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Gallery Pagination Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {projects.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveProject(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeProject === idx ? 'bg-amber-500 w-8' : 'bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

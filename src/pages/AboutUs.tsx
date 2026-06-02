import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flag, Shield, Users } from 'lucide-react';
import { Card } from '../components/UI/Card';

export const AboutUs: React.FC = () => {
  const timeline = [
    { year: '1998', title: 'Foundation', desc: 'Established our first office with a single truck.' },
    { year: '2005', title: 'Global Expansion', desc: 'Opened branches in Europe and Asia, introducing sea freight.' },
    { year: '2015', title: 'Tech Integration', desc: 'Launched our proprietary tracking system.' },
    { year: '2023', title: 'Sustainability Award', desc: 'Recognized for our green logistics initiatives.' },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-surface py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Driving Global Commerce</h1>
            <p className="text-xl text-brand-muted leading-relaxed">
              We don't just move cargo; we move the global economy forward. Logistix was founded on the belief that logistics should be seamless, transparent, and built on trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-10 border-t-4 border-brand-accent">
              <Target className="w-12 h-12 text-brand-accent mb-6" />
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Our Vision</h2>
              <p className="text-brand-muted leading-relaxed">
                To be the undisputed global leader in intelligent supply chain solutions, empowering businesses to reach their full potential without borders.
              </p>
            </Card>
            <Card className="p-10 border-t-4 border-brand-navy">
              <Flag className="w-12 h-12 text-brand-navy mb-6" />
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Our Mission</h2>
              <p className="text-brand-muted leading-relaxed">
                Delivering excellence through innovative technology, sustainable practices, and a relentless focus on customer success. We treat your business as our own.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-brand-navy text-white px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-12">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Shield className="mx-auto mb-4 w-10 h-10 text-brand-accent"/>, title: 'Reliability' },
              { icon: <Users className="mx-auto mb-4 w-10 h-10 text-brand-accent"/>, title: 'Partnership' },
              { icon: <Target className="mx-auto mb-4 w-10 h-10 text-brand-accent"/>, title: 'Precision' },
              { icon: <Flag className="mx-auto mb-4 w-10 h-10 text-brand-accent"/>, title: 'Integrity' },
            ].map((val, idx) => (
              <div key={idx} className="p-6">
                {val.icon}
                <h3 className="text-lg font-bold">{val.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-24 px-6 bg-brand-surface">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-center text-brand-dark mb-16">Our Journey</h2>
          
          <div className="relative border-l-4 border-brand-accent ml-6 md:ml-0 md:left-1/2 md:-translate-x-1/2">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-11px] md:left-1/2 md:-ml-[11px] w-5 h-5 rounded-full bg-brand-accent border-4 border-brand-surface shadow" />
                
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <span className="text-brand-accent font-bold text-xl block mb-2">{item.year}</span>
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-brand-muted">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

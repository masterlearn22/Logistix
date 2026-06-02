import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, ArrowRight, Building2, Briefcase, HelpCircle, Globe, Zap } from 'lucide-react';
import { Button } from '../components/UI/Button';
import { useForm } from 'react-hook-form';

const offices = [
  {
    city: 'New York',
    region: 'Global Headquarters',
    address: '123 Logistics Way, Port District, NY 10001',
    phone: '+1 (555) 123-4567',
    time: 'EST (UTC-5)',
    status: 'Open Now'
  },
  {
    city: 'London',
    region: 'EMEA Hub',
    address: '45 Canary Wharf, London, E14 5AB, UK',
    phone: '+44 20 7123 4567',
    time: 'GMT (UTC+0)',
    status: 'Open Now'
  },
  {
    city: 'Singapore',
    region: 'APAC Hub',
    address: '8 Marina View, Asia Square, 018960',
    phone: '+65 6123 4567',
    time: 'SGT (UTC+8)',
    status: 'Closed'
  },
  {
    city: 'Jakarta',
    region: 'Southeast Asia Hub',
    address: 'Sudirman Central Business District, Lot 9',
    phone: '+62 21 5123 4567',
    time: 'WIB (UTC+7)',
    status: 'Closed'
  }
];

const departments = [
  {
    title: 'Sales & Quotes',
    desc: 'Get customized pricing for your enterprise freight needs.',
    icon: <Briefcase className="w-8 h-8 text-amber-500" />,
    action: 'Email Sales',
    email: 'sales@logistix.com'
  },
  {
    title: 'Customer Support',
    desc: 'Track a shipment, report an issue, or ask a general question.',
    icon: <HelpCircle className="w-8 h-8 text-amber-500" />,
    action: 'Get Support',
    email: 'support@logistix.com'
  },
  {
    title: 'Partnerships & Press',
    desc: 'Collaborate with us or request media resources.',
    icon: <Globe className="w-8 h-8 text-amber-500" />,
    action: 'Contact PR',
    email: 'press@logistix.com'
  }
];

export const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Form Submitted:', data);
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-surface selection:bg-amber-500 selection:text-brand-dark">
      
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/contact_hero_bg.png')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-bold text-amber-500 tracking-widest uppercase">We Are Online</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 tracking-tight text-white">
              Let's Keep The <br className="hidden md:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">World Moving.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Whether you need to move a 500-ton turbine across continents or track a vital medical shipment, our global team is ready to assist you instantly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Smart Department Routing */}
      <section className="py-20 px-6 relative z-20 -mt-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {departments.map((dept, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group shadow-lg border border-gray-100 flex flex-col relative overflow-hidden"
              >
                {/* Decorative subtle background element */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                
                <div className="bg-amber-50 p-4 rounded-2xl w-fit mb-6 group-hover:bg-amber-100 transition-colors relative z-10">
                  {dept.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-3 relative z-10">{dept.title}</h3>
                <p className="text-brand-muted mb-8 min-h-[60px] leading-relaxed relative z-10">{dept.desc}</p>
                
                <div className="mt-auto pt-4 border-t border-gray-50 relative z-10">
                  <a href={`mailto:${dept.email}`} className="inline-flex items-center text-brand-dark font-bold hover:text-amber-500 transition-colors group/link text-sm uppercase tracking-wide">
                    {dept.action} <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Admin Contact Banner (WhatsApp) */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between">
            <div className="absolute -right-20 -top-20 opacity-10 pointer-events-none">
              <MessageCircle className="w-96 h-96" />
            </div>
            
            <div className="relative z-10 text-white mb-8 md:mb-0 md:max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Need Immediate Assistance?</h2>
              <p className="text-green-50 text-lg">Skip the queues. Chat directly with our administrative and operations team via WhatsApp for real-time routing and support.</p>
            </div>
            
            <div className="relative z-10 w-full md:w-auto">
              <a 
                href="https://wa.me/15551234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-white text-green-600 px-8 py-5 rounded-full font-bold text-lg hover:bg-green-50 hover:scale-105 transition-all shadow-xl w-full md:w-auto"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Area: Form & Offices */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
                <div className="mb-10">
                  <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">Send an Inquiry</h2>
                  <p className="text-brand-muted">Fill out the form below and the appropriate department will contact you within 2 hours.</p>
                </div>
                
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-3xl text-center flex flex-col items-center justify-center min-h-[400px]"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                      <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p>Thank you for reaching out. A Logistix representative will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-dark uppercase tracking-wide">Inquiry Type</label>
                      <select 
                        {...register('inquiryType', { required: true })}
                        className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 text-brand-dark focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10 transition-all appearance-none bg-white"
                      >
                        <option value="">Select a department...</option>
                        <option value="sales">Sales & Quoting</option>
                        <option value="support">Customer Support / Tracking</option>
                        <option value="partnership">Partnerships & Vendors</option>
                        <option value="media">Press & Media</option>
                      </select>
                      {errors.inquiryType && <span className="text-red-500 text-xs font-medium">Please select an inquiry type</span>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-dark uppercase tracking-wide">Full Name</label>
                        <input 
                          {...register('name', { required: true })}
                          type="text" 
                          placeholder="John Doe"
                          className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 text-brand-dark focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10 transition-all"
                        />
                        {errors.name && <span className="text-red-500 text-xs font-medium">Name is required</span>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-dark uppercase tracking-wide">Company</label>
                        <input 
                          {...register('company')}
                          type="text" 
                          placeholder="Acme Corp"
                          className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 text-brand-dark focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-dark uppercase tracking-wide">Email Address</label>
                      <input 
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 text-brand-dark focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10 transition-all"
                      />
                      {errors.email && <span className="text-red-500 text-xs font-medium">Valid email is required</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-dark uppercase tracking-wide">Message</label>
                      <textarea 
                        {...register('message', { required: true })}
                        rows={4}
                        placeholder="How can we help you today?"
                        className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 text-brand-dark focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10 transition-all resize-none"
                      ></textarea>
                      {errors.message && <span className="text-red-500 text-xs font-medium">Message is required</span>}
                    </div>

                    <Button type="submit" className="w-full py-4 text-lg bg-brand-dark text-white hover:bg-black rounded-xl shadow-lg hover:shadow-xl transition-all" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Global Offices */}
            <div className="lg:w-1/2">
              <div className="mb-10">
                <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4 flex items-center">
                  <Building2 className="w-8 h-8 mr-3 text-amber-500" /> Global Offices
                </h2>
                <p className="text-brand-muted">Find the Logistix hub closest to your operations.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {offices.map((office, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-xl transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full -z-0 group-hover:bg-amber-500/10 transition-colors"></div>
                    
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div>
                        <h3 className="text-2xl font-bold text-brand-dark">{office.city}</h3>
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">{office.region}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${office.status === 'Open Now' ? 'bg-green-50 text-green-600 border-green-200' : 'bg-gray-100 text-gray-500 border-gray-200'}`}>
                        {office.status}
                      </div>
                    </div>

                    <div className="space-y-4 relative z-10">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 text-gray-400 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium text-brand-dark">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{office.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-amber-500/10 border border-amber-500/20 rounded-3xl p-8 text-center">
                <Globe className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-brand-dark mb-2">Expanding Globally</h4>
                <p className="text-brand-muted text-sm">Our agent network spans over 150 countries. Don't see your region? Contact our main hub.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

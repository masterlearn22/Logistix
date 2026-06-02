import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '../components/UI/Button';

// Using react-hook-form
import { useForm } from 'react-hook-form';

export const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Thank you for your message. We will get back to you shortly.');
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-surface">
      {/* Header */}
      <section className="bg-brand-dark text-white py-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-brand-muted">Get in touch with our global team. We're here to solve your logistics challenges.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Contact Information */}
            <div className="md:w-1/3">
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-8">Global Headquarters</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <MapPin className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">Office Address</h3>
                    <p className="text-brand-muted">123 Logistics Way, Port District<br/>Metropolis, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <Phone className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">Phone Number</h3>
                    <p className="text-brand-muted">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <Mail className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">Email Address</h3>
                    <p className="text-brand-muted">inquiries@logistix.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-2/3">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-6">Send an Inquiry</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input 
                        {...register('name', { required: true })}
                        type="text" 
                        id="name"
                        className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 text-brand-dark focus:border-brand-accent focus:outline-none placeholder-transparent"
                        placeholder="Name"
                      />
                      <label 
                        htmlFor="name" 
                        className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-accent peer-focus:text-sm"
                      >
                        Full Name
                      </label>
                      {errors.name && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                    </div>

                    <div className="relative">
                      <input 
                        {...register('company', { required: true })}
                        type="text" 
                        id="company"
                        className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 text-brand-dark focus:border-brand-accent focus:outline-none placeholder-transparent"
                        placeholder="Company"
                      />
                      <label 
                        htmlFor="company" 
                        className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-accent peer-focus:text-sm"
                      >
                        Company Name
                      </label>
                      {errors.company && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                    </div>
                  </div>

                  <div className="relative">
                    <input 
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      type="email" 
                      id="email"
                      className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 text-brand-dark focus:border-brand-accent focus:outline-none placeholder-transparent"
                      placeholder="Email"
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-accent peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                    {errors.email && <span className="text-red-500 text-xs mt-1">Valid email is required</span>}
                  </div>

                  <div className="relative">
                    <textarea 
                      {...register('message', { required: true })}
                      id="message"
                      rows={4}
                      className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 text-brand-dark focus:border-brand-accent focus:outline-none placeholder-transparent resize-none"
                      placeholder="Message"
                    ></textarea>
                    <label 
                      htmlFor="message" 
                      className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-accent peer-focus:text-sm"
                    >
                      Your Message
                    </label>
                    {errors.message && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                  </div>

                  <Button type="submit" variant="primary" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Embed Placeholder */}
      <section className="h-96 w-full bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1683120000000!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
          className="grayscale opacity-80"
        ></iframe>
      </section>
    </div>
  );
};

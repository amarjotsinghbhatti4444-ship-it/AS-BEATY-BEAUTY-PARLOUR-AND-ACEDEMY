'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Hair Styling',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New Appointment Request:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}\nMessage: ${formData.message}`;
    // Link to Salon Owner's WhatsApp
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Booking Form */}
          <motion.div 
            id="booking"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-soft-pink/20 p-8 md:p-12 shadow-sm border border-pink-100"
          >
            <h4 className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Reserve Your Spot</h4>
            <h2 className="text-3xl md:text-4xl font-serif text-dark-primary mb-8">Book An Appointment</h2>
            
            <form onSubmit={handleBooking} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-gold transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-gold transition-colors" placeholder="+1 (234) 567-890" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Select Service</label>
                <select required name="service" value={formData.service} onChange={handleChange} className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-gold transition-colors cursor-pointer text-dark-primary">
                  <option value="Hair Styling">Hair Styling</option>
                  <option value="Hair Cutting">Hair Cutting</option>
                  <option value="Hair Coloring">Hair Coloring</option>
                  <option value="Bridal Makeup">Bridal Makeup</option>
                  <option value="Party Makeup">Party Makeup</option>
                  <option value="Facial Treatments">Facial Treatments</option>
                  <option value="Skin Care">Skin Care</option>
                  <option value="Nail Art">Nail Art</option>
                  <option value="Academy Admissions">Academy Admissions Inquiry</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Preferred Date</label>
                  <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-gold transition-colors text-dark-primary" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Preferred Time</label>
                  <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-gold transition-colors text-dark-primary" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Special Message</label>
                <textarea rows={3} name="message" value={formData.message} onChange={handleChange} className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-gold transition-colors placeholder-gray-400" placeholder="Any specific requirements..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-dark-primary text-white text-sm font-bold tracking-widest uppercase hover:bg-gold transition-colors flex justify-center items-center gap-2">
                Send Request via WhatsApp <MessageCircle size={18} />
              </button>
            </form>
          </motion.div>

          {/* Contact Details & Map */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-10"
          >
            <div>
              <h4 className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Get In Touch</h4>
              <h2 className="text-3xl md:text-4xl font-serif text-dark-primary mb-6">Contact Information</h2>
              <div className="w-16 h-1 bg-gold mb-8"></div>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong className="block text-dark-primary font-medium mb-1 border-b pb-1 border-gray-100">Location</strong>
                    <span className="text-gray-500 text-sm">123 Luxury Avenue, Beauty District, NY 10001, United States</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <strong className="block text-dark-primary font-medium mb-1 border-b pb-1 border-gray-100">Phone / WhatsApp</strong>
                    <a href="tel:+11234567890" className="text-gray-500 text-sm hover:text-gold transition-colors block">+1 (123) 456-7890</a>
                    <a href="https://wa.me/1234567890" className="text-gold font-medium text-sm hover:text-gold-dark transition-colors inline-flex items-center gap-1 mt-1">
                      <MessageCircle size={14}/> Chat on WhatsApp
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <strong className="block text-dark-primary font-medium mb-1 border-b pb-1 border-gray-100">Email</strong>
                    <a href="mailto:info@asbeauty.com" className="text-gray-500 text-sm hover:text-gold transition-colors">info@asbeauty.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <strong className="block text-dark-primary font-medium mb-1 border-b pb-1 border-gray-100">Business Hours</strong>
                    <p className="text-gray-500 text-sm">Mon - Sat: 9:00 AM - 8:00 PM<br/>Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Simulated Google Map via placeholder/iframe */}
            <div className="w-full h-64 bg-gray-100 mt-4 relative overflow-hidden border border-gray-200">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175407384136!2d-73.98782352345266!3d40.74844047138766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689255778841!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

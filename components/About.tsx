'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 bg-soft-pink/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Columns */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[300px] md:h-[400px] mt-12 rounded-t-full overflow-hidden"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80" 
                  alt="Professional Makeup" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[300px] md:h-[400px] rounded-b-full overflow-hidden"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1595000728956-6dcfbe3a42b9?auto=format&fit=crop&q=80" 
                  alt="Bridal Makeup" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
            </div>
            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-6 shadow-xl text-center border-4 border-soft-pink z-10 w-36 h-36 flex flex-col justify-center items-center"
            >
              <span className="text-4xl font-serif text-gold">10+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 mt-1 font-semibold">Years Exp</span>
            </motion.div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Discover Our Story</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-dark-primary mb-6 leading-tight">
                Empowering Beauty, <br /> Inspiring Careers
              </h2>
              <div className="w-20 h-1 bg-gold mb-8"></div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                At <strong>AS Beauty Salon & Academy</strong>, we believe that beauty is an art, and education is the masterpiece. With over a decade of experience in the beauty industry, we have established ourselves as a premier destination for top-tier salon services and professional beauty training.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our highly skilled and professional staff utilize modern beauty techniques to ensure absolute customer satisfaction. Simultaneously, our academy offers comprehensive skill development programs designed to shape the next generation of beauty experts.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex flex-col border-l-2 border-gold pl-4">
                  <span className="text-2xl font-serif text-dark-primary mb-1">State-of-the-Art</span>
                  <span className="text-sm text-gray-500 uppercase tracking-widest">Modern Techniques</span>
                </div>
                <div className="flex flex-col border-l-2 border-gold pl-4">
                  <span className="text-2xl font-serif text-dark-primary mb-1">Certified</span>
                  <span className="text-sm text-gray-500 uppercase tracking-widest">Expert Trainers</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#booking" className="px-8 py-3 bg-dark-primary text-white text-sm font-medium tracking-widest uppercase hover:bg-gold transition-colors text-center">
                  Learn More
                </a>
                <a href="#services" className="px-8 py-3 border border-dark-primary text-dark-primary text-sm font-medium tracking-widest uppercase hover:bg-dark-primary hover:text-white transition-colors text-center">
                  Our Services
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

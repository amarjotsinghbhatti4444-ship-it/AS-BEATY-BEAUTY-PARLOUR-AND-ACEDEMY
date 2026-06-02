'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <span className="px-4 py-1.5 border border-gold/50 text-gold text-xs font-bold tracking-[0.3em] uppercase bg-black/20 backdrop-blur-sm">
            Luxury & Excellence
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-medium mb-6 leading-tight text-shadow-sm"
        >
          Transform Your Beauty & <br className="hidden md:block"/> 
          <span className="text-gold italic">Build Your Career</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Professional Salon Services and Certified Beauty Training Under One Roof. Experience elegance curated exclusively for you.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link 
            href="/#booking"
            className="w-full sm:w-auto px-8 py-3.5 bg-gold hover:bg-gold-light text-white font-medium text-sm tracking-widest uppercase transition-all shadow-lg shadow-gold/20"
          >
            Book Appointment
          </Link>
          <Link 
            href="/#academy"
            className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium text-sm tracking-widest uppercase transition-all"
          >
            Join Academy
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/60 text-xs tracking-[0.2em] uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 48], opacity: [1, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-gold absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Salon Client',
    text: 'Getting my bridal makeup done at AS Beauty Salon was the best decision! The staff was incredibly professional and made me look flawless on my big day.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Academy Graduate',
    text: 'The Professional Beautician Diploma changed my life. The trainers are experts, and I felt completely ready to start my own studio right after graduating.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80'
  },
  {
    name: 'Jessica Wong',
    role: 'Regular Client',
    text: 'I come here for all my hair styling and color treatments. They use top-tier products, and my hair has never felt healthier. Absolute luxury experience.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-24 bg-dark-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <Quote className="w-16 h-16 text-gold/20 absolute top-[-20px] left-1/2 -translate-x-1/2" />
        
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-12 relative z-10"
        >
          Client & Student Stories
        </motion.h4>

        <div className="relative h-64 sm:h-56">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-serif font-light italic leading-relaxed mb-8">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold/50">
                  <Image 
                    src={testimonials[currentIndex].img} 
                    alt={testimonials[currentIndex].name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h5 className="font-medium text-white tracking-wide">{testimonials[currentIndex].name}</h5>
                  <p className="text-gold text-xs uppercase tracking-widest">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prevSlide} className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors rounded-full text-white">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors rounded-full text-white">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

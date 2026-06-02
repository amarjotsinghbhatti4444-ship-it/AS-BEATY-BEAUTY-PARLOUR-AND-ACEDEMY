'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Academy', href: '#academy' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#home" className="flex flex-col items-center z-50">
            <h1 className={`font-serif text-2xl md:text-3xl font-bold tracking-wider ${scrolled ? 'text-dark-primary' : 'text-white'}`}>
              AS <span className="text-gold">BEAUTY</span>
            </h1>
            <span className={`text-[10px] tracking-[0.2em] uppercase ${scrolled ? 'text-gray-500' : 'text-gray-300'}`}>Salon & Academy</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NavLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium hover:text-gold transition-colors ${scrolled ? 'text-gray-800' : 'text-gray-100'} uppercase tracking-widest`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#booking"
              className="px-6 py-2.5 bg-gold hover:bg-gold-light text-white font-medium text-sm tracking-widest uppercase transition-all shadow-lg hover:shadow-gold/30"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="h-6 w-6 text-dark-primary" /> : <Menu className={`h-6 w-6 ${scrolled ? 'text-dark-primary' : 'text-white'}`} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-white h-screen flex flex-col items-center justify-center space-y-6 md:hidden z-40"
          >
            {NavLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif text-dark-primary hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-3 bg-gold text-white font-medium text-sm tracking-widest uppercase shadow-lg"
            >
              Book Appointment
            </Link>
            
            <div className="absolute bottom-10 flex space-x-6 text-gray-500">
              <a href="#" className="hover:text-gold"><Phone className="h-5 w-5" /></a>
              <a href="#" className="hover:text-gold"><MapPin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-gold"><Clock className="h-5 w-5" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

'use client';

import { motion } from 'motion/react';
import { CheckCircle2, GraduationCap, Clock, Award, Briefcase } from 'lucide-react';
import Image from 'next/image';

const courses = [
  {
    title: 'Basic Beauty Course',
    duration: '2 Months',
    certification: 'AS Academy Certificate',
    career: 'Junior Beautician, Salon Assistant',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13fee7a328?auto=format&fit=crop&q=80'
  },
  {
    title: 'Advanced Makeup Course',
    duration: '3 Months',
    certification: 'Professional Artist Certification',
    career: 'Freelance Makeup Artist, Studio Artist',
    img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80'
  },
  {
    title: 'Bridal Makeup Training',
    duration: '6 Weeks',
    certification: 'Bridal Specialist Diploma',
    career: 'Bridal MUA, Event Specialist',
    img: 'https://images.unsplash.com/photo-1595000728956-6dcfbe3a42b9?auto=format&fit=crop&q=80'
  },
  {
    title: 'Hair Styling & Cutting',
    duration: '4 Months',
    certification: 'Master Stylist Diploma',
    career: 'Salon Stylist, Platform Artist',
    img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80'
  },
  {
    title: 'Nail Art Course',
    duration: '1 Month',
    certification: 'Nail Technician Cert',
    career: 'Nail Tech, Nail Studio Owner',
    img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80'
  },
  {
    title: 'Professional Beautician Diploma',
    duration: '6 Months',
    certification: 'Goverment/Industry Recognized Diploma',
    career: 'Salon Manager, Senior Beautician, Entrepreneur',
    img: 'https://images.unsplash.com/photo-1559564478-43bf62768407?auto=format&fit=crop&q=80' // Using an appropriate image
  }
];

export default function Academy() {
  return (
    <section id="academy" className="py-24 bg-dark-primary text-white relative">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dark-secondary rounded-l-[150px] opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-16">
          <div className="grow">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-2"
            >
              <GraduationCap size={18} /> AS Beauty Academy
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif mb-6"
            >
              Master The Art of Beauty
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-20 h-1 bg-gold"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-lg text-gray-400"
          >
            Turn your passion into a profession. Our comprehensive courses provide hands-on experience, expert guidance, and industry-recognized certifications to fast-track your beauty career.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <motion.div 
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-dark-secondary p-1 group hover:border-gold border border-white/10 transition-colors"
            >
              <div className="relative h-48 w-full mb-4">
                <Image 
                  src={course.img}
                  alt={course.title}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-serif font-medium mb-4 group-hover:text-gold transition-colors">{course.title}</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <Clock size={16} className="text-gold shrink-0 mt-0.5" />
                    <span><strong className="text-white font-medium">Duration:</strong> {course.duration}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <Award size={16} className="text-gold shrink-0 mt-0.5" />
                    <span><strong className="text-white font-medium">Certification:</strong> {course.certification}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <Briefcase size={16} className="text-gold shrink-0 mt-0.5" />
                    <span><strong className="text-white font-medium">Careers:</strong> {course.career}</span>
                  </li>
                </ul>
                <a 
                  href={`https://wa.me/1234567890?text=${encodeURIComponent(`Hi AS Beauty Academy, I want to inquire about the ${course.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 border border-gold/50 text-gold text-center text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all"
                >
                  Admission Inquiry
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

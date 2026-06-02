'use client';

import { motion } from 'motion/react';
import { Award, HeartHandshake, ShieldCheck, Sparkles, HandCoins, Users } from 'lucide-react';

const features = [
  { icon: Award, title: 'Certified Trainers', desc: 'Learn from industry experts with international certifications.' },
  { icon: Sparkles, title: 'Professional Equipment', desc: 'Top-tier branded products and high-end salon machinery.' },
  { icon: ShieldCheck, title: 'Industry-Recognized', desc: 'Courses and diplomas validated by leading beauty boards.' },
  { icon: Users, title: 'Experienced Experts', desc: 'Decades of combined experience bringing out your best look.' },
  { icon: HandCoins, title: 'Affordable Pricing', desc: 'Luxury services and education accessible to everyone.' },
  { icon: HeartHandshake, title: 'Personalized Care', desc: 'Every treatment is tailored to your unique beauty needs.' }
];

export default function Features() {
  return (
    <section className="py-24 bg-soft-pink/30 border-y border-pink-100 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/3">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4"
            >
              The AS Advantage
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-dark-primary mb-6 leading-tight"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-8"
            >
              We are committed to excellence, hygiene, and customer satisfaction, making us the top choice for beauty care and education.
            </motion.p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-20 h-1 bg-gold"
            />
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-pink-50 text-gold flex items-center justify-center shrink-0 rounded-full group-hover:bg-gold group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-dark-primary mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

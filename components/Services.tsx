'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Sparkles, Scissors, SprayCan as Spray, Hand, Stars, Droplet } from 'lucide-react';

const services = [
  { name: 'Hair Styling', desc: 'Elegant styles for any occasion.', icon: Scissors, img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80' },
  { name: 'Hair Cutting', desc: 'Precision cuts tailored to you.', icon: Scissors, img: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80' },
  { name: 'Hair Coloring', desc: 'Vibrant, long-lasting color & highlights.', icon: Droplet, img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80' },
  { name: 'Hair Treatments', desc: 'Deep conditioning & keratin smoothing.', icon: Sparkles, img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80' },
  { name: 'Bridal Makeup', desc: 'Flawless perfection for your big day.', icon: Stars, img: 'https://images.unsplash.com/photo-1595000728956-6dcfbe3a42b9?auto=format&fit=crop&q=80' },
  { name: 'Party Makeup', desc: 'Glamorous looks for special events.', icon: Stars, img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80' },
  { name: 'Facial Treatments', desc: 'Rejuvenating spa facials.', icon: Spray, img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80' },
  { name: 'Skin Care', desc: 'Advanced therapies for glowing skin.', icon: Sparkles, img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80' },
  { name: 'Threading', desc: 'Precise hair removal for brows.', icon: Scissors, img: 'https://images.unsplash.com/photo-1512496115851-a408e8b082ba?auto=format&fit=crop&q=80' },
  { name: 'Waxing', desc: 'Smooth, soft skin solutions.', icon: Droplet, img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80' },
  { name: 'Manicure & Pedicure', desc: 'Luxurious nail and hand spa.', icon: Hand, img: 'https://images.unsplash.com/photo-1519014816548-bf5bc195b0fe?auto=format&fit=crop&q=80' },
  { name: 'Nail Art', desc: 'Creative & trendy designs.', icon: Sparkles, img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Salon Services
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-dark-primary mb-6"
          >
            Enhance Your Natural Beauty
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-20 h-1 bg-gold mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={service.img} 
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-gold shadow-md">
                  <service.icon size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow bg-white relative z-10">
                <h3 className="font-serif text-xl font-medium text-dark-primary mb-2">{service.name}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow">{service.desc}</p>
                <a 
                  href={`#booking?service=${encodeURIComponent(service.name)}`}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-dark-primary group-hover:text-gold transition-colors"
                >
                  Book Now
                  <span className="ml-2 w-4 h-[1px] bg-dark-primary group-hover:bg-gold transition-colors block"></span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

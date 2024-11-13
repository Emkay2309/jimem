'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Offsite Planning',
    description: 'Specializing in unique and engaging offsites, we tailor every detail to fit your team\'s needs.',
    image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?fit=crop&w=800'
  },
  {
    title: 'Corporate Events',
    description: 'Whether it\'s team building, product launches, sales summits, or company celebrations, we bring your corporate vision to life.',
    image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?fit=crop&w=800'
  },
  {
    title: 'Conferences',
    description: 'We handle all aspects, from venue selection to technology setup, ensuring your conference runs smoothly.',
    image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?fit=crop&w=800'
  },
  {
    title: 'Workshops',
    description: 'Our team organizes tailored workshops that foster skills development, team bonding, and growth for all participants.',
    image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?fit=crop&w=800'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our range of tailored event planning services</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="shadow-lg transition-shadow border-none">
                <CardContent className="p-6 bg-white overflow-hidden">
                  <div className="relative mb-6 h-48 w-full bg-gray-200">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  <h3 className="text-xl text-black font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
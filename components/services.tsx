'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Mic, PartyPopper, Gift, Camera } from 'lucide-react';

const services = [
  {
    title: 'Corporate Events',
    description: 'From product launches to sales summits and company celebrations, we bring your corporate vision to life with meticulous attention to detail.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800',
    icon: <Users className="w-6 h-6" />
  },
  {
    title: 'Conferences',
    description: 'Professional conference planning from venue selection to technology setup, ensuring your event runs seamlessly.',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800',
    icon: <Mic className="w-6 h-6" />
  },
  {
    title: 'Team Building',
    description: 'Creative and engaging activities that foster collaboration, strengthen bonds, and enhance team dynamics.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800',
    icon: <Calendar className="w-6 h-6" />
  },
  {
    title: 'Private Parties',
    description: 'Spectacular private events that create lasting memories, from intimate gatherings to grand celebrations.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800',
    icon: <PartyPopper className="w-6 h-6" />
  },
  {
    title: 'Wedding Planning',
    description: 'Turn your dream wedding into reality with our comprehensive planning and coordination services.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800',
    icon: <Gift className="w-6 h-6" />
  },
  {
    title: 'Photography & Video',
    description: 'Professional documentation of your events with stunning photography and cinematic videography.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800',
    icon: <Camera className="w-6 h-6" />
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
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of event planning services tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <motion.img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <div className="p-6 bg-white">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocationMarker from './location-marker';

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden pt-16">
      {/* Floating Location Markers */}
      <LocationMarker className="absolute top-1/4 right-1/4" delay={0} />
      <LocationMarker className="absolute top-1/2 left-1/4" delay={0.5} />
      <LocationMarker className="absolute bottom-1/4 right-1/3" delay={1} />

      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
              Offsites & Events
              <br />
              Made Seamless
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-xl">
              Plan Your Next Offsite or Event with Ease! Let Offsiteio Handle Everything – From Location
              Scouting to Activity Planning, We Have Got You Covered.
            </p>
            <div className="flex items-center gap-6">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Free Proposal <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="text-white/80 flex items-center text-sm">
                <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-green-400" />
                6 calls booked this week
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800',
                  title: 'Team Dinner',
                  location: 'Diefrutar Restaurant'
                },
                {
                  image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800',
                  title: 'Cocktail Reception',
                  location: 'Almanac Hotel Barcelona'
                },
                {
                  image: 'https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?auto=format&fit=crop&w=800',
                  title: 'Team Activity',
                  location: 'Casa Batlló'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
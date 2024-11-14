'use client';

import { motion } from 'framer-motion';

export default function VideoScroll() {
  // Define an array of images and city names
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800',
      city: 'New York'
    },
    {
      url: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800',
      city: 'Paris'
    },
    {
      url: 'https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?auto=format&fit=crop&w=800',
      city: 'Tokyo'
    },
    {
      url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800',
      city: 'London'
    },
    {
      url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800',
      city: 'Sydney'
    },
    {
      url: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800',
      city: 'Berlin'
    },
    {
      url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800',
      city: 'Dubai'
    },
    {
      url: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=800',
      city: 'Moscow'
    },
    {
      url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800',
      city: 'Rome'
    },
    {
      url: 'https://images.unsplash.com/photo-1544413660-299165566b1d?auto=format&fit=crop&w=800',
      city: 'Los Angeles'
    },
    {
      url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800',
      city: 'San Francisco'
    },
    {
      url: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=800',
      city: 'Toronto'
    },
    {
      url: 'https://images.unsplash.com/photo-1506158669146-619067262a00?auto=format&fit=crop&w=800',
      city: 'Singapore'
    },
    {
      url: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?auto=format&fit=crop&w=800',
      city: 'Barcelona'
    },
    {
      url: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=800',
      city: 'Amsterdam'
    },
  ];

  return (
    <section id="destinations"  className="py-24 px-12 bg-white overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl text-black font-bold">
              Destinations
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-600 text-lg">
              From Three Continents to Multiple Countries and Dozens of Cities: Teams Have Explored
              Diverse Destinations Worldwide: Los Angeles, Austin, Nashville, Hawaii, Panama City,
              Barcelona, Lisbon, Buenos Aires, Miami, New Mexico, New York, Santa Cruz and more
            </p>
          </motion.div>
        </div>
        <div className="flex video-scroll">
          {[1, 2].map((set) => (
            <div key={set} className="flex gap-0 shrink-0">
              {images.map((image, index) => (
                <div
                  key={`${set}-${index}`}
                  className="relative w-72 h-96 shrink-0 overflow-hidden"
                >
                  <img
                    src={image.url}
                    alt={image.city}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full text-center text-white bg-black bg-opacity-50 py-1">
                    {image.city}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

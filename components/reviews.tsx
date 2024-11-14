'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    rating: 5,
    shortReview: "Offsiteio helped plan our 3 day company offsite in Miami and helped from beginning to end and everything in between.",
    longReview: "Offsiteio negotiated rates for us at a hotel, helped book and organize restaurants for our large group, and took care of all the little details. They were great!",
    name: "Winnie",
    position: "Executive Assistant",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150"
  },
  {
    rating: 5,
    shortReview: "The most seamless event planning experience we've ever had.",
    longReview: "From venue selection to activity coordination, every detail was perfectly executed. The team went above and beyond our expectations.",
    name: "Marcus Chen",
    position: "Head of Operations",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150"
  },
  {
    rating: 5,
    shortReview: "Exceptional service that transformed our company retreat.",
    longReview: "The attention to detail and personalized approach made our company retreat truly memorable. Our team is still talking about it!",
    name: "Sarah Williams",
    position: "HR Director",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150"
  },
  {
    rating: 5,
    shortReview: "Professional, creative, and incredibly organized.",
    longReview: "They handled everything from A to Z, making our corporate event planning completely stress-free. Would highly recommend!",
    name: "David Thompson",
    position: "CEO",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150"
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews"   className="py-24 bg-[#14142B] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Our Customers Love Us!
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex gap-1 mb-6">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-gray-800 text-lg font-medium">
                  {reviews[currentIndex].shortReview}
                </p>
                <p className="text-gray-600">
                  {reviews[currentIndex].longReview}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={reviews[currentIndex].avatar}
                  alt={reviews[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{reviews[currentIndex].name}</h4>
                  <p className="text-gray-600">{reviews[currentIndex].position}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-transparent border-2 border-white/20 hover:bg-white/10"
              onClick={prevReview}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-transparent border-2 border-white/20 hover:bg-white/10"
              onClick={nextReview}
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
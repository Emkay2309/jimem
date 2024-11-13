'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface LocationMarkerProps {
  className?: string;
  delay?: number;
}

export default function LocationMarker({ className = '', delay = 0 }: LocationMarkerProps) {
  return (
    <motion.div
      className={`location-marker ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 2,
      }}
    >
      <div className="relative">
        <MapPin className="h-8 w-8 text-white" />
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-2 bg-white rounded-full animate-ping" />
        </div>
      </div>
    </motion.div>
  );
}
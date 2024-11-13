'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            Offsite
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-purple-600">
              Services
            </Link>
            <Link href="#destinations" className="text-gray-600 hover:text-purple-600">
              Destinations
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-purple-600">
              Contact
            </Link>
            <Button variant="outline" className="mr-2">
              Sign in
            </Button>
            <Button>Free Proposal</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="#services" className="text-gray-600 hover:text-purple-600">
                Services
              </Link>
              <Link href="#destinations" className="text-gray-600 hover:text-purple-600">
                Destinations
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-purple-600">
                Contact
              </Link>
              <Button variant="outline" className="w-full">
                Sign in
              </Button>
              <Button className="w-full">
                Free Proposal
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from './contact-form';

type NavItem = {
  id: string;
  label: string;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showContactForm, setShowContactForm] = useState<boolean>(false);

  const scrollToSection = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems: NavItem[] = [
    { id: 'services', label: 'Services' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'pricing', label: 'Pricing' },
  ];

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Offsiteio
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => setShowContactForm(true)}
              >
                Free Proposal
              </Button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden py-4 absolute top-20 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg">
              <div className="flex flex-col space-y-4 px-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 text-white w-full"
                  onClick={() => {
                    setShowContactForm(true);
                    setIsOpen(false);
                  }}
                >
                  Free Proposal
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Form Dialog */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">
              Get Your Free Proposal
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <ContactForm onSuccess={() => setShowContactForm(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Offsite</h3>
            <p className="text-sm">Making event planning seamless and memorable.</p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-white" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-white" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-white" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-white" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-white" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/corporate-events" className="hover:text-white">Corporate Events</Link></li>
              <li><Link href="/services/team-building" className="hover:text-white">Team Building</Link></li>
              <li><Link href="/services/conferences" className="hover:text-white">Conferences</Link></li>
              <li><Link href="/services/workshops" className="hover:text-white">Workshops</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Email: info@offsiteio.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Event Street, Suite 100<br />San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Offsiteio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
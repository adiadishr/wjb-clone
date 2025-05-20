import Link from 'next/link';
import { Facebook, Linkedin, Instagram, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const quickLinks = [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ];

  const contacts = {
    address: '22 Chichele Road, Cricklewood, London NW2 3DA',
    phones: ['020 3754 1809', '0744 688 6409'],
    email: 'info@wjbgroundworks.com',
  };

  return (
    <footer className="bg-neutral text-neutral-foreground py-24">
      <div className="w-[90%] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="space-y-6">
          {/* Replace with actual logo */}
          <div className="relative">
            <Image className="object-cover" src="/logo.webp" height={0} width={150} alt="Logo" />
          </div>
          <p className="leading-relaxed text-sm">
            We specialize in high-quality groundworks, including underpinning, basement structure, drainage solutions, and foundation work. With years of experience, we ensure durable and efficient solutions for residential, commercial, and industrial projects.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-700 rounded hover:bg-gray-600">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded hover:bg-gray-600">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded hover:bg-gray-600">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <div className="w-16 h-1 bg-orange-500"></div>
          <ul className="space-y-2">
            {quickLinks.map(link => (
              <li key={link.href} className="flex items-center">
                <ArrowRight className="text-orange-500 mr-2" size={16} />
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Contact Us</h4>
          <div className="w-16 h-1 bg-orange-500"></div>
          <div className="space-y-3 text-sm">
            <div className="flex items-start">
              <MapPin className="text-orange-500 mr-2 mt-1" size={18} />
              <span>{contacts.address}</span>
            </div>
            {contacts.phones.map((phone, i) => (
              <div key={i} className="flex items-center">
                <Phone className="text-orange-500 mr-2" size={18} />
                <span>{phone}</span>
              </div>
            ))}
            <div className="flex items-center">
              <Mail className="text-orange-500 mr-2" size={18} />
              <span>{contacts.email}</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Newsletter</h4>
          <div className="w-16 h-1 bg-orange-500"></div>
          <p className="text-sm">
            Subscribe to our newsletter and receive updates via email about our construction services.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-2 bg-gray-800 text-gray-200 placeholder-gray-500 rounded"
            />
            <button type="submit" className="px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
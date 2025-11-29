import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'About Book', href: '#about' },
    { name: 'Review', href: '#reviews' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Author', href: '#author' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark text-white py-4 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brand-yellow">Pustak</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-brand-yellow transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="py-2 px-6 text-sm">
            Sign Up Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark border-t border-gray-700">
          <div className="flex flex-col p-4 gap-4">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-white hover:text-brand-yellow"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="w-full">Sign Up Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
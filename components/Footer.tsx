import React from 'react';
import { Phone, Mail, MapPin, MousePointer2, Facebook, Twitter, Dribbble, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-16 pb-8 border-t-8 border-brand-yellow">
      <div className="container mx-auto px-6">
        
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center">
          
          <div className="flex flex-col items-center">
            <Phone className="text-brand-yellow mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2 uppercase">Call Us</h4>
            <p className="text-gray-400 text-sm">(080) 123 456 7890</p>
          </div>

          <div className="flex flex-col items-center">
            <Mail className="text-brand-yellow mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2 uppercase">Email</h4>
            <p className="text-gray-400 text-sm">care@domain.com</p>
          </div>

          <div className="flex flex-col items-center">
            <MapPin className="text-brand-yellow mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2 uppercase">Address</h4>
            <p className="text-gray-400 text-sm">72, Wall street, NY 20110</p>
          </div>

          <div className="flex flex-col items-center">
            <MousePointer2 className="text-brand-yellow mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2 uppercase">Website</h4>
            <p className="text-gray-400 text-sm">www.domain.com</p>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © Copyright Pustak 2019. All Rights Reserved
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-brand-yellow hover:text-white transition-colors"><Facebook size={18}/></a>
            <a href="#" className="text-brand-yellow hover:text-white transition-colors"><Twitter size={18}/></a>
            <a href="#" className="text-brand-yellow hover:text-white transition-colors"><Dribbble size={18}/></a>
            <a href="#" className="text-brand-yellow hover:text-white transition-colors"><Instagram size={18}/></a>
          </div>
        </div>
      </div>
      
      {/* Bottom Blue Strip (Promo style from image footer) */}
      <div className="w-full bg-[#00aaff] text-white text-center py-2 mt-8 text-sm font-bold flex items-center justify-center gap-2">
         <span className="bg-white text-[#00aaff] rounded-full p-1"><MousePointer2 size={12}/></span>
         Easily create a page like this - Learn more at Unbounce.com
      </div>
    </footer>
  );
};

export default Footer;
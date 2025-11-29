import React from 'react';
import SectionHeader from './SectionHeader';
import { Facebook, Twitter, Dribbble, Instagram, ArrowRight } from 'lucide-react';

const Author: React.FC = () => {
  return (
    <section id="author" className="bg-brand-light">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row">
        
        {/* Content */}
        <div className="lg:w-1/2 py-20 px-6">
          <SectionHeader title="About" highlight="the Author" />
          
          <div className="prose text-gray-600 mb-8 max-w-lg">
            <p className="mb-4">
              <span className="text-brand-yellow">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.
            </p>
          </div>

          <div className="flex items-center gap-2 mb-8 font-bold text-brand-dark hover:text-brand-yellow cursor-pointer transition-colors w-max">
            Read More <ArrowRight size={16} />
          </div>

          {/* Signature Mock */}
          <div className="mb-8">
            <svg width="200" height="60" viewBox="0 0 200 60" className="text-brand-dark fill-current">
               <path d="M10,50 Q40,10 80,40 T150,30" fill="none" stroke="currentColor" strokeWidth="2" />
               <path d="M20,40 Q60,60 100,20" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          <div className="flex gap-4">
             {[Facebook, Twitter, Dribbble, Instagram].map((Icon, idx) => (
               <a key={idx} href="#" className="text-brand-yellow hover:text-brand-dark transition-colors">
                 <Icon size={20} />
               </a>
             ))}
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 min-h-[400px]">
           <img 
            src="https://picsum.photos/seed/author1/800/800" 
            alt="Author" 
            className="w-full h-full object-cover"
           />
        </div>

      </div>
    </section>
  );
};

export default Author;
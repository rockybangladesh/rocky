import React from 'react';
import SectionHeader from './SectionHeader';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const AboutBook: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <SectionHeader title="About" highlight="The Book" />
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                <span className="text-brand-yellow font-bold">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.
              </p>
            </div>

            <div className="mt-8">
               <Button variant="primary">Read More <ArrowRight size={16} /></Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="https://picsum.photos/seed/openbook/600/400" 
              alt="Open Book" 
              className="rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutBook;
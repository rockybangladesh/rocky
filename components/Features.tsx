import React from 'react';
import SectionHeader from './SectionHeader';
import { ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="bg-brand-light">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Image Section */}
        <div className="lg:w-1/2 h-[500px] lg:h-auto relative overflow-hidden">
          <img 
            src="https://picsum.photos/seed/reading/800/1200" 
            alt="Person reading" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-brand-yellow/10 mix-blend-multiply"></div>
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-brand-dark leading-tight">
              Why People <span className="text-brand-yellow">Download</span><br/>
              <span className="text-brand-yellow">This E-Book?</span>
            </h2>
            <div className="h-1 w-24 bg-brand-dark mt-4"></div>
          </div>

          <div className="space-y-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex gap-4">
                <div className="w-1 bg-brand-yellow h-full flex-shrink-0"></div>
                <p className="text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="flex items-center gap-2 font-bold text-brand-dark hover:text-brand-yellow transition-colors">
              Read More <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
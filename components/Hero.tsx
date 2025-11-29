import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white min-h-[90vh] flex items-center">
      {/* Decorative Yellow Blob */}
      <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-brand-yellow/20 rounded-bl-[200px] -z-0 pointer-events-none transform translate-x-20 -translate-y-20 hidden lg:block"></div>
      <div className="absolute top-0 right-0 w-[100%] h-[50%] bg-brand-yellow/10 rounded-bl-[100px] -z-0 lg:hidden"></div>

      <div className="container mx-auto px-6 relative z-10 py-12 md:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <span className="text-gray-600 font-medium uppercase tracking-wider">The Foundation for</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark leading-tight">
              An Open <br />
              <span className="text-brand-yellow">Source City</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              Lorem Ipsum is simply dummy text of the printing typesetting
              and industry. Lorem Ipsum has been the industry's standard
              dummy text of the printing typesetting and industry.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Button variant="primary">
                Buy Book ($77)
              </Button>
              <button className="flex items-center gap-2 font-bold text-brand-dark hover:text-brand-yellow transition-colors px-4 py-3">
                Subscribe for Free Chapter <ArrowRight size={18} />
              </button>
            </div>
            
            <p className="text-xs text-gray-400 pt-8">
              * $77 for a limited time only<br/>
              * By purchasing agree to the Terms & Conditions
            </p>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 flex justify-center perspective-1000">
             {/* Mocking a 3D Book Cover */}
            <div className="relative group cursor-pointer transition-transform duration-500 hover:scale-105">
               <img 
                src="https://picsum.photos/seed/bookcover1/500/700" 
                alt="Book Cover" 
                className="rounded-r-xl shadow-2xl relative z-20 max-h-[600px] object-cover"
               />
               <div className="absolute top-4 -right-4 w-full h-full bg-gray-900/5 rounded-r-xl -z-10"></div>
            </div>
            {/* Spine Elements floating */}
             <div className="absolute hidden xl:block bottom-10 right-10">
                <div className="w-16 h-64 bg-brand-yellow rounded-lg shadow-lg transform rotate-12 flex flex-col items-center justify-center p-2 text-white font-bold tracking-widest border-2 border-white">
                   <span className="vertical-text py-2 text-black">SOURCE</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
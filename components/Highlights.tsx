import React from 'react';
import SectionHeader from './SectionHeader';
import { ArrowRight } from 'lucide-react';

const HighlightCard: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div className="bg-brand-light p-8 rounded-lg hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-brand-yellow">
    <div className="mb-4">
      <span className="bg-brand-yellow/20 text-brand-dark px-3 py-1 rounded-sm text-sm font-bold uppercase tracking-wide">
        Chapter Focus
      </span>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-brand-dark">{title}</h3>
    <p className="text-gray-500 mb-6 leading-relaxed">
      <span className="text-brand-yellow font-medium">Lorem Ipsum</span> {text}
    </p>
    <a href="#" className="inline-flex items-center text-brand-dark font-bold hover:text-brand-yellow transition-colors">
      Read More <ArrowRight size={16} className="ml-2" />
    </a>
  </div>
);

const Highlights: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader title="Highlight of" highlight="The Book" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <HighlightCard 
            title="Success Stories" 
            text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
          <HighlightCard 
            title="Tips & Tricks" 
            text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
          <HighlightCard 
            title="Innovation ideas" 
            text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
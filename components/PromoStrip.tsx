import React from 'react';
import Button from './Button';

const PromoStrip: React.FC = () => {
  return (
    <section className="bg-brand-yellow py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white md:max-w-2xl text-center md:text-left">
          More than 3000 people read the book Get your copy now!
        </h2>
        <Button variant="black" className="px-10 py-4">
          Get Now
        </Button>
      </div>
    </section>
  );
};

export default PromoStrip;
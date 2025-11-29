import React from 'react';
import SectionHeader from './SectionHeader';
import Button from './Button';

const PricingCard: React.FC<{ title: string; price: number; type: string }> = ({ title, price, type }) => (
  <div className="bg-brand-light p-8 md:p-12 text-center rounded-lg hover:shadow-xl transition-shadow border border-gray-100">
    <h3 className="text-lg font-bold text-brand-dark uppercase tracking-wider mb-6">{title}</h3>
    <div className="text-5xl font-bold text-brand-yellow mb-8">
      {price === 0 ? '0' : price}<sup className="text-2xl">$</sup>
    </div>
    <p className="text-gray-500 mb-8 text-sm">
      <span className="text-brand-yellow">Lorem Ipsum</span> is simply dummy text of the printing and
    </p>
    <Button variant="primary" className="w-full justify-center">Download ↓</Button>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader title="Pricing" highlight="of Book" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <PricingCard title="First Chapter" price={0} type="Free" />
          <PricingCard title="E - Book" price={20} type="Digital" />
          <PricingCard title="Printed Books" price={77} type="Physical" />
        </div>

        <div className="mt-12 text-gray-500 text-sm max-w-2xl">
           <p className="mb-4"><span className="text-brand-yellow">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
           <Button variant="primary">Read More →</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
import React from 'react';
import SectionHeader from './SectionHeader';
import Button from './Button';

const ChapterPreview: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <SectionHeader title="Chapter" highlight="One" />
        
        <div className="max-w-4xl mx-auto mt-12 bg-white p-8 md:p-16 rounded-sm shadow-sm border border-gray-100">
          <div className="text-right border-b border-brand-yellow pb-4 mb-8">
            <h3 className="text-xl font-bold text-brand-dark">The Title of Chapter One is here</h3>
          </div>
          
          <div className="prose prose-lg text-gray-500 max-w-none space-y-6">
            <p>
              <span className="text-5xl float-left mr-4 text-gray-300 leading-[0.8]">L</span>
              orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl orci, fringilla et eleifend quis, varius in erat. Praesent porta lacus nec mollis varius. Duis imperdiet nunc nec felis mollis bibendum. Aliquam a aliquet massa.
            </p>
            <p>
              Curabitur luctus, ex sed aliquet suscipit, est leo dapibus nisi, ac volutpat odio urna eget tellus. Cras nec eleifend mi. Aenean sit amet fermentum risus, nec ullamcorper mauris. Fusce placerat at est ac dignissim. Praesent eget velit porta, ornare eros vel, luctus neque.
            </p>
            <p>
              Nullam at felis quis lorem placerat iaculis at eget nunc. Vivamus id nibh id leo convallis consequat et a turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
             <p>
              Quisque eleifend elit ipsum, non scelerisque risus mattis eget. Pellentesque dui mi, maximus ut erat at, condimentum blandit odio. Phasellus eu nunc tellus. Vivamus vestibulum sapien quis dolor ornare, non eleifend arcu commodo.
            </p>
          </div>

          <div className="mt-16 text-center">
            <h4 className="text-lg font-bold mb-6 text-brand-dark">For Free Chapter, Subscribe Our Newsletter</h4>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <label className="font-bold text-sm text-brand-dark">Email *</label>
              <div className="relative w-full md:w-auto flex-1 max-w-md flex border-2 border-brand-yellow rounded-full overflow-hidden bg-brand-light p-1">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-transparent px-6 py-2 outline-none text-gray-700"
                />
                <Button className="py-2 px-8 rounded-full text-sm">Subscribe →</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterPreview;
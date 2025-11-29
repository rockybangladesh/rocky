import React from 'react';
import SectionHeader from './SectionHeader';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader title="Reader" highlight="Word for Us" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Review 1 */}
          <div className="flex flex-col sm:flex-row gap-6 p-6 border border-gray-100 shadow-sm rounded-lg">
            <div className="flex-shrink-0">
               <img src="https://picsum.photos/seed/user1/150/150" alt="John Doe" className="w-24 h-24 rounded-md object-cover" />
            </div>
            <div>
              <h4 className="text-xl font-bold">John Doe</h4>
              <p className="text-sm text-gray-400 mb-2"><span className="text-brand-yellow">founder</span> @ Company</p>
              <div className="flex text-brand-yellow mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                <span className="text-brand-yellow">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>

          {/* Review 2 */}
           <div className="flex flex-col sm:flex-row gap-6 p-6 border border-gray-100 shadow-sm rounded-lg">
            <div className="flex-shrink-0">
               <img src="https://picsum.photos/seed/user2/150/150" alt="John Doe" className="w-24 h-24 rounded-md object-cover" />
            </div>
            <div>
              <h4 className="text-xl font-bold">John Doe</h4>
              <p className="text-sm text-gray-400 mb-2"><span className="text-brand-yellow">CEO</span> @ Company</p>
              <div className="flex text-brand-yellow mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                <span className="text-brand-yellow">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
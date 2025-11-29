import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutBook from './components/AboutBook';
import Highlights from './components/Highlights';
import ChapterPreview from './components/ChapterPreview';
import PromoStrip from './components/PromoStrip';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Author from './components/Author';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-brand-dark">
      <Navbar />
      <Hero />
      <AboutBook />
      <Highlights />
      <ChapterPreview />
      <PromoStrip />
      <Testimonials />
      <Features />
      <Pricing />
      <Author />
      <Footer />
    </div>
  );
};

export default App;
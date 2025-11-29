import React from 'react';

interface SectionHeaderProps {
  title: string;
  highlight: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, highlight }) => {
  return (
    <div className="flex items-center mb-12">
      <div className="border-l-4 border-brand-yellow h-12 mr-4"></div>
      <h2 className="text-4xl font-bold text-brand-dark">
        {title} <span className="text-brand-yellow">{highlight}</span>
      </h2>
    </div>
  );
};

export default SectionHeader;
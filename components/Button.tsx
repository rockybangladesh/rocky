import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'black';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-yellow text-brand-dark hover:bg-yellow-400",
    outline: "border-2 border-brand-dark text-brand-dark hover:bg-gray-100",
    black: "bg-black text-white hover:bg-gray-900"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
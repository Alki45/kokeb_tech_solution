import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'solid' | string;  // add all variants you want
  asChild?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'solid', asChild, children, ...rest }) => {
  // Use variant to apply styles, example:
  const className =
    variant === 'outline'
      ? 'border border-indigo-600 text-indigo-700'
      : 'bg-indigo-600 text-white';

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;


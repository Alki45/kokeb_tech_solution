import React from 'react';

type ButtonProps = {
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ asChild = false, className = '', children, ...props }: ButtonProps) {
  const Component: any = asChild ? 'span' : 'button';

  return (
    <Component
      className={`bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

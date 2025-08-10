import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}
const Button = ({
  children,
  primary = false,
  href,
  onClick,
  className = '',
  target,
  rel
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 font-medium rounded-md transition-all duration-300 text-base';
  const primaryClasses = 'bg-lime-400 text-black hover:bg-lime-300';
  const secondaryClasses = 'bg-transparent border border-lime-400 text-lime-400 hover:bg-lime-400/10';
  const allClasses = `${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`;
  if (href) {
    return <a href={href} className={allClasses} target={target} rel={rel}>
        {children}
      </a>;
  }
  return <button onClick={onClick} className={allClasses}>
      {children}
    </button>;
};
export default Button;
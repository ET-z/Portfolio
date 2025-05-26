import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button 
      className={`${className} button min-w-24 bg-background rounded-lg cursor-pointer select-none active:translate-y-1 active:[box-shadow:0_1px_0_0_#000000] duration-350 [box-shadow:5px_5px_0_0_#000000] border-1 b-black z-10 py-1`}
      onClick={onClick}
    >
      <span className='flex flex-col justify-center items-center h-full text-sm'>{children}</span>
    </button>
  );
}
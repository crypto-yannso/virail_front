import * as React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        className={cn(
          'w-full px-4 py-2 rounded-lg border transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-primary-300',
          'placeholder:text-black/50 text-black',
          error 
            ? 'border-red-300 focus:ring-red-300' 
            : 'border-gray-200',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
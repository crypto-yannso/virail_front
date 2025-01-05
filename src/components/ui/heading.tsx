import * as React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'primary' | 'secondary';
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 1, variant = 'primary', ...props }, ref) => {
    const Component = `h${level}` as keyof JSX.IntrinsicElements;
    
    return (
      <Component
        ref={ref}
        className={cn(
          variant === 'primary' ? 'heading-primary' : 'heading-secondary',
          {
            'text-4xl': level === 1,
            'text-3xl': level === 2,
            'text-2xl': level === 3,
            'text-xl': level === 4,
            'text-lg': level === 5,
            'text-base': level === 6,
          },
          className
        )}
        {...props}
      />
    );
  }
);

Heading.displayName = 'Heading';
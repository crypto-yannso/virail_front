import React from 'react';
import { cn } from '@/lib/utils';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'body' | 'lead' | 'small' | 'muted';
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = 'body', ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-black',
          {
            'text-base leading-7': variant === 'body',
            'text-lg leading-7 text-black/80': variant === 'lead',
            'text-sm leading-6': variant === 'small',
            'text-sm text-black/70': variant === 'muted',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 1, ...props }, ref) => {
    const Component = `h${level}` as keyof JSX.IntrinsicElements;
    
    return (
      <Component
        ref={ref}
        className={cn(
          'font-display font-semibold tracking-tight text-black',
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
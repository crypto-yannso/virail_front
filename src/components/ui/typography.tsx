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
          'text-slate-900 dark:text-text-primary',
          {
            'text-base leading-7': variant === 'body',
            'text-lg leading-7 text-slate-700 dark:text-text-secondary': variant === 'lead',
            'text-sm leading-6': variant === 'small',
            'text-sm text-slate-500 dark:text-text-secondary': variant === 'muted',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 1, ...props }, ref) => {
    const Component = `h${level}` as keyof JSX.IntrinsicElements;
    
    return (
      <Component
        ref={ref}
        className={cn(
          'font-display font-semibold tracking-tight',
          'text-slate-900 dark:text-text-primary',
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
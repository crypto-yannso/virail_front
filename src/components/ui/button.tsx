import * as React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-primary',
          'disabled:opacity-50',
          {
            // Primary variant
            'bg-primary-600 dark:bg-dark-tertiary text-white dark:text-text-primary': 
              variant === 'primary',
            'hover:bg-primary-700 dark:hover:bg-dark-quaternary':
              variant === 'primary',
            'border border-transparent dark:border-text-secondary/20':
              variant === 'primary',
            
            // Secondary variant
            'bg-white dark:bg-dark-secondary text-slate-900 dark:text-text-primary':
              variant === 'secondary',
            'border border-slate-200 dark:border-dark-tertiary':
              variant === 'secondary',
            'hover:bg-slate-50 dark:hover:bg-dark-tertiary':
              variant === 'secondary',
            
            // Outline variant
            'border border-slate-200 dark:border-text-secondary/20':
              variant === 'outline',
            'bg-transparent dark:bg-transparent':
              variant === 'outline',
            'text-slate-900 dark:text-text-primary':
              variant === 'outline',
            'hover:bg-slate-50 dark:hover:bg-dark-tertiary':
              variant === 'outline',

            // Sizes
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export type { ButtonProps };
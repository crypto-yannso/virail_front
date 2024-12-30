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
          'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50',
          {
            'bg-cyber-dark border border-neon-blue/30 text-black hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]': 
              variant === 'primary',
            'bg-glass hover:bg-glass-hover text-black border border-white/10': 
              variant === 'secondary',
            'border border-neon-blue/30 text-black hover:border-neon-blue hover:bg-cyber-dark/50': 
              variant === 'outline',
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
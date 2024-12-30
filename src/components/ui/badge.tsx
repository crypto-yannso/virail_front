import * as React from 'react';
import { cn } from '@/lib/utils';

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-black',
          {
            'bg-primary-100': variant === 'default',
            'bg-green-100': variant === 'success',
            'bg-yellow-100': variant === 'warning',
            'bg-red-100': variant === 'error',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';
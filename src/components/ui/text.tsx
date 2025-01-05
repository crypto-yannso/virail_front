import * as React from 'react';
import { cn } from '@/lib/utils';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'primary' | 'secondary' | 'muted';
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-content',
          {
            'text-content': variant === 'primary',
            'text-content-secondary': variant === 'secondary',
            'text-content-muted': variant === 'muted',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';
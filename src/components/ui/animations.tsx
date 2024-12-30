import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedProps extends React.HTMLAttributes<HTMLDivElement> {
  animation: 'fade-in' | 'slide-in' | 'scale-in';
  duration?: 'fast' | 'normal' | 'slow';
}

export const Animated = React.forwardRef<HTMLDivElement, AnimatedProps>(
  ({ className, animation, duration = 'normal', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'animate-fade-in',
          {
            'animate-fade-in': animation === 'fade-in',
            'animate-slide-in': animation === 'slide-in',
            'animate-scale-in': animation === 'scale-in',
            'duration-150': duration === 'fast',
            'duration-300': duration === 'normal',
            'duration-500': duration === 'slow',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Animated.displayName = 'Animated';
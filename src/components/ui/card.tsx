import * as React from 'react';
import { cn } from '@/lib/utils';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'bg-white dark:bg-dark-secondary rounded-lg border border-slate-200/60 dark:border-dark-tertiary',
        'shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-none',
        'hover:shadow-[0_8px_16px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_16px_rgba(0,0,0,0.4)]',
        'text-slate-900 dark:text-white transition-all duration-200',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn(
        'p-6 pb-4 text-slate-900 dark:text-white',
        className
      )} 
      {...props} 
    />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 
      ref={ref} 
      className={cn(
        'font-display text-xl font-semibold',
        'text-slate-900 dark:text-white',
        className
      )} 
      {...props} 
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn(
        'p-6 pt-0 text-slate-700 dark:text-white/80',
        className
      )} 
      {...props} 
    />
  )
);
CardContent.displayName = 'CardContent';

export { Card, CardHeader, CardTitle, CardContent };
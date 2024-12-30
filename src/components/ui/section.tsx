import * as React from 'react';
import { cn } from '@/lib/utils';

const Section = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <section
      ref={ref}
      className={cn('space-y-6', className)}
      {...props}
    />
  )
);
Section.displayName = 'Section';

const SectionHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center justify-between', className)}
      {...props}
    />
  )
);
SectionHeader.displayName = 'SectionHeader';

const SectionTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-lg font-display font-semibold text-gray-900', className)}
      {...props}
    />
  )
);
SectionTitle.displayName = 'SectionTitle';

export { Section, SectionHeader, SectionTitle };
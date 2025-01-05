import * as React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({ 
  title, 
  description, 
  children, 
  className,
  ...props 
}: PageHeaderProps) {
  return (
    <div 
      className={cn(
        "flex flex-col xs:flex-row justify-between items-start xs:items-center gap-4 mb-6",
        className
      )}
      {...props}
    >
      <div>
        <h1 className="text-2xl font-display font-semibold text-slate-900 dark:text-text-primary">{title}</h1>
        {description && (
          <p className="mt-1 text-sm text-slate-500 dark:text-text-secondary">{description}</p>
        )}
      </div>
      {children && (
        <div className="w-full xs:w-auto flex flex-col xs:flex-row gap-3">
          {children}
        </div>
      )}
    </div>
  );
}
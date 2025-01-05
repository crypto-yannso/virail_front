import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-dark-tertiary">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-slate-100 dark:bg-dark-tertiary">
          {isDark ? (
            <Moon size={20} className="text-text-secondary" />
          ) : (
            <Sun size={20} className="text-amber-500" />
          )}
        </div>
        <div>
          <h3 className="font-medium text-slate-900 dark:text-text-primary">
            Apparence
          </h3>
          <p className="text-sm text-slate-500 dark:text-text-secondary">
            {isDark ? 'Mode sombre' : 'Mode clair'}
          </p>
        </div>
      </div>
      
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-6 w-11 items-center rounded-full
                 bg-slate-200 dark:bg-dark-quaternary
                 transition-colors duration-300"
      >
        <span
          className={`${
            isDark ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full 
          bg-white dark:bg-text-primary
          transition-transform duration-300`}
        />
      </button>
    </div>
  );
}; 
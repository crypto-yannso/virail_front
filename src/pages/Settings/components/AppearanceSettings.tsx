import { Moon } from 'lucide-react';
import { ThemeToggle } from '../../../components/ui/ThemeToggle';

const AppearanceSettings = () => {
  return (
    <div className="bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Moon size={20} className="text-primary dark:text-text-secondary" />
        <h2 className="text-lg font-semibold dark:text-text-primary">Apparence</h2>
      </div>
      
      <div className="space-y-6">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default AppearanceSettings; 
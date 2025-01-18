import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Home, PenTool, Bot, Library, BarChart2, Settings, 
  MessageSquare, User, Mic
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUser } from '../../hooks/useUser';
import type { MenuItem } from '../../types';
import { userDatas } from '@/providers/AuthProvider';

const menuItems: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'Home', path: '/' },
  { id: 'content', label: 'Content Creation', icon: 'PenTool', path: '/content' },
  { id: 'automation', label: 'AI Automation', icon: 'Bot', path: '/automation' },
  { id: 'brand-voice', label: 'Brand Voice', icon: 'Mic', path: '/brand-voice' },
  { id: 'library', label: 'Resource Library', icon: 'Library', path: '/library' },
  { id: 'analytics', label: 'Analytics', icon: 'BarChart2', path: '/analytics' },
  { id: 'settings', label: 'Settings', icon: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { firstName, lastName } = userDatas();
  
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ElementType } = {
      Home, PenTool, Bot, Library, BarChart2, Settings, Mic
    };
    return icons[iconName];
  };

  return (
    <aside className="w-[15vw] fixed left-0 top-0 h-screen bg-white dark:bg-dark-primary border-r border-gray-200 dark:border-border-dark flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-display font-semibold text-primary dark:text-accent-blue">VIRAIL</h1>
      </div>

      <nav className="flex-1 px-4">
        {menuItems.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center space-x-3 px-4 py-3 rounded-lg mb-1 transition-colors',
                  isActive
                    ? 'bg-primary/10 dark:bg-dark-tertiary text-primary dark:text-accent-blue font-medium'
                    : 'text-slate-600 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-dark-tertiary'
                )
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-border-dark">
        <button 
          onClick={() => navigate('/profile')}
          className="flex items-center space-x-3 p-2 w-full hover:bg-gray-100 dark:hover:bg-dark-tertiary rounded-lg transition-colors"
        >
          {user?.avatar ? (
            <img 
              src={user.avatar} 
              alt={`${user.firstName} ${user.lastName}`}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <User size={20} className="text-gray-600 dark:text-text-secondary" />
          )}
          <div className="text-left">
            <p className="text-sm font-medium text-slate-900 dark:text-text-primary">
              {user ? `${firstName} ${lastName}` : 'Loading...'}
            </p>
            <p className="text-xs text-slate-600 dark:text-text-secondary">{user?.role}</p>
          </div>
        </button>
        
        <button 
          onClick={() => navigate('/help')}
          className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-dark-tertiary hover:bg-gray-200 dark:hover:bg-dark-quaternary transition-colors text-slate-900 dark:text-text-primary"
        >
          <MessageSquare size={16} />
          <span>Help Center</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
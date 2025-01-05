import React from 'react';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { CreateIcon, AIIcon, ScheduleIcon, OptimizeIcon } from '@/components/icons/DashboardIcons';

const QuickActions = () => {
  const navigate = useNavigate();
  
  const actions = [
    { 
      Icon: CreateIcon,
      label: 'Create Content', 
      path: '/content',
      iconColor: 'text-violet-500 group-hover:text-violet-600 dark:text-violet-400 dark:group-hover:text-violet-300',
    },
    { 
      Icon: AIIcon,
      label: 'Configure AI', 
      path: '/automation',
      iconColor: 'text-blue-500 group-hover:text-blue-600 dark:text-blue-400 dark:group-hover:text-blue-300',
    },
    { 
      Icon: ScheduleIcon,
      label: 'Schedule Posts', 
      path: '/content',
      iconColor: 'text-emerald-500 group-hover:text-emerald-600 dark:text-emerald-400 dark:group-hover:text-emerald-300',
    },
    { 
      Icon: OptimizeIcon,
      label: 'Optimize', 
      path: '/analytics',
      iconColor: 'text-amber-500 group-hover:text-amber-600 dark:text-amber-400 dark:group-hover:text-amber-300',
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {actions.map(({ Icon, label, path, iconColor }) => (
        <Card 
          key={label}
          onClick={() => navigate(path)}
          className="p-6 flex flex-col items-center justify-center gap-4 cursor-pointer 
                    transition-all duration-300 group hover:bg-gray-50 dark:hover:bg-dark-tertiary"
        >
          <div className={`${iconColor} transition-all duration-300 transform group-hover:scale-110`}>
            <Icon />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white/90">
            {label}
          </span>
        </Card>
      ))}
    </div>
  );
};

export default QuickActions;
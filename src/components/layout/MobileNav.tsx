import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, PenTool, Bot, Library, BarChart2, Settings } from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/content', icon: PenTool, label: 'Content' },
  { path: '/automation', icon: Bot, label: 'AI' },
  { path: '/library', icon: Library, label: 'Library' },
  { path: '/analytics', icon: BarChart2, label: 'Analytics' },
  { path: '/settings', icon: Settings, label: 'Settings' },
];

const MobileNav = () => {
  return (
    <nav className="bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center p-2 rounded-lg ${
                  isActive ? 'text-primary' : 'text-gray-600'
                }`
              }
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default MobileNav;
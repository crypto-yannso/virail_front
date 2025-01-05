import React from 'react';
import { Target, Users, ExternalLink } from 'lucide-react';

const goals = [
  { id: 'engagement', label: 'Increase Engagement', icon: Target },
  { id: 'followers', label: 'Boost Follower Growth', icon: Users },
  { id: 'traffic', label: 'Drive Traffic to Content', icon: ExternalLink },
];

const GoalSelector = () => {
  return (
    <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-6">
      <h3 className="font-semibold text-slate-900 dark:text-text-primary mb-4">Choose Your Growth Focus</h3>
      <div className="space-y-3">
        {goals.map((goal) => {
          const Icon = goal.icon;
          return (
            <label key={goal.id} className="flex items-center p-3 border border-slate-200 dark:border-border-dark rounded-lg hover:border-primary dark:hover:border-accent-blue cursor-pointer transition-colors">
              <input
                type="checkbox"
                className="rounded border-slate-300 dark:border-border-dark text-primary dark:text-accent-blue focus:ring-primary dark:focus:ring-accent-blue/20 mr-3"
              />
              <Icon size={18} className="text-slate-500 dark:text-text-secondary mr-2" />
              <span className="text-slate-900 dark:text-text-primary">{goal.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default GoalSelector;
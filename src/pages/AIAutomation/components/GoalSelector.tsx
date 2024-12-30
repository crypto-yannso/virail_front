import React from 'react';
import { Target, Users, ExternalLink } from 'lucide-react';

const goals = [
  { id: 'engagement', label: 'Increase Engagement', icon: Target },
  { id: 'followers', label: 'Boost Follower Growth', icon: Users },
  { id: 'traffic', label: 'Drive Traffic to Content', icon: ExternalLink },
];

const GoalSelector = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-4">Choose Your Growth Focus</h3>
      <div className="space-y-3">
        {goals.map((goal) => {
          const Icon = goal.icon;
          return (
            <label key={goal.id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-primary cursor-pointer transition-colors">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-primary focus:ring-primary mr-3"
              />
              <Icon size={18} className="text-gray-500 mr-2" />
              <span>{goal.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default GoalSelector;
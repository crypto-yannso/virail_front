import React from 'react';
import { MessageSquare, Share2, ThumbsUp, Eye } from 'lucide-react';

interface Activity {
  id: number;
  type: 'comment' | 'share' | 'like' | 'view';
  content: string;
  time: string;
}

const ActivityIcon = ({ type }: { type: Activity['type'] }) => {
  const icons = {
    comment: <MessageSquare className="w-4 h-4" />,
    share: <Share2 className="w-4 h-4" />,
    like: <ThumbsUp className="w-4 h-4" />,
    view: <Eye className="w-4 h-4" />
  };

  const colors = {
    comment: 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
    share: 'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
    like: 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400',
    view: 'bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400'
  };

  return (
    <div className={`p-2 rounded-lg ${colors[type]}`}>
      {icons[type]}
    </div>
  );
};

const ActivityFeed: React.FC = () => {
  // Données factices pour les activités
  const activities: Activity[] = [
    {
      id: 1,
      type: 'comment',
      content: 'Nouveau commentaire sur "Les tendances marketing 2024"',
      time: 'Il y a 5 min'
    },
    {
      id: 2,
      type: 'share',
      content: 'Article partagé sur LinkedIn',
      time: 'Il y a 15 min'
    },
    {
      id: 3,
      type: 'like',
      content: '5 nouveaux likes sur votre dernier article',
      time: 'Il y a 30 min'
    },
    {
      id: 4,
      type: 'view',
      content: '100+ vues sur "Guide du Content Marketing"',
      time: 'Il y a 1h'
    },
    {
      id: 5,
      type: 'comment',
      content: 'Réponse à votre commentaire',
      time: 'Il y a 2h'
    }
  ];

  return (
    <div className="dashboard-card p-6">
      <h2 className="text-lg font-semibold mb-6">Activités Récentes</h2>
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4">
            <ActivityIcon type={activity.type} />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 dark:text-gray-100 font-medium">
                {activity.content}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-6 text-sm text-primary-600 dark:text-accent-blue hover:text-primary-700 dark:hover:text-accent-lightBlue font-medium">
        Voir toutes les activités
      </button>
    </div>
  );
};

export default ActivityFeed;
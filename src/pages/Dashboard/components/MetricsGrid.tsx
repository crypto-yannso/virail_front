import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  period: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, period }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="dashboard-card p-6">
      <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
          <div className="flex items-center mt-2">
            <span className={`flex items-center text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
              {Math.abs(change)}%
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">vs {period}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MetricsGridProps {
  loading?: boolean;
  data?: any;
}

const MetricsGrid: React.FC<MetricsGridProps> = ({ loading }) => {
  // Données factices pour les métriques
  const metrics = [
    {
      title: "Contenu Généré",
      value: "1,234",
      change: 12.5,
      period: "dernier mois"
    },
    {
      title: "Engagement Total",
      value: "85.4K",
      change: -2.3,
      period: "dernier mois"
    },
    {
      title: "Taux de Conversion",
      value: "3.2%",
      change: 8.1,
      period: "dernier mois"
    },
    {
      title: "Temps Moyen de Lecture",
      value: "4m 12s",
      change: 5.7,
      period: "dernier mois"
    }
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="dashboard-card p-6 animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-4"></div>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default MetricsGrid;
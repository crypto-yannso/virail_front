import React from 'react';
import { PlusCircle, FileText, BarChart2, Settings } from 'lucide-react';

interface QuickActionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const QuickAction: React.FC<QuickActionProps> = ({ icon, title, description, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="dashboard-card p-6 text-left transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
};

const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: <PlusCircle className="w-6 h-6" />,
      title: "Créer un Contenu",
      description: "Démarrer un nouveau projet de contenu",
      onClick: () => console.log("Créer un contenu")
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Gérer la Bibliothèque",
      description: "Accéder à vos contenus existants",
      onClick: () => console.log("Gérer la bibliothèque")
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Voir les Analytics",
      description: "Analyser les performances",
      onClick: () => console.log("Voir les analytics")
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Paramètres",
      description: "Configurer votre espace",
      onClick: () => console.log("Paramètres")
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {actions.map((action, index) => (
        <QuickAction key={index} {...action} />
      ))}
    </div>
  );
};

export default QuickActions;
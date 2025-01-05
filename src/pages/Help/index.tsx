import React from 'react';
import { Book, MessageCircle, Coffee, Search } from 'lucide-react';
import { PageHeader } from '@/components/layout/page-header';
import { useTranslation } from '../../hooks/useTranslation';

const Help = () => {
  const { t } = useTranslation();
  
  const categories = [
    { 
      icon: Book, 
      title: t('help.categories.documentation.title'),
      description: t('help.categories.documentation.description'),
      articles: [
        t('help.articles.gettingStarted'),
        t('help.articles.contentCreation'),
        t('help.articles.aiSetup'),
        t('help.articles.analytics')
      ]
    },
    {
      icon: MessageCircle,
      title: t('help.categories.support.title'),
      description: t('help.categories.support.description'),
      articles: [
        t('help.articles.support'),
        t('help.articles.bugReport'),
        t('help.articles.featureRequest'),
        t('help.articles.accountIssues')
      ]
    },
    {
      icon: Coffee,
      title: t('help.categories.community.title'),
      description: t('help.categories.community.description'),
      articles: [
        t('help.articles.discord'),
        t('help.articles.forums'),
        t('help.articles.share'),
        t('help.articles.guidelines')
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <PageHeader title={t('help.title')} />
      
      <div className="relative">
        <input
          type="text"
          placeholder={t('help.searchPlaceholder')}
          className="w-full px-4 py-3 pl-12 bg-white dark:bg-dark-tertiary rounded-lg border border-gray-200 dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent-blue text-slate-900 dark:text-text-primary placeholder-gray-400 dark:placeholder-text-secondary"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-text-secondary" size={20} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map(({ icon: Icon, title, description, articles }) => (
          <div key={title} className="bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-sm dark:shadow-dark-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 dark:bg-accent-blue/10 rounded-lg">
                <Icon size={20} className="text-primary dark:text-accent-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-text-primary">{title}</h3>
                <p className="text-sm text-slate-500 dark:text-text-secondary">{description}</p>
              </div>
            </div>
            
            <ul className="space-y-2">
              {articles.map((article) => (
                <li key={article}>
                  <button className="w-full text-left px-3 py-2 text-sm text-slate-600 dark:text-text-secondary hover:bg-gray-50 dark:hover:bg-dark-tertiary rounded-lg transition-colors">
                    {article}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
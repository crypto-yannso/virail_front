import { Twitter, Linkedin, Instagram, BookOpen, FileText, MessageSquare } from 'lucide-react';

export const platforms = [
  { 
    id: 'twitter', 
    name: 'Twitter/X', 
    icon: Twitter, 
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400', 
    limit: '280 characters' 
  },
  { 
    id: 'linkedin', 
    name: 'LinkedIn', 
    icon: Linkedin, 
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400', 
    limit: '3000 characters' 
  },
  { 
    id: 'instagram', 
    name: 'Instagram', 
    icon: Instagram, 
    color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400', 
    limit: '2200 characters' 
  },
  { 
    id: 'medium', 
    name: 'Medium', 
    icon: BookOpen, 
    color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400', 
    limit: 'Unlimited' 
  },
  {
    id: 'reddit',
    name: 'Reddit',
    icon: MessageSquare,
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    limit: '40000 characters'
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    icon: FileText,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    limit: 'Unlimited'
  }
]; 
import { Twitter, BookOpen, Globe, Send, Instagram, FileText } from 'lucide-react';
import type { Platform } from '../types/platform';

export const platforms: Platform[] = [
  {
    id: 'twitter',
    name: 'Twitter/X',
    icon: Twitter,
    color: 'bg-black text-white',
    limit: '280 characters',
    features: ['text', 'image', 'link']
  },
  {
    id: 'medium',
    name: 'Medium',
    icon: BookOpen,
    color: 'bg-green-100 text-green-600',
    limit: 'Unlimited',
    features: ['text', 'image']
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    icon: Globe,
    color: 'bg-blue-100 text-blue-600',
    limit: 'Unlimited',
    features: ['text', 'image', 'link']
  },
  {
    id: 'telegram',
    name: 'Telegram',
    icon: Send,
    color: 'bg-sky-100 text-sky-600',
    limit: '4096 characters',
    features: ['text', 'image', 'link']
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    color: 'bg-pink-100 text-pink-600',
    limit: '2200 characters',
    features: ['text', 'image']
  },
  {
    id: 'reddit',
    name: 'Reddit',
    icon: FileText,
    color: 'bg-orange-100 text-orange-600',
    limit: '40000 characters',
    features: ['text', 'link']
  }
];
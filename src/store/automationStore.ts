import { create } from 'zustand';
import { automation } from '../services/api';
import type { AutomationSettings, ContentSchedule, AIMetrics, AIResource } from '../types/automation';

interface AutomationState {
  settings: AutomationSettings;
  schedules: ContentSchedule[];
  metrics: AIMetrics;
  resources: AIResource[];
  updateSettings: (settings: Partial<AutomationSettings>) => void;
  toggleMode: () => void;
  generateReport: () => Promise<void>;
  applyChanges: () => Promise<void>;
  addResource: (resource: AIResource) => void;
  removeResource: (id: string) => void;
}

export const useAutomationStore = create<AutomationState>((set, get) => ({
  settings: {
    mode: 'automatic',
    postingFrequency: 4,
    contentCreativity: 2,
    activeTopics: ['#AI', '#Tech', '#Innovation', '#Future'],
    smartScheduling: true,
    autoOptimization: true,
  },
  schedules: [],
  metrics: {
    successRate: 92,
    engagementScore: 8.4,
    topPerformingTopics: ['#AI', '#Innovation'],
  },
  resources: [],

  addResource: (resource) =>
    set((state) => ({
      resources: [...state.resources, resource]
    })),

  removeResource: (id) =>
    set((state) => ({
      resources: state.resources.filter(r => r.id !== id)
    })),

  // ... rest of the store implementation remains the same
}));
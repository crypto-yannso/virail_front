import { create } from 'zustand';
import type { GrowthGoal, AutomationIntensity, GrowthMetrics, GrowthResult } from '../types/raas';

interface GrowthState {
  goals: GrowthGoal[];
  intensity: AutomationIntensity;
  metrics: GrowthMetrics;
  results: GrowthResult[];
  setGoals: (goals: GrowthGoal[]) => void;
  setIntensity: (intensity: AutomationIntensity) => void;
  updateMetrics: (metrics: Partial<GrowthMetrics>) => void;
}

export const useGrowthStore = create<GrowthState>((set) => ({
  goals: [],
  intensity: 'balanced',
  metrics: {
    engagement: 0,
    followers: 0,
    traffic: 0,
    weeklyGrowth: 0,
  },
  results: [],
  setGoals: (goals) => set({ goals }),
  setIntensity: (intensity) => set({ intensity }),
  updateMetrics: (newMetrics) =>
    set((state) => ({
      metrics: { ...state.metrics, ...newMetrics },
    })),
}));
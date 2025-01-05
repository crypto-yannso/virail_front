import { Platform } from './platform';

export type GrowthGoal = 'engagement' | 'followers' | 'traffic';
export type AutomationIntensity = 'light' | 'balanced' | 'aggressive';

export interface GrowthMetrics {
  engagement: number;
  followers: number;
  traffic: number;
  weeklyGrowth: number;
}

export interface AutomationGoals {
  selectedGoals: GrowthGoal[];
  intensity: AutomationIntensity;
  platforms: Platform[];
  aiPlatformSelection: boolean;
}

export interface GrowthResult {
  goal: GrowthGoal;
  achieved: number;
  target: number;
  trend: 'up' | 'down';
}
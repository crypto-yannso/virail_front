export interface AnalyticsOverview {
  engagement: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
  followers: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
  reach: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
  interactions: {
    value: number;
    change: number;
    trend: 'up' | 'down';
  };
}

export interface PerformanceData {
  date: string;
  engagement: number;
  reach: number;
  followers: number;
}
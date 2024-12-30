export interface Region {
  id: string;
  name: string;
  languages: string[];
  timezone: string;
  population: number;
  interests: string[];
}

export interface RegionMetrics {
  reachPotential: number;
  engagementRate: number;
  competitionLevel: 'low' | 'medium' | 'high';
  topInterests: string[];
  bestPostingTimes: string[];
}
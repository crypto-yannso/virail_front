import { useEffect } from 'react';
import { useGrowthStore } from '../store/growthStore';
import type { GrowthMetrics } from '../types/raas';

export const useGrowthTracking = () => {
  const { goals, metrics, updateMetrics } = useGrowthStore();

  useEffect(() => {
    // Simulated metrics update every 5 minutes
    const interval = setInterval(() => {
      const newMetrics: Partial<GrowthMetrics> = {
        engagement: metrics.engagement + Math.floor(Math.random() * 10),
        followers: metrics.followers + Math.floor(Math.random() * 5),
        traffic: metrics.traffic + Math.floor(Math.random() * 20),
      };
      
      updateMetrics(newMetrics);
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [metrics, updateMetrics]);

  return {
    metrics,
    activeGoals: goals,
  };
};
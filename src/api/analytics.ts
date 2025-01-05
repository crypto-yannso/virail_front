import apiClient from './client';
import { ENDPOINTS } from './config';
import type { AnalyticsOverview, PerformanceData } from '../types/analytics';

export const analyticsApi = {
  getOverview: async (timeframe: string = '7d') => {
    const response = await apiClient.get(ENDPOINTS.ANALYTICS.OVERVIEW, {
      params: { timeframe }
    });
    return response.data as AnalyticsOverview;
  },

  getPerformance: async (startDate: string, endDate: string) => {
    const response = await apiClient.get(ENDPOINTS.ANALYTICS.PERFORMANCE, {
      params: { startDate, endDate }
    });
    return response.data as PerformanceData;
  },

  getAudienceStats: async () => {
    const response = await apiClient.get(ENDPOINTS.ANALYTICS.AUDIENCE);
    return response.data;
  }
};
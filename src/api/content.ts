import apiClient from './client';
import { ENDPOINTS } from './config';
import type { ContentData, ScheduleData } from '../types/content';

export const contentApi = {
  create: async (data: ContentData) => {
    const response = await apiClient.post(ENDPOINTS.CONTENT.CREATE, data);
    return response.data;
  },

  schedule: async (data: ScheduleData) => {
    const response = await apiClient.post(ENDPOINTS.CONTENT.SCHEDULE, data);
    return response.data;
  },

  analyze: async (content: string) => {
    const response = await apiClient.post(ENDPOINTS.CONTENT.ANALYZE, { content });
    return response.data;
  }
};
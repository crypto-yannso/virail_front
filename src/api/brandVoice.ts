import apiClient from './client';
import { ENDPOINTS } from './config';
import type { BrandVoice, BrandFile } from '../types/brandVoice';

export const brandVoiceApi = {
  generatePreview: async (data: Partial<BrandVoice>) => {
    const response = await apiClient.post(ENDPOINTS.BRAND.PREVIEW, data);
    return response.data;
  },

  saveVoice: async (data: BrandVoice) => {
    const response = await apiClient.post(ENDPOINTS.BRAND.VOICE, data);
    return response.data;
  },

  uploadFile: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await apiClient.post(ENDPOINTS.BRAND.UPLOAD, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  }
};
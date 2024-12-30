import axios from 'axios';
import { API_BASE_URL, API_TIMEOUT, ENDPOINTS } from '../config/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Error interceptor
api.interceptors.response.use(
  response => response,
  error => {
    // Handle common errors (401, 403, etc.)
    if (error.response?.status === 401) {
      // Handle unauthorized
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Authentication
export const auth = {
  login: (credentials: { email: string; password: string }) => 
    api.post(ENDPOINTS.AUTH.LOGIN, credentials),
  logout: () => api.post(ENDPOINTS.AUTH.LOGOUT),
};

// Content Management
export const content = {
  create: (data: any) => api.post(ENDPOINTS.CONTENT.CREATE, data),
  schedule: (data: any) => api.post(ENDPOINTS.CONTENT.SCHEDULE, data),
  generateVariation: (id: string) => api.post(ENDPOINTS.CONTENT.VARIATIONS(id)),
};

// AI Automation
export const automation = {
  start: (config: any) => api.post(ENDPOINTS.AUTOMATION.START, config),
  stop: () => api.post(ENDPOINTS.AUTOMATION.STOP),
  updateSettings: (settings: any) => api.put(ENDPOINTS.AUTOMATION.SETTINGS, settings),
  getStatus: () => api.get(ENDPOINTS.AUTOMATION.STATUS),
};

// Analytics
export const analytics = {
  getOverview: () => api.get(ENDPOINTS.ANALYTICS.OVERVIEW),
  getMetrics: (timeframe: string) => api.get(ENDPOINTS.ANALYTICS.METRICS, { params: { timeframe } }),
  exportReport: (params: any) => api.get(ENDPOINTS.ANALYTICS.EXPORT, { params }),
};

// Resource Management
export const resources = {
  upload: (formData: FormData) => api.post(ENDPOINTS.RESOURCES.UPLOAD, formData),
  delete: (id: string) => api.delete(ENDPOINTS.RESOURCES.DELETE(id)),
  list: () => api.get(ENDPOINTS.RESOURCES.LIST),
};

// Brand Voice
export const brandVoice = {
  save: (config: any) => api.post(ENDPOINTS.BRAND_VOICE.SAVE, config),
  generate: (params: any) => api.post(ENDPOINTS.BRAND_VOICE.GENERATE, params),
  test: (content: string) => api.post(ENDPOINTS.BRAND_VOICE.TEST, { content }),
};

export default api;
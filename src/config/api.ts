export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';
export const API_TIMEOUT = 30000; // 30 seconds

export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
  },
  CONTENT: {
    CREATE: '/content',
    SCHEDULE: '/content/schedule',
    VARIATIONS: (id: string) => `/content/${id}/variations`,
  },
  AUTOMATION: {
    START: '/automation/start',
    STOP: '/automation/stop',
    STATUS: '/automation/status',
    SETTINGS: '/automation/settings',
  },
  ANALYTICS: {
    OVERVIEW: '/analytics/overview',
    METRICS: '/analytics/metrics',
    EXPORT: '/analytics/export',
  },
  RESOURCES: {
    LIST: '/resources',
    UPLOAD: '/resources/upload',
    DELETE: (id: string) => `/resources/${id}`,
  },
  BRAND_VOICE: {
    SAVE: '/brand-voice',
    GENERATE: '/brand-voice/generate',
    TEST: '/brand-voice/test',
  },
};
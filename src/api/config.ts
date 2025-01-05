export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
};

export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh'
  },
  BRAND: {
    VOICE: '/brand/voice',
    UPLOAD: '/brand/upload',
    PREVIEW: '/brand/preview'
  },
  CONTENT: {
    CREATE: '/content',
    SCHEDULE: '/content/schedule',
    ANALYZE: '/content/analyze'
  },
  ANALYTICS: {
    OVERVIEW: '/analytics/overview',
    PERFORMANCE: '/analytics/performance',
    AUDIENCE: '/analytics/audience'
  }
};
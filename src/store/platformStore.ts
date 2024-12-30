import { create } from 'zustand';
import type { ConnectedPlatform } from '../types/platform';
import { platforms } from '../config/platforms';

interface PlatformState {
  platforms: ConnectedPlatform[];
  selectedPlatforms: string[];
  togglePlatform: (platformId: string) => void;
  connectPlatform: (platformId: string) => Promise<void>;
  disconnectPlatform: (platformId: string) => Promise<void>;
  fetchPlatformStatus: () => Promise<void>;
}

export const usePlatformStore = create<PlatformState>((set, get) => ({
  platforms: platforms.map(platform => ({
    ...platform,
    connected: false,
    accountName: '',
    lastSync: null
  })),
  selectedPlatforms: [],
  
  togglePlatform: (platformId) => set((state) => ({
    selectedPlatforms: state.selectedPlatforms.includes(platformId)
      ? state.selectedPlatforms.filter(id => id !== platformId)
      : [...state.selectedPlatforms, platformId]
  })),

  connectPlatform: async (platformId) => {
    try {
      // Here you would make an API call to connect the platform
      // For now, we'll simulate it
      set((state) => ({
        platforms: state.platforms.map(platform =>
          platform.id === platformId
            ? {
                ...platform,
                connected: true,
                accountName: `@${platform.name.toLowerCase()}_user`,
                lastSync: new Date().toISOString()
              }
            : platform
        )
      }));
    } catch (error) {
      console.error('Failed to connect platform:', error);
      throw error;
    }
  },

  disconnectPlatform: async (platformId) => {
    try {
      // Here you would make an API call to disconnect the platform
      set((state) => ({
        platforms: state.platforms.map(platform =>
          platform.id === platformId
            ? {
                ...platform,
                connected: false,
                accountName: '',
                lastSync: null
              }
            : platform
        )
      }));
    } catch (error) {
      console.error('Failed to disconnect platform:', error);
      throw error;
    }
  },

  fetchPlatformStatus: async () => {
    try {
      // Here you would make an API call to get the current platform statuses
      // For now, we'll keep the current state
    } catch (error) {
      console.error('Failed to fetch platform status:', error);
    }
  }
}));
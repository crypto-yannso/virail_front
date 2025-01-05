import { create } from 'zustand';
import { automation } from '../services/api';
import type { AIStatus } from '../types';

interface AppState {
  aiStatus: AIStatus;
  rightPanelOpen: boolean;
  setAIStatus: (status: AIStatus) => void;
  toggleRightPanel: () => void;
  toggleAI: () => Promise<void>;
}

export const useStore = create<AppState>((set, get) => ({
  aiStatus: {
    status: 'disabled',
    lastUpdated: new Date(),
  },
  rightPanelOpen: false,
  
  setAIStatus: (status) => set({ aiStatus: status }),
  
  toggleRightPanel: () => set((state) => ({ 
    rightPanelOpen: !state.rightPanelOpen 
  })),
  
  toggleAI: async () => {
    const currentStatus = get().aiStatus.status;
    try {
      if (currentStatus === 'active') {
        await automation.stop();
        set({ aiStatus: { status: 'disabled', lastUpdated: new Date() }});
      } else {
        await automation.start({});
        set({ aiStatus: { status: 'active', lastUpdated: new Date() }});
      }
    } catch (error) {
      console.error('Failed to toggle AI:', error);
    }
  },
}));
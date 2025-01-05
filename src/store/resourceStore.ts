import { create } from 'zustand';
import { formatBytes } from '../utils/formatters';

export interface Resource {
  id: string;
  name: string;
  type: 'document' | 'image' | 'video';
  size: string;
  date: string;
  url: string;
  file?: File;
}

interface ResourceStore {
  resources: Resource[];
  selectedType: string;
  selectedDate: string;
  totalStorage: number;
  addResource: (file: File) => Promise<void>;
  removeResource: (id: string) => void;
  setSelectedType: (type: string) => void;
  setSelectedDate: (date: string) => void;
  getFilteredResources: () => Resource[];
}

export const useResourceStore = create<ResourceStore>((set, get) => ({
  resources: [],
  selectedType: 'all',
  selectedDate: 'any',
  totalStorage: 0,

  addResource: async (file: File) => {
    const id = crypto.randomUUID();
    const type = file.type.startsWith('image/') ? 'image' :
                file.type.startsWith('video/') ? 'video' : 'document';

    const url = URL.createObjectURL(file);
    
    const newResource: Resource = {
      id,
      name: file.name,
      type,
      size: formatBytes(file.size),
      date: new Date().toISOString(),
      url,
      file
    };

    set(state => ({
      resources: [newResource, ...state.resources],
      totalStorage: state.totalStorage + file.size
    }));
  },

  removeResource: (id: string) => {
    const resource = get().resources.find(r => r.id === id);
    if (resource?.url) {
      URL.revokeObjectURL(resource.url);
    }

    set(state => ({
      resources: state.resources.filter(r => r.id !== id),
      totalStorage: state.totalStorage - (resource?.file?.size || 0)
    }));
  },

  setSelectedType: (type: string) => set({ selectedType: type }),
  setSelectedDate: (date: string) => set({ selectedDate: date }),

  getFilteredResources: () => {
    const { resources, selectedType, selectedDate } = get();
    
    return resources.filter(resource => {
      // Filter by type
      if (selectedType !== 'all' && resource.type !== selectedType) {
        return false;
      }

      // Filter by date
      if (selectedDate !== 'any') {
        const resourceDate = new Date(resource.date);
        const now = new Date();
        
        switch (selectedDate) {
          case 'today':
            return resourceDate.toDateString() === now.toDateString();
          case 'week':
            const weekAgo = new Date(now.setDate(now.getDate() - 7));
            return resourceDate >= weekAgo;
          case 'month':
            const monthAgo = new Date(now.setMonth(now.getMonth() - 1));
            return resourceDate >= monthAgo;
        }
      }

      return true;
    });
  }
})); 
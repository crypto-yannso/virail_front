import { create } from 'zustand';
import { userService } from '../services/userService';
import type { UserProfile, UserActivity } from '../types/user';

interface UserState {
  profile: UserProfile | null;
  activities: UserActivity[];
  loading: boolean;
  error: string | null;
  fetchProfile: () => Promise<void>;
  fetchActivities: () => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  updateAvatar: (file: File) => Promise<void>;
}

export const useUserStore = create<UserState>((set, get) => ({
  profile: null,
  activities: [],
  loading: false,
  error: null,

  fetchProfile: async () => {
    try {
      set({ loading: true, error: null });
      const { data } = await userService.getCurrentUser();
      set({ profile: data });
    } catch (error) {
      set({ error: 'Failed to fetch profile' });
    } finally {
      set({ loading: false });
    }
  },

  fetchActivities: async () => {
    try {
      const { data } = await userService.getActivities();
      set({ activities: data });
    } catch (error) {
      console.error('Failed to fetch activities:', error);
    }
  },

  updateProfile: async (data) => {
    try {
      set({ loading: true, error: null });
      const { data: updatedProfile } = await userService.updateProfile(data);
      set({ profile: updatedProfile });
    } catch (error) {
      set({ error: 'Failed to update profile' });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  updateAvatar: async (file) => {
    try {
      set({ loading: true, error: null });
      const { data } = await userService.updateAvatar(file);
      set(state => ({
        profile: state.profile ? { ...state.profile, avatar: data.avatarUrl } : null
      }));
    } catch (error) {
      set({ error: 'Failed to update avatar' });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));
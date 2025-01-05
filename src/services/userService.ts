import api from './api';
import type { UserProfile, UserActivity } from '../types/user';

export const userService = {
  getCurrentUser: () => 
    api.get<UserProfile>('/user/profile'),
  
  updateProfile: (data: Partial<UserProfile>) =>
    api.put<UserProfile>('/user/profile', data),
  
  updateAvatar: (file: File) => {
    const formData = new FormData();
    formData.append('avatar', file);
    return api.put<{ avatarUrl: string }>('/user/avatar', formData);
  },
  
  getActivities: () =>
    api.get<UserActivity[]>('/user/activities'),
  
  changePassword: (currentPassword: string, newPassword: string) =>
    api.put('/user/password', { currentPassword, newPassword }),
  
  enable2FA: () =>
    api.post('/user/2fa/enable'),
  
  disable2FA: () =>
    api.post('/user/2fa/disable'),
};
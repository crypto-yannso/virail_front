export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
  website?: string;
  location?: string;
  timezone: string;
  createdAt: string;
  lastLogin: string;
}

export interface UserActivity {
  id: string;
  type: 'login' | 'settings_update' | 'password_change' | 'profile_update';
  description: string;
  location?: string;
  timestamp: string;
  deviceInfo?: string;
}
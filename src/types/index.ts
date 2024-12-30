export interface User {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

export interface AIStatus {
  status: 'active' | 'paused' | 'disabled';
  lastUpdated: Date;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}
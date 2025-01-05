export interface Platform {
  id: string;
  name: string;
  icon: React.ComponentType;
  color: string;
  limit: string;
  features: ('text' | 'image' | 'link')[];
}

export interface ConnectedPlatform extends Platform {
  connected: boolean;
  accountName: string;
  lastSync: string | null;
}
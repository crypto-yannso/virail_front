export interface AIResource {
  id: string;
  name: string;
  type: 'file' | 'link';
  file?: File;
  url?: string;
  size?: number;
  uploadedAt: string;
}

// ... existing types remain the same
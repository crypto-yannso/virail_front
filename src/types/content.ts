export interface ContentData {
  type: 'text' | 'image' | 'video';
  content: string;
  platforms: string[];
  schedule?: Date;
  targeting?: {
    regions: string[];
    languages: string[];
  };
}

export interface ScheduleData {
  contentId: string;
  publishDate: Date;
  platforms: string[];
}
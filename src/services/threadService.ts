import api from './api';

export const generateThread = async (topic: string, platform: 'twitter' | 'reddit'): Promise<string[]> => {
  try {
    const { data } = await api.post('/content/thread', {
      topic,
      platform,
      style: platform === 'twitter' ? 'concise' : 'detailed'
    });
    return data.content;
  } catch (error) {
    console.error('Thread generation failed:', error);
    throw error;
  }
};
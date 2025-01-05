import { useState, useEffect } from 'react';

interface Activity {
  id: string;
  type: 'ai' | 'manual';
  description: string;
  timestamp: string;
}

export const useActivityFeed = () => {
  const [data, setData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/activities');
        if (!response.ok) {
          throw new Error('Failed to fetch activities');
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch activities'));
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  return { data, loading, error };
};
import { useState, useEffect } from 'react';

interface AnalyticsMetrics {
  engagement: { value: string; change: string; trend: 'up' | 'down' };
  followers: { value: string; change: string; trend: 'up' | 'down' };
  comments: { value: string; change: string; trend: 'up' | 'down' };
  shares: { value: string; change: string; trend: 'up' | 'down' };
}

export const useAnalytics = () => {
  const [metrics, setMetrics] = useState<AnalyticsMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/analytics');
        if (!response.ok) {
          throw new Error('Failed to fetch analytics');
        }
        const data = await response.json();
        setMetrics(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch analytics'));
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  return { metrics, loading, error };
};
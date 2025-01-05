import { useState } from 'react';
import api from '../services/api';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = async <T>(
    apiCall: () => Promise<T>,
    onSuccess?: (data: T) => void
  ) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      onSuccess?.(result);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { execute, loading, error };
};
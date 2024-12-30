import { useEffect } from 'react';
import { useUserStore } from '../store/userStore';

export const useUser = () => {
  const { profile, activities, loading, error, fetchProfile, fetchActivities } = useUserStore();

  useEffect(() => {
    if (!profile) {
      fetchProfile();
    }
    fetchActivities();
  }, []);

  return {
    user: profile,
    activities,
    loading,
    error,
  };
};
import { useState, useEffect } from 'react';
import { settingsAPI } from '../services/api';
import { adminData } from '../data/mock';

export const useSettings = () => {
  const [settings, setSettings] = useState(adminData.settings);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await settingsAPI.get();
      setSettings(data);
    } catch (err) {
      console.error('Failed to fetch settings:', err);
      setError(err.message);
      // Keep mock data as fallback
      setSettings(adminData.settings);
    } finally {
      setLoading(false);
    }
  };

  const updateSettings = async (newSettings) => {
    try {
      setError(null);
      const updatedData = await settingsAPI.update(newSettings);
      setSettings(updatedData);
      return updatedData;
    } catch (err) {
      console.error('Failed to update settings:', err);
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return {
    settings,
    loading,
    error,
    updateSettings,
    refetch: fetchSettings,
  };
};

export default useSettings;
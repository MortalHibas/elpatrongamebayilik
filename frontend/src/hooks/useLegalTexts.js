import { useState, useEffect } from 'react';
import { legalTextsAPI } from '../services/api';
import { adminData } from '../data/mock';

export const useLegalTexts = () => {
  const [legalTexts, setLegalTexts] = useState(adminData.legalTexts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLegalTexts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await legalTextsAPI.get();
      setLegalTexts({
        terms: data.terms,
        privacy: data.privacy,
      });
    } catch (err) {
      console.error('Failed to fetch legal texts:', err);
      setError(err.message);
      // Keep mock data as fallback
      setLegalTexts(adminData.legalTexts);
    } finally {
      setLoading(false);
    }
  };

  const updateLegalTexts = async (newTexts) => {
    try {
      setError(null);
      const updatedData = await legalTextsAPI.update(newTexts);
      setLegalTexts({
        terms: updatedData.terms,
        privacy: updatedData.privacy,
      });
      return updatedData;
    } catch (err) {
      console.error('Failed to update legal texts:', err);
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchLegalTexts();
  }, []);

  return {
    legalTexts,
    loading,
    error,
    updateLegalTexts,
    refetch: fetchLegalTexts,
  };
};

export default useLegalTexts;
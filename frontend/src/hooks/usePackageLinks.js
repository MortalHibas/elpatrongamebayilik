import { useState, useEffect } from 'react';
import { packageLinksAPI } from '../services/api';
import { adminData } from '../data/mock';

export const usePackageLinks = () => {
  const [packageLinks, setPackageLinks] = useState(adminData.packageLinks);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPackageLinks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await packageLinksAPI.get();
      setPackageLinks({
        basic: data.basic,
        orta: data.orta,
        luks: data.luks,
      });
    } catch (err) {
      console.error('Failed to fetch package links:', err);
      setError(err.message);
      // Keep mock data as fallback
      setPackageLinks(adminData.packageLinks);
    } finally {
      setLoading(false);
    }
  };

  const updatePackageLinks = async (newLinks) => {
    try {
      setError(null);
      const updatedData = await packageLinksAPI.update(newLinks);
      setPackageLinks({
        basic: updatedData.basic,
        orta: updatedData.orta,
        luks: updatedData.luks,
      });
      return updatedData;
    } catch (err) {
      console.error('Failed to update package links:', err);
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchPackageLinks();
  }, []);

  return {
    packageLinks,
    loading,
    error,
    updatePackageLinks,
    refetch: fetchPackageLinks,
  };
};

export default usePackageLinks;
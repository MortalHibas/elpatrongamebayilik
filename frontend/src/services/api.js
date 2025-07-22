import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Settings API
export const settingsAPI = {
  get: async () => {
    try {
      const response = await apiClient.get('/settings');
      return response.data;
    } catch (error) {
      console.error('Error fetching settings:', error);
      throw error;
    }
  },

  update: async (settingsData) => {
    try {
      const response = await apiClient.post('/settings', settingsData);
      return response.data;
    } catch (error) {
      console.error('Error updating settings:', error);
      throw error;
    }
  },
};

// Package Links API
export const packageLinksAPI = {
  get: async () => {
    try {
      const response = await apiClient.get('/packages');
      return response.data;
    } catch (error) {
      console.error('Error fetching package links:', error);
      throw error;
    }
  },

  update: async (linksData) => {
    try {
      const response = await apiClient.put('/packages', linksData);
      return response.data;
    } catch (error) {
      console.error('Error updating package links:', error);
      throw error;
    }
  },
};

// Legal Texts API
export const legalTextsAPI = {
  get: async () => {
    try {
      const response = await apiClient.get('/legal');
      return response.data;
    } catch (error) {
      console.error('Error fetching legal texts:', error);
      throw error;
    }
  },

  update: async (textsData) => {
    try {
      const response = await apiClient.put('/legal', textsData);
      return response.data;
    } catch (error) {
      console.error('Error updating legal texts:', error);
      throw error;
    }
  },
};

// Content API
export const contentAPI = {
  getBySection: async (section) => {
    try {
      const response = await apiClient.get(`/content/${section}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching content for section ${section}:`, error);
      throw error;
    }
  },

  getAll: async () => {
    try {
      const response = await apiClient.get('/content');
      return response.data;
    } catch (error) {
      console.error('Error fetching all content:', error);
      throw error;
    }
  },

  updateBySection: async (section, contentData) => {
    try {
      const response = await apiClient.put(`/content/${section}`, {
        content: contentData
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating content for section ${section}:`, error);
      throw error;
    }
  },
};

// General API health check
export const healthCheck = async () => {
  try {
    const response = await apiClient.get('/');
    return response.data;
  } catch (error) {
    console.error('API health check failed:', error);
    throw error;
  }
};

export default apiClient;
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://suaapi.com/api',
  timeout: 10000, // 10s
  withCredentials: true,
  withXSRFToken: true
});

api.interceptors.request.use((config) => {
  config.headers.Accept = `application/json`;
  
  return config;
});

export default api;

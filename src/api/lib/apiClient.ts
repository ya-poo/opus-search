import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.openopus.org',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

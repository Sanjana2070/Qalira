import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update if deployed
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
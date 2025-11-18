// API configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '' // In production, use relative URLs (Vercel handles routing)
  : 'http://localhost:8000'; // In development, use full backend URL

export default API_BASE_URL;


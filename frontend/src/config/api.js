// If VITE_API_BASE_URL is set (local), use it
// If not (production), use "" so /api works automatically
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export default API_BASE_URL;


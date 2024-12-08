import { useSession } from "@/cxt";
import axios from "axios";

// Base URL from environment variable
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

// Function to get the authorization token
const getAuthToken = (): string | null => {
  const { session } = useSession();
  return session || null;
};

// Create a default Axios instance
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Add request interceptor to include authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Create an Axios instance for multipart/form-data requests
export const axiosInstanceMultipart = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Add request interceptor for multipart instance
axiosInstanceMultipart.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Export the default Axios instance
export default axiosInstance;

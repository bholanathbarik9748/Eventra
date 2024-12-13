import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create an Axios instance
export const apiClient = axios.create({
  baseURL: "https://eventra-main-server-production.up.railway.app/api/v1",
  timeout: 10000, // Set a timeout limit for requests
});

// REQUEST INTERCEPTOR
apiClient.interceptors.request.use(
  async (config) => {
    try {
      // Retrieve token from AsyncStorage
      const token = await AsyncStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR for error handling
apiClient.interceptors.response.use(
  (response) => response, // Pass successful responses
  (error) => {
    if (error.response) {
      // Error responses from the server (HTTP 4xx, 5xx)
      return Promise.reject({
        status: error.response.status,
        data: error.response.data,
      });
    } else if (error.request) {
      // Request was made but no response received
      return Promise.reject({
        message: "No response from server",
      });
    } else {
      // Other errors
      return Promise.reject({
        message: error.message,
      });
    }
  }
);

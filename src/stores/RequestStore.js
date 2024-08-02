import { defineStore } from "pinia";
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/support-requests";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response) {
      const errorMessage = response.data?.message || response.data || "An unexpected error occurred.";
      const errorDetails = {
        status: response.status,
        data: response.data,
        headers: response.headers,
      };
      console.error('API Error:', errorDetails);
      throw new Error(`${response.status}: ${errorMessage}`);
    } else if (error.request) {
      console.error('No response received:', error.request);
      throw new Error('No response received from the server. Please check your network connection.');
    } else {
      console.error('Error setting up request:', error.message);
      throw new Error(`Request setup error: ${error.message}`);
    }
  }
);

export const useRequestStore = defineStore({
  id: "request",
  state: () => ({
    requests: [],
    error: null,
    isLoading: false,
  }),
  getters: {
    getRequestById: (state) => (id) => state.requests.find((req) => req.id === id),
    totalRequests: (state) => state.requests.length,
  },
  actions: {
    async fetchAllRequests() {
      this.isLoading = true;
      this.error = null;
      try {
        const { data } = await api.get("");
        this.requests = data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    async addRequest(newRequest) {
      this.isLoading = true;
      this.error = null;
      try {
        const { data } = await api.post("", newRequest);
        this.requests.push(data);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    async updateRequest(id, updatedRequest) {
      this.isLoading = true;
      this.error = null;
      try {
        const { data } = await api.put(`/${id}`, updatedRequest);
        const index = this.requests.findIndex((req) => req.id === id);
        if (index !== -1) {
          this.requests[index] = data;
        } else {
          throw new Error(`Request with id ${id} not found in local state.`);
        }
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    async deleteRequest(id) {
      this.isLoading = true;
      this.error = null;
      try {
        await api.delete(`/${id}`);
        this.requests = this.requests.filter((req) => req.id !== id);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    clearError() {
      this.error = null;
    },
  },
});

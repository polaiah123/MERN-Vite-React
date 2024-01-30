// ApiService.js

import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/'; // Replace with your backend URL

const ApiService = {
  // GET request
  get: async (endpoint) => {
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}`);
      return response.data;
    } catch (error) {
      console.error(`Error in GET request to ${endpoint}:`, error);
      throw error;
    }
  },

  // POST request
  post: async (endpoint, data) => {
    try {
      const response = await axios.post(`${BASE_URL}${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error in POST request to ${endpoint}:`, error);
      throw error;
    }
  },

  // PUT request (update)
  put: async (endpoint, data) => {
    try {
      const response = await axios.put(`${BASE_URL}${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error in PUT request to ${endpoint}:`, error);
      throw error;
    }
  },

  // DELETE request
  delete: async (endpoint) => {
    try {
      const response = await axios.delete(`${BASE_URL}${endpoint}`);
      return response.data;
    } catch (error) {
      console.error(`Error in DELETE request to ${endpoint}:`, error);
      throw error;
    }
  },

  // Add more API functions as needed
};

export default ApiService;

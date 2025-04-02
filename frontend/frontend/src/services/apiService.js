import axios from 'axios';

// Backend is running on port 3000, so update the API base URL
const API_BASE_URL = 'http://localhost:3000/api';  

const apiService = {
  getTopUsers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching top users:', error);
      return [];
    }
  },

  getTrendingPosts: async (type) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/posts?type=${type}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  },
};

export default apiService;

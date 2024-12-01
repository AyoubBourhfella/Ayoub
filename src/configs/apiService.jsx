import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiService = {
    get: async (path) => {
        try {
            const response = await axios.get(`${BASE_URL}${path}`, {
                headers: {
                    'Accept': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            console.error('GET request failed:', error.response ? error.response.data : error.message);
            throw error; // Re-throw the error to be handled by the calling code
        }
    },

    post: async (path, body) => {
        try {
            const response = await axios.post(`${BASE_URL}${path}`, body, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            console.error('POST request failed:', error.response ? error.response.data : error.message);
            throw error; // Re-throw the error to be handled by the calling code
        }
    },
};

export default apiService;

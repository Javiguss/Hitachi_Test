const axios = require('axios');

class ApiUtils {
    async getPostsByUser(userId) {
        try {
            const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
            const queryParams = {
                userId: userId,
                // Other parameters as needed
            };

            const response = await axios.get(apiUrl, { params: queryParams });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch posts: ${error.message}`);
        }
    }
}

module.exports = ApiUtils;

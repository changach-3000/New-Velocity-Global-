const API_SERVER_URL = 'https://velocity-global-express.onrender.com/api';

const apiServerClient = {
    fetch: async (url, options = {}) => {
        const headers = {
            ...options.headers,
        };
        
        // If we're sending JSON data, automatically add the Content-Type header
        if (options.body && typeof options.body === 'string' && !headers['Content-Type']) {
            headers['Content-Type'] = 'application/json';
        }
        
        return await window.fetch(API_SERVER_URL + url, {
            ...options,
            headers,
        });
    }
};

export default apiServerClient;

export { apiServerClient };
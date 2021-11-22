import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const API = {
    addUser: function (userData) {
        return axios.post('/api/users/signup', userData);
    },
    loginUser: function(userData) {
        return axios.post('/api/users/login', userData);
    },
    getAllPosts: function() {
        return axios.get('/api/posts/all');
    },
}

export default API;
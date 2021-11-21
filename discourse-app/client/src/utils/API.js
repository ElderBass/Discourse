import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const API = {
    addUser: function (userData) {
        return axios.post('/api/signup', userData);
    },
    login: function(userData) {
        return axios.post('/api/login', userData);
    },
    getAllPosts: function() {
        console.log('\n \n are we doiong this ? \n \n');
        return axios.get('/api/posts/all');
        // console.log(' \n \n response in get all posts API = ', response.body, '\n \n ');
        // if (response.isSucces) {
        //     return { posts: response.posts, isSucces: true };
        // }
    }
}

export default API;
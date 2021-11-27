import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const API = {
	addUser: function (userData) {
		return axios.post('/api/users/signup', userData);
	},
	loginUser: function (userData) {
		return axios.post('/api/users/login', userData);
	},
	getAllPosts: function () {
		return axios.get('/api/posts/all');
	},
	createPost: function (postData) {
		return axios.post('/api/posts/create', postData, {
			headers: { Authorization: localStorage.getItem('at') }
		});
	}
}

export default API;
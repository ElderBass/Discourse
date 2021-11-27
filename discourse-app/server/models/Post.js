const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    body: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true, 
    },
    likes: {
        type: Number,
    },
    comments: {
        type: Array,
    },
    userId: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String,
        required: true
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: {
        type: String,
        required: true,
    },
    commentText: {
        type: String,
        required: true,
    },
    subComments: {
        type: Array,
    },
    userId: {
        type: String,
        required: true,
    },
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
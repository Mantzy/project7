const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    postId: { type: String, required: true },
    userId: { type: String, required: true },
    user: { type: [Object], blackbox: true, required: true },
    comment: { type: String, required: true }





});

module.exports = mongoose.model('Comment', commentSchema);
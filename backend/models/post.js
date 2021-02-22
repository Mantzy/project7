const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    //_id: { type: String, required: true },
    userId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: false },
    likes: { type: Number, required: false },
    usersLiked: { type: [String], required: false }


});

module.exports = mongoose.model('Post', postSchema);
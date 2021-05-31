//const mongoose = require('mongoose');
const db = require('../config/db.config');
//const uniqueValidator = require('mongoose-unique-validator');
const DataTypes = require("sequelize");


const Post = db.define("posts", {
    //userId: { type: String, required: true, unique: true },

    userId: { type: DataTypes.STRING },
    user: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    imageUrl: { type: DataTypes.STRING },
    likes: { type: DataTypes.INTEGER },
    usersLiked: { type: DataTypes.STRING },
    userRead: { type: DataTypes.STRING }

});

//userSchema.plugin(uniqueValidator);

module.exports = Post
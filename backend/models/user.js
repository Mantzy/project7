//const mongoose = require('mongoose');
const db = require('../config/db.config');
//const uniqueValidator = require('mongoose-unique-validator');
const DataTypes = require("sequelize");


const User = db.define("users", {
    //userId: { type: String, required: true, unique: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    profile: { type: DataTypes.STRING }
});

//userSchema.plugin(uniqueValidator);

module.exports = User
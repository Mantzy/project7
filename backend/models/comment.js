const db = require('../config/db.config');
const DataTypes = require("sequelize");


const Comment = db.define("comment", {
    postId: { type: DataTypes.STRING },
    userId: { type: DataTypes.STRING },
    user: { type: DataTypes.STRING },
    comment: { type: DataTypes.STRING }





});

//module.exports = mongoose.model('Comment', commentSchema);
module.exports = Comment
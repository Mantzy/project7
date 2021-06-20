const Comment = require('../models/comment');

const fs = require('fs');

exports.createComment = (req, res, next) => {

    // req.body = JSON.parse(req.body);
    const url = req.protocol + '://' + req.get('host');
    const comment = new Comment({
        comment: req.body.comment,
        userId: req.body.userId,
        user: req.body.user,
        postId: req.body.postId,
    });
    comment.save().then(
        () => {
            res.status(201).json({
                message: 'Comment posted successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getAllComments = (req, res, next) => {
    Comment.findAll({
        where: { postId: req.params.id },
        order: [
            ["createdAt", "DESC"]
        ]
    }).then(

        (posts) => {
            res.status(200).json(posts);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};
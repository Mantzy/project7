const Post = require('../models/post');

const fs = require('fs');

exports.createPost = (req, res, next) => {

    // req.body = JSON.parse(req.body);
    const url = req.protocol + '://' + req.get('host');
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        imageUrl: url + '/images/' + req.file.filename,
        likes: 0,
        usersLiked: "[]",
        userId: req.body.userId,
        user: req.body.user,
        userRead: "[]"
    });
    post.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
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

exports.getOnePost = (req, res, next) => {
    Post.findOne({
        where: { id: req.params.id }
    }).then(
        (post) => {
            res.status(200).json(post);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.modifyPost = (req, res, next) => {
    /* res.status(201).json({
         message: req.file.filename
     });*/
    let post = Post.findOne({
        where: { id: req.params.id }
    });
    if (req.file) {
        const url = req.protocol + '://' + req.get('host');
        post = {
            name: req.body.name,
            title: req.body.title,
            description: req.body.description,
            imageUrl: url + '/images/' + req.file.filename,
        };
    } else {
        post = {
            name: req.body.name,
            title: req.body.title,
            description: req.body.description,
        };
    }
    Post.update(post, { where: { id: req.params.id } }).then(
        () => {
            res.status(201).json({
                message: 'Post updated successfully!'
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

exports.deletePost = (req, res, next) => {
    Post.findOne({
        where: { id: req.params.id }
    }).then(
        (post) => {

            if (post.imageUrl == undefined) {
                post.destroy().then(
                    () => {
                        res.status(200).json({
                            message: 'Post deleted!'
                        });
                    }
                ).catch(
                    (error) => {
                        res.status(400).json({
                            error: error
                        });
                    }
                );
            } else {
                const filename = post.imageUrl.split('/images/')[1];
                fs.unlink('images/' + filename, () => {
                    post.destroy().then(
                        () => {
                            res.status(200).json({
                                message: 'Post deleted!'
                            });
                        }
                    ).catch(
                        (error) => {
                            res.status(400).json({
                                error: error
                            });
                        }
                    );
                });
            }


        }
    );
};

exports.getAllPosts = (req, res, next) => {
    Post.findAll({
            order: [
                ["createdAt", "DESC"]
            ]
        })
        .then(
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

exports.likePost = (req, res, next) => {
    Post.findOne({
        where: { id: req.body.post.id }
    }).then(
        (post) => {
            post.usersLiked = JSON.parse(post.usersLiked)
            switch (req.body.post.like) {
                case 1:
                    post.likes += 1
                    post.usersLiked.push(req.body.userId)
                    break;
                case 0:
                    if (post.usersLiked.includes(req.body.userId)) {
                        let index = post.usersLiked.findIndex(x => x == req.body.userId.toString());
                        post.usersLiked.splice(index, 1);

                        post.likes -= 1
                            // post.usersLiked.remove(req.body.userId)
                    }
                    break;

            }
            post.usersLiked = JSON.stringify(post.usersLiked)
            post.save().then(

                () => {
                    res.status(201).json({
                        message: 'Post like updated!'
                    });
                }
            ).catch(
                (error) => {
                    res.status(400).json({
                        error: error
                    });
                }
            );
        }

    )

};

exports.userRead = (req, res, next) => {
    Post.findOne({
        where: { id: req.params.id }
    }).then(
        (post) => {
            post.userRead = JSON.parse(post.userRead)
                //if (!post.userRead.includes(req.body.read)) {
            post.userRead.push(req.body.post.read)

            //}



            post.userRead = JSON.stringify(post.userRead)
            post.save().then(

                () => {
                    res.status(201).json({
                        message: 'Post has been read!'
                    });
                }
            ).catch(
                (error) => {
                    res.status(400).json({
                        error: error
                    });
                }
            );
        }

    )

}
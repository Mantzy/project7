const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');


const commentCtrl = require('../controllers/comment');


router.post('/:id', auth, commentCtrl.createComment);
router.get('/:id', auth, commentCtrl.getAllComments);


module.exports = router;
const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/posts')

router.post('/', postsCtrl.createPost);
router.get('/', postsCtrl.getAllPosts);
router.delete('/:id', postsCtrl.deletePost);

module.exports = router;
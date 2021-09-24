const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/posts')

router.post('/api/post', postsCtrl.createPost);
router.get('/api/posts', postsCtrl.getAllPosts);

module.exports = router;
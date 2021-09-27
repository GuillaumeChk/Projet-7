const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth')
const multer = require('../middlewares/multer-config');

const postsCtrl = require('../controllers/posts')

router.get('/', auth, postsCtrl.getAllPosts);
router.post('/', auth, multer, postsCtrl.createPost);
router.delete('/:id', auth, postsCtrl.deletePost);

module.exports = router;
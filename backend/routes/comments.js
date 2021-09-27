const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth')

const commentsCtrl = require('../controllers/comments');

router.post('/', auth, commentsCtrl.createComment);
router.get('/', auth, commentsCtrl.getAllComments);
router.delete('/:id', auth, commentsCtrl.deleteComment);

module.exports = router;
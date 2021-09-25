const express = require('express');
const router = express.Router();

const commentsCtrl = require('../controllers/comments');

router.post('/', commentsCtrl.createComment);
router.get('/', commentsCtrl.getAllComments);
router.delete('/:id', commentsCtrl.deleteComment);

module.exports = router;
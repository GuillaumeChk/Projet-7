const sequelize = require('../db');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.createPost = async (req, res, next) => {
  delete req.body.id;
  const post = await Post.create({
    ...req.body
  });
  post.save()
    .then(() => { res.status(201).json({
      message: 'Post saved successfully!'
    });})
    .catch((error) => { res.status(400).json({ error: error });});
};

exports.deletePost = async (req, res, next) => {
  await Post.destroy({
    where: {
      id: req.params.id
    }
  });

  // Supprime également tous les commentaires de ce post
  await Comment.destroy({
    where: {
      postId: req.params.id
    }
  })
};

exports.getAllPosts = async (req, res, next) => {
    const posts = await Post.findAll();
  res.status(200).json(posts);
};
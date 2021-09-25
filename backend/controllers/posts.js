const sequelize = require('../db');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.createPost = async (req, res, next) => {
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
   /*
    const posts = [
    {
      id: 1,
      user: 'Jean Dupont',
      text: "texte texte",
      date: '21.09.21',
      hour: '08:05'
    },
    {
      id: 2,
      user: 'Bertrand Jacquard',
      text: "grege",
      date: '21.09.21',
      hour: '14:46'
    },
    {
      id: 3,
      user: 'Cyril Bob',
      text: "tgegregre u ehf uezfz fuez hf izehfeuhf eizuhfuez fez ghiuez ghfiez hfi heuz hexte",
      date: '21.09.21',
      hour: '09:01'
    },
    {
      id: 4,
      user: 'Jean Dupont',
      text: "texgrryeyeyreete",
      date: '21.09.21',
      hour: '14:46'
    },
  ];
  */
  res.status(200).json(posts);
};
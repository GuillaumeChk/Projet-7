
const Post = require('../models/Post');

exports.createPost = (req, res, next) => {
    // // DB
    // const post = await Post.create({
    //   ...req.body
    // });


    ///
    console.log(req.body);
    res.status(201).json({
      message: 'Objet créé !'
    });
  };

exports.getAllPosts = (req, res) => {
    // const posts = Post.findAll();
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
  res.status(200).json(posts);
};
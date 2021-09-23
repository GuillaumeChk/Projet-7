const express = require('express');

const app = express();

const Post = require('./models/Post')
const User = require('./models/User')
const Comment = require('./models/Comment')

// DB avec Sequelize
const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('groupomania', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
});

try {
    sequelize.authenticate();
    console.log('Connection to database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.post('/api/post', (req, res, next) => {
    // // DB
    // const post = await Post.create({
    //   ...req.body
    // });


    ///
    console.log(req.body);
    res.status(201).json({
      message: 'Objet créé !'
    });
  });

app.use('/api/posts',(req, res) => {
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
});

app.use('/api/comments',(req, res) => {
    const comments = [
        {
          id: 1,
          postId: 1,
          user: 'Cyril Bob',
          text: "ça va ?",
          date: '21.09.21',
          hour: '14:46'
        },
        {
          id: 2,
          postId: 1,
          user: 'Jean Dupont',
          text: "bonjour",
          date: '21.09.21',
          hour: '15:46'
        },
        {
          id: 3,
          postId: 1,
          user: 'Bertrand Jacquard',
          text: "salut c'est moi Bertrand",
          date: '21.09.21',
          hour: '16:46'
        },
        {
          id: 5,
          postId: 3,
          user: 'Cyril Bob',
          text: "ok",
          date: '22.09.21',
          hour: '14:46'
        },
        {
          id: 4,
          postId: 3,
          user: 'Bertrand Jacquard',
          text: "oui",
          date: '22.09.21',
          hour: '18:46'
        },
        
    ];
   res.status(200).json(comments);
});

app.use('/api/users',(req, res) => {
    const users = [
        {
          name: 'Jean Dupont',
          mail: 'jeand@mail.fr',
          password: 'jeanjean1'
        },
        {
          name: 'Bertrand Jacquard',
          mail: 'bertj@mail.fr',
          password: 'bertbert2'
        },
        {
          name: 'Cyril Bob',
          mail: 'cyrib@mail.fr',
          password: 'cyricyri3'
        }
    ];
    res.status(200).json(users);
});

module.exports = app;
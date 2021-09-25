const User = require('../models/User');

exports.signup = (req, res, next) => {

};

exports.login = (req, res, next) => {

};

exports.getAllUsers = (req, res) => {
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
};
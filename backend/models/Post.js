const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mariadb::memory:');

const Post = sequelize.define('Post', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER(255),
    allowNull: false,
    primaryKey: true
  },
  user: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  hour: {
    type: DataTypes.STRING(6),
    allowNull: false
  },
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(Post === sequelize.models.Post); // true

module.exports = sequelize.models.Post;
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mariadb::memory:');

const Comment = sequelize.define('Comment', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER(255),
    allowNull: false,
    primaryKey: true
  },
  postId: {
    type: DataTypes.INTEGER(255),
    allowNull: false
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
console.log(Comment === sequelize.models.Comment); // true

module.exports = sequelize.models.Comment;
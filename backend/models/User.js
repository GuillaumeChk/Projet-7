const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  mail: {
    type: DataTypes.STRING(100),
    allowNull: false,
    primaryKey: true
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

module.exports = User;
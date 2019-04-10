'use strict';

const Model = require('sequelize').Model;
const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class User extends Model{}

User.init({
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username:     Sequelize.STRING,
  password:     Sequelize.STRING,
  status:       Sequelize.CHAR
},{ sequelize});

User.sync({force:true});

module.exports = User;

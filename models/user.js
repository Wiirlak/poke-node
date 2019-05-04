'use strict';

const Model = require('sequelize').Model;
const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;
const bcrypt = require('bcrypt');
const bcryptNode = require('bcrypt-nodejs');

class User extends Model{
  static async generateHash(password) {
    return await bcrypt.hash(password, bcrypt.genSaltSync(8));;
  }

  validPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

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
},{ paranoid: true,sequelize});

// User.sync();

module.exports = User;

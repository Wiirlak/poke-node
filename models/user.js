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
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  status: Sequelize.CHAR
},{ sequelize});

User.sync();

module.exports = User;

function passwordHash(pwd) {
  const bcrypt = require('bcrypt');
  const saltRounds = 10;
  bcrypt.hash(pwd, saltRounds, function(err, hash) {
    // Store hash in your password DB.
  });
}

async function checkUser(usr, pwd) {
    const match = await bcrypt.compare(pwd, usr.password);

    if(match) {
        //login
    }

    //...
}

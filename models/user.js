'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INT,
      unique: true,
      allowNull: false
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.CHAR
  }, {
    freezeTableName: true,
    paranoid: true,
    underscored: true
  });
  User.associate = function(models) {
    User.hasMany(models.Task);
  };
  return User;
};

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

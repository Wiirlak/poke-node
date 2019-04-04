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

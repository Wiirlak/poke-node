'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pass = sequelize.define('Pass', {
    id: {
      type: DataTypes.INT,
      unique: true,
      allowNull: false
    },
    date_end: DataTypes.DATE,
    date_begin: DataTypes.DATE,
    date_in: DataTypes.DATE,
    date_out: DataTypes.DATE
  }, {
    freezeTableName: true,
    paranoid: true,
    underscored: true
  });
  Pass.associate = function(models) {
    Pass.hasMany(models.Task);
  };
  return Pass;
};

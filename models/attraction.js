'use strict';

module.exports = (sequelize, DataTypes) => {
  const Attraction = sequelize.define('Attraction', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    capacity:       DataTypes.INT,
    mininum_height: DataTypes.INT,
    //image ?
    duration:       DataTypes.INT,
    opening:        DataTypes.TIME,
    status:         DataTypes.STRING,
    type:           DataTypes.STRING
  }, {
    freezeTableName: true,
    paranoid: true,
    underscored: true
  });
  Attraction.associate = function(models) {
    Attraction.hasMany(models.Task);
  };
  return Attraction;
};

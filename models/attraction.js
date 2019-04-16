'use strict';

const Model = require('sequelize').Model;
const models = require('./');
const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;
const MaintenanceSchelude = require('./maintenanceSchedule');
const Pass = require('./pass');
const PassAccessAttraction = require('./passAccessAttraction');

class Attraction extends Model{}

Attraction.init({
  id: {
    type:           Sequelize.INTEGER,
    unique:         true,
    allowNull:      false,
    primaryKey:     true,
    autoIncrement:  true
  },
  name:             Sequelize.STRING,
  capacity:         Sequelize.INTEGER,
  minimum_height:   Sequelize.INTEGER,
  duration:         Sequelize.INTEGER,
  opening:          Sequelize.TIME,
  closure:          Sequelize.TIME,
  status:           Sequelize.STRING,
  handicap_access:  Sequelize.INTEGER,
  type:             Sequelize.STRING
}, { paranoid: true, sequelize});

Attraction.associate = function (models){
  Attraction.hasMany(models.MaintenanceSchedule);
  Attraction.belongsToMany(models.Pass, {
    through: models.PassAccessAttraction,
    foreignKey: 'id_attraction',
    onDelete : 'CASCADE'
  });
  Attraction.belongsToMany(models.Pass, {
    through: models.PassQueueAttraction,
    foreignKey: 'id_attraction',
    onDelete : 'CASCADE'
  });
};

module.exports = Attraction;

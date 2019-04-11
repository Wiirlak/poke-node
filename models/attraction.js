'use strict';

const Model = require('sequelize').Model;
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
}, { sequelize});

Attraction.associate = function (){
  Attraction.hasMany(MaintenanceSchelude);
  Attraction.belongsToMany(Pass, {
    through: PassAccessAttraction,
    constraints: false });
};



//Attraction.sync({force:true});

module.exports = Attraction;

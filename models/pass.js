'use strict';

const Model = require('sequelize').Model;
const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;
const PassType = require('./passType');
const Attraction = require('./attraction');
const PassAccessAttraction = require('./passAccessAttraction');

class Pass extends Model{}

Pass.init({
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  date_end:     Sequelize.DATE,
  date_begin:   Sequelize.DATE,
  date_in:      Sequelize.DATE,
  date_out:     Sequelize.DATE
}, { sequelize});

Pass.associate = function(){
  Pass.belongsTo(PassType);
  Pass.belongsToMany(Attraction, { through: PassAccessAttraction });
};


Pass.sync({force:true});

module.exports = Pass;

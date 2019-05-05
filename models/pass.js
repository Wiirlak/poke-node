'use strict';

const Model = require('sequelize').Model;
const models = require('./');
const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class Pass extends Model{}

Pass.init({
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  date_begin:         Sequelize.DATE,
  date_end:           Sequelize.DATE,
  date_in:            Sequelize.DATE,
  date_out:           Sequelize.DATE,
  attraction_current: Sequelize.INTEGER
}, { sequelize});

Pass.associate = function(models){
  Pass.belongsTo(models.PassType,{
    onDelete: 'SET NULL',
    foreignKey: 'id_passType'
  });
  Pass.hasMany(models.PassAccessAttraction, {
    foreignKey: 'id_pass'
  });
};

//Pass.sync({force:true});

module.exports = Pass;

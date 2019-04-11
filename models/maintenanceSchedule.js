'use strict';

const Model = require('sequelize').Model;
const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;
const Attraction = require('./attraction');

class MaintenanceSchedule extends Model{}

MaintenanceSchedule.init({
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    maintenance_date: Sequelize.DATE
}, { sequelize});

// MaintenanceSchedule.sync({force:true});


module.exports = MaintenanceSchedule;

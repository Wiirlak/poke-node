'use strict';

const Model = require('sequelize').Model;
const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class PassQueueAttraction extends Model{}

PassQueueAttraction.init({
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
}, { sequelize});

// PassQueueAttraction.sync({force:true});

module.exports = PassQueueAttraction;

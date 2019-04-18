'use strict';

const Model = require('sequelize').Model;
const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class PassAccessAttraction extends Model{}

PassAccessAttraction.init({
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    date_access:     Sequelize.DATE
}, { sequelize});

// PassAccessAttraction.sync({force:true});

module.exports = PassAccessAttraction;

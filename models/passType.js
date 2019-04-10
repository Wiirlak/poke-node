'use strict';

const Model = require('sequelize').Model;
const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class PassType extends Model{}

PassType.init({
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    attraction_path: Sequelize.STRING
}, { sequelize});

PassType.sync();


module.exports = PassType;

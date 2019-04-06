'use script';

module.exports = {
    sequelize: require('./database'),
    Sample: require('./sample'),
    User: require('./user'),
    Pass: require('./pass')
};

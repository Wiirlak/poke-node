'use script';
db = require('./database');

module.exports = {
    database:       db,
    PassType:       require('./passType'),
    Sample:         require('./sample'),
    User:           require('./user'),
    Pass:           require('./pass'),
    Attraction:     require('./attraction'),
    PassAccessAttraction:     require('./passAccessAttraction'),
    PassQueueAttraction:     require('./passQueueAttraction'),
    MaintenanceSchedule:     require('./maintenanceSchedule')
};

// db.sequelize.sync({force:true});
db.sequelize.sync();
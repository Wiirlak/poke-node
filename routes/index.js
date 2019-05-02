'use strict';

class RouterBuilder {
    build(app) {
        app.use('/user', require('./user.router'));
        app.use('/passType', require('./passType.router'));
        app.use('/pass', require('./pass.router'));
        app.use('/attraction', require('./attraction.router'));
        app.use('/maintenanceSchedule', require('./maintenanceSchedule.router'));
        app.use('/passAccessAttraction', require('./passAccessAttraction.router'));
    }
}

module.exports = new RouterBuilder();

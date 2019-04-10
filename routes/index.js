'use strict';

class RouterBuilder {
    build(app) {
        app.use('/sample', require('./sample.router'));
        app.use('/user', require('./user.router'));
        app.use('/pass', require('./pass.router'));
        app.use('/attraction', require('./attraction.router'));
    }
}

module.exports = new RouterBuilder();

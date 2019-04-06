'use strict';

class RouterBuilder {
    build(app) {
        app.use('/sample', require('./sample.router'));
        app.use('/user', require('./user.router'));
        app.use('/pass', require('./pass.router'));
    }
}

module.exports = new RouterBuilder();

'use script';

const models = require('../models');
const User = models.User;

class UserController {

    async addUser(data) {
        return User.create({
           data
        });
    }

    async getUser(id) {
        return User.findOne({
            where: {
                id: id
            }
        });
    }

}

module.exports = new UserController();

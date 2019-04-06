'use script';

const models = require('../models');
const User = models.User;
const database = models.database;

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

    async getAll(){
        return await User.findAll();
    }

}

module.exports = new UserController();

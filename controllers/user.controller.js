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


     async passwordHash(pwd) {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        bcrypt.hash(pwd, saltRounds, function(err, hash) {
            // Store hash in your password DB.
        });
    }

    async checkUser(usr, pwd) {
        const match = await bcrypt.compare(pwd, usr.password);

        if(match) {
            //login
        }

        //...
    }

}

module.exports = new UserController();

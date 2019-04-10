'use script';

const models = require('../models');
const User = models.User;
const database = models.database;

class UserController {

    async addUser(username,password,status) {
        status = (status !== undefined ? status:1);
        return User.create({
            username,
            password,
            status
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


function passwordHash(pwd) {
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    bcrypt.hash(pwd, saltRounds, function(err, hash) {
        // Store hash in your password DB.
    });
}

async function checkUser(usr, pwd) {
    const match = await bcrypt.compare(pwd, usr.password);

    if(match) {
        //login
    }

    //...
}


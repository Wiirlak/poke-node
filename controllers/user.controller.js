'use script';

const models = require('../models');
const User = models.User;
const database = models.database;

class UserController {

    async addUser(username,password,status) {
        status = (status !== undefined ? status:1);
        return User.create({
            username: username || "",
            password: password || "",
            status: status || "u"
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

    async updateUser(id, username,password,status){
        return await User.findOne({
            where: {
                id: id
            }
        }).then(User =>{
            return User.update({
                username : username || User.username,
                password : password || User.password,
                status : status || User.status
            });
        });
    }

    async deleteUser(id, force){
        return await User.destroy({where : {
                id : id
            },force : force}).then(deletedUser =>{
            return deletedUser;
        });
    }

    passwordHash(pwd) {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        bcrypt.hash(pwd, saltRounds, function(err, hash) {
            // Store hash in your password DB.
        });
    }

    async checkUser(usr, pwd) {
        const match =  bcrypt.compare(pwd, usr.password);

        if(match) {
            //login
        }

        //...
    }

}

module.exports = new UserController();





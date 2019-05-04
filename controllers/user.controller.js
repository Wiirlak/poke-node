'use script';

const models = require('../models');
const User = models.User;
const database = models.database;

class UserController {

    async addUser(username,password,status) {
        const cypherPassword = await User.generateHash(password);
        status = (status !== undefined ? status:"u");
        return User.create({
            username: username || "",
            password: cypherPassword || "",
            status: status || "u"
        });
    }

    async getUser(id) {
        return await User.findOne({
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


}

module.exports = new UserController();





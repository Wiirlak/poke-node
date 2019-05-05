'use script';

const models = require('../models');
const PassType = models.PassType;

class PassTypeController {

    async addPassType(name,description,attraction_path) {
        return PassType.create({
            name: name || "",
            description: description || "",
            attraction_path: JSON.stringify(attraction_path) || '{}'
        });
    }

    async getPassType(id) {
        return PassType.findOne({
            where: {
                id: id
            }
        });
    }

    async getAll(){
        return await PassType.findAll();
    }

    async updatePassType(id, name, description, attraction_path){
        return await PassType.findOne({
            where: {
                id: id
            }
        }).then(PassType =>{
            return PassType.update({
                name : name || PassType.name,
                description : description || PassType.description,
                attraction_path : attraction_path || PassType.attraction_path
            });
        });
    }

    async deletePassType(id, force){
        return await PassType.destroy({where : {
                id : id
            },force : force}).then(deletedPassType =>{
            return deletedPassType;
        });
    }
}

module.exports = new PassTypeController();

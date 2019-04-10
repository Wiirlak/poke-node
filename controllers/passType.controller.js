'use script';

const models = require('../models');
const PassType = models.PassType;

class PassTypeController {

    async addPassType(name,description,attration_path) {
        return PassType.create({
            name,
            description,
            attration_path
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
}

module.exports = new PassTypeController();

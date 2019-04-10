'use script';

const models = require('../models');
const PassAccessAttraction = models.PassAccessAttraction;

class PassAccessAttractionController {

    async addPassAccessAttraction(date_access) {
        return PassAccessAttraction.create({
            date_access
        });
    }

    async getPassAccessAttraction(id) {
        return PassAccessAttraction.findOne({
            where: {
                id: id
            }
        });
    }

    async getAll(){
        return await PassAccessAttraction.findAll();
    }
}

module.exports = new PassAccessAttractionController();

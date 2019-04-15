'use script';

const models = require('../models');
const PassAccessAttraction = models.PassAccessAttraction;

class PassAccessAttractionController {

    async addPassAccessAttraction(date_access) {
        return PassAccessAttraction.create({
            date_access : date_access || "1970-01-01"
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

    async updatePassAccessAttraction(id, date_access){
        return await PassAccessAttraction.findOne({
            where: {
                id: id
            }
        }).then(PassAccessAttraction =>{
            return PassAccessAttraction.update({
                date_access : date_access || PassAccessAttraction.date_access
            });
        });
    }

    async deletePassAccessAttraction(id, force){
        return await PassAccessAttraction.destroy({where : {
                id : id
            },force : force}).then(deletedPassAccessAttraction =>{
            return deletedPassAccessAttraction;
        });
    }
}

module.exports = new PassAccessAttractionController();

'use script';

const models = require('../models');
const Sequelize = models.database.Sequelize;
const PassAccessAttraction = models.PassAccessAttraction;
const Attraction = models.Attraction;
const Op = models.database.Sequelize.Op;

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

    async getNumberAccessAttraction( dateBegin, dateEnd, attractionId){
        return await PassAccessAttraction.findAndCountAll({
            where: {
                id_attraction: attractionId,
                date_access: {
                    [Op.between] : [dateBegin,dateEnd]
                }
            }
        }).then(access => {
            return access.count;
        });
    }

    async getNumberAccessParc( dateBegin, dateEnd){
        if (dateEnd === undefined)
            dateEnd = dateBegin;
        return await Attraction.findAll().then(async attractions=>{
            const result = {};
            await Sequelize.Promise.each(attractions,async attraction =>{
                result[attraction.name] = await this.getNumberAccessAttraction(dateBegin,dateEnd,attraction.id);
            });
            return result;
        });
    }
}

module.exports = new PassAccessAttractionController();

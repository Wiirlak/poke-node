'use script';

const models = require('../models');
const Sequelize = models.database.Sequelize;
const PassAccessAttraction = models.PassAccessAttraction;
const Attraction = models.Attraction;
const Pass = models.Pass;
const PassType = models.PassType;
const Op = models.database.Sequelize.Op;

class PassAccessAttractionController {

    async escapeGame(passType, pss, id_attraction){
        var json = JSON.parse(passType.attraction_path);
        if (! (parseInt(json[pss.attraction_current],10) === id_attraction))
            return false;
        await Pass.findOne({
            where: {
                id: pss.id
            }
        }).then(Pass =>{
            Pass.update({
                attraction_current: parseInt(pss.attraction_current, 10) + 1
            });
        });
        return true;
    }

    isDateAuthorised(pass, date_access){
        var edate = new Date(pass.date_end);
        var adate = new Date(date_access);

        if (edate - adate < 0)
            return false;
        return true;
    }

    async isAuthorised(id_attraction, id_pass, date_access){
        var pass = await Pass.findOne({
            where: {
                id: id_pass
            }
        });
        if(!this.isDateAuthorised(pass, date_access))
            return false;
        var passType = await PassType.findOne({
            where: {
                id: pass.id_passType
            }
        });
        if(passType.name === "PASS Escape Game"){
            var res = await this.escapeGame(passType, pass, id_attraction)
            console.log(res);
            return res;
        }
        if(passType.attraction_path === "")
            return true;
        var json = JSON.parse(passType.attraction_path);
        for(let i in json){
            if (parseInt(json[i],10) === id_attraction) return true;
        }
        return false;
    }

    async addPassAccessAttraction(date_access, id_attraction, id_pass) {
        if (!(await this.isAuthorised(id_attraction, id_pass, date_access) )){
            return 0;
        }
        return await PassAccessAttraction.create({
            date_access : date_access || "1970-01-01",
            id_attraction: id_attraction || -1,
            id_pass: id_pass || -1
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

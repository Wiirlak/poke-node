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
        console.log("here");
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

    async getNumberAccessParcWeekly( date){
        var curr = new Date(date); // get current date
        var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
        var last = first + 6; // last day is the first day + 6

        var firstday = new Date(curr.setDate(first));
        var lastday = new Date(curr.setDate(last));
        console.log(firstday);
        console.log(lastday);
        return await Attraction.findAll().then(async attractions=>{
            const result = {};
            await Sequelize.Promise.each(attractions,async attraction =>{
                result[attraction.name] = await this.getNumberAccessAttraction(firstday,lastday,attraction.id);
            });
            return result;
        });
    }

    async getOptiMonth(id){
        let i = 0;
        let today = new Date();
        let array = {};
        let min = 0;
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        array["access"] = {};
        array["best_months"] = [];
        for(; i < 12 ; i++){
            let dateEnd = new Date(today.getFullYear(),today.getMonth()-i);
            let dateBegin = new Date(today.getFullYear(),today.getMonth()-i-1,2);
            array["access"][(today.getMonth()-i+11)%12] = await this.getNumberAccessAttraction(dateBegin,dateEnd,id);
            min = array["access"][min] > array["access"][(today.getMonth()-i+11)%12] ? (today.getMonth()-i+11)%12 : min;
        }
        for(i = 0; i < 12 ; i++){
            if(array["access"][min] === array["access"][i]){
                array["best_months"].push(months[i]);
            }
        }
        return array;
    }
}

module.exports = new PassAccessAttractionController();

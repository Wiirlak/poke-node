'use script';

const models = require('../models');
const Pass = models.Pass;
const database = models.database;
const sequelize = models.database.sequelize;
const Sequelize = models.database.Sequelize;
const Op = models.database.Sequelize.Op;
class PassController {

    async isAuthorised(id_pass, date_access){
        var date = new Date(date_access);
        var pass = await Pass.findOne({
            where: {
                id: id_pass
            }
        });
        var passType = await PassType.findOne({
            where: {
                id: pass.id_passType
            }
        });

        var bdate = new Date(pass.date_begin);
        var edate = new Date(pass.date_end);
        if (bdate - date <= 0)
            return true;
        else if (edate - date >= 0)
            return true;

        return false;
    }

    async addPass(date_end, date_begin, date_in, date_out) {
        return Pass.create({
            date_end: date_end || "1970-01-01",
            date_begin: date_begin || "1970-01-01",
            date_in: date_in || "1970-01-01",
            date_out: date_out || "1970-01-01"
        });
    }

    async getPass(id) {
        return Pass.findOne({
            where: {
                id: id
            }
        });
    }

    async getAll(){
        return await Pass.findAll();
    }
    
    async updatePass(id, date_end, date_begin, date_in, date_out, attraction_current){
        if(!this.isAuthorised(id, date_in))
            return 0;
        if(!this.isAuthorised(id, date_out))
            return 1;
        return await Pass.findOne({
            where: {
                id: id
            }
        }).then(Pass =>{
            return Pass.update({
                date_end : date_end || Pass.date_end ,
                date_begin: date_begin || Pass.date_begin ,
                date_in: date_in || Pass.date_in ,
                date_out: date_out || Pass.date_out ,
                attraction_current: attraction_current || Pass.attraction_current
            });
        });
    }

    async deletePass(id, force){
        return await Pass.destroy({where : {
                id : id
            },force : force}).then(deletedPass =>{
            return deletedPass;
        });
    }

    async getCurrentPassIn(){
        console.log("here");
        return await Pass.findAndCountAll({
            where: {
                date_in:{
                    [Op.gt] : sequelize.col('date_out')
                }
            }
        }).then(access => {
            return access.count;
        });
    }
}

module.exports = new PassController();

'use script';

const models = require('../models');
const Pass = models.Pass;
const database = models.database;

class PassController {

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
    
    async updatePass(id, date_end, date_begin, date_in, date_out){
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

}

module.exports = new PassController();

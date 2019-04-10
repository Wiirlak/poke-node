'use script';

const models = require('../models');
const Pass = models.Pass;
const database = models.database;

class PassController {

    async addPass(date_end, date_begin, date_in, date_out) {
        return Pass.create({
            date_end,
            date_begin,
            date_in,
            date_out
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

}

module.exports = new PassController();

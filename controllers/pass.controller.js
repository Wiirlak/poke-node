'use script';

const models = require('../models');
const Pass = models.Pass;

class PassController {

    async addPass(data) {
        return Pass.create({
           data
        });
    }

    async getPass(id) {
        return Pass.findOne({
            where: {
                id: id
            }
        });
    }

}

module.exports = new PassController();

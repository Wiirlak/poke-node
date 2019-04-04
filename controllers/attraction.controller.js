'use script';

const models = require('../models');
const Attraction = models.Attraction;

class AttractionController {

    async addAttraction(data) {
        return Attraction.create({
           data
        });
    }

    async getAttraction(id) {
        return Attraction.findOne({
            where: {
                id: id
            }
        });
    }

}

module.exports = new AttractionController();

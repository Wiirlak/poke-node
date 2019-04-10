'use script';

const models = require('../models');
const Attraction = models.Attraction;

class AttractionController {

    async addAttraction(capacity,mininum_height,duration,opening,status,type) {
        return Attraction.create({
            capacity,
            minimum_height,
            duration
            ,opening,
            status,
            type
        });
    }

    async getAttraction(id) {
        return Attraction.findOne({
            where: {
                id: id
            }
        });
    }

    async getAll(){
        return await Attraction.findAll();
    }
}

module.exports = new AttractionController();

'use script';

const models = require('../models');
const Attraction = models.Attraction;

class AttractionController {

    async addAttraction(name,capacity,minimum_height,duration,opening,closure,status,type) {
        return await Attraction.create({
            name : name || "Rien",
            capacity : capacity || 0,
            minimum_height : minimum_height || 0 ,
            duration : duration || 0,
            opening : opening || "25:00:00" ,
            closure : closure || "25:00:00",
            status : status || "c",
            type : type || "f"
        });
    }

    async getAttractionById(id) {
        return await Attraction.findOne({
            where: {
                id: id
            }
        });
    }

    async getAll(){
        return await Attraction.findAll();
    }

    async updateAttraction(id,capacity, minimum_height, duration, opening, closure, status, type){
        return await Attraction.findOne({
            where: {
                id: id
            }
        }).then(attraction =>{
                return attraction.update({
                    capacity : capacity || attraction.capacity ,
                    minimum_height: minimum_height || attraction.minimum_height ,
                    duration: duration || attraction.duration ,
                    opening: opening || attraction.opening ,
                    closure : closure || attraction.closure ,
                    status : status || attraction.status ,
                    type : type || attraction.type
                });
        });
    }

    async deleteAttraction(id,force){
        return await Attraction.destroy({where : {
            id : id
        },force : force}).then(deletedAttraction =>{
            return deletedAttraction;
        });
    }


}

module.exports = new AttractionController();



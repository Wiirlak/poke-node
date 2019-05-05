'use script';

const models = require('../models');
const Attraction = models.Attraction;
const faker = require('faker');
const PassType = models.PassType;

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

    async nightOpening(id,hour_closure){
        var passType = await PassType.findOne({
            where: {
                name: "PASS Night"
            }
        });
        var json = JSON.parse(passType.attraction_path);
        json[Object.keys(json).length] = id;
        await passType.update(json);

        return await Attraction.findOne({
            where: {
                id: id
            }
        }).then(attraction =>{
            return attraction.update({
                closure : hour_closure || attraction.closure ,
                status : "open",
            });
        });
    }

    async nightClosing(id,hour_closure){
        var passType = await PassType.findOne({
            where: {
                name: "PASS Night"
            }
        });
        var json = JSON.parse(passType.attraction_path);
        for (var i in json)
            if(json[i] === id) json.splice(i,1);
        await passType.update(json);

        return await Attraction.findOne({
            where: {
                id: id
            }
        }).then(attraction =>{
            return attraction.update({
                closure : hour_closure || faker.random.number(11) + 12 + ':' + faker.random.number(59) + ':' + faker.random.number(59) ,
                status : "open",
            });
        });
    }

}

module.exports = new AttractionController();



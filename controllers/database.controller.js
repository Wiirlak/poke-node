'use script';

const models = require('../models');
const sequelize = require('../models/database').sequelize;
const Sequelize = require('../models/database').Sequelize;

class databaseController {

    async seedAll() {
        return Promise.all([
            //Attractions
            models.Attraction.create({
                name: 'Grand Splash',
                capacity: 40,
                minimum_height: 135,
                duration: 45,
                opening: "08:59:59",
                closure: "18:59:59",
                status: "open",
                handicap_access: 0,
                type: "extreme"
            }),
            models.Attraction.create({
                name: 'Chaises volantes',
                capacity: 10,
                minimum_height: 1,
                duration: 3*60,
                opening: "10:00:00",
                closure: "15:00:00",
                status: "closed",
                handicap_access: 0,
                type: "famille"
            }),
            models.Attraction.create({
                name: 'Oziris',
                capacity: 75,
                minimum_height: 125,
                duration: 60,
                opening: "09:30:00",
                closure: "17:30:00",
                status: "open",
                handicap_access: 0,
                type: "extreme"
            }),
            models.Attraction.create({
                name: 'Tasse',
                capacity: 20,
                minimum_height: 1,
                duration: 50,
                opening: "08:59:59",
                closure: "18:59:59",
                status: "open",
                handicap_access: 1,
                type: "famille"
            }),
            models.Attraction.create({
                name: 'Dragonica',
                capacity: 130,
                minimum_height: 1,
                duration: 5*60,
                opening: "10:00:00",
                closure: "19:00:00",
                status: "open",
                handicap_access: 0,
                type: "vr"
            }),
            models.MaintenanceSchedule.create({
                maintenance_date: "2018-11-05"
            }),
            models.MaintenanceSchedule.create({
                maintenance_date: "2019-02-10"
            }),
            models.MaintenanceSchedule.create({
                maintenance_date: "2018-11-23"
            }),
            models.Pass.create({
                date_begin: "2019-01-01",
                date_end: "2020-01-01",
                date_in: "2019-02-23",
                date_out: "2019-02-23",
            }),
            models.Pass.create({
                date_begin: "2019-10-01",
                date_end: "2019-10-02"
            }),
            models.Pass.create({
                date_begin: "2019-03-21",
                date_end: "2019-03-21",
                date_in: "2019-03-21",
                date_out: "2019-03-21",
            }),
            models.PassAccessAttraction.create({
                date_access: "2019-03-21"
            }),
            models.PassAccessAttraction.create({
                date_access: "2019-02-13"
            }),
            models.PassAccessAttraction.create({
                date_access: "2019-05-07"
            }),
            models.PassQueueAttraction.create(),
            models.PassQueueAttraction.create(),
            models.PassQueueAttraction.create(),
            models.PassType.create({
                name: "PASS journée",
                description: "Pass valide une journée",
                attraction_path: ""
            }),
            models.PassType.create({
                name: "PASS Week-end",
                description: "Pass valide un wee-kend",
                attraction_path: ""
            }),
            models.PassType.create({
                name: "PASS 1 daymonth",
                description: "Pass utilisable un jour par mois",
                attraction_path: ""
            }),
            models.PassType.create({
                name: "PASS 1 attraction",
                description: "Pass reservé à une seule attraction",
                attraction_path: "{3}"
            }),
            models.PassType.create({
                name: "PASS Escape Game",
                description: "Pass permettant de participer aux escape game",
                attraction_path: "{1,2,5,4}"
            }),
            models.PassType.create({
                name: "PASS Night",
                description: "Pass donnant accès au parc la nuit (si attractions ouvertes)",
                attraction_path: "{1,2,5,6}"
            }),
            models.PassType.create({
                name: "PASS Admin",
                description: "root Pass",
                attraction_path: ""
            }),
            models.User.create({
                username: "admin",
                password: "admin",
                status: 'a'
            }),
            models.User.create({
                username: "quentin3",
                password: "supertati",
                status: 'u'
            }),
            models.User.create({
                username: "bastounet94",
                password: "Supeeeeeeeeeer",
                status: 'u'
            }),
            models.User.create({
                username: "tomaterougre",
                password: "tomateverte",
                status: 'a'
            })
        ])
            .catch(error => console.log(error));
    };
}


module.exports = new databaseController();
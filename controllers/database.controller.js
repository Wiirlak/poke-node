'use script';

const models = require('../models');
const sequelize = require('../models/database').sequelize;
const Sequelize = require('../models/database').Sequelize;
const faker = require('faker');

class databaseController {

    async seedFake() {
        var dbegin;
        var dend;
        var dout;
        var passtype;
        var nbAttr = faker.random.number(20);
        var nbPass = faker.random.number(1000);

        var data = [];
        for (var i = 0; i < nbAttr; i++) {
            data.push(
                await models.Attraction.create({
                    name: faker.lorem.words(),
                    capacity: faker.random.number(100),
                    minimum_height: faker.random.number(90) + 130,
                    duration: faker.random.number(120) + 30,
                    opening: faker.random.number(11) + ':' + faker.random.number(59) + ':' + faker.random.number(59),
                    closure: faker.random.number(11) + 12 + ':' + faker.random.number(59) + ':' + faker.random.number(59),
                    status: "open",
                    handicap_access: faker.random.boolean(),
                    type: "extreme"
                }));
        }

        data.push(await models.User.create({
            username: "admin",
            password: "admin",
            status: 'a'
        }));

        data.push(await models.MaintenanceSchedule.create({
            maintenance_date: faker.date.between(faker.date.recent(10), faker.date.future(5)),
            maintenance_duration: faker.random.number(900),
        }));
        for (var i = 0; i < faker.random.number(200); i++) {
            data.push(await models.PassQueueAttraction.create());
        }
        data.push(await models.PassType.create({
            name: "PASS journée",
            description: "Pass valide une journée",
            attraction_path: ""
        }));
        data.push(await models.PassType.create({
            name: "PASS Week-end",
            description: "Pass valide un wee-kend",
            attraction_path: ""
        }));
        data.push(await models.PassType.create({
            name: "PASS 1 daymonth",
            description: "Pass utilisable un jour par mois",
            attraction_path: ""
        }));
        data.push(await models.PassType.create({
            name: "PASS 1 attraction",
            description: "Pass reservé à une seule attraction",
            attraction_path:
                '{' +
                    '"0":"3"' +
                '}'
        }));
        data.push(await models.PassType.create({
            name: "PASS Escape Game",
            description: "Pass permettant de participer aux escape game",
            attraction_path:
                '{' +
                    '"0":"1",' +
                    '"1":"2",' +
                    '"2":"5",' +
                    '"3":"4"' +
                '}',
        }));
        data.push(await models.PassType.create({
            name: "PASS Night",
            description: "Pass donnant accès au parc la nuit (si attractions ouvertes)",
            attraction_path:
                '{' +
                    '"0":"1",' +
                    '"1":"2",' +
                    '"2":"3",' +
                    '"3":"5",' +
                    '"4":"6"' +
                '}'
        }));
        data.push(await models.PassType.create({
            name: "PASS Admin",
            description: "root Pass",
            attraction_path: ""
        }));

        for (var i = 0; i < nbPass; i++) {
            dbegin = faker.date.between(faker.date.recent(10), faker.date.future(2));
            dend = faker.date.future(1, dbegin);
            dout = faker.date.between(dbegin, dend);
            passtype = faker.random.number(6)+1;
            data.push(
                await models.Pass.create({
                    date_begin: dbegin,
                    date_end: dend,
                    date_in: dout,
                    date_out: faker.date.between(dout, dend),
                    id_passType: passtype,
                    attraction_current: passtype === 5 ? faker.random.number(3) : "0" //escape game
                }));
        }

        for (var i = 0; i < faker.random.number(200); i++) {
            data.push(
                await models.PassAccessAttraction.create({
                    date_access: faker.date.between(faker.date.recent(10), faker.date.future(2)),
                    id_attraction: faker.random.number(nbAttr-1) + 1,
                    id_pass: faker.random.number(nbPass-1) + 1
                }));
        }

        return Promise.all(data);

    };

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
                duration: 3 * 60,
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
                duration: 5 * 60,
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
                date_access: "2019-03-21",
                id_attraction: 1,
                id_pass: 1
            }),
            models.PassAccessAttraction.create({
                date_access: "2019-02-13",
                id_attraction: 1,
                id_pass: 2
            }),
            models.PassAccessAttraction.create({
                date_access: "2019-05-07",
                id_attraction: 1,
                id_pass: 3
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

'use script';

const models = require('../models');
const MaintenanceSchedule = models.MaintenanceSchedule;

class MaintenanceScheduleController {

    async addMaintenanceSchedule(maintenance_date) {
        return MaintenanceSchedule.create({
            maintenance_date
        });
    }

    async getMaintenanceSchedule(id) {
        return MaintenanceSchedule.findOne({
            where: {
                id: id
            }
        });
    }

    async getAll(){
        return await MaintenanceSchedule.findAll();
    }
}

module.exports = new MaintenanceScheduleController();

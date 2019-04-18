'use script';

const models = require('../models');
const MaintenanceSchedule = models.MaintenanceSchedule;

class MaintenanceScheduleController {

    async addMaintenanceSchedule(maintenance_date) {
        return MaintenanceSchedule.create({
            maintenance_date : maintenance_date || "1970-01-01",
            maintenance_duration : maintenance_duration || 0
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

    async updateMaintenanceSchedule(id, maintenance_date, maintenance_duration){
        return await MaintenanceSchedule.findOne({
            where: {
                id: id
            }
        }).then(MaintenanceSchedule =>{
            return MaintenanceSchedule.update({
                maintenance_date : maintenance_date || MaintenanceSchedule.maintenance_date,
                maintenance_duration : maintenance_duration || MaintenanceSchedule.maintenance_duration
            });
        });
    }

    async deleteMaintenanceSchedule(id, force){
        return await MaintenanceSchedule.destroy({where : {
                id : id
            },force : force}).then(deletedMaintenanceSchedule =>{
            return deletedMaintenanceSchedule;
        });
    }
}

module.exports = new MaintenanceScheduleController();

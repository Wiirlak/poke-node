'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const MaintenanceScheduleController = require('../controllers').MaintenanceScheduleController;
const AuthController = require('../controllers').AuthController;

const router = express.Router();
router.use(bodyParser.json());
router.use(AuthController.authenticate());

router.post('/', async (req, res) => {

    try {
        const p = await MaintenanceScheduleController.addMaintenanceSchedule(req.body.maintenance_date, req.body.maintenance_duration);
        res.json(p);
    } catch(err) {
        res.status(409).end();
    }
});

router.get('/:id', async (req, res) => {
    const p = await MaintenanceScheduleController.getMaintenanceSchedule(req.params.id);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();

});

router.get('/', async (req, res) => {
    const p = await MaintenanceScheduleController.getAll();
    if(p) {
        return res.json(p).status(200);
    }
    res.status(404).end();

});

router.patch('/', async (req, res) => {
    const p = await MaintenanceScheduleController.updateMaintenanceSchedule(
                                                                        req.body.id,
                                                                        req.body.maintenance_date,
                                                                        req.body.maintenance_duration);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});

router.delete('/:id', async (req, res) => {
    const p = await MaintenanceScheduleController.deleteMaintenanceSchedule(req.params.id,false);
    if(p === 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

router.delete('/force/:id', async (req, res) => {
    const p = await MaintenanceScheduleController.deleteMaintenanceSchedule(req.params.id,true);
    if(p === 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

module.exports = router;

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const MaintenanceScheduleController = require('../controllers').MaintenanceScheduleController;

const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {

    /*try {
        const p = await MaintenanceScheduleController.addMaintenanceSchedule(req.body.date_end, req.body.date_begin, req.body.date_in, req.body.date_out);
        res.json(p);
    } catch(err) {
        res.status(409).end();
    }*/
});

router.get('/:id', async (req, res) => {
    /*const p = await MaintenanceScheduleController.getMaintenanceSchedule(req.params.id);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
*/
});

router.get('/', async (req, res) => {
    /*const p = await MaintenanceScheduleController.getAll();
    if(p) {
        return res.json(p).status(200);
    }
    res.status(404).end();*/

});

module.exports = router;

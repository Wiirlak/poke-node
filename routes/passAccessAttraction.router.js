'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PassAccessAttractionController = require('../controllers').PassAccessAttractionController;

const router = express.Router();
router.use(bodyParser.json());

router.get('/getAccess/:id', async (req, res) => {
    const p = await PassAccessAttractionController.getNumberAccessAttraction(req.query.dateBegin, req.query.dateEnd, req.params.id);
    if(p) {
        return res.json({'count' : p});
    }
    res.status(404).end();
});

router.get('/getAccess/', async (req, res) => {
    const p = await PassAccessAttractionController.getNumberAccessParc(req.query.dateBegin, req.query.dateEnd);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});

router.get('/stats/daily', async (req, res) => {
    var today = new Date();
    var date = req.query.date !== undefined ? req.query.date : today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const p = await PassAccessAttractionController.getNumberAccessParc(date);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});

router.get('/stats/weekly', async (req, res) => {
    var today = new Date();
    var date = req.query.date !== undefined ? req.query.date : today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var date2 = req.query.date_end !== undefined ? req.query.date_end : today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-7);
    const p = await PassAccessAttractionController.getNumberAccessParc(date, date2);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});

router.get('/stats', async (req, res) => {
    var today = new Date();
    var date = req.query.date !== undefined ? req.query.date : today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var date2 = req.query.date_end !== undefined ? req.query.date_end : '1987-01-01';
    const p = await PassAccessAttractionController.getNumberAccessParc(date2, date);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});

router.get('/:id', async (req, res) => {
    const p = await PassAccessAttractionController.getPassAccessAttraction(req.params.id);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();

});

router.get('/', async (req, res) => {
    const p = await PassAccessAttractionController.getAll();
    if(p) {
        return res.json(p).status(200);
    }
    res.status(404).end();

});

router.post('/', async (req, res) => {

    try {
        const p = await PassAccessAttractionController.addPassAccessAttraction(req.body.date_access);
        res.json(p);
    } catch(err) {
        res.status(409).end();
    }
});

module.exports = router;

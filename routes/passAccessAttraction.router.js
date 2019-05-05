'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PassAccessAttractionController = require('../controllers').PassAccessAttractionController;
const AuthController = require('../controllers').AuthController;

const router = express.Router();
router.use(bodyParser.json());
router.use(AuthController.authenticate());

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

router.get('/opti/:id', async (req, res) => {
    const p = await PassAccessAttractionController.getOptiMonth(req.params.id);
    if(p) {
        return res.json(p).end();
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
    //var date2 = req.query.date_end !== undefined ? req.query.date_end : today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-7);
    const p = await PassAccessAttractionController.getNumberAccessParcWeekly(date);
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
        const p = await PassAccessAttractionController.addPassAccessAttraction(req.body.date_access, req.body.id_attraction, req.body.id_pass);
        if(p === 0)
            res.status(403).end();
        else
            res.json(p);
    } catch(err) {
        console.log(err);
        res.status(404).end();
    }
});

router.delete('/force/:id', async (req, res) => {
    const p = await PassAccessAttractionController.deletePassAccessAttraction(req.params.id,true);
    if(p === 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

router.delete('/:id', async (req, res) => {
    const p = await PassAccessAttractionController.deletePassAccessAttraction(req.params.id,false);
    if(p === 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

module.exports = router;

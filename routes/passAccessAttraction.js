'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PassAccessAttractionController = require('../controllers').PassAccessAttractionController;

const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {

    try {
        const p = await PassAccessAttractionController.addPassAccessAttraction(req.body.date_access);
        res.json(p);
    } catch(err) {
        res.status(409).end();
    }
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

module.exports = router;

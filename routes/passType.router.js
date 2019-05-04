'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PassTypeController = require('../controllers').PassTypeController;
const AuthController = require('../controllers').AuthController;

const router = express.Router();
router.use(bodyParser.json());
router.use(AuthController.authenticate());


router.post('/', async (req, res) => {

    try {
        const p = await PassTypeController.addPassType(
                                                    req.body.name,
                                                    req.body.description,
                                                    req.body.attraction_path);
        res.json(p);
    } catch(err) {
        res.status(409).end();
    }
});

router.get('/:id', async (req, res) => {
    const p = await PassTypeController.getPassType(req.params.id);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();

});

router.get('/', async (req, res) => {
    const p = await PassTypeController.getAll();
    if(p) {
        return res.json(p).status(200);
    }
    res.status(404).end();
});

router.patch('/', async (req, res) => {
    const p = await PassTypeController.updatePassType(
                                                    req.body.id,
                                                    req.body.name,
                                                    req.body.description,
                                                    req.body.attraction_path);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});

router.delete('/:id', async (req, res) => {
    const p = await PassTypeController.deletePassType(req.params.id,false);
    if(p === 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

router.delete('/force/:id', async (req, res) => {
    const p = await PassTypeController.deletePassType(req.params.id,true);
    if(p === 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

module.exports = router;

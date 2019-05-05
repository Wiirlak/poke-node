'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PassController = require('../controllers').PassController;
const AuthController = require('../controllers').AuthController;

const router = express.Router();
router.use(bodyParser.json());
router.use(AuthController.authenticate());

router.post('/', async (req, res) => {
    try {
        const p = await PassController.addPass(
                                            req.body.date_end, 
                                            req.body.date_begin, 
                                            req.body.date_in, 
                                            req.body.date_out);
        res.json(p);
    } catch(err) {
        res.status(409).end();
    }
});

router.get('/in', async (req, res) => {
    const p = await PassController.getCurrentPassIn();
    if(p || p === 0) {
        return res.json({"count" : p});
    }
    res.status(404).end();
});

router.get('/:id', async (req, res) => {
   const p = await PassController.getPass(req.params.id);
   if(p) {
       return res.json(p);
   }
   res.status(404).end();

});

router.get('/', async (req, res) => {
    const p = await PassController.getAll();
    if(p) {
        return res.json(p).status(200);
    }
    res.status(404).end();

});

router.patch('/', async (req, res) => {
    const p = await PassController.updatePass(
                                            req.body.id,
                                            req.body.date_end,
                                            req.body.date_begin,
                                            req.body.date_in,
                                            req.body.date_out);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});

router.delete('/:id', async (req, res) => {
    const p = await PassController.deletePass(req.params.id,false);
    if(p === 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

router.delete('/force/:id', async (req, res) => {
    const p = await PassController.deletePass(req.params.id,true);
    if(p === 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

module.exports = router;

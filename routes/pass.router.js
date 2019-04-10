'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PassController = require('../controllers').PassController;

const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const p = await PassController.addPass(req.body.date_end, req.body.date_begin, req.body.date_in, req.body.date_out);
        res.json(p);
    } catch(err) {
        res.status(409).end();
    }
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

module.exports = router;

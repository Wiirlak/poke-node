'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PassController = require('../controllers').PassController;

const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const p = await PassController.addPass(req.body.name, req.body.date, req.body.owner);
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

module.exports = router;

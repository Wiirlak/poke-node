'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const AttractionController = require('../controllers').AttractionController;

const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const p = await AttractionController.addAttraction(
                                                            req.body.capacity,
                                                            req.body.minimum_height,
                                                            req.body.duration,
                                                            req.body.opening,
                                                            req.body.status,
                                                            req.body.type);
        res.json(p);
    } catch(err) {
        res.status(409).end();
    }
});

router.get('/:id', async (req, res) => {
   const p = await AttractionController.getAttraction(req.params.id);
   if(p) {
       return res.json(p);
   }
   res.status(404).end();

});

router.get('/', async (req, res) => {
    const p = await AttractionController.getAll();
    if(p) {
        return res.json(p).status(200);
    }
    res.status(404).end();

});

module.exports = router;

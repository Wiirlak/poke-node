'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const AttractionController = require('../controllers').AttractionController;
const AuthController = require('../controllers').AuthController;

const router = express.Router();
router.use(bodyParser.json());
router.use(AuthController.authenticate());

router.post('/', async (req, res) => {
    try {
        const p = await AttractionController.addAttraction(
                                                            req.body.name,
                                                            req.body.capacity,
                                                            req.body.minimum_height,
                                                            req.body.duration,
                                                            req.body.opening,
                                                            req.body.closure,
                                                            req.body.status,
                                                            req.body.type);
        res.json(p);
    } catch(err) {
        res.status(409).end();
    }
});

router.get('/:id', async (req, res) => {
   const p = await AttractionController.getAttractionById(req.params.id);
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

router.patch('/', async (req, res) => {
    const p = await AttractionController.updateAttraction(
                                                            req.body.id,
                                                            req.body.capacity,
                                                            req.body.minimum_height,
                                                            req.body.duration,
                                                            req.body.opening,
                                                            req.body.closure,
                                                            req.body.status,
                                                            req.body.type
                                                        );
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});

router.delete('/:id', async (req, res) => {
    const p = await AttractionController.deleteAttraction(req.params.id,false);
    if(p === 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

router.delete('/force/:id', async (req, res) => {
    const p = await AttractionController.deleteAttraction(req.params.id,true);
    if(p === 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

router.patch('/maintenance/:id', async (req, res) => {
    const p = await AttractionController.updateAttraction(
        req.params.id,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        "m",
        undefined
    );
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});

router.get('/getAccess', async (req, res) => {
    const p = await AttractionController.getNumberAccessParc(req.body.dateBegin, req.body.dateEnd);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});


module.exports = router;

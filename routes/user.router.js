'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('../controllers').UserController;

const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const p = await UserController.addUser(req.body.username, req.body.password, req.body.status );
        res.json(p);
    } catch(err) {
        res.status(409).end();
    }
});

router.get('/:id', async (req, res) => {
   const p = await UserController.getUser(req.params.id);
   if(p) {
       return res.json(p);
   }
   res.status(404).end();

});

router.get('/', async (req, res) => {
    const p = await UserController.getAll();
    if(p) {
        return res.json(p).status(200);
    }
    res.status(404).end();

});

module.exports = router;

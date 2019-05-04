'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('../controllers').UserController;
const AuthController = require('../controllers').AuthController;

const router = express.Router();
router.use(bodyParser.json());
router.use(AuthController.authenticate());
router.use(AuthController.checkIfIsAdmin());


router.post('/', async (req, res) => {
    try {
        const p = await UserController.addUser(req.body.username, req.body.password, req.body.status );
        res.json(p);
    } catch(err) {
        console.log(err);
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
    console.log("here");
    console.log();
    const p = await UserController.getAll();
    if(p) {
        return res.json(p).status(200);
    }
    res.status(404).end();

});

router.patch('/', async (req, res) => {
    const p = await UserController.updateUser(
        req.body.id,
        req.body.username,
        req.body.password,
        req.body.status);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});

router.delete('/:id', async (req, res) => {
    const p = await UserController.deleteUser(req.params.id,false);
    if(p === 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

router.delete('/force/:id', async (req, res) => {
    const p = await UserController.deleteUser(req.params.id,true);
    if(p === 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

module.exports = router;

'use strict';

const models = require('../models');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../config').passport(passport);
const dotenv = require('dotenv');
dotenv.config();
const User = models.User;

class AuthController {

    constructor() {

    }

    async login(username, password) {
        return await User.findOne({
            where: {
                username: username
            }
        }).then(user =>{
            if (!user) {
                return {success: false, message: "authentication failed"};
            } else {
                // check if password matches
                if(user.validPassword(password)) {
                    const token = jwt.sign(user.toJSON(), process.env.PASSPORT_SECRET,{ expiresIn: '30m' });
                    // return the information including token as JSON
                    return {success: true, token: 'JWT ' + token};
                } else {
                    return {success: false, message: "authentication failed"};
                }
            }
        });
    }

    authenticate(){
        return (req, res, next) => {
            passport.authenticate('jwt', {session: false}, (err, user, info) => {
                if(!user) {
                    if (info.name === "TokenExpiredError") {
                        return res.status(401).json({success: false, expired: true, message: "Your token has expired." });
                    } else {
                        return res.status(401).json({success: false, expired: false,  message: info.message });
                    }
                }
                req.user = user;
                next();
            })(req, res, next);
        }
    };

    checkIfIsAdmin(){
        return (req, res, next) => {
            if(req.user.dataValues.status === "a"){
                next();
            }else{
                res.status(401).end();
            }
        }
    }
}

module.exports = new AuthController();

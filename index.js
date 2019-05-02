'use strict';
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const faker = require('faker');
const RouterBuilder = require('./routes');
const DatabaseController = require('./controllers').DatabaseController;


const app = express();
app.use(morgan('dev'));

RouterBuilder.build(app);

//console.log(faker.fake("{{random.number(100)}}"));
DatabaseController.seedFake();

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`LINK START !!! Welcome on server ${port}...`));

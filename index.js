'use strict';
const { Pool } = require('pg');
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const RouterBuilder = require('./routes');

const app = express();
app.use(morgan('dev'));

const pool = new Pool({
    connectionString: process.env.DB_URL
});
RouterBuilder.build(app);

pool.on('connect', () => {
    console.log("Connected to the db");
});
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Fortnite starting on port ${port}...`));

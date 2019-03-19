'use strict';
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const RouterBuilder = require('./routes');

const app = express();
app.use(morgan('dev'));

RouterBuilder.build(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Fortnite starting on port ${port}...`));
finit();

async function finit() {
  await msleep(200);
  console.log(`
    ⠀⠀⠀⣀⣤\n
  ⠀⠀⠀⠀⣿⠿⣶\n
  ⠀⠀⠀⠀⣿⣿⣀\n
  ⠀⠀⠀⣶⣶⣿⠿⠛⣶\n
  ⠤⣀⠛⣿⣿⣿⣿⣿⣿⣭⣿⣤\n
  ⠒⠀⠀⠀⠉⣿⣿⣿⣿⠀⠀⠉⣀\n
  ⠀⠤⣤⣤⣀⣿⣿⣿⣿⣀⠀⠀⣿\n
  ⠀⠀⠛⣿⣿⣿⣿⣿⣿⣿⣭⣶⠉\n
  ⠀⠀⠀⠤⣿⣿⣿⣿⣿⣿⣿\n
  ⠀⠀⠀⣭⣿⣿⣿⠀⣿⣿⣿\n
  ⠀⠀⠀⣉⣿⣿⠿⠀⠿⣿⣿\n
  ⠀⠀⠀⠀⣿⣿⠀⠀⠀⣿⣿⣤\n
  ⠀⠀⠀⣀⣿⣿⠀⠀⠀⣿⣿⣿\n
  ⠀⠀⠀⣿⣿⣿⠀⠀⠀⣿⣿⣿\n
  ⠀⠀⠀⣿⣿⠛⠀⠀⠀⠉⣿⣿\n
  ⠀⠀⠀⠉⣿⠀⠀⠀⠀⠀⠛⣿\n
  ⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⣿⣿\n
  ⠀⠀⠀⠀⣛⠀⠀⠀⠀⠀⠀⠛⠿⠿⠿\n
  ⠀⠀⠀⠛⠛\n`);
  await msleep(200);
  console.log(`
    ⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⠶⠀⠀⣀⣀\n
  ⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣶⣿⣿⣿⣿⣿⣿\n
  ⠀⠀⣀⣶⣤⣤⠿⠶⠿⠿⠿⣿⣿⣿⣉⣿⣿\n
  ⠿⣉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⣤⣿⣿⣿⣀\n
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿⣶⣤\n
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⣿⣿⠿⣛⣿\n
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠛⣿⣿⣿⣿\n
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⠿⠀⣿⣿⣿⠛\n
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⣿⣿⣿\n
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠿⣿⠀⠀⣿⣶\n
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠛⠀⠀⣿⣿⣶\n
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⠤\n
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⣿\n
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿\n
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣀\n
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿\n`);
  await msleep(200);
  console.log(`
    ⠀⠀⠀⠀⠀⠀⣤⣶⣶\n
    ⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣀⣀\n
    ⠀⠀⠀⠀⠀⣀⣶⣿⣿⣿⣿⣿⣿\n
    ⣤⣶⣀⠿⠶⣿⣿⣿⠿⣿⣿⣿⣿\n
    ⠉⠿⣿⣿⠿⠛⠉⠀⣿⣿⣿⣿⣿\n
    ⠀⠀⠉⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣤⣤\n
    ⠀⠀⠀⠀⠀⠀⠀⣤⣶⣿⣿⣿⣿⣿⣿\n
    ⠀⠀⠀⠀⠀⣀⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿\n
    ⠀⠀⠀⠀⣀⣿⣿⣿⠿⠉⠀⠀⣿⣿⣿⣿\n
    ⠀⠀⠀⠀⣿⣿⠿⠉⠀⠀⠀⠀⠿⣿⣿⠛\n
    ⠀⠀⠀⠀⠛⣿⣿⣀⠀⠀⠀⠀⠀⣿⣿⣀\n
    ⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠿⣿⣿\n
    ⠀⠀⠀⠀⠀⠉⣿⣿⠀⠀⠀⠀⠀⠀⠉⣿\n
    ⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⣀⣿\n
    ⠀⠀⠀⠀⠀⠀⣀⣿⣿\n
    ⠀⠀⠀⠀⠤⣿⠿⠿⠿\n`);
  await msleep(200);
  console.log(`
    ⠀⠀⠀⠀⣀\n
    ⠀⠀⣶⣿⠿⠀⠀⠀⣀⠀⣤⣤\n
    ⠀⣶⣿⠀⠀⠀⠀⣿⣿⣿⠛⠛⠿⣤⣀\n
    ⣶⣿⣤⣤⣤⣤⣤⣿⣿⣿⣀⣤⣶⣭⣿⣶⣀\n
    ⠉⠉⠉⠛⠛⠿⣿⣿⣿⣿⣿⣿⣿⠛⠛⠿⠿\n
    ⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠿\n
    ⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⣿\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⣭⣿⣿⣿⣿⣿\n
    ⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⣿⣿⣿⣿\n
    ⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠿\n
    ⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠿\n
    ⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿\n
    ⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⠛⠿⣿⣤\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⠀⠀⠀⣿⣿⣤\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣶⣿⠛⠉\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⠀⠀⠉\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉\n`);
  await msleep(200);
  console.log(`
    ⠀⠀⠀⠀⠀⠀⣶⣿⣶\n
    ⠀⠀⠀⣤⣤⣤⣿⣿⣿\n
    ⠀⠀⣶⣿⣿⣿⣿⣿⣿⣿⣶\n
    ⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿\n
    ⠀⠀⣿⣉⣿⣿⣿⣿⣉⠉⣿⣶\n
    ⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿\n
    ⠀⣤⣿⣿⣿⣿⣿⣿⣿⠿⠀⣿⣶\n
    ⣤⣿⠿⣿⣿⣿⣿⣿⠿⠀⠀⣿⣿⣤\n
    ⠉⠉⠀⣿⣿⣿⣿⣿⠀⠀⠒⠛⠿⠿⠿\n
    ⠀⠀⠀⠉⣿⣿⣿⠀⠀⠀⠀⠀⠀⠉\n
    ⠀⠀⠀⣿⣿⣿⣿⣿⣶\n
    ⠀⠀⠀⠀⣿⠉⠿⣿⣿\n
    ⠀⠀⠀⠀⣿⣤⠀⠛⣿⣿\n
    ⠀⠀⠀⠀⣶⣿⠀⠀⠀⣿⣶\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣭⣿⣿\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⠉\n`);
  await msleep(200);
  console.log(`
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣶\n
    ⠀⠀⠀⠀⠀⣀⣀⠀⣶⣿⣿⠶\n
    ⣶⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣤\n
    ⠀⠉⠶⣶⣀⣿⣿⣿⣿⣿⣿⣿⠿⣿⣤⣀\n
    ⠀⠀⠀⣿⣿⠿⠉⣿⣿⣿⣿⣭⠀⠶⠿⠿\n
    ⠀⠀⠛⠛⠿⠀⠀⣿⣿⣿⣉⠿⣿⠶\n
    ⠀⠀⠀⠀⠀⣤⣶⣿⣿⣿⣿⣿\n
    ⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⠒\n
    ⠀⠀⠀⠀⣀⣿⣿⣿⣿⣿⣿⣿\n
    ⠀⠀⠀⠀⠀⣿⣿⣿⠛⣭⣭⠉\n
    ⠀⠀⠀⠀⠀⣿⣿⣭⣤⣿⠛\n
    ⠀⠀⠀⠀⠀⠛⠿⣿⣿⣿⣭\n
    ⠀⠀⠀⠀⠀⠀⠀⣿⣿⠉⠛⠿⣶⣤\n
    ⠀⠀⠀⠀⠀⠀⣀⣿⠀⠀⣶⣶⠿⠿⠿\n
    ⠀⠀⠀⠀⠀⠀⣿⠛\n
    ⠀⠀⠀⠀⠀⠀⣭⣶\n`);
  await msleep(200);
  console.log(`
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿\n
    ⠀⠀⣶⠀⠀⣀⣤⣶⣤⣉⣿⣿⣤⣀\n
    ⠤⣤⣿⣤⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣀\n
    ⠀⠛⠿⠀⠀⠀⠀⠉⣿⣿⣿⣿⣿⠉⠛⠿⣿⣤\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⠛⠀⠀⠀⣶⠿\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⣿⣿⣿⣤⠀⣿⠿\n
    ⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⣿⣿⣿⣿⣿⣿\n
    ⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⣿⣿⠿⠉⠉\n
    ⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿⠿\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠉\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⣛⣿⣭⣶⣀\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠉⠛⣿\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⣿\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣉⠀⣶⠿\n
    ⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⠿\n
    ⠀⠀⠀⠀⠀⠀⠀⠛⠿⠛\n`);
  await msleep(200);
  console.log(`
    ⠀⠀⠀⣶⣿⣶\n
    ⠀⠀⠀⣿⣿⣿⣀\n
    ⠀⣀⣿⣿⣿⣿⣿⣿\n
    ⣶⣿⠛⣭⣿⣿⣿⣿\n
    ⠛⠛⠛⣿⣿⣿⣿⠿\n
    ⠀⠀⠀⠀⣿⣿⣿\n
    ⠀⠀⣀⣭⣿⣿⣿⣿⣀\n
    ⠀⠤⣿⣿⣿⣿⣿⣿⠉\n
    ⠀⣿⣿⣿⣿⣿⣿⠉\n
    ⣿⣿⣿⣿⣿⣿\n
    ⣿⣿⣶⣿⣿\n
    ⠉⠛⣿⣿⣶⣤\n
    ⠀⠀⠉⠿⣿⣿⣤\n
    ⠀⠀⣀⣤⣿⣿⣿\n
    ⠀⠒⠿⠛⠉⠿⣿\n
    ⠀⠀⠀⠀⠀⣀⣿⣿\n
    ⠀⠀⠀⠀⣶⠿⠿⠛\n`);
}

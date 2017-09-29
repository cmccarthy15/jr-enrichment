const express = require('express');
const router = express.Router();
const {db, Student, Teacher} = require('../db.js');

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
module.exports =  router;

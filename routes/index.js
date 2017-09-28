const express = require('express');
const router = express.Router();
const {db, Student, Teacher} = require('../db.js');

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
module.exports =  router;

router.get('/allstudents', function(req, res, next){
  Student.findAll().then(students => res.json(students));
});

router.get('/allteachers', function(req, res, next){
  Teacher.findAll().then(teachers => res.json(teachers));
});

router.post('/addstudent', function(req, res, next){
  Student.create({
    name: req.body.name,
    GPA: req.body.GPA
  }).then((student) => res.status(201).json(student));
});

router.post('/addteacher', function(req, res, next){
  Teacher.create({
    name: req.body.name,
    subject: req.body.subject
  }).then((teacher) => res.status(201).json(teacher));
});

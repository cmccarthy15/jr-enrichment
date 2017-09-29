const express = require('express');
const router = express.Router();
const {db, Student, Teacher} = require('../db.js');

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
module.exports =  router;

// const studentRouter = require('./students');
// const teacherRouter = require('./teachers');
// router.use('/students', studentRouter);
// router.use('/teachers', teacherRouter);

router.get('/students/all', function(req, res, next){
  Student.findAll().then(students => res.json(students));
});

router.get('/students/teacher/:id', function(req, res, next){
  Student.findAll({ where: { teacherId: req.params.id}}).then(students => res.json(students));
});

router.get('/students/:id', function(req, res, next){
  Student.findOne({ where: { id: req.params.id}}).then(student => res.json(student));
});

router.post('/students/add', function(req, res, next){
  Student.create({
    name: req.body.name,
    GPA: req.body.GPA
  }).then((student) => res.status(201).json(student));
});

router.delete('/students/:id', function(req, res, next){
  Student.destroy({ where: { id: req.params.id }}).then(student => res.status(202).json(student));
});

router.get('/teachers/all', function(req, res, next){
  Teacher.findAll().then(teachers => res.json(teachers));
});

router.get('/teachers/:id', function(req, res, next){
  Teacher.findOne({ where: { id: req.params.id}}).then(teacher => res.json(teacher));
});

router.post('/teachers/add', function(req, res, next){
  Teacher.create({
    name: req.body.name,
    subject: req.body.subject
  }).then((teacher) => res.status(201).json(teacher));
});



/* TO DO
 * - UPDATE STUDENT TEACHER
 * - CREATE TEACHER IF STUDENT TEACHER UPDATE AND TEACHER DOESN'T EXIST
 * - CREATE TWO DIFFERENT ROUTERS
 *      - STUDENTS     - TEACHERS
 * - add some hooks
*/

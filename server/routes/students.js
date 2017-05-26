'use strict';

const express = require('express');
const mime = require('mime');
const api = express.Router();
const models = require('../../db/models');
const Student = models.Student;
const Campus = models.Campus;
module.exports = api;

api.get('/', function (req, res, next) {
  Student.findAll({ where: req.query })
  .then(student => res.json(student))
  .catch(next);
});

api.get('/:id', function (req, res, next) {
  Student.findById(req.params.id)
  .then( function(student) {
    if (student === null) res.status(404).send();
    res.json(student);
  })
  .catch(next);
})

api.post('/', function (req, res, next) {
  Student.create(req.body)
  .then( function(student) {
    res.json( {
      message: 'Created successfully',
      student: student
    })
  })
  .catch(next);
})

api.put('/:id', function (req, res, next) {
  Student.findById(req.params.id)
  .then( (student) => {
    if (req.body.name === '') res.sendStatus(500);
    return student.update({
        name: req.body.name
    })
  })
  .then( function(student) {

    res.json( {
      message: 'Updated successfully',
      student: student
    })
  })
  .catch(next);
})

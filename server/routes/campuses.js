'use strict';

const express = require('express');
const mime = require('mime');
const api = express.Router();
const models = require('../../db/models');
const Campus = models.Campus;

module.exports = api;

api.get('/', function (req, res, next) {
  Campus.findAll({ where: req.query })
  .then(campus => res.json(campus))
  .catch(next);
});

api.param('studentId', function (req, res, next, id) {
  Campus.findById(id)
  .then(campus => {
    if (!campus) {
      const err = Error('Campus not found');
      err.status = 404;
      throw err
    }
    req.campus = campus;
    next();
    return null; // silences bluebird warning about promises inside of next
  })
  .catch(next);
});

api.get('/:studentId', function (req, res, next) {
  res.json(req.campus)
})
api.get('/:studentId/students', function (req, res, next) {
  req.campus.getStudents()
  .then( students => res.json(students))
  .catch(next);
})

api.get('/image', function (req, res, next) {
  res.redirect('/default-campus.jpg')
});

api.post('/', function (req, res, next) {
  Campus.create(req.body)
  .then( function(campus) {
    res.json(campus)
  })
  .catch(next);
})

api.delete('/:campusId', function (req, res, next) {
  Campus.findById(req.params.campusId)
  .then(campus => {
    if (!campus) {
      const err = Error('Campus not found');
      err.status = 404;
      throw err
    }
    campus.destroy();
  })
  .catch(next);
});

api.put('/:id', function (req, res, next) {
  Campus.findById(req.params.id)
  .then( (campus) => {
    console.log('found campus: ', campus)
    if (req.body.name === '') res.sendStatus(500);
    return campus.update({
        name: req.body.nameQuery,
        nickname: req.body.nicknameQuery
    })
  })
  .then( function(campus) {
    res.json(campus)
  })
  .catch(next);
})

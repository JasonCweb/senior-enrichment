// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const Promise = require('bluebird');
const models = require('./db/models');
const db = models.db;
const Student = models.Student;
const Campus = models.Campus;

let campuses = [
      {
        name: 'Europa',
        nickname: 'first extraterrestrial settlement'
      },
      {
        name: 'Phobos',
        nickname: 'land of fear'
      }
    ];
let students = [
      {
        name: 'Jeff Kaplan',
        email: 'jeffKaplan@gmail.com'
      },
      {
        name: 'Jason Choe',
        email: 'jasonChoe@gmail.com'
      }
    ];

db.sync({force: true})
    .then(function () {
        console.log("Dropped old data, now inserting data");
        return Promise.map(Object.keys(campuses), function (item) {
          console.log('item is: ', campuses[item]);
          return Campus.create(campuses[item]);
        });
    })
    .then(function (res) {
      return Promise.map(Object.keys(students), function (item) {
          console.log('item is: ', students[item]);
          return Student.create(students[item]);
      })
    })
    .then(function (res) {
      console.log('res is:', res);
      res[0].setCampus(campuses[0]);
      res[1].setCampus(campuses[1]);
    })
    .then(function () {
        console.log("Finished inserting data");
    })
    .catch(function (err) {
        console.error('There was totally a problem', err, err.stack);
    })
    .finally(function () {
        db.close() // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
        console.log('connection closed'); // the connection eventually closes, we just manually do so to end the process quickly
        return null; // silences bluebird warning about using non-returned promises inside of handlers.
    });

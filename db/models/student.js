'use strict';
const Sequelize = require('sequelize')
const db = require('../index.js')
const Campus = require('./Campus')


module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      },
     defaultValue: 'gany@gmail.com'
    }
  }
}, {
  scopes: {
    campusIds: () => ({ // function form lets us use to-be-defined models
      include: [{
        model: db.model('campus'),
        attributes: ['id']
      }]
    }),
    populated: () => ({ // function form lets us use to-be-defined models
      include: [{
        model: db.model('campus').scope('defaultScope', 'populated')
      }]
    })
  },
  getterMethods: {
    name: function() {
      return this.getDataValue('name');
    }
  },
  setterMethods: {
    name: function(value) {
      this.setDataValue('name', value);
    },
    email: function(value) {
      this.setDataValue('email', value);
    }
  },
  instanceMethods: {
    setCampus: function(campus) {
      return this.setCampus(campus);
    }
  }
})

'use strict';
const Sequelize = require('sequelize')
const db = require('../index.js')
const Student = require('./student')


module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Ganymede'
  },
  nickname: {
    type:  Sequelize.STRING,
    defaultValue: 'the Jupiter of Jupiter'
  }
},
// {
//   defaultScope: {
//     include: [Student]
//   }
// },
{
  getterMethods: {
    name: function() {
      return this.getDataValue('name');
    }
  },
  setterMethods: {
    name: function(value) {
      this.setDataValue('name', value);
    }
  }
})

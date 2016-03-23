if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {

    add: function (a, b) {

    },

    multiply: function (a, b) {

    },

    subtract: function (a, b) {

    },

    divide: function (a, b) {
      if (b === 0) throw new Error('Attempt to divide by zero');
      return a / b;
    },

    square: function (a) {

    },

    round: function (a) {

    },

    sqrt: function (a) {

    },

    flipSign: function (a) {

    },

    reverse: function (a) {

    },

    sinus: function (a) {

    },

    cosinus: function (a) {

    },

    power: function (base, exponent) {

    }
  };
});
/*jshint expr:true */
/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}
if (typeof expect !== 'function') {
  var expect = require('expect.js');
}

define([
  'underscore',
  'app/calculator'
], function (_, calculator) {

  describe('calculator', function () {

    it('should throw error when dividing by zero', function () {

      expect(function () {
        calculator.divide(1, 0);
      }).to.throw();

    });


  });
});
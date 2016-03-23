/*globals mocha:true */
var tests = [
  // link to test files here
  'tests/app/calculator'
];

if (typeof window !== 'undefined') {
  // do nothing
} else {
  var requirejs = require('requirejs');
  requirejs.config({
    baseUrl : __dirname + '/../',
    nodeRequire : require,
    paths : {
      // Libraries
      underscore : 'lib/underscore',

      // Shim Plugin
      use : 'lib/plugins/use',
      text : 'lib/plugins/text',
      jquery : 'lib/jquery'
    },

    use : {
      underscore : {
        attach : '_'
      }
    }
  });
}

var requireQueue = function (modules, callback) {
    function load(queue, results) {
        if (queue.length) {
            require([queue.shift()], function (result) {
                results.push(result);
                load(queue, results);
            });
        } else {
            callback.apply(null, results);
        }
    }

    load(modules, []);
};

requireQueue(tests, function () {
    if (typeof mocha !== 'undefined') {
        mocha.run();
    }
});
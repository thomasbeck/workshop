var express   = require('express'),
    fs        = require('fs'),
    _         = require('underscore'),

    site      = express.createServer(),
    staticDir = express['static'];

module.exports = function(opts) {
  opts = _.extend({
    port :      4444,
    baseDir :   './'
  }, opts || {});

  site.configure(function() {
    [ 'app', 'lib', 'tests', 'data', 'answers' ].forEach(function(dir) {
      site.use('/' + dir, staticDir(opts.baseDir + dir));
    });
    site.use(express.bodyParser());
  });

  site.get("/", function(req, res) {
    fs.createReadStream(opts.baseDir + 'tests/runner.html').pipe(res);
  });

  site.listen(opts.port);

  console.log("\n\nServing at http://localhost:" + opts.port);
};

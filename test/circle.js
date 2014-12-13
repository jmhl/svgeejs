var casper = require('casper');
var SVGEE = require('../SVGEE');
    // var canvas = document.getElementById('canvas');
    // var svg = SVGEE.createSvg(500, 500);
    // canvas.appendChild(svg);
    // var circle = SVGEE.circle(100, 100, 100);

casper.test.begin('test circle', 1, function suite(test) {
  casper.start('http://localhost:8000', function() {
    // test.assertExists('div.canvas', 'canvas exists');
    this.echo(this.getTitle());
  });

  casper.run(function() {
    test.done();
  });
});

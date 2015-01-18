'use strict';

function averageOfPoints(element) {
  var pointPairs = element.getAttribute('points').split(' ');
  var count = pointPairs.length - 1;
  var xs = 0;
  var ys = 0;

  pointPairs.forEach(function(pair) {
    if (pair !== '') {
      var split = pair.split(',');
      xs += +split[0];
      ys += +split[1];
    }
  });

  return {
    x: xs / count + 38,
    y: ys / count - 16 
  }
}

module.exports = averageOfPoints;

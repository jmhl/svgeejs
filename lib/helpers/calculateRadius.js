'use strict';

function calculateRadius(numSides, lenSide) {
  var angle = 360 / numSides;
  var oppSide = lenSide / 2;
  var hypotenuse = oppSide / Math.sin(toRadians(angle));
  
  return hypotenuse;
}

module.exports = calculateRadius;

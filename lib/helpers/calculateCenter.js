'use strict';

function calculateCenter(numSides, lenSide, angle, idx) {
  var radius = calculateRadius(numSides, lenSide);
  var x = calculateX(300, radius, angle);
  var y;

  // == used for type coercion
  if (numSides != 3) {
    y = 300;
  } else if (idx === 0) {
    y = 300 + lenSide;
  } else if (idx === 2) {
    y = 300 - lenSide;
  }

  return {
    'x': x,
    'y': y
  };
}

module.exports = calculateCenter;

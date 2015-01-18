'use strict';

function calculateX(x, len, angle) {
  x += len * Math.cos(toRadians(angle));
  return x;
}

module.exports = calculateX;

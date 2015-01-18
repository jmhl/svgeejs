'use strict';

function calculateY(y, len, angle) {
  y += len * Math.sin(toRadians(angle));
  return y;
}

module.exports = calculateY;

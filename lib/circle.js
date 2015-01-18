'use strict';

/**
 * Creates an SVG circle element.
 *
 * @param {number} cx The x-coordinate of the center of the circle.
 * @param {number} cy The y-coordinate of the center of the circle.
 * @param {number} radius The radius of the circle.
 *
 * @returns {element} The SVG circle element to be appended to the SVG canvas.
 */
function circle(cx, cy, radius) {
  var circle = document.createElementNS(w3SvgUrl, 'circle');

  circle.setAttributeNS(null, 'cx', cx);
  circle.setAttributeNS(null, 'cy', cy);
  circle.setAttributeNS(null, 'r', radius);

  // circle still needs to be appended
  return circle;
};

module.exports = circle;

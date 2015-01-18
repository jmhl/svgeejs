'use strict';

/**
 * Creates an SVG line element.
 *
 * @param {number} x1 The x-coordinate of the first point.
 * @param {number} y1 The y-coordinate of the first point.
 * @param {number} x2 The x-coordinate of the second point.
 * @param {number} y2 The y-coordinate of the second point.
 *
 * @returns {element} The SVG line element to be added to the SVG canvas.
 */
function line(x1, y1, x2, y2) {
  var line = document.createElementNS(w3SvgUrl, 'line');

  line.setAttributeNS(null, 'x1', x1);
  line.setAttributeNS(null, 'y1', y1);
  line.setAttributeNS(null, 'x2', x2);
  line.setAttributeNS(null, 'y2', y2);

  return line;
}

module.exports = line;

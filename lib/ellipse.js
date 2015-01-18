'use strict';

/**
 * Creates an SVG ellipse element.
 *
 * @param {number} cx The x-coordinate of the center of the ellipse.
 * @param {number} cy The y-coordinate of the center of the ellipse.
 * @param {number} rx The horizontal radius of the ellipse.
 * @param {number} ry The vertical radius of the ellipse.
 *
 * @returns {element} The SVG ellipse element to be append to the SVG canvas.
 */
function ellipse(cx, cy, rx, ry) {
  var ellipse = document.createElementNS(w3SvgUrl, 'ellipse');

  ellipse.setAttributeNS(null, 'cx', cx);
  ellipse.setAttributeNS(null, 'cy', cy);
  ellipse.setAttributeNS(null, 'rx', rx);
  ellipse.setAttributeNS(null, 'ry', ry);

  return ellipse;
}

module.exports = ellipse;

'use strict';

/**
 * Creates an SVG rectangle element.
 *
 * @param {number} x The x-coordinate of the top left corner of the rectangle.
 * @param {number} y The y-coordinate of the top left corner of the rectangle.
 * @param {number} width The width of the rectangle.
 * @param {number} height The height of the rectangle.
 *
 * @returns {element} The SVG rectangle element to be appended to the SVG canvas.
 */
function rect(x, y, width, height) {
  var rect = document.createElementNS(w3SvgUrl, 'rect');

  rect.setAttributeNS(null, 'x', x);
  rect.setAttributeNS(null, 'y', y);
  rect.setAttributeNS(null, 'width', width);
  rect.setAttributeNS(null, 'height', height);

  return rect;
}

module.exports = rect;

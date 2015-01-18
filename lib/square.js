'use strict';

var rect = require('./rect');

/**
 * Creates an SVG square element.
 *
 * @param {number} x The x-coordinate of the top left corner of the square.
 * @param {number} y The y-coordinate of the top left corner of the square.
 * @param {number} sideLength The length of the sides of the square.
 *
 * @returns {element} The SVG rectangle element to be appended to the SVG canvas.
 */
function square(x, y, sideLength) {
  // delegate to rect function
  return rect(x, y, sideLength, sideLength);
}

module.exports = square;

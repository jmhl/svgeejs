'use strict';

var w3SvgUrl = 'http://www.w3.org/2000/svg';

/**
 * Creates an SVG canvas
 *
 * @param {number} width The width of the SVG canvas.
 * @param {number} height The height of the SVG canvas.
 *
 * @returns {element} The SVG canvas element. The SVG canvas element to be appended to the document.
 */
function createSVG(width, height) {
  var svg = document.createElementNS(w3SvgUrl, 'svg');

  svg.setAttributeNS(null, 'width', width);
  svg.setAttributeNS(null, 'height', height);

  // svg still needs to be appended
  return svg;
};

module.exports = createSVG;

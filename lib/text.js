'use strict';

/**
 * Creates an SVG text elment.
 *
 * @param {number} x The x-coordinate of the top left corner of the text.
 * @param {number} y The y-coordinate of the top left corner of the text.
 * @param {string} msg The text that you wish to display.
 *
 * @returns {element} The SVG text element to append to the SVG canvas.
 */
function text(x, y, fontSize, content) {
  var text = document.createElementNS(w3SvgUrl, 'text');

  text.setAttributeNS(null, 'x', x);
  text.setAttributeNS(null, 'y', y);
  text.setAttributeNS(null, 'font-size', fontSize);
  text.textContent = content;

  return text;
}

module.exports = text;

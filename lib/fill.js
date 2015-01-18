'use strict';

/**
 * Fills the SVG element with a certain color.
 *
 * @param {element} element The SVG element to be filled.
 * @param {string} color The string of the color (rgb, hex, etc.).
 *
 * @returns Null.
 */
function fill(element, color) {
  element.setAttributeNS(null, 'fill', color);
};

module.exports = fill;

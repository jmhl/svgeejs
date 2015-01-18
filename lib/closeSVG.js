'use strict';

var w3SvgUrl = 'http://www.w3.org/2000/svg';

/**
 * Closes the SVG canvas
 *
 * @param {element} element The SVG element that you want to close.
 */
function closeSVG(element) {
  element.setAttribute('xmlns', w3SvgUrl);
};

module.exports = closeSVG;

'use strict';

/**
 * Adds a class to an element.
 *
 * @param {element} element The SVG element to add the class to.
 * @param {string} className The name of the class to add to the SVG element.
 */
function addClass(element, className) {
  element.classList.add(className);
}

module.exports = addClass;

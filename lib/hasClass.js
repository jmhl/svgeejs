'use strict';

/**
 * Checks if an element has the specified class.
 *
 * @param {element} element The SVG element to check for the class.
 * @param {string} className The class to check if the SVG element has.
 *
 * @returns {boolean} Returns true if the element has the class, false otherwise.
 */
function hasClass(element, className) {
  return element.classList.contains(className);
}

module.exports = hasClass;

'use strict';

/**
 * Removes a class from an element.
 *
 * @param {element} element The SVG element to remove the class from.
 * @param {string} className The name of the class to remove from the SVG element.
 */
function removeClass(element, className) {
  element.classList.remove(className);
}

module.exports = removeClass;

'use strict';

/**
 * Toggles a class on an element - removes the class if the element currently contains it, and adds it otherwise.
 *
 * @param {element} element The SVG element whose class we want to toggle.
 * @param {string} className The name of the class to toggle on the SVG element.
 */
function toggleClass(element, className) {
  element.classList.toggle(className);
}

module.exports = toggleClass;

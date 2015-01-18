'use strict';

/**
 * Creates an SVG group element that includes the elements passed in to the function.
 *
 * @param {array} elements The elements in the group.
 * @param {string} identifier (optional) An id to apply to the element.
 *
 * @returns The SVG group elment to append to the SVG canvas.
 */
function group(elements, identifier) {
  var group = document.createElementNS(w3SvgUrl, 'g');

  if (identifier) {
    group.setAttributeNS(null, 'id', identifier);
  }

  elements.forEach(function(element) {
    group.appendChild(element);
  });

  return group;
}

module.exports = group;

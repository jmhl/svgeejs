'use strict';

/**
 *
 */
function animate(element, attributeName, from, to, duration, repeatCount) {
  var animation = document.createElementNS(w3SvgUrl, 'animate');

  animation.setAttributeNS(null, 'attributeType', 'XML');
  animation.setAttributeNS(null, 'attributeName', attributeName);
  animation.setAttributeNS(null, 'from', from);
  animation.setAttributeNS(null, 'to', to);
  animation.setAttributeNS(null, 'dur', duration);
  animation.setAttributeNS(null, 'repeatCount', repeatCount);

  // circle still needs to be appended
  element.appendChild(animation);

  return element;
}

module.exports = animate;

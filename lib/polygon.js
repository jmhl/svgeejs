'use strict';

/**
 * Creates an SVG polygon element.
 *
 * @param {array} coordinatePairs An array of coordinate pairs. Each coordinate point but have a pair (e.g. [x1, y1, x2, y2]).
 *
 * @returns {element} The SVG polygon element to be added to the SVG canvas. Returns false a coordinate does not have a pair coordinate.
 */
// TODO: throw an error when each coordinate does not have a pair
function polygon(coordinatePairs) {
  if (coordinatePairs.length % 2 !== 0) { return false; }

  var polygon = document.createElementNS(w3SvgUrl, 'polygon');
  var coordinatePairsString = createCoordinatePairString(coordinatePairs);

  polygon.setAttributeNS(null, 'points', coordinatePairsString);

  return polygon;
}

module.exports = polygon;

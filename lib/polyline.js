'use strict';

/**
 * Creates an SVG polyline element.
 *
 * @param {array} coordinatePairs An array of coordinate pairs. Each coordinate point but have a pair (e.g. [x1, y1, x2, y2]).
 *
 * @returns {element} The SVG polyline element to be added to the SVG canvas. Returns false a coordinate does not have a pair coordinate.
 */
// TODO: throw an error when each coordinate does not have a pair
function polyline(coordinatePairs) {
  if (coordinatePairs.length % 2 !== 0) { return false; }

  var polyline = document.createElementNS(w3SvgUrl, 'polyline');
  var coordinatePairsString = createCoordinatePairString(coordinatePairs);

  polyline.setAttributeNS(null, 'points', coordinatePairsString);

  return polyline;
}

module.exports = polyline;

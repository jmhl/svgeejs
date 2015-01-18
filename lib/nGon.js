'use strict';

/** Creates an SVG nGon element - an n-sided regular polygon.
 * 
 * @param {number} numSides The number of sides you want your polygon to have.
 * @param {array} center An array of coordinates on the SVG canvas that will be the center of the polygon.
 * @param {number} lenSide The length of each side of the polygon.
 *
 * @returns {element} The SVG nGon element (which is just a polyline element with the coordinates calculated for you!).
 */
function nGon(numSides, center, lenSide) {
  var x = center[0];
  var y = center[1];
  var angle = 360 / numSides;
  var angleInc = angle;
  var oppSide = lenSide / 2;
  var hypotenuse = calculateRadius(numSides, lenSide);
  var points = [];
  var startX = x;
  var startY = y + hypotenuse;

  while (angle <= 360 + angleInc) {
    var endX = calculateX(x, hypotenuse, angle);
    var endY = calculateY(y, hypotenuse, angle);
    points = points.concat([endX, endY]);
    angle += angleInc;
  }

  return polyline(points);
}

module.exports = nGon;

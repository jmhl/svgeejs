'use strict';

/**
 * Tiles a canvas with an element, good for backgrounds.
 *
 * @param {element} canvas The SVG canvas element that you want tiled.
 * @param {object} element An object that includes the number of sides of the element you want to tile (numSides) and the length of those sides (lenSide). 
 * @param {array} startCoords (optional) The coordinates where you want to start the tiling. If not entered, will default to [0, 0].
 *
 * @returns An SVG group element to be appended to the SVG canvas.
 */
function tile(canvas, element, startCoords) {
  var startX = startCoords[0] || 0;
  var startY = startCoords[1] || 0;
  var numSides = element.numSides;
  var lenSide = element.lenSide;
  var maxX = canvas.getAttribute('width');
  var maxY = canvas.getAttribute('height');
  var radius = calculateRadius(numSides, lenSide);
  var rows = maxY / radius + 10;
  var diameter = radius * 2
  var elements = [];
  var elementsInRow = (maxX / diameter);
  var elementYPosition = startY;

  for (var i = 1; i <= rows; i += 1) {
    var elementXPosition = i % 2 === 0
      ? radius * 1.5 
      : startX;

    for (var j = 0; j < elementsInRow; j += 1) {
      var el = nGon(numSides, [elementXPosition, elementYPosition], lenSide);
      elements.push(el);
      elementXPosition += diameter + radius;
    }

    elementYPosition += radius * 0.86;
  }

  var tileGroup = group(elements);

  return tileGroup;
}

module.exports = tile;

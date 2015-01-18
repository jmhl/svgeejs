'use strict';

/**
 * Archimedean (semi-regular) tessellation.
 */

// regular tessellations:
// ['3.3.3.3.3.3', '4.4.4.4', '6.6.6.']
// semi-regular tessellations:
// ['3.3.3.4.4', '3.3.4.3.3', '3.4.6.4', '3.6.3.6', '4.8.8', '4.6.12', '3.3.3.3.6', '3.12.12']
// form all shapes around the center point by building out nGons after calculating all the individual element's center points
// group the elements and then tile the group over the canvas
// http://mathforum.org/sum95/suzanne/whattess.html
// will need a 'rules' object to make this easier...
function tessellate(canvas, pattern, baseLength) {
  if (!isValidPattern(pattern)) {
    console.log('invalid pattern for tessellation');
    return;
  }

  var patternShapes = pattern.split('.');
  var colors = ['teal', 'pink', 'teal', 'pink'];
  var elements = [];

  patternShapes.forEach(function(numSides, i) {
    var lenSide = numSides * baseLength;
    var radius = calculateRadius(numSides, lenSide);
    var angle = calculateAngle(pattern, i);
    var centerPoints = calculateCenter(numSides, lenSide, angle, i);
    var x = centerPoints.x;
    var y = centerPoints.y;

    var element = createTessellationElement(numSides, [x, y], lenSide);
    var element = nGon(numSides, [x, y], lenSide);
    var color = colors[i];
    fill(element, color);
    elements.push(element);
    rotateElement(element, i);
  });

  var tessellateGroup = group(elements);

  return tessellateGroup;
}

function createTessellationElement(numSides, centerPoints, lenSide) {
  var x = centerPoints[0];
  var y = centerPoints[1];

  if (numSides === 4) {
    // return square(x, y, lenSide);
  } else {
    return nGon(numSides, [x, y], lenSide);
  }
}

module.exports = tessellate;

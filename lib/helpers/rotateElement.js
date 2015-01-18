'use strict';

// store the center point for each side of each element and then use that as the center
// of the next elements to add
function rotateElement(element, idx) {
  if (idx == 0) {
    var avg = averageOfPoints(element);
    element.setAttributeNS(null, 'transform', 'rotate(30 ' + avg.x + ' ' +  avg.y + ')');
  } else if (idx == 2) {
    var avg = averageOfPoints(element);
    element.setAttributeNS(null, 'transform', 'rotate(-30 ' + avg.x + ' ' +  avg.y + ')');
  }
}

module.exports = rotateElement;

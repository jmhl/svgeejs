'use strict';

function createCoordinatePairString(coordinatePairs) {
  var coordinatePairsString = '';

  coordinatePairs.forEach(function(coordinate, index) {
    coordinatePairsString += coordinate;
    if (index === 0 || index % 2 === 0) {
      coordinatePairsString += ',';
    } else {
      coordinatePairsString += ' ';
    }
  });

  return coordinatePairsString;
}

module.exports = createCoordinatePairString;

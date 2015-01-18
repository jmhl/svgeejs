'use strict';

function isValidPattern(pattern) {
  var validPatterns = [
    // regular tessellations
    '3.3.3.3.3.3',
    '4.4.4.4',
    '6.6.6.',
    // semi-regular tessellations
    '3.3.3.4.4',
    '3.3.4.3.3',
    '3.4.6.4',
    '3.6.3.6',
    '4.8.8',
    '4.6.12',
    '3.3.3.3.6',
    '3.12.12'
  ];
  var valid = false;

  validPatterns.forEach(function(validPattern) {
    if (pattern === validPattern) {
      valid = true;
    }
  });

  return valid;
}

module.exports = isValidPattern;

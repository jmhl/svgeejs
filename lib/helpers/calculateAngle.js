'use strict';

function calculateAngle(pattern, id) {
  switch(pattern) {
    case '3.6.3.6':
      switch(id) {
        case 0: return 90;
        case 1: return 180;
        case 2: return 90;
        case 3: return 0;
      };
  };
}

module.exports = calculateAngle;

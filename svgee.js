(function SVGEE() {
  'use strict';

  // API to expose
  var SVGEE = {
    addClass    : require('./lib/addClass'),
    animate     : require('./lib/animate'),
    circle      : require('./lib/circle'),
    closeSVG    : require('./lib/closeSVG'),
    createSVG   : require('./lib/createSVG'),
    ellipse     : require('./lib/ellipse'),
    fill        : require('./lib/fill'),
    g           : require('./lib/group'),
    group       : require('./lib/group'),
    line        : require('./lib/line'),
    nGon        : require('./lib/nGon'),
    polygon     : require('./lib/polygon'),
    polyline    : require('./lib/polyline'),
    rect        : require('./lib/rect'),
    removeClass : require('./lib/removeClass'),
    stroke      : require('./lib/stroke'),
    square      : require('./lib/square'),
    tessellate  : require('./lib/tessellate'),
    text        : require('./lib/text'),
    tile        : require('./lib/tile'),
    toggleClass : require('./lib/toggleClass')
  };

  // actually expose the API
  this.SVGEE = SVGEE;
})();

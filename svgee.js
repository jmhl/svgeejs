(function SVGEE() {
  'use strict';

  // API to expose
  var SVGEE = {
    addClass    : require('lib/addClass'),
    animate     : require('animate'),
    circle      : require('circle'),
    closeSVG    : require('closeSVG'),
    createSVG   : require('createSVG'),
    ellipse     : require('ellipse'),
    fill        : require('fill'),
    g           : require('group'),
    group       : require('group'),
    line        : require('line'),
    nGon        : require('nGon'),
    polygon     : require('polygon'),
    polyline    : require('polyline'),
    rect        : require('rect'),
    removeClass : require('removeClass'),
    stroke      : require('stroke'),
    square      : require('square'),
    tessellate  : require('tessellate'),
    text        : require('text'),
    tile        : require('tile'),
    toggleClass : require('toggleClass')
  };

  // actually expose the API
  this.SVGEE = SVGEE;
})();

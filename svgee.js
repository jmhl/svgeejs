(function SVGEE() {
  var closeSvg = setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  var createSvg = function(width, height) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    svg.setAttribute('width', width);
    svg.setAttribute('height', height);

    // svg still needs to be appended
    return svg;
  };

  var createCircle = function(cx, cy, radius) {
    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', radius);

    // cirlce still needs to be appended
    return circle;
  };

  var fill = function(element, color) {
    element.setAttribute('fill', color);
  };

  // element, strokeWidth, and color are required, others are optional
  var stroke = function(element, stroke-width, color, stroke-linejoin, stroke-miterlimit, stroke-dasharray, stroke-dashoffset, stroke-opacity) {
    var optionalAttrs = [
      stroke-linejoin,
      stroke-miterlimit,
      stroke-dasharray,
      stroke-dashoffset,
      stroke-opacity
    ];

    element.setAttribute('stroke-width', stroke-width);
    element.setAttribute('stroke', color);

    var keys = Object.keys(optionalAttrs);

    optionalAttrs.forEach(function(attr) {
      if (attr) {
        element.setAttribute('' + attr + '', attr);
      }
    });

    return element;
  };
})();

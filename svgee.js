(function SVGEE() {
  // the w3 svg url to be reused basically everywhere
  var w3SvgUrl = 'http://www.w3.org/2000/svg';

  /**
   * Creates an SVG canvas
   *
   * @param {number} width The width of the SVG canvas.
   * @param {number} height The height of the SVG canvas.
   *
   * @returns {element} The SVG canvas element. The SVG canvas element to be appended to the document.
   */
  function createSvg(width, height) {
    var svg = document.createElementNS(w3SvgUrl, 'svg');

    svg.setAttribute('width', width);
    svg.setAttribute('height', height);

    // svg still needs to be appended
    return svg;
  };

  /**
   * Closes the SVG canvas
   *
   * @param {element} element The SVG element that you want to close.
   *
   * @returns Null.
   */
  function closeSvg(element) {
    element.setAttribute('xmlns', w3SvgUrl);
  };

  /**
   * Creates an SVG circle element.
   *
   * @param {number} cx The x-coordinate of the center of the circle.
   * @param {number} cy The y-coordinate of the center of the circle.
   * @param {number} radius The radius of the circle.
   *
   * @returns {element} The SVG circle element to be appended to the SVG canvas.
   */
  function circle(cx, cy, radius) {
    var circle = document.createElementNS(w3SvgUrl, 'circle');

    circle.setAttributeNS(null, 'cx', cx);
    circle.setAttributeNS(null, 'cy', cy);
    circle.setAttributeNS(null, 'r', radius);

    // circle still needs to be appended
    return circle;
  };

  /**
   * Creates an SVG ellipse element.
   *
   * @param {number} cx The x-coordinate of the center of the ellipse.
   * @param {number} cy The y-coordinate of the center of the ellipse.
   * @param {number} rx The horizontal radius of the ellipse.
   * @param {number} ry The vertical radius of the ellipse.
   *
   * @returns {element} The SVG ellipse element to be append to the SVG canvas.
   */
  function ellipse(cx, cy, rx, ry) {
    var ellipse = document.createElementNS(w3SvgUrl, 'ellipse');

    ellipse.setAttributeNS(null, 'cx', cx);
    ellipse.setAttributeNS(null, 'cy', cy);
    ellipse.setAttributeNS(null, 'rx', rx);
    ellipse.setAttributeNS(null, 'ry', ry);

    return ellipse;
  }

  /**
   * Creates an SVG rectangle element.
   *
   * @param {number} x The x-coordinate of the top left corner of the rectangle.
   * @param {number} y The y-coordiante of the top left corner of the rectangle.
   * @param {number} width The width of the rectangle.
   * @param {number} height The height of the rectangle.
   *
   * @returns {element} The SVG rectangle element to be appended to the SVG canvas.
   */
  function rect(x, y, width, height) {
    var rect = document.createElementNS(w3SvgUrl, 'rect');

    rect.setAttributeNS(null, 'x', x);
    rect.setAttributeNS(null, 'y', y);
    rect.setAttributeNS(null, 'width', width);
    rect.setAttributeNS(null, 'height', height);

    return rect;
  }

  /**
   * Creates an SVG square element.
   *
   * @param {number} x The x-coordinate of the top left corner of the square.
   * @param {number} y The y-coordiante of the top left corner of the square.
   * @param {number} sideLength The length of the sides of the square.
   *
   * @returns {element} The SVG rectangle element to be appended to the SVG canvas.
   */
  function square(x, y, sideLength) {
    // delegate to rect function
    return rect(x, y, sideLength, sideLength);
  }

  /**
   * Creates an SVG line element.
   *
   * @param {number} x1 The x-coordinate of the first point.
   * @param {number} y1 The y-coordiante of the first point.
   * @param {number} x2 The x-coordinate of the second point.
   * @param {number} y2 The y-coordinate of the second point.
   *
   * @returns {element} The SVG line element to be added to the SVG canvas.
   */
  function line(x1, y1, x2, y2) {
    var line = document.createElementNS(w3SvgUrl, 'line');

    line.setAttributeNS(null, 'x1', x1);
    line.setAttributeNS(null, 'y1', y1);
    line.setAttributeNS(null, 'x2', x2);
    line.setAttributeNS(null, 'y2', y2);

    return line;
  }

  /**
   * Creates an SVG polyline element.
   *
   * @param {array} coordinatePairs An array of coordinate pairs. Each coordinate point but have a pair (e.g. [x1, y1, x2, y2]).
   *
   * @returns {element} The SVG polyline element to be added to the SVG canvas. Returns false a coordinate does not have a pair coordinate.
   */
  // TODO: throw an error when each coordinate does not have a pair
  function polyline(coordinatePairs) {
    if (coordinatePairs.length % 2 !== 0) { return false; }

    var polyline = document.createElementNS(w3SvgUrl, 'polyline');
    var coordinatePairsString = createCoordinatePairString(coordinatePairs);

    polyline.setAttributeNS(null, 'points', coordinatePairsString);

    return polyline;
  }

  /**
   * Creates an SVG polygon element.
   *
   * @param {array} coordinatePairs An array of coordinate pairs. Each coordinate point but have a pair (e.g. [x1, y1, x2, y2]).
   *
   * @returns {element} The SVG polygon element to be added to the SVG canvas. Returns false a coordinate does not have a pair coordinate.
   */
  // TODO: throw an error when each coordinate does not have a pair
  function polygon(coordinatePairs) {
    if (coordinatePairs.length % 2 !== 0) { return false; }

    var polygon = document.createElementNS(w3SvgUrl, 'polygon');
    var coordinatePairsString = createCoordinatePairString(coordinatePairs);

    polygon.setAttributeNS(null, 'points', coordinatePairsString);

    return polygon;
  }

  // helper method for polyline and polygon
  function createCoordinatePairString(coordinatePairs) {
    var coordinatePairsString = "";

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

  /**
   * Creates an SVG text elment.
   *
   * @param {number} x The x-coordinate of the top left corner of the text.
   * @param {number} y The y-coordiante of the top left corner of the text.
   * @param {string} msg The text that you wish to display.
   *
   * @returns {element} The SVG text element to append to the SVG canvas.
   */
  function text(x, y, fontSize, msg) {
    var text = document.createElementNS(w3SvgUrl, 'text');

    text.setAttributeNS(null, 'x', x);
    text.setAttributeNS(null, 'y', y);
    text.setAttributeNS(null, 'font-size', fontSize);
    text.textContent = msg;

    return text;
  }

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
    var hypotenuse = oppSide / Math.sin(toRadians(angle));
    console.log(hypotenuse);
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

  function calculateX(x, len, angle) {
    x += len * Math.cos(toRadians(angle));
    return x;
  }

  function calculateY(y, len, angle) {
    y += len * Math.sin(toRadians(angle));
    return y;
  }

  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  /**
   * Tiles a canvas with an element, good for backgrounds.
   *
   * @param {element} canvas The SVG canvas element that you want tiled.
   * @param {string} element The type of SVG element that you want tiled. Options are: 'hexagon'
   * @param {array} startCoords (optional) The coordinates where you want to start the tiling. If not entered, will default to [0, 0].
   *
   * @returns An SVG group element to be appended to the SVG canvas.
   */
  function tile(canvas, element, startCoords) {
    var startX = startCoords[0] || 0;
    var startY = startCoords[1] || 0;
    var maxX = canvas.getAttribute('width');
    var maxY = canvas.getAttribute('height');
    var rows = 5;
    var radius = 56.568542494923804;
    var diameter = radius * 2
    var elements = [];
    var elementsInRow = (maxX / diameter) / 2;
    var elementYPosition = startY;

    for (var i = 1; i <= rows; i += 1) {
      var elementXPosition = i % 2 === 0
        ? radius
        : startX;

      for (var j = 0; j < elementsInRow; j += 1) {
        var el = nGon(8, [elementXPosition, elementYPosition], 80);
        elements.push(el);
        elementXPosition += elementXPosition;
      }

      elementYPosition += elementYPosition;
    }

    var tileGroup = group(elements);

    return tileGroup;
  }

  /**
   * Fills the SVG element with a certain color.
   *
   * @param {element} element The SVG element to be filled.
   * @param {string} color The string of the color (rgb, hex, etc.).
   *
   * @returns Null.
   */
  function fill(element, color) {
    element.setAttribute('fill', color);
  };

  /**
   * Alters the stroke of the SVG element.
   *
   * @param {element} element The SVG element whose stroke you wish to be altered.
   * @param {number} strokeWidth The width of the stroke.
   * @param {string} color The color of the stroke.
   * @param {string} strokeLinecap (optional) Caps the ends of the stroke, can be: 'butt', 'round', or 'square'.
   * @param {string} strokeLinejoin (optional) Defines how the join between two lines is rendered, can be: 'bevel', 'miter', or 'round'.
   * @param {number} strokeMiterlimit (optional) When strokeLinejoin === 'miter', this variable limits how far between the point the two lines meet.
   * @param {number} strokeDasharray (optional) Creates a dashed stroke, the values determine the length of the dashes and spaces. Takes numbers in the format: 0 0 0 0.
   * @param {number} strokeDashoffset (optional) When strokeDasharray is defined, this value is used to determine how far into the stroke to start the dash pattern.
   * @param {number} strokeOpacity (optional) Value between 0 and 1 which determines the opacity of the stroke.
   *
   * @returns {element} Returns the SVG element.
   */
  // TODO: use an options hash
  function stroke(element, strokeWidth, color, strokeLinecap, strokeLinejoin, strokeMiterlimit, strokeDasharray, strokeDashoffset, strokeOpacity) {
    // element, strokeWidth, and color are required, others are optional
    var optionalAttrs = {
      'stroke-linecap': strokeLinecap,
      'stroke-linejoin': strokeLinejoin,
      'stroke-miterlimit': strokeMiterlimit,
      'stroke-dasharray': strokeDasharray,
      'stroke-dashoffset': strokeDashoffset,
      'stroke-opacity': strokeOpacity
    };

    element.setAttribute('stroke-width', strokeWidth);
    element.setAttribute('stroke', color);

    var keys = Object.keys(optionalAttrs);

    keys.forEach(function(attr) {
      if (optionalAttrs[attr]) {
        element.setAttribute(attr);
      }
    });

    return element;
  };

  /**
   * Creates an SVG group element that includes the elements passed in to the function.
   *
   * @param {array} elements The elements in the group.
   * @param {string} identifier (optional) An id to apply to the element.
   *
   * @returns The SVG group elment to append to the SVG canvas.
   *
   */
  function group(elements, identifier) {
    var group = document.createElementNS(w3SvgUrl, 'g');

    if (identifier) {
      group.setAttribute('id', identifier);
    }

    elements.forEach(function(element) {
      group.appendChild(element);
    });

    return group;
  }

  // API to expose
  var SVGEE = {
    circle: circle,
    closeSvg: closeSvg,
    createSvg: createSvg,
    ellipse: ellipse,
    fill: fill,
    g: group,
    group: group,
    line: line,
    nGon: nGon,
    polygon: polygon,
    polyline: polyline,
    rect: rect,
    stroke: stroke,
    square: square,
    text: text,
    tile: tile
  };

  // actually expose the API
  return this.SVGEE = SVGEE;
})();

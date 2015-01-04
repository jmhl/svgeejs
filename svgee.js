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

    svg.setAttributeNS(null, 'width', width);
    svg.setAttributeNS(null, 'height', height);

    // svg still needs to be appended
    return svg;
  };

  /**
   * Closes the SVG canvas
   *
   * @param {element} element The SVG element that you want to close.
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
   * @param {number} y The y-coordinate of the top left corner of the rectangle.
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
   * @param {number} y The y-coordinate of the top left corner of the square.
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
   * @param {number} y1 The y-coordinate of the first point.
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

  /**
   * Creates an SVG text elment.
   *
   * @param {number} x The x-coordinate of the top left corner of the text.
   * @param {number} y The y-coordinate of the top left corner of the text.
   * @param {string} msg The text that you wish to display.
   *
   * @returns {element} The SVG text element to append to the SVG canvas.
   */
  function text(x, y, fontSize, content) {
    var text = document.createElementNS(w3SvgUrl, 'text');

    text.setAttributeNS(null, 'x', x);
    text.setAttributeNS(null, 'y', y);
    text.setAttributeNS(null, 'font-size', fontSize);
    text.textContent = content;

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
    var hypotenuse = calculateRadius(numSides, lenSide);
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

  function calculateRadius(numSides, lenSide) {
    var angle = 360 / numSides;
    var oppSide = lenSide / 2;
    var hypotenuse = oppSide / Math.sin(toRadians(angle));
    
    return hypotenuse;
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
      rotateElement(element, idx);
    });

    var tessellateGroup = group(elements);

    return tessellateGroup;
  }

  function rotateElement(element, idx) {
    if (idx == 0) {
      // rotate
    } else if (idx == 2) {
      // rotate
    }
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

  function calculateCenter(numSides, lenSide, angle, idx) {
    var radius = calculateRadius(numSides, lenSide);
    var x = calculateX(300, radius, angle);
    var y;

    // == used for type coercion
    if (numSides != 3) {
      y = 300;
    } else if (idx === 0) {
      y = 300 + lenSide;
    } else if (idx === 2) {
      y = 300 - lenSide;
    }

    return {
      'x': x,
      'y': y
    };
  }

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

  /**
   * Fills the SVG element with a certain color.
   *
   * @param {element} element The SVG element to be filled.
   * @param {string} color The string of the color (rgb, hex, etc.).
   *
   * @returns Null.
   */
  function fill(element, color) {
    element.setAttributeNS(null, 'fill', color);
  };


  /**
   * Adds a class to an element.
   *
   * @param {element} element The SVG element to add the class to.
   * @param {string} className The name of the class to add to the SVG element.
   */
  function addClass(element, className) {
    element.classList.add(className);
  }

  /**
   * Removes a class from an element.
   *
   * @param {element} element The SVG element to remove the class from.
   * @param {string} className The name of the class to remove from the SVG element.
   */
  function removeClass(element, className) {
    element.classList.remove(className);
  }

  /**
   * Toggles a class on an element - removes the class if the element currently contains it, and adds it otherwise.
   *
   * @param {element} element The SVG element whose class we want to toggle.
   * @param {string} className The name of the class to toggle on the SVG element.
   */
  function toggleClass(element, className) {
    element.classList.toggle(className);
  }

  /**
   * Checks if an element has the specified class.
   *
   * @param {element} element The SVG element to check for the class.
   * @param {string} className The class to check if the SVG element has.
   *
   * @returns {boolean} Returns true if the element has the class, false otherwise.
   */
  function hasClass(element, className) {
    return element.classList.contains(className);
  }

  /**
   * Alters the stroke of the SVG element.
   *
   * @param {element} element The SVG element whose stroke you wish to be altered.
   * @param {number} strokeWidth The width of the stroke.
   * @param {string} color The color of the stroke.
   * @param {object} options (optional) An optional options hash that can include the following params:
   * @param {string} strokeLinecap (optional) Caps the ends of the stroke, can be: 'butt', 'round', or 'square'.
   * @param {string} strokeLinejoin (optional) Defines how the join between two lines is rendered, can be: 'bevel', 'miter', or 'round'.
   * @param {number} strokeMiterlimit (optional) When strokeLinejoin === 'miter', this variable limits how far between the point the two lines meet.
   * @param {number} strokeDasharray (optional) Creates a dashed stroke, the values determine the length of the dashes and spaces. Takes numbers in the format: 0 0 0 0.
   * @param {number} strokeDashoffset (optional) When strokeDasharray is defined, this value is used to determine how far into the stroke to start the dash pattern.
   * @param {number} strokeOpacity (optional) Value between 0 and 1 which determines the opacity of the stroke.
   *
   * @returns {element} Returns the SVG element.
   */
  function stroke(element, strokeWidth, color, options) {
    // element, strokeWidth, and color are required, others are optional
    var optionalAttrs;

    if (options) {
      optionalAttrs = {
        'stroke-linecap': options.strokeLinecap,
        'stroke-linejoin': options.strokeLinejoin,
        'stroke-miterlimit': options.strokeMiterlimit,
        'stroke-dasharray': options.strokeDasharray,
        'stroke-dashoffset': options.strokeDashoffset,
        'stroke-opacity': options.strokeOpacity
      };
    }

    element.setAttributeNS(null, 'stroke-width', strokeWidth);
    element.setAttributeNS(null, 'stroke', color);

    if (optionalAttrs) {
      var attrs = Object.keys(optionalAttrs);

      attrs.forEach(function(attr) {
        var attrValue = optionalAttrs[attr];

        if (attrValue) {
          element.setAttributeNS(null, attr, attrValue);
        }
      });
    }

    return element;
  };

  /**
   *
   */
  function animate(element, attributeName, from, to, duration, repeatCount) {
    var animation = document.createElementNS(w3SvgUrl, 'animate');

    animation.setAttributeNS(null, 'attributeType', 'XML');
    animation.setAttributeNS(null, 'attributeName', attributeName);
    animation.setAttributeNS(null, 'from', from);
    animation.setAttributeNS(null, 'to', to);
    animation.setAttributeNS(null, 'dur', duration);
    animation.setAttributeNS(null, 'repeatCount', repeatCount);

    // circle still needs to be appended
    element.appendChild(animation);

    return element;
  }

  /**
   * Creates an SVG group element that includes the elements passed in to the function.
   *
   * @param {array} elements The elements in the group.
   * @param {string} identifier (optional) An id to apply to the element.
   *
   * @returns The SVG group elment to append to the SVG canvas.
   */
  function group(elements, identifier) {
    var group = document.createElementNS(w3SvgUrl, 'g');

    if (identifier) {
      group.setAttributeNS(null, 'id', identifier);
    }

    elements.forEach(function(element) {
      group.appendChild(element);
    });

    return group;
  }

  // API to expose
  var SVGEE = {
    addClass: addClass,
    animate: animate,
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
    removeClass: removeClass,
    stroke: stroke,
    square: square,
    tessellate: tessellate,
    text: text,
    tile: tile,
    toggleClass: toggleClass
  };

  // actually expose the API
  this.SVGEE = SVGEE;
})();

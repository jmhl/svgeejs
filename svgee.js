(function SVGEE() {
  /**
   * Closes the SVG
   *
   * @param {element} element The SVG element that you want to close.
   *
   * @returns Null.
   */
  var closeSvg = function(element) {
    element.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  };

  /**
   * Creates an SVG canvas
   *
   * @param {number} width The width of the SVG canvas.
   * @param {number} height The height of the SVG canvas.
   *
   * @returns {element} The SVG canvas element. The SVG canvas element to be appended to the document.
   */
  var createSvg = function(width, height) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    svg.setAttribute('width', width);
    svg.setAttribute('height', height);

    // svg still needs to be appended
    return svg;
  };

  /**
   * Creates an SVG circle element.
   *
   * @param {number} cx The x-coordinate of the center of the circle.
   * @param {number} cy The y-coordinate of the center of the circle.
   * @param {number} radius The radius of the circle.
   *
   * @returns The SVG circle element to be appended to the SVG canvas.
   */
  var circle = function(cx, cy, radius) {
    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', radius);

    // circle still needs to be appended
    return circle;
  };

  /**
   * Fills the SVG element with a certain color.
   *
   * @param {element} element The SVG element to be filled.
   * @param {string} color The string of the color (rgb, hex, etc.).
   *
   * @returns Null.
   */
  var fill = function(element, color) {
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
   * @param {number number number number} strokeDasharray (optional) Creates a dashed stroke, the values determine the length of the dashes and spaces.
   * @param {number} strokeDashoffset (optional) When strokeDasharray is defined, this value is used to determine how far into the stroke to start the dash pattern.
   * @param {number} strokeOpacity (optional) Value between 0 and 1 which determines the opacity of the stroke.
   *
   * @returns 
   */
  var stroke = function(element, strokeWidth, color, strokeLinecap, strokeLinejoin, strokeMiterlimit, strokeDasharray, strokeDashoffset, strokeOpacity) {
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

  // API to expose
  var SVGEE = {
    circle: circle,
    closeSvg: closeSvg,
    createSvg: createSvg,
    fill: fill,
    stroke: stroke
  };

  // actually expose the API
  return this.SVGEE = SVGEE;
})();

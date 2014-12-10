(function SVGEE() {
  // the w3 svg url to be reused basically everywhere
  var w3SvgUrl = 'http://www.w3.org/2000/svg';

  /**
   * Closes the SVG
   *
   * @param {element} element The SVG element that you want to close.
   *
   * @returns Null.
   */
  function closeSvg(element) {
    element.setAttribute('xmlns', w3SvgUrl);
  };

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
   * Creates an SVG circle element.
   *
   * @param {number} cx The x-coordinate of the center of the circle.
   * @param {number} cy The y-coordinate of the center of the circle.
   * @param {number} radius The radius of the circle.
   *
   * @returns The SVG circle element to be appended to the SVG canvas.
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
   * Creates an SVG rectangle element.
   *
   * @param {number} x The x-coordinate of the top left corner of the rectangle.
   * @param {number} y The y-coordiante of the top left corner of the rectangle.
   * @param {number} width The width of the rectangle.
   * @param {number} height The height of the rectangle.
   *
   * @returns The SVG rectangle element to be appended to the SVG canvas.
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
   * @param {number number number number} strokeDasharray (optional) Creates a dashed stroke, the values determine the length of the dashes and spaces.
   * @param {number} strokeDashoffset (optional) When strokeDasharray is defined, this value is used to determine how far into the stroke to start the dash pattern.
   * @param {number} strokeOpacity (optional) Value between 0 and 1 which determines the opacity of the stroke.
   *
   * @returns 
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

  // API to expose
  var SVGEE = {
    circle: circle,
    closeSvg: closeSvg,
    createSvg: createSvg,
    fill: fill,
    rect: rect,
    stroke: stroke
  };

  // actually expose the API
  return this.SVGEE = SVGEE;
})();

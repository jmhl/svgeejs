'use strict';

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

module.exports = stroke;

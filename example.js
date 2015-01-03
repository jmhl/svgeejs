var canvas = document.getElementById('canvas');
var svg = SVGEE.createSvg(500, 500);
canvas.appendChild(svg);
SVGEE.closeSvg(svg);

var circle1 = SVGEE.circle(100, 100, 40);
var circle2 = SVGEE.circle(120, 120, 40);
var g = SVGEE.g([circle1, circle2]);
svg.appendChild(g);
SVGEE.addClass(circle1, 'test-circle');

var rect = SVGEE.rect(300, 300, 180, 80);
SVGEE.fill(rect, '#54B52E');
SVGEE.stroke(rect, 4, '#3B4D7D');
svg.appendChild(rect);
SVGEE.addClass(rect, 'test-rect');

var ellipse = SVGEE.ellipse(400, 50, 60, 40);
SVGEE.fill(ellipse, '#fff');
SVGEE.stroke(ellipse, 1, '#54B52E');
svg.appendChild(ellipse);
SVGEE.addClass(ellipse, 'test-ellipse');

var square = SVGEE.square(0, 0, 10);
SVGEE.fill(square, '#000');
svg.appendChild(square);
SVGEE.addClass(square, 'test-square');

var line = SVGEE.line(15, 15, 40, 40);
SVGEE.stroke(line, 5, '#3B4D7D');
svg.appendChild(line);
SVGEE.addClass(line, 'test-line');

var polyline = SVGEE.polyline([20, 100, 40, 60, 80, 90, 100, 20]);
SVGEE.fill(polyline, 'transparent');
SVGEE.stroke(polyline, 8, '#A73878');
svg.appendChild(polyline);
SVGEE.addClass(polyline, 'test-polyline');

var polygon = SVGEE.polyline([160, 120, 100, 140, 200, 180, 160, 200, 120, 180, 120, 140]);
SVGEE.fill(polygon, '#89553C');
SVGEE.stroke(polygon, 4, '#C12402');
svg.appendChild(polygon);

var text = SVGEE.text(200, 400, 24, 'hello!');
svg.appendChild(text);
SVGEE.addClass(text, 'test-text');

var nGon = SVGEE.nGon(8, [300, 200], 140);
svg.appendChild(nGon);
SVGEE.stroke(nGon, 2, '#862EB3');
SVGEE.fill(nGon, 'transparent');


// test tile
var tileDiv = document.getElementById('tile');
var tileCanvas = SVGEE.createSvg(800, 500);
tileDiv.appendChild(tileCanvas);
SVGEE.closeSvg(tileCanvas);

var element = {
  lenSide: 100,
  numSides: 6
};

var tile = SVGEE.tile(tileCanvas, element, [0, 0]);
tileCanvas.appendChild(tile);
SVGEE.fill(tile, 'transparent');
SVGEE.stroke(tile, 1, '#54B52E');
SVGEE.animate(tile, 'opacity', 0, 1, '900ms', 1);


// test tesselate
var tessellateDiv = document.getElementById('tesselate');
var tessellateCanvas = SVGEE.createSvg(800, 500);
tessellateDiv.appendChild(tessellateCanvas);
SVGEE.closeSvg(tessellateCanvas);

var pattern = '3.6.3.6';
var tessellate = SVGEE.tessellate(tessellateCanvas, pattern, 10);
tessellateCanvas.appendChild(tessellate);

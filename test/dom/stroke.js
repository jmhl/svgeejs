var numOfTests = 2;

casper.test.begin('stroke', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertEquals(
      this.getElementsAttribute('.test-rect', 'stroke'), ['#3B4D7D'],
      'should have the correct stroke color'
    );

    test.assertEquals(
      this.getElementsAttribute('.test-rect', 'stroke-width'), ['4'],
      'should have the correct stroke width'
    );
  });

  casper.run(function() {
    test.done();
  })
});

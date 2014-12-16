var numOfTests = 5;

casper.test.begin('rect', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertExists('.test-rect', 'rect exists');

    test.assertEquals(
      this.getElementsAttribute('.test-rect', 'x'), ['300'],
      'should have the correct x'
    );

    test.assertEquals(
      this.getElementsAttribute('.test-rect', 'y'), ['300'],
      'should have the correct y'
    );

    test.assertEquals(
      this.getElementsAttribute('.test-rect', 'width'), ['180'],
      'should have the correct width'
    );

    test.assertEquals(
      this.getElementsAttribute('.test-rect', 'height'), ['80'],
      'should have the correct height'
    );
  });

  casper.run(function() {
    test.done();
  })
});

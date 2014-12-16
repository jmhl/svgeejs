var numOfTests = 5;

casper.test.begin('ellipse', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertExists('.test-ellipse', 'ellipse exists');

    test.assertEquals(
      this.getElementsAttribute('.test-ellipse', 'rx'), ['60'],
      'should have the correct rx'
    );

    test.assertEquals(
      this.getElementsAttribute('.test-ellipse', 'ry'), ['40'],
      'should have the correct ry'
    );

    test.assertEquals(
      this.getElementsAttribute('.test-ellipse', 'cx'), ['400'],
      'should have the correct cx'
    );

    test.assertEquals(
      this.getElementsAttribute('.test-ellipse', 'cy'), ['50'],
      'should have the correct cy'
    );
  });

  casper.run(function() {
    test.done();
  })
});

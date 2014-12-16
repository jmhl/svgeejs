var numOfTests = 5;

casper.test.begin('square', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertExists('.test-square', 'square exists');

    test.assertEquals(
        this.getElementsAttribute('.test-square', 'x'), ['0'],
        'should have the correct x'
    );

    test.assertEquals(
        this.getElementsAttribute('.test-square', 'y'), ['0'],
        'should have the correct y'
    );

    test.assertEquals(
        this.getElementsAttribute('.test-square', 'width'), ['10'],
        'should have the correct width'
    );

    test.assertEquals(
        this.getElementsAttribute('.test-square', 'height'), ['10'],
        'should have the correct height'
    );
  });

  casper.run(function() {
    test.done();
  })
});

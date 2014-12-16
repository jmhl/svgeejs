var numOfTests = 5;

casper.test.begin('line', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertExists('.test-line', 'line exists');

    test.assertEquals(
        this.getElementsAttribute('.test-line', 'x1'), ['15'],
        'should have the correct x1'
    );

    test.assertEquals(
        this.getElementsAttribute('.test-line', 'y1'), ['15'],
        'should have the correct y1'
    );

    test.assertEquals(
        this.getElementsAttribute('.test-line', 'x2'), ['40'],
        'should have the correct x1'
    );

    test.assertEquals(
        this.getElementsAttribute('.test-line', 'y2'), ['40'],
        'should have the correct y1'
    );
  });

  casper.run(function() {
    test.done();
  })
});

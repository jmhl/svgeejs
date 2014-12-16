var numOfTests = 4;

casper.test.begin('circle', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertExists('.test-circle', 'circle exists');

    test.assertEquals(
        this.getElementsAttribute('.test-circle', 'r'), ['40'],
        'should have the correct radius'
    );

    test.assertEquals(
        this.getElementsAttribute('.test-circle', 'cx'), ['100'],
        'should have the correct cx'
    );

    test.assertEquals(
        this.getElementsAttribute('.test-circle', 'cy'), ['100'],
        'should have the correct cy'
    );
  });

  casper.run(function() {
    test.done();
  })
});

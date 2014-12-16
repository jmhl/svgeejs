var numOfTests = 2;

casper.test.begin('polyline', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertExists('.test-polyline', 'polyline exists');

    test.assertEquals(
        this.getElementsAttribute('.test-polyline', 'points'), ['20,100 40,60 80,90 100,20 '],
        'should have all the correct points'
    );
  });

  casper.run(function() {
    test.done();
  })
});

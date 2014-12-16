var numOfTests = 1;

casper.test.begin('fill', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertEquals(
        this.getElementsAttribute('.test-rect', 'fill'), ['#54B52E'],
        'should have the fill color'
    );
  });

  casper.run(function() {
    test.done();
  })
});

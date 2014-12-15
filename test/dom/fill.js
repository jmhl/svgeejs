var numOfTests = 1;

casper.test.begin('testing fill', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-rect')[0].getAttribute('fill');
    }, '#54B52E');
  });

  casper.run(function() {
    test.done();
  })
});

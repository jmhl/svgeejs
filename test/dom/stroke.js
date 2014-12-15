var numOfTests = 2;

casper.test.begin('testing stroke', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-rect')[0].getAttribute('stroke');
    }, '#3B4D7D');
  });

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-rect')[0].getAttribute('stroke-width');
    }, '4');
  });

  casper.run(function() {
    test.done();
  })
});

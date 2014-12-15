var numOfTests = 5;

casper.test.begin('testing line', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertExists('.test-line', 'line exists');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-line')[0].getAttribute('x1');
    }, '15');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-line')[0].getAttribute('y1');
    }, '15');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-line')[0].getAttribute('x2');
    }, '40');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-line')[0].getAttribute('y2');
    }, '40');
  });

  casper.run(function() {
    test.done();
  })
});

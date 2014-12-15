var numOfTests = 5;

casper.test.begin('testing square', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertExists('.test-square', 'square exists');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-square')[0].getAttribute('x');
    }, '0');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-square')[0].getAttribute('y');
    }, '0');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-square')[0].getAttribute('width');
    }, '10');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-square')[0].getAttribute('height');
    }, '10');
  });

  casper.run(function() {
    test.done();
  })
});

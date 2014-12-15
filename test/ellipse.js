var numOfTests = 5;

casper.test.begin('testing ellipse', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertExists('.test-ellipse', 'ellipse exists');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-ellipse')[0].getAttribute('cx');
    }, '400');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-ellipse')[0].getAttribute('cy');
    }, '50');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-ellipse')[0].getAttribute('rx');
    }, '60');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-ellipse')[0].getAttribute('ry');
    }, '40');
  });

  casper.run(function() {
    test.done();
  })
});

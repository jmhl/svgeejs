var numOfTests = 4;

casper.test.begin('testing circle', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertExists('.test-circle', 'circle exists');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-circle')[0].getAttribute('r');
    }, '40');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-circle')[0].getAttribute('cx');
    }, '100');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-circle')[0].getAttribute('cy');
    }, '100');
  });

  casper.run(function() {
    test.done();
  })
});

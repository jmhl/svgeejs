var numOfTests = 5;

casper.test.begin('testing text', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertExists('.test-text', 'text exists');
    test.assertSelectorHasText('text', 'hello!');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-text')[0].getAttribute('x');
    }, '200');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-text')[0].getAttribute('y');
    }, '400');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-text')[0].getAttribute('font-size');
    }, '24');
  });

  casper.run(function() {
    test.done();
  })
});

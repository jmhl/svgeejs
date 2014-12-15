var numOfTests = 5;

casper.test.begin('testing rect', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertExists('.test-rect', 'rect exists');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-rect')[0].getAttribute('x');
    }, '300');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-rect')[0].getAttribute('y');
    }, '300');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-rect')[0].getAttribute('width');
    }, '180');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-rect')[0].getAttribute('height');
    }, '80');
  });

  casper.run(function() {
    test.done();
  })
});

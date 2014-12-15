var numOfTests = 2;

casper.test.begin('testing polyline', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertExists('.test-polyline', 'polyline exists');

    test.assertEvalEquals(function() {
      return document.getElementsByClassName('test-polyline')[0].getAttribute('points');
    }, '20,100 40,60 80,90 100,20 ');
  });

  casper.run(function() {
    test.done();
  })
});

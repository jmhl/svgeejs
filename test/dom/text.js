var numOfTests = 5;

casper.test.begin('testing text', numOfTests, function(test) {
  casper.start('http://localhost:8000/');

  casper.thenOpen('http://localhost:8000/', function() {
    test.assertExists('.test-text', 'text exists');
    test.assertSelectorHasText('text', 'hello!');

    test.assertEquals(
        this.getElementsAttribute('.test-text', 'x'), ['200'],
        'should have the correct x'
    );

    test.assertEquals(
        this.getElementsAttribute('.test-text', 'y'), ['400'],
        'should have the correct y'
    );

    test.assertEquals(
        this.getElementsAttribute('.test-text', 'font-size'), ['24'],
        'should have the correct font size'
    );
  });

  casper.run(function() {
    test.done();
  })
});

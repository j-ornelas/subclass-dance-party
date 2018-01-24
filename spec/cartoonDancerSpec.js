describe('cartoonDancer', function() {

  var cartoonDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    cartoonDancer = new CartoonDancer(10, 20, timeBetweenSteps);

  });

  it('should have a jQuery $node object', function() {
    expect(cartoonDancer.$node).to.be.an.instanceof(jQuery);
  });


  it('should add cartoon dancer with given coordinates', function() {
    var testDancer = new CartoonDancer(50, 10, 200);
    
    expect(testDancer.coords.y).to.be.equal(50);
    expect(testDancer.coords.x).to.be.equal(10);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(cartoonDancer, 'step');
      expect(cartoonDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(cartoonDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(cartoonDancer.step.callCount).to.be.equal(2);
    });
  });
});

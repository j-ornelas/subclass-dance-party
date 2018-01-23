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

  it('should have a step function that makes its node blink', function() {
    sinon.spy(cartoonDancer.$node, 'toggle');
    cartoonDancer.step();
    expect(cartoonDancer.$node.toggle.called).to.be.true;
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

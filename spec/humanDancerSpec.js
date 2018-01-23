describe('humanDancer', function() {

  var humanDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    humanDancer = new HumanDancer(10, 20, timeBetweenSteps);

  });

  it('should have a jQuery $node object', function() {
    expect(humanDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(humanDancer.$node, 'toggle');
    humanDancer.step();
    expect(humanDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(humanDancer, 'step');
      expect(humanDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(humanDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(humanDancer.step.callCount).to.be.equal(2);
    });
  });
});

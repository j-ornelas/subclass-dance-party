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

  it('should add Human dancer with given coordinates', function() {
    var testDancer = new HumanDancer(40, 60, 200);
    
    expect(testDancer.coords.y).to.be.equal(40);
    expect(testDancer.coords.x).to.be.equal(60);
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

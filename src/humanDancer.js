var HumanDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.dancerList = [{
    src: 'assets/humanBeanie.gif',
    height: 185
  }, {
    src: 'assets/humanBird.gif',
    height: 200
  }, {
    src: 'assets/humanCarlton.gif',
    height: 200
  }, {
    src: 'assets/humanSkeleton.gif',
    height: 200
  }, {
    src: 'assets/humanSweater.gif',
    height: 200
  }, {
    src: 'assets/humanTeacher.gif',
    height: 200
  }, {
    src: 'assets/humanTwins.gif',
    height: 200
  }];
  this.$node.addClass('human');
  // call the old version of step at the beginning of any call to this new version of step
  this.$imageSource = $('<img></img>');
  var index = getRandomInt(this.dancerList.length);
  this.$imageSource.src = this.dancerList[index];
  this.$imageSource.attr('src', this.dancerList[index].src);
  this.$imageSource.css('height', this.dancerList[index].height);
  this.$imageSource.prependTo(this.$node);
  this.setPosition(this.coords.y, this.coords.x);
};

HumanDancer.prototype = Object.create(Dancer.prototype);
HumanDancer.prototype.constructor = HumanDancer;

HumanDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};
var HumanDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.dancerList = [{
    src: 'assets/human.gif',
    height: 100
  }];
  this.$node.addClass('cartoon');
  // call the old version of step at the beginning of any call to this new version of step
  this.$imageSource = $('<img></img>');
  var index = getRandomInt(this.dancerList.length);
  this.$imageSource.attr('src', this.dancerList[index].src);
  this.$imageSource.css('height', this.dancerList[index].height);
  this.$imageSource.prependTo(this.$node);
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
var CartoonDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.dancerList = [{
    src: 'assets/cartoonBaby.gif',
    height: 140
  }, {
    src: 'assets/cartoonBanana.gif',
    height: 175
  }, {
    src: 'assets/cartoonOwl.gif',
    height: 200
  }, {
    src: 'assets/cartoonRick.gif',
    height: 200
  }, {
    src: 'assets/cartoonSpiderman.gif',
    height: 200
  }, {
    src: 'assets/cartoonSquidward.gif',
    height: 200
  }, {
    src: 'assets/cartoonStitch.gif',
    height: 160
  }, {
    src: 'assets/cartoonVegeta.gif',
    height: 200
  }];
  this.$node.addClass('cartoon');
  // call the old version of step at the beginning of any call to this new version of step
  this.$imageSource = $('<img></img>');
  var index = getRandomInt(this.dancerList.length);
  this.$imageSource.src = this.dancerList[index];
  this.$imageSource.attr('src', this.dancerList[index].src);
  this.$imageSource.css('height', this.dancerList[index].height);
  this.$imageSource.prependTo(this.$node);
  this.setPosition(this.coords.y, this.coords.x);};

CartoonDancer.prototype = Object.create(Dancer.prototype);
CartoonDancer.prototype.constructor = CartoonDancer;

CartoonDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};
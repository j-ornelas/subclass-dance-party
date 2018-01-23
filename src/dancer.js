var Dancer = function(y, x, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.coords = new Coordinates(y, x);
  this.setPosition(y, x);
  this.$node.css('z-index', -1);
  this.interact = true;
  this.center = new Coordinates();
  this.cluster = false;
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  if (this.interact && this.cluster) {
    this.moveToCluster();
  }
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.moveToCluster = function() {
  //iterate through dancers array
  // bot + y - bot / 5;
  if (distance(this.coords, this.center) > 50) {
    this.coords.y = this.coords.y + (this.center.y - this.coords.y) / 5;
    this.coords.x = this.coords.x + (this.center.x - this.coords.x) / 5;
    this.setPosition(this.coords.y, this.coords.x);
  }
};

Dancer.prototype.setPosition = function(y, x) {
  // Use css bot and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.coords.y = y;
  this.coords.x = x;

  var styleSettings = {
    bottom: this.coords.y,
    left: this.coords.x
  };

  this.$node.css(styleSettings);
};

var getRandomInt = function(max) {
  return Math.floor(Math.random() * max);
};

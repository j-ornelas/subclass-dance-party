var Dancer = function(y, x, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.coords = new Coordinates(y, x);
  this.setPosition(y, x);
  this.$node.css('z-index', -1);
  this.conga = false;
  this.center = new Coordinates();
  this.cluster = false;
  this.target = new Coordinates();
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  if (this.cluster) {
    this.moveToCluster();
  }
  if (this.conga) {
    this.moveTo(this.target);
  }
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.moveToCluster = function() {
  //iterate through dancers array
  // bot + y - bot / 5;
  this.moveTo(this.center);
};

//moves this towards target coordinates
Dancer.prototype.moveTo = function(target) {
  if (distance(this.coords, target) > 50) {
    this.coords.y = this.coords.y + (target.y - this.coords.y) / 5;
    this.coords.x = this.coords.x + (target.x - this.coords.x) / 5;
    this.setPosition(this.coords.y, this.coords.x);
  }
};

Dancer.prototype.setPosition = function(y, x) {
  // Use css bot and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.coords.y = y;
  this.coords.x = x;

  if (this.$imageSource !== undefined) {
    var multiplier = 1 - this.coords.y / $('body').height();
    var newHeight = this.$imageSource.src.height * multiplier;
    this.$imageSource.css('height', newHeight);
  }

  var styleSettings = {
    bottom: this.coords.y,
    left: this.coords.x
  };

  this.$node.css(styleSettings);
};

var getRandomInt = function(max) {
  return Math.floor(Math.random() * max);
};

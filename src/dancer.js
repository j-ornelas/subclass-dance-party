var Dancer = function(bot, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.bot = bot;
  this.left = left;
  this.setPosition(bot, left);
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
  this.bot = this.bot + (this.center.y - this.bot) / 5;
  this.left = this.left + (this.center.x - this.left) / 5;
  this.setPosition(this.bot, this.left);
};

Dancer.prototype.setPosition = function(bot, left) {
  // Use css bot and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.bot = bot;
  this.left = left;

  var styleSettings = {
    bottom: this.bot,
    left: this.left
  };

  this.$node.css(styleSettings);
};

var getRandomInt = function(max) {
  return Math.floor(Math.random() * max);
};

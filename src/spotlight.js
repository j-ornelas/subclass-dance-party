var Spotlight = function() {
  this.$node = $('<span class="spotlight"></span>');
  this.coords = new Coordinates(y, x);
};

Spotlight.prototype.setPosition = function() {
  this.coords.y = y;
  this.coords.x = x;

  var styleSettings = {
    bottom: this.coords.y,
    left: this.coords.x
  };
  this.$node.css(styleSettings);
};
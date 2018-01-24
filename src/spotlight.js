var Spotlight = function() {
  this.$node = $('<span class="spotlight"></span>');
  this.coords = new Coordinates();
  $('body').append(this.$node);
};

Spotlight.prototype.setPosition = function(coords) {
  this.coords = coords;

  var styleSettings = {
    bottom: this.coords.y,
    left: this.coords.x
  };
  this.$node.css(styleSettings);
};
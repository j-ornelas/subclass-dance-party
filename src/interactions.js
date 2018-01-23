var lineUp = function() {
  console.log('lineUp');
  var offset = $('body').width() / window.dancers.length;
  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].setPosition(0, offset * i);
  }
};

var cluster = function() {
  // assign clusters
  // assign cluster centers to each node
  var numClusters = Math.ceiling(window.dancers.length / 4);

  var update = function() {
    //update centers for each dancer

    setTimeout(update, 1000);
  };

};

var Coordinates = function(x, y) {
  this.x = x;
  this.y = y;
};
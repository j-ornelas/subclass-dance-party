var lineUp = function() {
  console.log('lineUp');
  var offset = $('body').width() / window.dancers.length;
  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].cluster = false;
    window.dancers[i].conga = false;
    window.dancers[i].setPosition(0, offset * i);
  }
};

var populate = function() {
  for (var i = 0; i < 20; i++) {

    if (i % 2 === 0) {
      var dancerMakerFunction = HumanDancer;
    } else {
      var dancerMakerFunction = CartoonDancer;
    }

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random() * .8,
      $('body').width() * Math.random(),
      Math.random() * 500 + 500
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    window.dancers[window.dancers.length - 1].$node.css('z-index', -window.dancers.length);
  }
};

var conga = function() {
  for (var i = 1; i < window.dancers.length; i++) {
    window.dancers[i].cluster = false;
    window.dancers[i].conga = true;
    window.dancers[i].target = window.dancers[i - 1].coords;
  }
  window.dancers[0].conga = true;
  window.dancers[0].target = window.currentMousePos;
};

var cluster = function() {
  // assign clusters
  // assign cluster centers to each node
  var numClusters = Math.ceil(window.dancers.length / 4);
  var clusterList = [];

  //initializes clusters as empty arrays

  //HELPER FUNCTIONS: ------------
  //closure counter to loop through clusterList for dancer assignment
  var loopCounter = function(max) {
    index = 0;
    return function() {
      return index++ % max;
    };    
  };
  
  var looper = loopCounter(numClusters);  



  //calculate center for each cluster based on its dancers
  var findCenters = function() {
    for (var i = 0; i < clusterList.length; i++) {
      var x = 0;
      var y = 0;
      for (var j = 0; j < clusterList[i].length; j++) {
        x += clusterList[i][j].coords.x;
        y += clusterList[i][j].coords.y;
      }
      y /= clusterList[i].length;
      x /= clusterList[i].length;
      clusterList[i].center = new Coordinates(y, x);
      clusterList[i].spotlight = new Spotlight();
    }
  };

  // reassigns dancers to clusters based on their proximity
  var assignClusters = function() {
    //empty clusters of dancers but keep center value
    for (var i = 0; i < clusterList.length; i++) {
      var temp = clusterList[i].center;
      clusterList[i] = [];
      clusterList[i].center = temp;
    }
    //loop through dancers
    for (var i = 0; i < window.dancers.length; i++) {
      var closestIndex = 0;
      var minDistance = 999999;
      //loop through clusters and find which center is closest to dancer
      for (var j = 0; j < clusterList.length; j++) {
        let dist = distance(window.dancers[i].coords, clusterList[j].center);
        if (dist < minDistance) {
          minDistance = dist;
          closestIndex = j;
        }
      }
      clusterList[closestIndex].push(window.dancers[i]);
    }
    
  };
  
  var update = function() {
    findCenters();
    assignClusters();
    //update centers for each dancer
    for (var i = 0; i < clusterList.length; i++) { 
      for (var j = 0; j < clusterList[i].length; j++) {
        clusterList[i][j].center = clusterList[i].center;
      }
    }
    setTimeout(update, 1000);
  };

  //HELPER FUNCTIONS END: ---------

  for (var i = 0; i < numClusters; i++) {
    clusterList[i] = [];
  }
  //iterate through dancers and assign to clusters
  for (var i = 0; i < window.dancers.length; i++) {
    clusterList[looper()].push(window.dancers[i]);
  }

  update();

  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].cluster = true;
    window.dancers[i].conga = false;
  }
};

var distance = function(coords1, coords2) {
  return Math.sqrt(Math.pow(coords2.x - coords1.x, 2) + Math.pow(coords2.y - coords1.y, 2));
};

var Coordinates = function(y, x) {
  this.x = x;
  this.y = y;
};

var addPoint = function(coords, color) {
  var point = new Dancer(coords.y, coords.x);
  point.$node.css('color', color);
  $('body').append(point.$node);
};
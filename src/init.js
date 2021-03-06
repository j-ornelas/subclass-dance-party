$(document).ready(function() {
  window.dancers = [];
  
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random() * .8,
      $('body').width() * Math.random(),
      Math.random() * 500 + 500
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    window.dancers[window.dancers.length - 1].$node.css('z-index', window.dancers.length);
  });

  window.currentMousePos = new Coordinates(-1, -1);
  $(document).mousemove(function(event) {
    window.currentMousePos.x = event.pageX;
    window.currentMousePos.y = $('body').height() - event.pageY;
  });

  $twerk = $('<audio></audio>');
  $twerk.attr('id', 'twerk');
  $twerk.attr('src', 'assets/marsTwerks.mp3');
  window.$twerk = $twerk;
  $twerk.prependTo($('body'));

  $('body').not($('.topbar')).click(function() {
    if (window.$twerk[0].paused == false) {
      window.$twerk[0].pause();
    } else {
      window.$twerk[0].play();
    }
  });

  $('#lineUp').on('click', lineUp);
  $('#cluster').on('click', cluster);
  $('#conga').on('click', conga);
  $('#populate').on('click', populate);

});


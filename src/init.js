

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
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    
  });

  $('.addPokemonButton').on('click', function(event) {
    var pokemon = getNewPokemon();
    /*
    var rand = Math.random() * 10000;
    var pokemon = new Pokemon(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      rand
    );
    */
    $('body').append(pokemon.$node);
    $(".pokemon").draggable();
    window.dancers.push(pokemon);
  });


  $('.lineupPokemonButton').on('click', function(event) {
    // console.log("test");
    var distance = 100;
    var mid = $("body").width() / 2;
    var y = 0;
    var x;
    for (var i = 0; i < window.dancers.length; i ++) {
      var pokemon = window.dancers[i];
      //pokemon.$node.toggleClass("translate");
      if (i % 2 === 1) {
        x = mid + (distance / 2);
      } else {
        x = mid - (distance / 2);
        y += 100;
      }

      pokemon.moveToLocation(x, y);

    }

  });

});


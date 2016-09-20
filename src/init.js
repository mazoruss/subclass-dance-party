

$(document).ready(function() {
  window.dancers = [];
  var x0 = $("body").width() * 0.5;
  var y0 = $("body").height() * 0.4;
  var radius = 300;
  var minPokemon = 20;
  var smallRadius = 100;
  var ratio = 3;
  var numLine = 2;

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
    addPoke();
    /*
    var pokemon = getNewPokemon();

    $('body').append(pokemon.$node);
    //$(".pokemon").draggable();
    pokemon.$node.draggable();
    addMovementCallback(pokemon.$node);
    pokemon.$node.attr('pos', window.dancers.length);
    window.dancers.push(pokemon);
    */
  });

  var addMovementCallback = function($obj) {
    //$('.pokemon').on('click', function(event) {
    $obj.on('click', function(event) {
      if (window.dancers.length < 2) {
        return;
      }
      var rand = Math.floor(Math.random() * window.dancers.length);
      var otherPokemon = window.dancers[rand];
      var otherPosition = otherPokemon.$node.position();
      var ourPosition = $(this).position();
      var ourPos = $(this).attr('pos');
      while (ourPos === rand) {
        rand = Math.floor(Math.random() * window.dancers.length);
        otherPokemon = window.dancers[rand];
        otherPosition = otherPokemon.$node.position();
        ourPosition = $(this).position();
      }
      var movement = calc(ourPosition, otherPosition);
      var ourPokemon = window.dancers[ourPos];
      ourPokemon.moveToLocation(otherPosition);
      setTimeout( () => otherPokemon.moveToLocation(movement), 850);
    });
  };



  var calc = function(start, end) {
    var vec = {};
    var fact = 0.7;
    vec.top = end.top + fact *(end.top - start.top);
    vec.left = end.left + fact *(end.left - start.left);
    return vec;
  };


  $('.lineupPokemonButton').on('click', function(event) {
    // console.log("test");
    if (window.dancers.length >= minPokemon) {
      return pokemonGo();
    }
    var distance = 100;
    var mid = $("body").width() / 2;
    var loc = {top:0};
    var x;
    for (var i = 0; i < window.dancers.length; i ++) {
      var pokemon = window.dancers[i];
      //pokemon.$node.toggleClass("translate");
      if (i % 2 === 1) {
        loc.left = mid + (distance / 2);
      } else {
        loc.left = mid - (distance / 2);
        loc.top += 100;
      }

      pokemon.moveToLocation(loc);

    }

  });

  var pokemonGo = function() {
    if (window.dancers.length < minPokemon) {
      return;
    }

    var numPokemon = window.dancers.length;
    var numCenter = Math.floor((numPokemon - numLine) / (1 + ratio));

    var loc;
    var theta0 = 2 * 3.14 / (numPokemon - numCenter - numLine);
    for (var i = (numCenter + numLine); i < numPokemon; i++) {
      var theta = theta0 * (i - numCenter - numLine); 
      loc = {};
      loc.left = x0 + radius * Math.cos(theta);
      loc.top = y0 + radius * Math.sin(theta);
      window.dancers[i].moveToLocation(loc);
    }

    //rest

    //var xSpacing = radius / 2.0;

    loc = {};
    loc.left = x0 - 0.6 * radius;
    loc.top = y0;
    window.dancers[0].moveToLocation(loc);

    loc.left = x0 + 0.6 * radius;
    window.dancers[1].moveToLocation(loc);


    var theta0 = 2 * 3.14 / (numCenter);
    for (i = numLine; i < numCenter + numLine; i++) {
      var theta = theta0 * (i - numLine); 
      loc.left = x0 + smallRadius * Math.cos(theta);
      loc.top = y0 + smallRadius * Math.sin(theta);
      window.dancers[i].moveToLocation(loc);
    }


  };
  var pokedex = genPokdex();
  for (var i in pokedex) {
    var pokemonClass = pokedex[i];
    var pokeName = pokemonClass.name;
    $button = $('<a href="#" pokemon-maker="Pokemon"></a>');
    $button.text(pokeName);
    $button.addClass(i);
    $('.topbar').append($button);

    $button.on('click', function(event) {
      var ourI = $(this).attr('class');
      addPoke(ourI);
    });
  }

  var addPoke = function(ourI) {
    var pokemon = getNewPokemon(undefined, undefined, ourI);
    $('body').append(pokemon.$node);
    pokemon.$node.draggable();
    addMovementCallback(pokemon.$node);
    pokemon.$node.attr('pos', window.dancers.length);
    window.dancers.push(pokemon);
  };

});


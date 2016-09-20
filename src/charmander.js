

var Charmander = function(loc) {
  this.$node = $('<img class="pokemon" src="http://i.giphy.com/55jOowTAknOXC.gif">');
  Pokemon.call(this, loc);
};


Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;

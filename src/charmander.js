

var Charmander = function(top, left) {
  this.$node = $('<img class="pokemon" src="http://i.giphy.com/55jOowTAknOXC.gif">');
  Pokemon.call(this, top, left);
};


Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;


var Pikachu = function(loc) {
  this.$node = $('<img class="pokemon" src="http://samgreenmedia.com/pikacrunk.gif">');
  Pokemon.call(this, loc);
};


Pikachu.prototype = Object.create(Pokemon.prototype);
Pikachu.prototype.constructor = Pikachu;

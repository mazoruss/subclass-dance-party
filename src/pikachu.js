
var Pikachu = function(top, left) {
  this.$node = $('<img class="pokemon" src="http://samgreenmedia.com/pikacrunk.gif">');
  Pokemon.call(this, top, left);
};


Pikachu.prototype = Object.create(Pokemon.prototype);
Pikachu.prototype.constructor = Pikachu;

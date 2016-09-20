
var Bulbasaur = function(loc) {
  this.$node = $('<img class="pokemon" src="http://i.giphy.com/Owb158OZlURQA.gif">');
  Pokemon.call(this, loc);
};


Bulbasaur.prototype = Object.create(Pokemon.prototype);
Bulbasaur.prototype.constructor = Bulbasaur;

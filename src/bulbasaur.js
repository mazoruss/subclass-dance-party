
var Bulbasaur = function(top, left) {
  this.$node = $('<img class="pokemon" src="http://i.giphy.com/Owb158OZlURQA.gif">');
  Pokemon.call(this, top, left);
};


Bulbasaur.prototype = Object.create(Pokemon.prototype);
Bulbasaur.prototype.constructor = Bulbasaur;

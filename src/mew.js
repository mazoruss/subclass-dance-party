
var Mew = function(loc) {
  this.$node = $('<img class="pokemon" src="http://i.giphy.com/IQebREsGFRXmo.gif">');
  Pokemon.call(this, loc);
};


Mew.prototype = Object.create(Pokemon.prototype);
Mew.prototype.constructor = Mew;

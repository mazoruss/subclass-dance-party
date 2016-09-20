
var Mew = function(top, left) {
  this.$node = $('<img class="pokemon" src="http://i.giphy.com/IQebREsGFRXmo.gif">');
  Pokemon.call(this, top, left);
};


Mew.prototype = Object.create(Pokemon.prototype);
Mew.prototype.constructor = Mew;

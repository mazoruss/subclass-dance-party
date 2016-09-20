

var Mudkip = function(loc) {
  this.$node = $('<img class="pokemon" src="http://i.giphy.com/VdmpaMLEIB1DO.gif">');
  Pokemon.call(this, loc);
};


Mudkip.prototype = Object.create(Pokemon.prototype);
Mudkip.prototype.constructor = Mudkip;

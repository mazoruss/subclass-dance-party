

var Mudkip = function(top, left) {
  this.$node = $('<img class="pokemon" src="http://i.giphy.com/VdmpaMLEIB1DO.gif">');
  Pokemon.call(this, top, left);
};


Mudkip.prototype = Object.create(Pokemon.prototype);
Mudkip.prototype.constructor = Mudkip;

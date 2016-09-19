/*
var pokedex = {
  0: Charmander
};
var numPokemon = Object.keys(pokedex).length;
*/



var getNewPokemon = function() {
  var num = Math.floor(Math.random() * 1);
  var y = $("body").height() * Math.random();
  var x = $("body").width() * Math.random();

  //var pokemon = new pokedex[num](x, y);
  var pokemon = new Charmander(x,y);
  return pokemon;
};


var Pokemon = function(top, left) {
  this.setPosition(top, left);
};



Pokemon.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
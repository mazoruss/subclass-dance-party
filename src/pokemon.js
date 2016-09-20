/*
var pokedex = {
  //0: function() { return Charmander;}
  0: function() { return Charmander;}
};
var numPokemon = Object.keys(pokedex).length;
*/


var genPokdex = function() {
  return {
    0: Charmander,
    1: Bulbasaur,
    2: Mudkip,
    3: Pikachu,
    4: Mew
  };
};


var getNewPokemon = function() {
  var pokedex = genPokdex();
  var numPokemon = Object.keys(pokedex).length;
  var num = Math.floor(Math.random() * numPokemon);
  var y = $("body").height() * Math.random();
  var x = $("body").width() * Math.random();
  var cons = pokedex[num];
  var pokemon = new cons(x, y);
  //var pokemon = new genPokdex()[num](x, y);
  //var pokemon = new Charmander(x, y);
  //var pokemon = new Charmander(x,y);
  return pokemon;
};


var Pokemon = function(top, left) {
  this.setPosition(top, left);
};


Pokemon.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Pokemon.prototype.moveToLocation = function(x, y) {

  this.$node.addClass("lineup");
  var styleSettings = {
    top: y,
    left: x
  };
  this.$node.css(styleSettings);

  setTimeout(() => this.$node.removeClass('lineup'), 2000);

};
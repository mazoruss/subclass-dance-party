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

var topFact = 0.8;
var leftFact = 0.9;

var getNewPokemon = function(top, left) {
  var pokedex = genPokdex();
  var numPokemon = Object.keys(pokedex).length;
  var num = Math.floor(Math.random() * numPokemon);
  var loc = {};
  loc.top = top || $("body").height() * topFact * Math.random();
  loc.left = left || $("body").width() * leftFact * Math.random();
  var cons = pokedex[num];
  var pokemon = new cons(loc);
  return pokemon;
};


var Pokemon = function(loc) {
  this.setPosition(loc);
};


Pokemon.prototype.setPosition = function(loc) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  if (loc.top < 0) {
    loc.top = 0;
  }
  if (loc.top > $('body').height() * topFact) {
    loc.top = $('body').height() * topFact;
  }
  if (loc.left < 0) {
    loc.left = 0;
  }
  if (loc.left > $('body').width() * leftFact) {
    loc.left = $('body').width() * leftFact;
  }

  this.$node.css(loc);

};

Pokemon.prototype.moveToLocation = function(loc) {

  this.$node.addClass("lineup");
  this.setPosition(loc);
  setTimeout(() => this.$node.removeClass('lineup'), 2000);

};
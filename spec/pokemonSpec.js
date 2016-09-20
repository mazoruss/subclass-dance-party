describe('pokemon', function() {
  var pokemon;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pokemon = getNewPokemon(100, 100);
    // console.log(pokemon.$node.position());
  });

  describe('pokemon move', function() {
    it('should not go off the screen', function () {
      pokemon.setPosition({top: 10000, left: 10000});
      clock.tick(2000);
      expect(pokemon.$node.position().left < $("body").width()).to.be.true;
    });

    it('should not reach the destination instantly', function () {
      // console.log(pokemon.$node.position());
      pokemon.setPosition({top: 300, left: 300});
      clock.tick(500);
      // console.log(pokemon.$node.position());
      expect(pokemon.$node.position().left > 100).to.be.true;
      expect(pokemon.$node.position().left < 300).to.be.true;
    });
  });
});
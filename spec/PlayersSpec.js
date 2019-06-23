describe('Coop', function(){
  var players;

  beforeEach(function(){
    players = new Players();
    bird = new Bird(blue);
  });

  it('can show all players', function(){
    expect(players.all()).toEqual([]);
  });
  it('can add players', function(){
    player.add(bird)
    expect(players.all()).toEqual([bird]);
  });
});

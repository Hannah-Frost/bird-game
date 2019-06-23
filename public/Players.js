function Players() {
  this.players = [];
}

Players.prototype.all = function() {
  return this.players
};

Players.prototype.add = function(player) {
  this.players.push(player)
};

function Bird(colour, x, y) {
  this.leftGroundImage = ;
  this.rightGroundImage = ;
  this.leftJumpImage = ;
  this.rightJumpImage = ;
  this.colour = colour;
  this.x = x;
  this.y = y;
  this.speed = 5;
  this.update = function() {

  }
}

Bird.prototype.showColour = function() {
  return this.colour
};

Bird.prototype.moveLeft = function() {
  this.x -= 5
};

Bird.prototype.moveRight = function() {
  this.x -= 5
};

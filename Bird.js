function Bird(colour) {
  this.leftGroundImage = "leftgroundBird.png";
  this.rightGroundImage = "rightgroundBird.png";
  this.leftJumpImage = "leftJumpBird.png";
  this.rightJumpImage = "rightJumpBird.png";
  this.colour = colour;
  this.x = 100;
  this.y = 100;
  this.speed = 5;
  this.update = function() {

  }
}

Bird.prototype.showColour = function() {
  return this.colour
};

Bird.prototype.moveLeft = function() {
  this.x -= 20
};

Bird.prototype.moveRight = function() {
  this.x += 20
};

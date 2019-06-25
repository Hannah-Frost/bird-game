function Bird(colour) {
  this.leftGroundImage = "leftgroundBird.png";
  this.rightGroundImage = "rightgroundBird.png";
  this.leftJumpImage = "leftJumpBird.png";
  this.rightJumpImage = "rightJumpBird.png";
  this.colour = colour;
  this.accessories = [];
  this.x = 500;
  this.y = 100;
  this.fallCount = 0;
}

Bird.prototype.showColour = function() {
  return this.colour;
};

Bird.prototype.moveLeft = function() {
  this.x -= 20;
};

Bird.prototype.moveRight = function() {
  this.x += 20;
};

Bird.prototype.jump = function() {
  this.y -= 60;
};

Bird.prototype.fall = function() {
  this.y += 60;
};

Bird.prototype.respawn = function() {
  this.x = 500;
  this.y = 100;
}

Bird.prototype.increaseFallCount = function() {
  this.fallCount += 1;
}

function Bird() {
  this.leftGroundImage = "leftgroundBird.png";
  this.rightGroundImage = "rightgroundBird.png";
  this.leftJumpImage = "leftJumpBird.png";
  this.rightJumpImage = "rightJumpBird.png";
  this.x = 500;
  this.y = 300;
  this.coolDown = false;
  this.accessories = [];
}

Bird.prototype.moveLeft = function() {
  this.x -= 30;
};

Bird.prototype.moveRight = function() {
  this.x += 30;
};

Bird.prototype.jump = function() {
  this.y -= 60;
};

Bird.prototype.fall = function() {
  this.y += 60;
};

Bird.prototype.respawn = function() {
  this.x = 500;
  this.y = 300;
}

Bird.prototype.increaseFoodCount = function() {
  if (this.foodCount !== 9) {
    this.foodCount += 1;
  }
}

Bird.prototype.decreaseFoodCount = function() {
  if (this.foodCount === 1) {
    this.gameIsOver();
    this.foodCount = 0;
  } else {
  this.foodCount -= 1;
  }
}

Bird.prototype.addAccessory = function(accessory) {
  this.accessories.push(accessory);
}

Bird.prototype.coolDownOn = function() {
  this.coolDown = true;
}

Bird.prototype.coolDownOff = function() {
  this.coolDown = false;
}

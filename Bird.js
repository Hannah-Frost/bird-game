function Bird() {
  this.leftGroundImage = "leftgroundBird.png";
  this.rightGroundImage = "rightgroundBird.png";
  this.leftJumpImage = "leftJumpBird.png";
  this.rightJumpImage = "rightJumpBird.png";
  this.x = 500;
  this.y = 300;
  this.lifeCount = 3;
  this.gameOver = false;
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

Bird.prototype.increaseLifeCount = function() {
  if (this.lifeCount !== 9) {
    this.lifeCount += 1;
  }
}

Bird.prototype.decreaseLifeCount = function() {
  if (this.lifeCount === 1) {
    this.gameIsOver();
    this.lifeCount = 0;
  } else {
  this.lifeCount -= 1;
  }
}

Bird.prototype.addAccessory = function(accessory) {
  this.accessories.push(accessory);
}

Bird.prototype.gameIsOver = function() {
  this.gameOver = true;
}

Bird.prototype.coolDownOn = function() {
  this.coolDown = true;
}

Bird.prototype.coolDownOff = function() {
  this.coolDown = false;
}

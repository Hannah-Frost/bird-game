function Inventory() {
  this.berry = 6;
  this.feather = 0;
  this.flower = 0;
  this.coin = 0;
  this.twig = 0;
}

Inventory.prototype.show = function() {
  return this.berry + this.feather + this.flower + this.coin + this.twig;
}

Inventory.prototype.increaseItem = function(item) {
  if (item === 'flower') {
    this.flower += 1;
  } else if (item === 'berry') {
    this.berry += 1;
  } else if (item === 'twig') {
    this.twig += 1;
  } else if (item === 'coin') {
    this.coin += 1;
  } else if (item === 'feather') {
    this.feather += 1;
  }
}

Inventory.prototype.decreaseItem = function(item) {
  if (item === 'flower') {
    this.flower -= 1;
  } else if (item === 'berry') {
    this.berry -= 1;
  } else if (item === 'twig') {
    this.twig -= 1;
  } else if (item === 'coin') {
    this.coin -= 1;
  } else if (item === 'feather') {
    this.feather -= 1;
  }
}

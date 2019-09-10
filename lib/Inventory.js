function Inventory() {
  this.berry = 6;
  this.feather = 0;
  this.flower = 0;
  this.coin = 0;
  this.twig = 0;
}

Inventory.prototype.show = function(item) {
  if (item === 'flower') {
    return this.flower;
  } else if (item === 'berry') {
    return this.berry;
  } else if (item === 'twig') {
    return this.twig;
  } else if (item === 'coin') {
    return this.coin;
  } else if (item === 'feather') {
    return this.feather;
  }
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

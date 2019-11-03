function Inventory() {
  this.berry = 6;
  this.feather = 0;
  this.flower = 0;
  this.coin = 0;
  this.twig = 0;
}

Inventory.prototype.show = function(item) {
  switch (item) {
    case 'flower':
      return this.flower;
      break;
    case 'berry':
      return this.berry;
      break;
    case 'twig':
      return this.twig;
      break;
    case 'coin':
      return this.coin;
      break;
    case 'feather':
      return this.feather;
  }
}

Inventory.prototype.increaseItem = function(item) {
  switch (item) {
    case 'flower':
      this.flower += 1;
      break;
    case 'berry':
      this.berry += 1;
      break;
    case 'twig':
      this.twig += 1;
      break;
    case 'coin':
      this.coin += 1;
      break;
    case 'feather':
      this.feather += 1;
  }
}

Inventory.prototype.decreaseItem = function(item) {
  switch (item) {
    case 'flower':
      this.flower -= 1;
      break;
    case 'berry':
      this.berry -= 1;
      break;
    case 'twig':
      this.twig -= 1;
      break;
    case 'coin':
      this.coin -= 1;
      break;
    case 'feather':
      this.feather -= 1;
  }
}

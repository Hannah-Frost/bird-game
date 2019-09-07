function Inventory() {
  this.feather = 0;
  this.flower = 0;
  this.coin = 0;
  this.twig = 0;
}

Inventory.prototype.increaseItem = function(item) {
  this.item += 1;
}

Inventory.prototype.decreaseItem = function(item) {
  this.item -= 1;
}

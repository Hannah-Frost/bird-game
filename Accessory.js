function Accessory(name, leftImage, rightImage) {
  this.name = name;
  this.leftImage = leftImage;
  this.rightImage = rightImage;
}

Accessory.prototype.showName = function() {
  return this.name;
};

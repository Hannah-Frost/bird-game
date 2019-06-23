function Bird(colour) {
  this.colour = colour;
}

Bird.prototype.showColour = function() {
  return this.colour
};

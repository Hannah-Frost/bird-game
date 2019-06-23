describe('Bird', function(){
  var bird;

  beforeEach(function(){
    bird = new Bird(blue);
  });

  it('can show colour of bird', function(){
    expect(bird.showColour()).toEqual("blue");
  });
});

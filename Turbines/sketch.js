var rot = 0;
var c = 0;

function setup() {
  createCanvas(600, 600);
  smooth();
}

function draw() {
    background(0, 0, 204);
    fill(0,0,201,20);

  var x = 0;
  
    while (x < 17) {
    strokeWeight(2+x/100);
    stroke (0, 154, 206+c);
    var y = 0;
    while (y < 17) {
      // we give a unique rotation amount to each rectangle, depending
      // on which column and row the rectangle is located (x and y)
      drawrotatingrectangle(0 + x * 40, 0 + y * 40, 20, rot + x + y);
      y = y + 1;
        fill(0,0,201,20);

    }
    x = x + 1;
  }
  rot = rot + 0.05;
  
  drawrotatingrectangle();
}



function drawrotatingrectangle(x, y, rect_size, r) {
  translate(x, y);
  rotate(r);
  line(0, 0, rect_size, rect_size);
  resetMatrix();
}

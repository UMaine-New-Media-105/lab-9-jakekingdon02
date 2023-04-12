// Jake Kingdon
// CC lab 9
// April 12th, 2023.
// In this sketch, I created 50 stop sign sprites that randomly bounce off the walls in both the x and y directions. The velocitys of the stop signs are 
// random to add a cool effect.

let stopSigns = [];

function setup() {
  createCanvas(600, 600);
  // Create 50 stop sign objects and add them to the array.
  for (let i = 0; i < 50; i++) {
    stopSigns.push(new StopSign());
  }
}

function draw() {
  background("yellow");
  // Call the move and show functions of each stop sign object.
  for (let i = 0; i < stopSigns.length; i++) {
    stopSigns[i].move();
    stopSigns[i].show();
  }
}

// Stop sign sprite properties. Reduced scale to make sure all 50 sprites fit on the canvas.

class StopSign {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.scale = 0.3;
    this.addX = random(-5, 5); // Randomize the x velocity.
    this.addY = random(-5, 5); // Randomize the y velocity.
  }

  // Modified the move() and added an "if" statement to check if the stop signs hit the edge of the canvas, for when the hit both the x and y edges/positions.

  move() {
    this.x += this.addX;
    this.y += this.addY;

    // Check if the stop sign hits the edges of the canvas
    if (this.x < 0 || this.x > width) {
      this.addX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.addY *= -1;
    }
  }

  show() {
    push();
    translate(this.x, this.y);
    scale(this.scale);
    // Draw the stop sign sprite.
    stroke("white");
    strokeWeight(1);
    fill("red");
    beginShape();
    vertex(100, 50);
    vertex(150, 50);
    vertex(200, 100);
    vertex(200, 150);
    vertex(150, 200);
    vertex(100, 200);
    vertex(50, 150);
    vertex(50, 100);
    endShape(CLOSE);
    noStroke();
    fill("gray");
    rect(120, 202, 10, 200);
    fill("white");
    translate(30, -10);
    textSize(20);
    text("STOP", 70, 140);
    pop();
  }
}

let wall;
let ray;

function setup() {
  createCanvas(400, 400);
  wall = new Wall(300, 100, 300, 300);
  ray = new Ray(100, 200);
}

function draw() {
  background(0);
  wall.show();
  ray.show();
}

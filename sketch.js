// https://p5js.org/examples/hello-p5-animation.html
// Next: https://p5js.org/examples/hello-p5-flocking.html
const CANVAS_WIDTH = 720
const CANVAS_HEIGHT = 400

function createCircle () {
  return {
    x: 0,
    y: 0
  } 
}

// These are scoped outside so it's accessible to `setup` and `draw`.
let firstCircle = createCircle()
let secondCircle = createCircle()

function setup() {

  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)

  // Set the initial position
  firstCircle.x = width / 2
  firstCircle.y = height
}

function draw() {
  background(200)

  // draw a circle
  stroke(50)
  fill(100)
  ellipse(firstCircle.x, firstCircle.y, 24, 24)

  firstCircle.x = firstCircle.x + random(-1, 1)
  firstCircle.y = firstCircle.y - 1

  if (firstCircle.y < 0) {
    firstCircle.y = height
  }
}

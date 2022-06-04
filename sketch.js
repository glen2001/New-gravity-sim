let bodies = []
let star
let planet



function setup() {
  createCanvas(windowWidth, windowHeight);
  planet = new body(5, width/2, height/4, 0, 0);
  star = new body(10000, width/2, height/2, 0, 0);
  bodies.push(star)
  bodies.push(planet)
  planet.vel.set(circularVelocity(star,planet))
}

function draw() {
  background(68, 103, 128);
  globalAttract(bodies);
  drawBodies(bodies);
  updateBodies(bodies);
}

function drawBodies(bodyArray) {
  for(let body of bodyArray) {
    body.draw();
  }
}

function updateBodies(bodyArray) {
  for(let body of bodyArray) {
    body.update();
  }
}

function globalAttract(bodyArray) {
  for(let body1 of bodyArray) {
    for(let body2 of bodyArray) {
      if(body1 != body2) {
        body1.attract(body2);
      }
    }
  }
}

function circularVelocity(body1, body2) {
  let distnace = p5.Vector.dist(body1.getPos(), body2.getPos())
  return sqrt((body1.mass + body2.mass) / distnace);
}


let bodies = []
let star
let planet
let moon
let planet2



function setup() {
  createCanvas(windowWidth, windowHeight);
  planet2 = new body(random(50), width/2, random(height/2), 0, 0)
  moon = new body(random(50), width/2, random(height/2), 0, 0);
  planet = new body(random(50), width/2, random(height/2), 0, 0);
  star = new body(10000, width/2, height/2, 0, 0);
  bodies.push(star);
  bodies.push(planet);
  bodies.push(moon);
  bodies.push(planet2);
  planet2.vel.set(circularVelocity(star, planet2))
  moon.vel.set(circularVelocity(star, moon))
  planet.vel.set(circularVelocity(star, planet));
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


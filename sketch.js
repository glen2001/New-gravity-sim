let bodies = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 2; i++) {
    bodies.push(new body(random(1,1000), random(width/4, 3*width/4), random(height/4, 3*height/4), random(-1,1), random(-1,1)))
  }
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
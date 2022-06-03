let bodies = []
let star

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 10; i++) {
    bodies.push(new body(5, width/2, random(height/3), 5, 0))
  }
  star = new body(10000, width/2, height/2, 0, 0);
  bodies.push(star)
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
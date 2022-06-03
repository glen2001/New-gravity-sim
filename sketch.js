let bodies = []
let star
let planet

function setup() {
  createCanvas(windowWidth, windowHeight);
  planet = new body(10, width/2, height/3, 4.5, 0);
  star = new body(5000, width/2, height/2, 0, 0);
  bodies.push(planet)
  bodies.push(star)

  

}

function draw() {
  background(68, 103, 128, 10);
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
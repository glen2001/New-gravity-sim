let bodies = []
let star
let planet
let moon
let planet2
let p1
let p2
let placing = false;
let paused = true;



function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  star = new body(10000, width/2, height/2, 0, 0);
  bodies.push(star);

  p1 = createVector();
  p2 = createVector();
}

function draw() {
  background(68, 103, 128);

  drawBodies(bodies);

  if(paused === false) {
    globalAttract(bodies);
    updateBodies(bodies);
  }
  if(paused === true) {
    textSize(32);
    noStroke();
    fill(255, 0, 0);
    text('PAUSED', width/2, height/8);
  }

  if(placing === true) {
    stroke(255, 0, 0);
    line(p1.x, p1.y, mouseX, mouseY);
  }
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

function mouseClicked() {
  if(placing === false) {
    p1.x = mouseX;
    p1.y = mouseY;
    placing = true;
  }
  else if(placing === true) {
    p2.x = mouseX;
    p2.y = mouseY;

    bodies.push(new body(2 , p1.x, p1.y, (p2.x - p1.x) / 30, (p2.y - p1.y) / 30))
    placing = false;
  }
}

function keyPressed() {
  if(keyCode === 32) {
    if(paused === false) {
      paused = true;
    }
    else if(paused === true) {
      paused = false;
    }
  }
}



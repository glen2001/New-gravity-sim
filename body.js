function body(mass, x, y, velx, vely) {
    this.mass = mass;
    this.radius = 3;
    this.pos = createVector(x, y);
    this.vel = createVector(velx, vely);
    this.acc = createVector(0, 0);
    this.path = [];
    this.G = 1;
    this.epsilon = 5

    body.prototype.draw = function() {
        noStroke();
        fill(255)
        circle(this.pos.x, this.pos.y, this.radius * 2); 

        noFill();
        stroke(255,50);
        strokeWeight(1);
        beginShape();
        for(let point of this.path) {
            vertex(point.x, point.y)
        }
        endShape();
    }

    body.prototype.update = function() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
        
        this.path.push(this.pos.copy());
        if(this.path.length > 1500) {
            this.path.splice(0, 1);
        }
    }

    body.prototype.applyForce = function(force) {
        let inertia = p5.Vector.div(force, this.mass);
        this.acc.add(inertia);
    }

    body.prototype.attract = function(other) {
        let attractionForce = p5.Vector.sub(this.pos, other.pos);
        let distanceSquared = attractionForce.magSq();
        let magnitude = this.G * (this.mass * other.mass) / (distanceSquared + this.epsilon);
        attractionForce.setMag(magnitude);
        other.applyForce(attractionForce);
    }
}
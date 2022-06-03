function body(mass, x, y, velx, vely) {
    this.mass = mass;
    this.radius = 3;
    this.pos = createVector(x, y);
    this.vel = createVector(velx, vely);
    this.acc = createVector(0, 0);
    this.G = 1;

    body.prototype.draw = function() {
        noStroke();
        circle(this.pos.x, this.pos.y, this.radius * 2); 
    }

    body.prototype.update = function() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.set(0, 0);
    }

    body.prototype.applyForce = function(force) {
        let inertia = p5.Vector.div(force, this.mass);
        this.acc.add(inertia);
    }

    body.prototype.attract = function(other) {
        let attractionForce = p5.Vector.sub(this.pos, other.pos);
        let distanceSquared = attractionForce.magSq();
        let magnitude = this.G * (this.mass * other.mass) / distanceSquared;
        attractionForce.setMag(magnitude);
        other.applyForce(attractionForce);stroke(255);
    }
}
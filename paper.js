class paper {
  constructor(x,y) {
    var options = {
        isStatic:false,
      'density':1.2,
      'friction': 0.5,
      'restitution':0.3
    };
    this.body = Bodies.circle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(50, 50, 30, 30); 
    ellipseMode(CENTER);
    fill(100);
    rect(0, 0, this.width, this.height);
    pop();
  };
};

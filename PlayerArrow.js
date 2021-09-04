class playerArrow {
    constructor(x, y, width, height, archerAngle) {
      var setangle;
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/arrow.png");
      World.add(world, this.body);
    // Matter.body.setAngle(this.body._PI/2)
    }

   display() {
   // if (move===UP && Playerarcher.body.angle<1.77) {
    // angleValue=0.1;
   // }else{
     // angleValue=-0.1;
   // }
   // if (move===DOWN && Playerarcher.body.angle>1.47) {
    // angleValue=0.1;
   // }else{
     // angleValue=-0.1;
   // }


//Shoot(archerAngle);{

  //var velocity=p5.Vector.fromAngle(archerAngle)
//  velocity.mult(20);
//  Matter.body.setisStatic(this.body.false);
  //Matter.body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
//}



      var pos = this.body.position;
      var angle = this.body.angle;
    //  Matter.body.setAngle(this.body._PI/2)
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  
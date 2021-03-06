class playerArcher {
    constructor(x, y, width, height,angle) {
      var options = {
        isStatic: true
 };
  
      this.body = Bodies.rectangle(x, y, width, height, options,angle);
     this.x=x;
     this.y=y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.image = loadImage("./assets/playerArcher.png");
      Matter.Body.setAngle(this.body,-PI/2)
      World.add(world, this.body);
     
    
  
    }
    display()
    { 
      if (keyIsDown(RIGHT_ARROW)&& this.angle<0.33) {
        this.angle+=0.02;
      }
      if (keyIsDown(LEFT_ARROW)&& this.angle>0.45) {
        this.angle-=0.02;
      }
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }};
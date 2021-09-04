const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var ComputerArcher,PlayerArcher;
var Computerarrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    60,
    180
  );
  ComputerArcher = new computerArcher(
   width - 324,
   computerBase.body.position.y - 198,
   120,
    120
  );
  PlayerArcher = new playerArcher(
  height -278,
     playerBase.body.position.y - 200,
     120,
      120
    );
  
  //Create an arrow Object
 Computerarrow= new ComputerArrow(
    width  -340,
    computerBase.body.position.y - 280,
    100,
    10 
   );
 
  
   Playerarrow= new playerArrow(
  height  -350,
    playerBase.body.position.y - 280,
    100,
    10 
   );
 
  
}

function draw() {
  background(180);
  if (keyCode=== UP_ARROW && ComputerArcher.body.angle<1.77) {
    angleValue=0.1
  }

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  PlayerArcher.display();
 ComputerArcher.display()


  //Display arrow();
  Computerarrow.display();
  Playerarrow.display();
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
  Matter.Body.setAngle(matter.ComputerArcher.angle);
          
  }
}




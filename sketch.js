const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(1500,500);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height-5,width,10);
  ceiling = new Ground(width/2,5,width,10);
  leftWall = new Ground(width - 5,height/2,10,height);
  rightWall = new Ground(5,height/2,10,height);

  platform = new Ground(800,400,440,20);
  
  blocka1 = new Block(600,370,"pink");
  blocka2 = new Block(640,370,"pink");
  blocka3 = new Block(680,370,"pink");
  blocka4 = new Block(720,370,"pink");
  blocka5 = new Block(760,370,"pink");
  
  blocka6 = new Block(640,330,"pink");
  blocka7 = new Block(680,330,"pink");
  blocka8 = new Block(720,330,"pink");
  
  blocka9 = new Block(680,290,"pink");


  blockb1 = new Block(840,370,"pink");
  blockb2 = new Block(880,370,"pink");
  blockb3 = new Block(920,370,"pink");
  blockb4 = new Block(960,370,"pink");
  blockb5 = new Block(1000,370,"pink");

  blockb6 = new Block(880,330,"pink");
  blockb7 = new Block(920,330,"pink");
  blockb8 = new Block(960,330,"pink");

  blockb9 = new Block(920,290,"pink");


  blockc1 = new Block(720,290,"purple");
  blockc2 = new Block(760,290,"purple");
  blockc3 = new Block(800,290,"purple");
  blockc4 = new Block(840,290,"purple");
  blockc5 = new Block(880,290,"purple");

  blockc6 = new Block(760,330,"purple");
  blockc7 = new Block(800,330,"purple");
  blockc8 = new Block(840,330,"purple");

  blockc9 = new Block(800,370,"purple");


  blockd1 = new Block(720,250,"pink");
  blockd2 = new Block(760,250,"pink");
  blockd3 = new Block(800,250,"pink");
  blockd4 = new Block(840,250,"pink");
  blockd5 = new Block(880,250,"pink");

  blockd6 = new Block(760,210,"pink");
  blockd7 = new Block(800,210,"pink");
  blockd8 = new Block(840,210,"pink");

  blockd9 = new Block(800,170,"pink");

  throwObj = new ThrowBlock(200,200);
  string = new String(throwObj.body,{x:200,y:200});

}

function draw() {
  background("lightblue");
   
  Engine.update(engine);
  
  ground.display();
  ceiling.display();
  leftWall.display();
  rightWall.display();
  platform.display();

  blocka1.display();
  blocka2.display();
  blocka3.display();
  blocka4.display();
  blocka5.display();
  blocka6.display();
  blocka7.display();
  blocka8.display();
  blocka9.display();
  
  blockb1.display();
  blockb2.display();
  blockb3.display();
  blockb4.display();
  blockb5.display();
  blockb6.display();
  blockb7.display();
  blockb8.display();
  blockb9.display();

  blockc1.display();
  blockc2.display();
  blockc3.display();
  blockc4.display();
  blockc5.display();
  blockc6.display();
  blockc7.display();
  blockc8.display();
  blockc9.display();

  blockd1.display();
  blockd2.display();
  blockd3.display();
  blockd4.display();
  blockd5.display();
  blockd6.display();
  blockd7.display();
  blockd8.display();
  blockd9.display();

  throwObj.display();
  string.display();
}

function mouseDragged(){
  Matter.Body.setPosition(throwObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  string.fly();
}
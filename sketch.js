
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	ground = new Ground(100,390,1300,20)
  Dustbin = new dustbin(600,370,200,100)
  Paper = new paper (100,100,20,20)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  Dustbin.display();
  Paper.display();
 // drawSprites();
 
}

function keyPressed (){
if (KeyCode === UP_ARROW){

  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
}

}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, side1, side2, side3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 400, 25);
	ground = new Ground(100, 685, 1400, 10);
  
	side1 = new Dustbin(600, 650, 10, 60);
	side2 = new Dustbin(700, 650, 10, 60);
	side3 = new Dustbin(650, 675, 100, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  Engine.update(engine)

  background(0);
  
  paper.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, {x: 23, y: -25});
	}
  }




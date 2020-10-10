
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var paper,paperImage
var dustbin1,dustbin2,dustbin3

function preload()
{
	paperImage=loadImage("Images/paper.png")
	dustbinImage=loadImage("Images/dustbingreen.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1=new Dustbin

	paper=new Paper(500,300)

	ground=new Ground(500,650,1000,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  ground.display();
  dustbin1.display();
  paper.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:800,y:-1000})
	}
}



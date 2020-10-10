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

	dustbin1=new Dustbin(805,650,250,10)
	dustbin3=new Dustbin(900,500,5,250)
	dustbin2=new Dustbin(695,500,5,250)
	
	dustbin=new Dustbin

	paper=new Paper(150,600)

	ground=new Ground(500,650,1000,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  dustbin2.display();
  dustbin1.display();
  dustbin3.display();
  paper.display();
  ground.display();
  dustbin.display();


  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:800,y:-1000})
	}
}



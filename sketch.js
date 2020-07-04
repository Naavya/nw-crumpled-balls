
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=Bodies.rectangle(400,670,800,20,{isStatic:true})
	World.add(world,ground)
	ground.shapeColor="white"
	dustbin1=new Dustbin(700,665,50,10)
	dustbin1.shapeColor="blue"
	dustbin2=new Dustbin(675,660,10,50)
	dustbin2.shapeColor="blue"
	dustbin3=new Dustbin(725,660,10,50)
	dustbin3.shapeColor="blue"
	paper1=new Paper(100,650,20)
	paper1.shapeColor="purple"
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  dustbin1.display;
  dustbin2.display;
  dustbin3.display;
  paper1.display;
  
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.body.applyForce(paper.body,paper.body.postion,{x:85,y:-85})
	}
}




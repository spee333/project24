var dustbin1,dustbin2,dustbin3,ground,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);

   
	engine = Engine.create();
	world = engine.world;

  
 ground=new Ground(500,585,1000,20);


  dustbin1=new Dustbin(850,550,200,20);
	
	
	dustbin2=new Dustbin(740,510,20,100);
	

  dustbin3=new Dustbin(960,510,20,100);
  
 paper=new Paper(50,580,50,50,);
  
  Engine.run(engine);
  
}


function draw() {
  background(10,10,10);
  rectMode(CENTER);
  Engine.update(engine);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  paper.display();
 
  ground.display();
}


 function keyPressed()  {
    if (keyCode === UP_ARROW) {

       Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

  }
}



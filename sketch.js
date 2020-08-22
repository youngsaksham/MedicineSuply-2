var helicopterIMG, helicopterSprite, Box1IMG;
var packageBody,ground,world,box1,engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var red3 , red1, red2;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	Box1IMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
    world = engine.world;

	var pac = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }

	red3 = createSprite(400,620,188,8,{isStatic:true,pac});
 	World.add(world,red3);
	red1 = createSprite(310,588.8,8,70,{isStatic:true,pac});
	World.add(world,red1);
	red2 = createSprite(490,588.8,8,70,{isStatic:true,pac});
	World.add(world,red2);
 
	
	 
	box1 = new Box(350, 260, 50,50);
	World.add(world,box1 );
 	

	helicopterSprite=createSprite(width/2, 150, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	World.add(world,helicopterSprite);


	
	

	//Create a Ground
	ground = Bodies.rectangle(400, 620, 188, 8 , {isStatic:true} );
	 World.add(world, ground);

	 ground = Bodies.rectangle(310, 588.8, 8, 70 , {isStatic:true} );
	 World.add(world, ground);

	 ground = Bodies.rectangle(490,588.8,8,70, {isStatic:true} );
	 World.add(world, ground);

	 

	Engine.run(engine);
} 



function draw() {
  rectMode(CENTER);
  background(0); 

  drawSprites();
  Engine.update(engine);
  keyPressed();
  box1 .display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	
  }
}

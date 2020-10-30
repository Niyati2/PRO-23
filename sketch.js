const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.3;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6;

	ground=createSprite(width/2, height-35, width,70);
	ground.shapeColor=color(0,0,128)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-90
	 boxY=587;
	 
 	boxleftSprite=createSprite(boxPosition, boxY, 20,85);
 	boxleftSprite.shapeColor=color(255,215,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	downbox=createSprite(boxPosition+100, boxY+35, 200,20);
 	downbox.shapeColor=color(255,215,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+15-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,80);
 	boxleftSprite.shapeColor=color(255,215,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	 World.add(world, boxRightBody); 
	 
	 Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}

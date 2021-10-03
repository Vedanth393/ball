
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
    restitution:0.3,
	friction:0,
	density:1.2
}

var options={
	isStatic:true
}
ball=Bodies.circle(200,100,20,ball_options)
ground = Bodies.rectangle(0,height - 1,width * 2,1,options)
	Engine.run(engine);
  World.add(world,ball)
  World.add(world,ground)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
 rect(ground.position.x,ground.position.y,width * 2,1)
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	}
}




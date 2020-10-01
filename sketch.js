const Engine=Matter.Engine;
const World=Matter.World;
const bodies=Matter.Bodies;
var engine,world;
var ground,ball;


function setup() {
  var canvas=createCanvas(1600,1600);
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    is_Static:false
  }
  
  
  
  ground=bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
  var ball_options={
    restitution:1.0
  }
  ball=bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  console.log(ground);
  
}

function draw() {
 
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
 

}
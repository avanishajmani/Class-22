var myengine
var myworld
var ground
var ball


function setup() {
  createCanvas(800,400);
 myengine = Matter.Engine.create();
 myworld = myengine.world;
 var groundoptions = {
   isStatic:true
 }
 ground = Matter.Bodies.rectangle(400,300,800,20,groundoptions)
 Matter.World.add(myworld,ground);
var balloptions = {
  isStatic:false,
  restitution:1.2

}
 ball = Matter.Bodies.circle(300,100,10,balloptions)
 Matter.World.add(myworld,ball);
}

function draw() {
  background("blue")

  Matter.Engine.update(myengine)

  console.log(ground);
  rectMode(CENTER)
  rect(ground.position.x , ground.position.y,800,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x , ball.position.y,10,10)


  
}
function setup() {
  var car,wall;
speed=random(55,90);
weight=random(400,1500);
  createCanvas(3000,3000);
  createSprite(400, 200, 50, 50);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2)
  car.velocityX=speed;
}
var speed,weight;

function draw() {
  if(wall.x=car.x<( car.width+wall.width)/2);
  car.velocityX=0;
  var deformation=0.5* weight* speed * speed/22509
  if (deformation>180)
  car.shapeColor=color(255,0,0);
  if (deformation<180&& deformation>100)
  car.shapeColor=color(230,230,0);
  if (deformation<100)
  car.shapeColor=color(0,255,0);
  background(255,255,255);  
  drawSprites();
}
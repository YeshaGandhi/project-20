function setup() {
  var car,wall;

  createCanvas(3000,3000);
  createSprite(400, 200, 50, 50);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2)
  car.velocityX=speed;
}
var speed,weight;
weight=10;
speed=3;
function draw() {
  if(wall.x=car.x<( car.width+wall.width)/2);
  car.velocityX=0;
  var deformation=0.5 x weight x speed x speed/22509
  if (deformation>180)
  car.shapeColor=color(255,0,0);
  if (deformation<180&& deformation>100)
  car.shapeColor=color(230,230,0);
  if (deformation<100)
  car.shapeColor=color(0,255,0);
  background(255,255,255);  
  drawSprites();
}
var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
thickness=random(22,83);
weight=random(30,52);
spped=random(223,321);
car=createSprite(50, 200, 50, 50);
wall=createSprite(2200, 200,thickness, height/2);
car.shapeColor=color(255,255,255);
wall.shapeColor=color(80,80,80);
car.velocityX=speed

}
function draw() {
  background(0);  
if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var dammage=0.5 *weight*speed*speed/(thickness*thickness*thickness);
 if(damage>10){
wall.shapeColor=color(255,0,0);
 }
 if(Damage<10){
   wall.shapeColor(0,255,0);
 }


}
  drawSprites();
}

 function hasCollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false
 }
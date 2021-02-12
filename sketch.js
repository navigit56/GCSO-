//The Global Car Safety Organisation program 
const World =  Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

//varring the names 
var world,engine;
var car,wall;
var speed,weight;
var height;

function setup() {
  createCanvas(1600,400);
 
  //setting the values randomly 
  speed=random(1,90);
  weight=random(400,1500);

  //car 
  car= createSprite(50,260,50,50);
  car.shapeColor=color(39,67,230);
  car.velocityX = speed;
  //wall
  wall=createSprite(1025,187, 60, height/2)
  wall.shapeColor=color(127,5,5);
}

function draw() {
  background(255,255,255);  
if (car.isTouching(wall)) {
  car.velocityX=0;
}
//DEFORMATION
var deformation = 0.5*weight*speed*speed/22500;
//this block of code is gonna tell you that:
//if deformation rate is less than 100=green good.
//if deformation rate is Between 100 and 180=Yellow	average.
//if deformation rate is Greater than 180=Red	lethal.
if(deformation<100 && car.isTouching(wall)){
car.shapeColor= color(0, 255, 0);
text("Congrats! Your vehicle's status = GOOD",93,104);

}
if(deformation<180 && deformation>100&&car.isTouching(wall)){
car.shapeColor = color(230, 230, 0);
text("Your vehicle's status = AVERAGE",93,104);

}
if(deformation>180&&car.isTouching(wall)){
  car.shapeColor = color(255, 0, 0);
  text("Alert! Your vehicle's status = LETHAL",93,104);
  
}

  drawSprites();
  //console.log(mouseX,mouseY);
}
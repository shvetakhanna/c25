const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myworld,myengine;
var bkgrd,bkgrdimg,ground;
var bird,box1,box2,box3,pig1,pig2,box5;
var log1,log2,log3,log4,log5;

function preload()
{
bkgrdimg=loadImage("sprites/bg.png");
}

function setup()
{
  createCanvas(1200,400);
  myengine=Engine.create();
  myworld=myengine.world;
  ///bkgrd=createSprite(600,400,10,10);
  ground=new Ground(600,400,1200,10);
  bird=new Bird(200,200);
 
  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70)
  pig1=new Pig(810,350,60,60)
  log1=new Log(810,260,300,PI/2);
  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  pig2=new Pig(810,220,60,60)
  log2=new Log(810,180,300,PI/2);
  box5=new Box(810,160,70,70)
  log3=new Log(760,120,150,PI/7,{friction:1.0,density:1.0});
  log4=new Log(870,120,150,-PI/7,{friction:1.0,density:1.0});
}

function draw()
{
  background(bkgrdimg);
  Engine.update(myengine);
  ground.display();
  bird.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();

 // drawSprites();
}
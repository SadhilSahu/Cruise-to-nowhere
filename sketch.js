var ship,shipImages;
var sea,seaImages;


function preload(){
seaImages=loadImage("sea.png");
shipImages=loadAnimation("ship-1.png","ship-4.png");
}

function setup(){
  createCanvas(800,400);
  
  //ShipAnimation
  ship = createSprite(200,220,100,50);
  ship.addAnimation("ShipAnimation",shipImages);
  ship.scale=0.25;

//SeaAnimation
sea = createSprite(200,200,200,400);
sea.addImage("SeaAnimation",seaImages);
sea.scale=0.35;
sea.depth=ship.depth-1;
sea.velocityX=5;


  
}

function draw() {
  background("blue");

  if(sea.x<0){
sea.x = sea.width/2;
  }

  drawSprites();
}



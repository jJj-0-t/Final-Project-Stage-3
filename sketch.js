var backgroundImage;
var bg;
var astronaut, astronautImg;
var spaceship, spaceship1,spaceship3,spaceship4,spaceship5;
var spaceshipGroup
var score
var planet1,planet2,planet3


function preload(){
backgroundImage=loadImage("images/bg5.jpg")
astronautImg=loadAnimation("images/astronaut1.png","images/astronaut2.png","images/astronaut3.png","images/astronaut4.png","images/astronaut5.png","images/astronaut6.png","images/astronaut7.png","images/astronaut8.png","images/astronaut9.png","images/astronaut10.png");
spaceship1=loadImage("images/spaceship1.png")
spaceship3=loadImage("images/spaceship3.png")
spaceship4=loadImage("images/spaceship4.png")
spaceship5=loadImage("images/spaceship5.png")
planet1=loadImage("images/planet1.png")
planet2=loadImage("images/planet2.png")
planet3=loadImage("images/planet3.png")
}
function setup() {
  createCanvas(700,300);
  
 bg=createSprite(500,140.1500,1010)
 bg.addImage(backgroundImage)
 bg.scale=1

 bg.velocityX=-3

 astronaut = createSprite(70,250, 40,70);
 astronaut.addAnimation("running", astronautImg)
 astronaut.scale=0.3

 spaceshipGroup=createGroup();
 score=0
}

function draw() {
 background(255);
 text("Score: "+ score, 500,50);
 
  
 if(bg.x <10){
  bg.x = 400;
}

  spawnSpaceships();
  drawSprites();
 
}
function spawnSpaceships(){
  if (frameCount % 80 === 0){
    var spaceship = createSprite(600,random(100,200),10,40);
    spaceship.velocityX = -6
    
     
     var rand = Math.round(random(1,7));
     switch(rand) {
       case 1: spaceship.addImage(spaceship1);
               break;
       case 2: spaceship.addImage(spaceship5);
               break;
       case 3: spaceship.addImage(spaceship3);
               break;
       case 4: spaceship.addImage(spaceship4);
               break;
               case 5: spaceship.addImage(planet1);
               break;
               case 6: spaceship.addImage(planet2);
               break;
               case 7: spaceship.addImage(planet3);
               break;
       
       default: break;
     }
    
           
     spaceship.scale = 0.6;
     spaceship.lifetime = 300;
  
     spaceshipGroup.add(spaceship);
  }
 }
 
